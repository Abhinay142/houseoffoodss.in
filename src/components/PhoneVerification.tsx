
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { toast } from '@/hooks/use-toast';
import { generateOTP, storeOTP, verifyOTP } from '@/services/userService';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PhoneVerificationProps {
  onVerified: (phone: string) => void;
}

const PhoneVerification: React.FC<PhoneVerificationProps> = ({ onVerified }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOTP, setEnteredOTP] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testOTP, setTestOTP] = useState('');
  const [showTestOTP, setShowTestOTP] = useState(false);

  const handleSendOTP = () => {
    if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Generate and store OTP
    const otp = generateOTP();
    storeOTP(phoneNumber, otp);
    setTestOTP(otp); // Store OTP for testing display
    
    // In a real application, an API call would be made to send the OTP via SMS
    
    setTimeout(() => {
      setOtpSent(true);
      setIsSubmitting(false);
      setShowTestOTP(true);
      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to your phone number: ${otp} (visible for testing only)`,
      });
    }, 1000);
  };

  const handleVerifyOTP = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      if (enteredOTP.length === 6 && verifyOTP(phoneNumber, enteredOTP)) {
        toast({
          title: "Verification Successful",
          description: "Your phone number has been verified",
        });
        onVerified(phoneNumber);
      } else {
        toast({
          title: "Invalid OTP",
          description: "Please check the verification code and try again",
          variant: "destructive"
        });
        setIsSubmitting(false);
      }
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-brand-navy mb-4">Verify Your Phone Number</h2>
      
      {!otpSent ? (
        <div className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
                +91
              </div>
              <Input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your 10-digit phone number"
                className="rounded-l-none"
                maxLength={10}
                required
              />
            </div>
          </div>
          <Button 
            onClick={handleSendOTP}
            className="w-full bg-brand-yellow hover:bg-yellow-500 text-brand-navy"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Verification Code"}
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            A 6-digit verification code has been sent to +91 {phoneNumber}
          </p>
          
          {/* Show test OTP for development purposes */}
          <div className="mb-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md">
            <p className="text-sm font-medium text-yellow-800">
              Testing Mode: Your OTP is <span className="font-bold">{testOTP}</span>
            </p>
            <p className="text-xs text-yellow-700 mt-1">
              In production, this would be sent via SMS
            </p>
          </div>
          
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Verification Code
            </label>
            <InputOTP 
              maxLength={6} 
              value={enteredOTP} 
              onChange={setEnteredOTP}
              className="flex justify-center"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="border-gray-300" />
                <InputOTPSlot index={1} className="border-gray-300" />
                <InputOTPSlot index={2} className="border-gray-300" />
                <InputOTPSlot index={3} className="border-gray-300" />
                <InputOTPSlot index={4} className="border-gray-300" />
                <InputOTPSlot index={5} className="border-gray-300" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          
          <div className="flex flex-col gap-2">
            <Button 
              onClick={handleVerifyOTP}
              className="w-full bg-brand-yellow hover:bg-yellow-500 text-brand-navy"
              disabled={enteredOTP.length !== 6 || isSubmitting}
            >
              {isSubmitting ? "Verifying..." : "Verify Code"}
            </Button>
            <Button 
              onClick={() => {
                setOtpSent(false);
                setEnteredOTP('');
                setShowTestOTP(false);
              }}
              variant="outline" 
              className="w-full"
            >
              Change Phone Number
            </Button>
          </div>
        </div>
      )}
      
      {/* Test OTP Dialog */}
      <Dialog open={showTestOTP} onOpenChange={setShowTestOTP}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your OTP Code</DialogTitle>
            <DialogDescription>
              For testing purposes, your OTP is shown here. In production, it would be sent via SMS.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center p-6">
            <p className="text-3xl font-bold tracking-wider">{testOTP}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhoneVerification;
