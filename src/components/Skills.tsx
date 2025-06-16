
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 92 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap/Sass", level: 85 }
      ]
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "MySQL", level: 78 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "MERN Stack", level: 90 },
        { name: "RESTful APIs", level: 85 },
        { name: "JSON", level: 88 },
        { name: "Version Control", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-white text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                        <span className="text-gray-300 text-xs">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-white/20" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

/*
HOW TO MODIFY THIS SKILLS COMPONENT:

1. TO ADD/EDIT SKILL CATEGORIES:
   - Edit the skillCategories array at the top
   - Each category object has:
     * category: The section title (e.g., "Languages", "Frontend")
     * skills: Array of skill objects with name and level (0-100)

2. TO ADD NEW SKILLS:
   - Add new objects to the skills array within any category:
     { name: "Skill Name", level: 85 }
   - Level should be between 0-100 (represents proficiency percentage)

3. TO ADD NEW SKILL CATEGORIES:
   - Add new category objects to skillCategories array:
     {
       category: "New Category Name",
       skills: [
         { name: "Skill 1", level: 90 },
         { name: "Skill 2", level: 75 }
       ]
     }

4. TO REMOVE SKILLS/CATEGORIES:
   - Simply delete the objects from the respective arrays

5. TO CHANGE LAYOUT:
   - Grid columns: Modify "md:grid-cols-2 lg:grid-cols-4" to change number of columns
   - Card spacing: Change gap-8 for different spacing between cards

6. TO MODIFY STYLING:
   - Background: Change "from-slate-900 via-purple-900 to-slate-800"
   - Card background: Modify "bg-white/10 backdrop-blur-sm"
   - Progress bar: Update "bg-white/20" for progress bar background
   - Text colors: Change text-white, text-gray-200, text-gray-300

7. TO CHANGE SECTION TITLE:
   - Edit the h2 tag with "Technical Skills" text

8. TO ADJUST PROGRESS BAR STYLING:
   - The Progress component uses the level value automatically
   - To change progress bar height: Modify "h-2" class
   - To change colors: Update the Progress component className
*/
