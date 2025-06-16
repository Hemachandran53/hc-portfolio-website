
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
      
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'hemachandranvlr@gmail.com'
        }
      );

      console.log('Email sent successfully:', result);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly at hemachandranvlr@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Let's Connect
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-8">
                  I'm passionate about creating scalable web applications and always interested in new opportunities. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-300">hemachandrans@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-300">+91 90425 17644</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-gray-300">Chennai, India</p>
                  </div>
                </div>
                
                {/* <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <p className="text-gray-300">Your GitHub Profile</p>
                  </div>
                </div> */}
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/*
HOW TO MODIFY THIS CONTACT COMPONENT:

1. TO UPDATE CONTACT INFORMATION:
   - Email: Change "hemachandrans@gmail.com" in the email section
   - Phone: Update "+91 90425 17644" in the phone section
   - Location: Modify "Chennai, India" in the location section
   - GitHub: Add your actual GitHub profile link

2. TO ADD GITHUB LINK:
   - Replace "Your GitHub Profile" with your actual GitHub username
   - Add href attribute to make it clickable:
     <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
       <p className="text-gray-300 hover:text-blue-400 transition-colors">github.com/yourusername</p>
     </a>

3. TO SETUP EMAIL FUNCTIONALITY (IMPORTANT - FOLLOW THESE STEPS):
   Step 1: Go to https://www.emailjs.com/ and create a free account
   Step 2: Add an email service:
     - Click "Add New Service"
     - Choose Gmail (recommended) or your preferred email provider
     - Follow the setup instructions to connect your email
   Step 3: Create an email template:
     - Click "Create New Template"
     - Use these variables in your template:
       * {{from_name}} - Sender's name
       * {{from_email}} - Sender's email
       * {{message}} - The message content
       * {{to_email}} - Your email (hemachandranvlr@gmail.com)
     - Sample template:
       Subject: New Contact Form Message from {{from_name}}
       Body: 
       Name: {{from_name}}
       Email: {{from_email}}
       Message: {{message}}
   Step 4: Get your credentials:
     - Service ID: Found in your email service settings
     - Template ID: Found in your template settings
     - Public Key: Found in Account > API Keys
   Step 5: Replace placeholders in the code:
     - YOUR_SERVICE_ID: Your EmailJS service ID
     - YOUR_TEMPLATE_ID: Your EmailJS template ID  
     - YOUR_PUBLIC_KEY: Your EmailJS public key

4. TO TEST EMAIL FUNCTIONALITY:
   - Fill out the contact form on your website
   - Check your email (hemachandranvlr@gmail.com) for the message
   - Check EmailJS dashboard for delivery status
   - If emails don't arrive, check spam folder and EmailJS logs

5. TO ADD NEW CONTACT METHODS:
   - Add new contact item in the space-y-6 div:
     <div className="flex items-center space-x-4">
       <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
         <NewIcon className="w-6 h-6" />
       </div>
       <div>
         <h4 className="font-medium">Contact Type</h4>
         <p className="text-gray-300">Contact details</p>
       </div>
     </div>

6. TO MODIFY FORM FIELDS:
   - Add new fields to formData state:
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: '',
       phone: '', // New field example
       company: '' // New field example
     });
   - Add corresponding Input components in the form
   - Update the emailjs.send parameters to include new fields

7. TO CHANGE STYLING:
   - Background: Modify "bg-gray-900" to different color
   - Contact cards: Change "bg-blue-600" for icon backgrounds
   - Form styling: Update "bg-gray-800", "bg-gray-700" colors
   - Text colors: Modify text-white, text-gray-300, etc.
   - Hover effects: Add hover:text-blue-400 for interactive elements

8. TO ADD SOCIAL MEDIA LINKS:
   - Import additional icons: import { Twitter, Instagram, Linkedin } from 'lucide-react';
   - Add social media contact items similar to existing ones
   - Make them clickable with proper links

9. TO CHANGE EMAIL RECIPIENT:
   - Update 'hemachandranvlr@gmail.com' to your desired email address
   - Make sure this matches your EmailJS template configuration
   - Update the error message to show the correct email

10. TO ADD FORM VALIDATION:
    - Add validation rules to form fields:
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        minLength={2}
        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
      />
    - Add custom validation functions
    - Show validation errors below form fields

11. TO CUSTOMIZE SUCCESS/ERROR MESSAGES:
    - Update toast messages in the handleSubmit function
    - Add different messages for different scenarios
    - Include your contact information in error messages

12. TO ADD LOADING STATES:
    - The form already has loading state with isSubmitting
    - Customize the loading text by changing 'Sending...'
    - Add loading spinner: {isSubmitting ? <Spinner /> : <Send className="w-4 h-4 mr-2" />}

TROUBLESHOOTING EMAIL ISSUES:
- If emails aren't being sent, check browser console for errors
- Verify your EmailJS credentials are correct
- Make sure your email service is properly configured
- Check EmailJS dashboard for quota limits (free tier has limits)
- Ensure your domain is added to EmailJS allowed origins
- Test with a simple template first before adding complex formatting

SECURITY NOTES:
- EmailJS public key is safe to use in frontend code
- Never expose your private key in frontend code
- EmailJS handles email delivery securely
- Form data is only sent to EmailJS and your configured email
*/
