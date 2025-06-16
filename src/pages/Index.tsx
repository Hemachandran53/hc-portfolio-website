
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import AcademicProjects from '../components/AcademicProjects';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="academic-projects">
        <AcademicProjects />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

/*
HOW TO MODIFY THIS INDEX PAGE:

1. TO CHANGE SECTION ORDER:
   - Rearrange the component order in the return statement
   - Update the id attributes to match your preferred navigation

2. TO ADD NEW SECTIONS:
   - Import new components: import NewSection from '../components/NewSection';
   - Add to the JSX: <div id="new-section"><NewSection /></div>
   - Make sure to create the corresponding component file

3. TO REMOVE SECTIONS:
   - Comment out or delete the section div and component
   - Remove the import statement if not used elsewhere
   - Update navigation menus to remove references

4. TO CHANGE SECTION IDs:
   - Update the id attributes (e.g., id="about" to id="about-me")
   - Make sure to update corresponding navigation links in Hero component
   - Update any scrollToSection function calls

5. TO ADD NAVIGATION MENU:
   - Create a Navigation component and import it
   - Add <Navigation /> before or after <Hero />
   - Implement sticky/fixed positioning for persistent navigation

6. TO MODIFY LAYOUT:
   - Wrap sections in different containers or layouts
   - Add spacing between sections with margin/padding classes
   - Create alternating background colors for visual separation

7. TO ADD PAGE TRANSITIONS:
   - Install framer-motion or similar animation library
   - Wrap components with animation containers
   - Add entrance/exit animations for smoother page experience

8. TO IMPLEMENT LAZY LOADING:
   - Use React.lazy() for component imports:
     const About = React.lazy(() => import('../components/About'));
   - Wrap components with <Suspense> for loading states

9. TO ADD SEO METADATA:
   - Install react-helmet or similar library
   - Add meta tags, title, description for better SEO
   - Include Open Graph tags for social media sharing

10. CURRENT SECTION STRUCTURE:
    - Hero: Landing section with name, title, and call-to-action
    - About: Personal information and quick facts
    - Skills: Technical skills with progress bars
    - Experience: Internship experience, education, and certifications
    - Academic Projects: University/college projects
    - Projects: Personal/professional projects portfolio
    - Contact: Contact form and information
    - Footer: Social links and copyright information

11. TO MODIFY COMPONENT PROPS:
    - If you need to pass data between components, add props:
      <About personalInfo={personalData} />
    - Update component definitions to accept props

12. TO ADD SMOOTH SCROLLING:
    - The CSS already includes scroll-behavior: smooth
    - Ensure all navigation links use proper href="#section-id" format
    - Test scrolling behavior across different browsers
*/
