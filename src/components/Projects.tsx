
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "Exercise Tracker Web App",
      description: "A full-stack MERN application for tracking exercises with user authentication, data logging, and real-time activity monitoring. Features responsive design and optimized database queries.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://exercise-tracker-website-mern.netlify.app/",
      githubUrl: "https://github.com/Hemachandran53/exercise-tracker-using-mern",
      highlights: ["User authentication system", "Real-time activity tracking", "20% improvement in data retrieval speed"]
    },
    {
      title: "Dynamic Content Management System",
      description: "A secure CRUD system for Student Grade Tracker built with MERN stack for managing dynamic content. Includes RESTful APIs, responsive interfaces, and comprehensive validation with error handling.",
      image: "https://www.figma.com/community/resource/acb63030-a130-4dc8-8e78-d388579a3327/thumbnail",
      tech: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
      liveUrl: "https://crud-app-mern-student-grade-tracker.netlify.app/",
      githubUrl: "https://github.com/Hemachandran53/crud-student-grade-tracker-app-mern",
      highlights: ["Secure CRUD operations", "React Router implementation", "95% reduction in input-related issues"]
    },
    {
      title: "Predictive Maintenance System",
      description: "Machine learning-based system for electric vehicle predictive maintenance using TensorFlow. Integrated RPM data analysis with Python scripts for analytics and dashboard visualization.",
      image: "https://images.unsplash.com/photo-1633990308758-b26aada5804e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Python", "TensorFlow", "Machine Learning", "Data Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Machine learning model implementation", "RPM data integration", "20% improvement through proactive insights"]
    },
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React.js", "Tailwind CSS"],
      liveUrl: "https://hemachandran-portfolio-website.netlify.app/",
      githubUrl: "https://github.com/Hemachandran53/hc-portfolio-website",
      highlights: ["Responsive design", "Smooth scrolling", "Interactive elements"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Projects
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border border-white/50 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 text-xs rounded-full border border-rose-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="text-xs text-gray-600 flex items-start">
                            <span className="w-1 h-1 bg-rose-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button asChild size="sm" className="text-xs bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600">
                        <a href={project.liveUrl} className="flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild size="sm" className="text-xs border-rose-200 text-rose-700 hover:bg-rose-50">
                        <a href={project.githubUrl} className="flex items-center gap-1">
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;

/*
HOW TO MODIFY THIS PROJECTS COMPONENT:

1. TO ADD/EDIT PROJECTS:
   - Modify the projects array at the top
   - Each project object contains:
     * title: Project name
     * description: Brief project description
     * image: Project image URL (use Unsplash or your own images)
     * tech: Array of technologies used
     * liveUrl: Link to live demo
     * githubUrl: Link to GitHub repository
     * highlights: Array of key achievements/features

2. TO ADD NEW PROJECT:
   - Add new object to projects array:
     {
       title: "New Project Name",
       description: "Project description here",
       image: "https://images.unsplash.com/photo-id?w=600&h=400&fit=crop",
       tech: ["React", "Node.js", "MongoDB"],
       liveUrl: "https://your-project-demo.com",
       githubUrl: "https://github.com/username/project",
       highlights: [
         "Key feature 1",
         "Key feature 2",
         "Achievement with metrics"
       ]
     }

3. TO UPDATE PROJECT IMAGES:
   - Replace image URLs with your actual project screenshots
   - Use consistent aspect ratio (600x400 recommended)
   - Ensure images are optimized for web

4. TO CHANGE PROJECT LINKS:
   - Update liveUrl with actual demo links
   - Update githubUrl with actual GitHub repository links
   - Replace "#" placeholder links with real URLs

5. TO MODIFY TECHNOLOGIES:
   - Edit the tech arrays for each project
   - Add/remove technology strings as needed

6. TO CHANGE STYLING:
   - Background: Modify "from-rose-50 via-pink-50 to-orange-50"
   - Tech tags: Change "from-rose-100 to-pink-100 text-rose-800"
   - Buttons: Update "from-rose-500 to-pink-500" and "border-rose-200 text-rose-700"
   - Highlight bullets: Change "bg-rose-500" for bullet colors

7. TO CHANGE LAYOUT:
   - Grid columns: Modify "md:grid-cols-2 lg:grid-cols-3" for different layouts
   - Card spacing: Change gap-8 for different spacing
   - Image aspect: Update "aspect-video" for different image ratios

8. TO CHANGE SECTION TITLE:
   - Edit the h2 tag with "Featured Projects" text

9. TO ADD MORE BUTTON ACTIONS:
   - Add new buttons in CardFooter:
     <Button variant="secondary" size="sm">
       <NewIcon className="w-3 h-3" />
       New Action
     </Button>

10. TO MODIFY CARD HOVER EFFECTS:
    - Change hover:scale-105 for different scale effects
    - Modify transition-all duration-300 for different animation timing
    - Update hover:shadow-xl for different shadow effects

11. TO REMOVE HIGHLIGHTS SECTION:
    - Delete the highlights mapping section in CardContent
    - Remove highlights property from project objects
*/
