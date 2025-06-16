
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Hemachandran S</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/hemachandran10/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/hemachandran53" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="mailto:hemachandrans@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Hemachandran S
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*
HOW TO MODIFY THIS FOOTER COMPONENT:

1. TO UPDATE PERSONAL INFORMATION:
   - Name: Change "Hemachandran S" in the h3 tag
   - Title: Update "Full Stack Developer" in the p tag
   - Email: Modify "hemachandrans@gmail.com" in the Mail link
   - LinkedIn: Update "https://linkedin.com/in/hemachandrans" URL

2. TO ADD MORE SOCIAL LINKS:
   - Add new social media links in the flex space-x-6 div:
     <a 
       href="https://twitter.com/username" 
       target="_blank"
       rel="noopener noreferrer"
       className="text-gray-400 hover:text-white transition-colors"
     >
       <Twitter className="w-6 h-6" />
     </a>
   - Import additional icons from lucide-react (Twitter, Instagram, etc.)

3. TO CHANGE FOOTER CONTENT:
   - Copyright year: Update "© 2024" to current year
   - Made with text: Modify the "Made with ❤️ by..." text
   - Add additional footer sections like Privacy Policy, Terms, etc.

4. TO ADD FOOTER NAVIGATION:
   - Add navigation links before the border-t section:
     <div className="grid md:grid-cols-4 gap-8 mb-8">
       <div>
         <h4 className="font-semibold mb-4">Quick Links</h4>
         <ul className="space-y-2">
           <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
           <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
         </ul>
       </div>
     </div>

5. TO CHANGE STYLING:
   - Background: Modify "bg-gray-800" to different color
   - Text colors: Change text-white, text-gray-400, text-gray-500
   - Hover effects: Update hover:text-white for different hover colors
   - Heart color: Change "text-red-500" for the heart icon

6. TO ADD CONTACT INFORMATION:
   - Add contact details section:
     <div>
       <h4 className="font-semibold mb-4">Contact</h4>
       <p className="text-gray-400">Email: your-email@domain.com</p>
       <p className="text-gray-400">Phone: +1 234 567 8900</p>
     </div>

7. TO CHANGE LAYOUT:
   - Container width: Modify max-w-4xl for different footer width
   - Flex direction: Change flex-col md:flex-row for different layouts
   - Spacing: Update py-12, mb-8, pt-8 for different spacing

8. TO ADD NEWSLETTER SIGNUP:
   - Add newsletter section with email input and subscribe button
   - Include form handling for newsletter subscriptions

9. TO REMOVE GITHUB LINK:
   - Delete the Github link from the social links section
   - Remove Github import if not used elsewhere

10. TO ADD FOOTER LOGO:
    - Add logo/brand image before or after the name:
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-3" />
        <div>
          <h3 className="text-2xl font-bold">Your Name</h3>
          <p className="text-gray-400">Your Title</p>
        </div>
      </div>
*/
