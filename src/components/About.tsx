
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "MERN Stack",
      description: "Proficient in building full-stack applications using MongoDB, Express.js, React.js, and Node.js"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and scalability with best practices"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong teamwork and communication skills for effective project delivery"
    },
    {
      icon: Code,
      title: "Good in Languages",
      description: "Proficient in Java, JavaScript (ES6+), and Python(Basics)"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Results-driven Full-Stack Developer with hands-on experience in designing, developing, and deploying scalable web applications using the MERN stack. Proficient in Java, JavaScript (ES6+), React.js, Node.js, and MongoDB.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Demonstrated skills in SQL database design, responsive user interfaces, and robust backend systems. Strong problem-solving abilities, attention to detail, and a commitment to continuous learning and optimization. Eager to contribute technical expertise and passion for development in a collaborative team environment.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/50">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Education</span>
                  <span className="font-medium text-blue-700">B.Tech</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience</span>
                  <span className="font-medium text-blue-700">Fresher</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialization</span>
                  <span className="font-medium text-blue-700">Information Technology</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium text-blue-700">Chennai, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/50">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/*
HOW TO MODIFY THIS ABOUT COMPONENT:

1. TO CHANGE PERSONAL DESCRIPTION:
   - Edit the two paragraph texts in the space-y-6 div
   - These are the main introduction paragraphs about yourself

2. TO UPDATE QUICK FACTS:
   - Modify the objects in the Quick Facts section:
     * Education: Change "B.Tech IT" to your degree
     * Experience: Change "Fresher" to your experience level
     * Specialization: Change "MERN Stack" to your specialization
     * Location: Change "Chennai, India" to your location
   - To add new facts: Add new div with flex justify-between structure

3. TO MODIFY HIGHLIGHT CARDS:
   - Edit the highlights array at the top:
     * icon: Import and use any Lucide React icon
     * title: The main skill/highlight title
     * description: Brief description of the skill
   - To add more cards: Add new objects to the highlights array
   - To remove cards: Remove objects from the highlights array

4. TO CHANGE STYLING:
   - Background gradient: Modify "from-blue-50 via-indigo-50 to-purple-50"
   - Card colors: Change "from-blue-500 to-purple-600" for icon backgrounds
   - Text colors: Modify "text-blue-700", "text-gray-800", etc.

5. TO CHANGE SECTION TITLE:
   - Modify the h2 tag with "About Me" text

6. TO ADJUST LAYOUT:
   - Grid columns: Change "md:grid-cols-2 lg:grid-cols-4" for highlight cards
   - Spacing: Modify py-20, mb-12, gap-8, etc. for different spacing
*/
