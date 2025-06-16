
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Hemachandran_S_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hemachandran S
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Results-driven Full-Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications using the MERN stack. Passionate about creating efficient solutions and eager to contribute technical expertise in a collaborative team environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-black bg-white hover:bg-gray-100 hover:text-black px-8 py-3"
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/hemachandran10" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Hemachandran53" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:hemachandrans@gmail.com" 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*
HOW TO MODIFY THIS HERO COMPONENT:

1. TO CHANGE PERSONAL INFORMATION:
   - Name: Edit the h1 tag with "Hemachandran S"
   - Title: Change "Full Stack Developer" in the p tag
   - Description: Modify the paragraph text in the max-w-2xl div

2. TO UPDATE SOCIAL LINKS:
   - LinkedIn: Change href="https://linkedin.com/in/hemachandrans" to your LinkedIn
   - Email: Change href="mailto:hemachandrans@gmail.com" to your email
   - To add more social links: Copy the <a> tag structure and add new icons

3. TO MODIFY BUTTONS:
   - "View My Work" button: Change scrollToSection('projects') to scroll to different section
   - "Download Resume" button: Update the resume file path in downloadResume function
   - To add new buttons: Copy the Button component structure

4. TO CHANGE BACKGROUND EFFECTS:
   - Gradient: Modify "from-slate-900 to-slate-800"
   - Animated circles: Change colors "bg-blue-500" and "bg-purple-500"
   - Grid pattern: Modify or remove the bg-grid-pattern class

5. TO UPDATE SCROLL FUNCTIONALITY:
   - scrollToSection function: Change the section IDs to match your page sections
   - Scroll to about: Change scrollToSection('about') to different section

6. TO CHANGE COLORS:
   - Name gradient: Modify "from-blue-400 to-purple-400"
   - Button colors: Change "bg-blue-600 hover:bg-blue-700"
   - Text colors: Update text-gray-300, text-gray-400, etc.

7. TO MODIFY ANIMATIONS:
   - Add/remove animate-fade-in, animate-bounce, animate-pulse classes
   - Adjust delay-1000 for different animation timing

8. TO CHANGE RESUME DOWNLOAD:
   - Update the file path '/resume.pdf' in downloadResume function
   - Change the download filename 'Hemachandran_S_Resume.pdf'
*/
