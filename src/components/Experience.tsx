import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Hackwit Technologies, Chennai",
      location: "Chennai, India",
      period: "Feb 2024 - Mar 2024",
      description: "Developed a full-stack Exercise Tracker Web App using React.js, Node.js, Express.js, and MongoDB. Implemented user authentication, data logging, and real-time activity tracking.",
      achievements: [
        "Developed a full-stack Exercise Tracker Web App using React.js, Node.js, Express.js, and MongoDB",
        "Implemented user authentication, data logging, and real-time activity tracking",
        "Optimized database queries using aggregate functions, improving data retrieval speed by 20%",
        "Collaborated with UI/UX designers to ensure mobile responsiveness and usability"
      ]
    },
    {
      title: "MERN Stack Intern",
      company: "Hackwit Technologies, Chennai",
      location: "Chennai, India", 
      period: "Aug 2023 - Sep 2023",
      description: "Created a secure CRUD system for Student Grade Tracker to manage dynamic content using Node.js and MongoDB with RESTful APIs. Developed responsive interfaces with React.js and handled routing using React Router.",
      achievements: [
        "Created a secure CRUD system for Student Grade Tracker to manage dynamic content using Node.js and MongoDB with RESTful APIs",
        "Developed responsive interfaces with React.js and handled routing using React Router",
        "Ensured secure data validation and efficient data population using Mongoose ODM",
        "Incorporated validation and error handling, reducing input-related issues by 95%"
      ]
    }
  ];

  const education = {
    title: "Bachelor of Technology in Information Technology",
    institution: "Sathyabama University, Chennai",
    period: "Sept 2021 - May 2025",
    grade: "CGPA: 7.80/10"
  };

  const certifications = [
    {
      title: "Python with Data Science",
      issuer: "NPTEL, IIT Kanpur",
      year: "2023",
      link: "https://drive.google.com/file/d/1vT22i34zj_ba_BRzWloBsanYpQKhXIkZ/view?usp=sharing"
    },
    {
      title: "Database Design and MongoDB",
      issuer: "MongoDB University",
      year: "2024",
      link: "https://drive.google.com/file/d/12Zr5x-XIQ2Ng88R2RwyNsoVzhNGJ6ijC/view?usp=sharing"
    },
    {
      title: "Creating a Simple React Application",
      issuer: "Udemy",
      year: "2025",
      link: "https://drive.google.com/file/d/1IRQtV3iwRxpY7s_toknCXPDrGMmls4FU/view?usp=sharing"
    },
    {
      title: "Oracle Cloud Infrastructure Foundations Associate",
      issuer: "Oracle University",
      year: "2024",
      link: "https://drive.google.com/file/d/1SHqu74RMJNZe7HARvOEUWahUCh7OR9pG/view?usp=sharing"
    },
    {
      title: "Machine Learning Onramp",
      issuer: "MathWorks",
      year: "2024",
      link: "https://drive.google.com/file/d/1yJN39oTn50LbJIsnepSYFIjukCQJhovn/view?usp=sharing"
    },
    {
      title: "Machine Learning with MATLAB",
      issuer: "MathWorks",
      year: "2024",
      link: "https://drive.google.com/file/d/1qTnY0wQEupdq2EVpiPvhHuDHfl2x_dbB/view?usp=sharing"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Internship Experience & Education
          </h2>
          
          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Internship Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-emerald-500 pl-8 pb-8 relative">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-2 top-0"></div>
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                      <div className="flex items-center text-gray-600 text-sm mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <span className="font-medium text-emerald-600 mr-2">{exp.company}</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                    
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-800">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Education</h3>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-800">{education.title}</h4>
                <div className="flex items-center text-gray-600 text-sm mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  {education.period}
                </div>
              </div>
              <p className="text-emerald-600 font-medium mb-2">{education.institution}</p>
              <p className="text-gray-700">{education.grade}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center">
              <Award className="w-6 h-6 mr-3 text-emerald-600" />
              Certifications
            </h3>
            
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-emerald-600 font-medium text-sm mb-1">{cert.issuer}</p>
                          <p className="text-gray-500 text-sm">{cert.year}</p>
                        </div>
                        <Award className="w-8 h-8 text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                      
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

/*
HOW TO MODIFY THIS EXPERIENCE COMPONENT:

1. TO ADD/EDIT INTERNSHIP EXPERIENCES:
   - Modify the experiences array at the top
   - Each experience object contains:
     * title: Job title/position
     * company: Company name and location
     * location: Work location
     * period: Duration of work
     * description: Brief job description
     * achievements: Array of bullet points for accomplishments

2. TO ADD NEW INTERNSHIP:
   - Add new object to experiences array:
     {
       title: "Position Title",
       company: "Company Name, Location",
       location: "City, Country",
       period: "Start Date - End Date",
       description: "Brief description of the role",
       achievements: [
         "Achievement 1",
         "Achievement 2"
       ]
     }

3. TO UPDATE EDUCATION INFORMATION:
   - Edit the education object:
     * title: Your degree name
     * institution: University/college name
     * period: Study duration
     * grade: Your CGPA/grade

4. TO ADD/EDIT CERTIFICATIONS:
   - Modify the certifications array:
     * title: Certificate name
     * issuer: Issuing organization
     * year: Year obtained
     * link: URL to certificate (use real URLs)

5. TO ADD NEW CERTIFICATION:
   - Add new object to certifications array:
     {
       title: "Certificate Name",
       issuer: "Issuing Organization",
       year: "2024",
       link: "https://your-certificate-link.com"
     }

6. TO CHANGE STYLING:
   - Background: Modify "from-emerald-50 via-teal-50 to-cyan-50"
   - Timeline color: Change "border-emerald-500" and "bg-emerald-500"
   - Card backgrounds: Update "bg-white/70 backdrop-blur-sm"
   - Accent colors: Modify "text-emerald-600", "bg-emerald-500", etc.

7. TO CHANGE SECTION TITLES:
   - "Internship Experience & Education": Edit the main h2 tag
   - "Internship Experience": Edit the first h3 tag
   - "Education": Edit the education section h3 tag
   - "Certifications": Edit the certifications h3 tag

8. TO MODIFY LAYOUT:
   - Certification grid: Change "md:grid-cols-2 lg:grid-cols-3"
   - Timeline spacing: Adjust pl-8, pb-8, gap-8, space-y-8
   - Card padding: Modify p-6, p-8 classes

9. TO REMOVE SECTIONS:
   - Comment out or delete the respective div sections
   - Remove corresponding data arrays if not needed
*/
