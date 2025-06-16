import { Calendar, Users, Target, TrendingUp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AcademicProjects = () => {
  const projects = [
    {
      title: "Predictive Maintenance of Electric Vehicles",
      period: "2023 - 2024",
      description: "Developed a machine learning-based predictive maintenance system for electric vehicles using TensorFlow. The system analyzes RPM data and other vehicle parameters to predict maintenance needs and prevent unexpected breakdowns.",
      technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analytics", "RPM Data Analysis"],
      objectives: [
        "Implement predictive analytics for vehicle maintenance scheduling",
        "Reduce unexpected vehicle breakdowns through proactive monitoring",
        "Analyze RPM data patterns to identify potential issues",
        "Create data visualization dashboards for maintenance insights"
      ],
      achievements: [
        "Successfully implemented machine learning model for predictive analysis",
        "Integrated RPM data analysis with Python scripts for real-time monitoring",
        "Achieved 20% improvement in maintenance efficiency through proactive insights",
        "Developed comprehensive dashboard for maintenance scheduling and analytics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Academic Projects
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.period}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-violet-600" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 text-sm rounded-full border border-violet-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Objectives */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-violet-600" />
                    Project Objectives
                  </h4>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-violet-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;

/*
HOW TO MODIFY THIS ACADEMIC PROJECTS COMPONENT:

1. TO EDIT THE CURRENT PROJECT:
   - Modify the project object at the top:
     * title: Project name
     * period: Duration of project
     * description: Brief project overview
     * technologies: Array of technologies used
     * objectives: Array of project goals
     * achievements: Array of accomplishments

2. TO ADD MULTIPLE PROJECTS:
   - Convert project object to projects array:
     const projects = [
       {
         title: "Project 1",
         period: "2023-2024",
         // ... other properties
       },
       {
         title: "Project 2",
         period: "2022-2023",
         // ... other properties
       }
     ];
   - Then map through projects array in the JSX

3. TO ADD NEW TECHNOLOGIES:
   - Add strings to the technologies array:
     ["Python", "TensorFlow", "New Technology"]

4. TO ADD NEW OBJECTIVES:
   - Add strings to the objectives array:
     [
       "Existing objective",
       "New objective to add"
     ]

5. TO ADD NEW ACHIEVEMENTS:
   - Add strings to the achievements array:
     [
       "Existing achievement",
       "New achievement to add"
     ]

6. TO CHANGE STYLING:
   - Background: Modify "from-violet-50 via-purple-50 to-indigo-50"
   - Technology tags: Change "from-violet-100 to-purple-100 text-violet-800"
   - Bullet points: Update "bg-violet-500" for bullet colors
   - Icon colors: Modify "text-violet-600" for section icons

7. TO CHANGE SECTION TITLE:
   - Edit the h2 tag with "Academic Projects" text

8. TO MODIFY ICONS:
   - Import different icons from 'lucide-react'
   - Replace Calendar, Users, Target, TrendingUp with desired icons
   - Update the icon components in the respective sections

9. TO CHANGE LAYOUT:
   - Card width: Modify max-w-4xl for different container width
   - Section spacing: Change py-20, mb-12, mb-6 for different spacing
   - Text spacing: Adjust space-y-2, leading-relaxed, etc.

10. TO ADD PROJECT LINKS:
    - Add links property to project object:
      links: {
        demo: "https://project-demo.com",
        github: "https://github.com/username/project",
        documentation: "https://project-docs.com"
      }
    - Then add link buttons in the JSX similar to the Projects component
*/
