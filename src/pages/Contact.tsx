
import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-beige">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy text-center mb-12">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                We'd love to hear from you! Whether you have questions, feedback, or want to place an order, feel free to reach out to us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 bg-brand-beige rounded-lg">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 22.16C6.398 22.16 1.64 17.4 1.64 11.8c0-5.602 4.758-10.36 10.36-10.36 5.602 0 10.36 4.758 10.36 10.36 0 5.602-4.758 10.36-10.36 10.36m0-18.34C7.08 3.82 3.1 7.8 3.1 11.8c0 4 3.98 7.98 8.9 7.98 4.92 0 8.9-3.98 8.9-8.9S16.02 3.82 12 3.82"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Connect with us instantly</p>
                <a 
                  href="https://wa.me/916304226513" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-yellow hover:text-brand-navy font-semibold text-lg transition-colors"
                >
                  +91 63042 26513
                </a>
              </div>
              
              <div className="text-center p-8 bg-brand-beige rounded-lg">
                <div className="flex justify-center mb-4">
                  <Mail className="w-12 h-12 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message</p>
                <a 
                  href="mailto:houseoffoods.in@gmail.com"
                  className="text-brand-yellow hover:text-brand-navy font-semibold text-lg transition-colors break-all"
                >
                  houseoffoods.in@gmail.com
                </a>
              </div>

              <div className="text-center p-8 bg-brand-beige rounded-lg">
                <div className="flex justify-center mb-4">
                  <Instagram className="w-12 h-12 text-brand-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Follow Us</h3>
                <p className="text-gray-600 mb-4">Get exclusive offers & updates!</p>
                <a 
                  href="https://www.instagram.com/houseoffoods.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-yellow hover:text-brand-navy font-semibold text-lg transition-colors"
                >
                  @houseoffoods.in
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  🎉 Special deals, behind-the-scenes & more!
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-brand-navy font-semibold">
                Your delicious journey with House Of Foods starts with a simple hello!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
