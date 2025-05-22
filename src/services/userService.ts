
type UserData = {
  name: string;
  phone: string;
  email: string;
  flatNo: string;
  building: string;
  area: string;
  city: string;
  pinCode: string;
};

// Generate a random 6-digit OTP
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Store OTP in localStorage with phone number as key (in real app, this should be done server-side)
export const storeOTP = (phone: string, otp: string): void => {
  localStorage.setItem(`otp_${phone}`, otp);
  // In a real application, this would send an SMS to the user
  console.log(`OTP for ${phone}: ${otp}`);
};

// Verify the OTP
export const verifyOTP = (phone: string, enteredOTP: string): boolean => {
  const storedOTP = localStorage.getItem(`otp_${phone}`);
  if (storedOTP === enteredOTP) {
    // Clear OTP after successful verification
    localStorage.removeItem(`otp_${phone}`);
    return true;
  }
  return false;
};

// Save user data
export const saveUserData = (data: UserData): void => {
  localStorage.setItem(`user_${data.phone}`, JSON.stringify(data));
};

// Get user data by phone number
export const getUserData = (phone: string): UserData | null => {
  const userData = localStorage.getItem(`user_${phone}`);
  if (userData) {
    return JSON.parse(userData);
  }
  return null;
};
