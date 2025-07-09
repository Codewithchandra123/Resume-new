
import React, { useState } from "react";
import PropTypes from "prop-types";
// import resPhoto from '../IMAGE/resphoto.jpg'; // Adjust '../' based on your file location

import {
  Sun,
  Moon,
  Download,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Languages as LanguagesIcon,
  Star,
  Zap,
} from "lucide-react";

/**
 * To make the dark mode toggle work, you MUST set the darkMode strategy to 'class'
 * in your tailwind.config.js file.
 */

export default function Resume() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 px-4 transition-colors duration-300 print:bg-white print:text-black leading-snug">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 print:p-6 print:shadow-none">
          {/* Header utilities */}
          <div className="flex justify-end gap-4 mb-4 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 border rounded-full px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-sm"
            >
              <Download size={16} className="shrink-0" /> Download PDF
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 border rounded-full p-2 hover:bg-blue-50 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between border-b dark:border-gray-700 pb-4 mb-4 gap-4">
            <div>
              <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
                Kancharla Chandra Teja
              </h1>
              <p className="mt-1 text-lg font-medium">
                Full-Stack & Software Developer
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <ContactLine icon={Mail} text="tejakancharla77@gmail.com" 
                href="mailto:tejakancharla77@gmail.com" />
                <ContactLine icon={Phone} text="+91-9966382855" />
                <ContactLine
                  icon={Linkedin}
                  text="linkedin.com/in/kancharla-chandra-teja-711519278"
                  href="https://www.linkedin.com/in/kancharla-chandra-teja-711519278"
                  target="_blank"
                />
                <ContactLine
                  icon={Github}
                  text="github.com/Codewithchandra123"
                  href="https://github.com/Codewithchandra123"
                  target="_blank"
                />
                 <ContactLine
                  icon={Globe}
                  text="chandra-new-portfolio.netlify.app"
                  href="https://chandra-new-portfolio.netlify.app"
                  target="_blank"
                />
                <ContactLine icon={MapPin} text="Andhra Pradesh, India  " />
              </div>
            </div>
                          
                 



          </header>
          
          {/* --- Quick Links --- */}
          <div className="flex justify-center items-center gap-8 my-4 text-sm font-medium print:hidden">
            <a href="https://chandra-new-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Globe size={16} />
              <span>Portfolio</span>
            </a>
            <a href="https://github.com/Codewithchandra123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kancharla-chandra-teja-711519278" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Professional Summary */}
          <Section title="About Me">
            <p>
              I'm a passionate and results-driven Full-Stack & Java ,Python Developer with a strong desire to build dynamic, responsive, and scalable web applications.
               I thrive on solving problems, writing clean code, and building products that create meaningful user experiences. With a strong foundation in both frontend and
                backend development, 
              I believe in continuous learning and collaboration as key ingredients to creating great software and also Completed the more than 400 Labs on <strong>Google cloud skill boost</strong> and reached to the <strong>Arcade Legend Tier.</strong>
            </p>
          </Section>

          {/* Technical Skills */}
          <Section title="Tech Stack & Tools">
            <SkillGrid
              skills={{
                "Languages & Backend": "Java ,Python , Django",
                "Frontend": "React, JavaScript, HTML5, CSS3, Tailwind CSS",
                "Tools & Platforms": "Git, GitHub, Pycham , VS Code",
                "CS Fundamentals": "Data Structures, Algorithms, REST APIs, OOP",
              }}
            />
          </Section>

          {/* Projects */}
          <Section title="Selected Projects">
            <Project
              name="Vouchify - Smart Voucher Exchange"
              period="2025"
              description="Full-Stack Web App | React, Django,Firebase, Tailwind CSS"
              github="https://github.com/Codewithchandra123/your-project-repo"  
              details={[
                "Developed Vouchify, a smart platform where users can sell or share unused UPI vouchers before they expire.",
                "Built with React.js, Tailwind CSS, Firebase for authentication and Django for managing vouchers, wallets, and transactions.", 
              ]} />
             <Project
              name="Interactive E-commerce Website"
              period="2025"
              description="Frontend Development | HTML, CSS, JavaScript"
              github="https://github.com/Codewithchandra123/FINAL-TASK.git"  
              details={[
                "Created a basic e-commerce web page during my internship at Apex Planet Pvt. Ltd.",
                "with features like product filtering, price sorting (low to high), add-to-cart functionality, and item counting using core JavaScript.",
              ]}
            />
           <Project
            name="Personal Fitness Tracker"
             period="2024"
            description="Python Development | Health Monitoring"
            github="https://github.com/Codewithchandra123/Fitness-Tracker.git"  
            details={[
            "Built a fitness tracker that collects user health data and predicts calorie needs based on input.",
            "Provides e-doctor suggestions tailored to the user's health status.",
            "Displays results and progress in graph format, with all data stored for future reference.",
          ]}
          />

          </Section>
          
          {/* Professional Goal */}
          <Section title="Professional Goal">
            <p className="text-gray-600 dark:text-gray-400">
              I am actively seeking full-time Full-Stack or Python Developer roles (Remote or On-site) where I can contribute to impactful projects, grow alongside experienced professionals, and help shape modern digital solutions. I am also open to freelance and collaborative open-source projects and ready to join a team where innovation, mentorship, and creativity thrive.
            </p>
          </Section>

          {/* Education */}
         <Section title="Education">
           <div className="sm:overflow-visible overflow-x-auto -mx-4 sm:mx-0">
    <table className="w-full min-w-[32rem] text-left mb-2">
              <thead>
                <tr className="border-b dark:border-gray-600">
                  <th className="py-2 font-semibold">Degree/Certificate</th>
                  <th className="font-semibold">Institute/Board</th>
                  <th className="font-semibold">CGPA/Percentage</th>
                  <th className="font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-1.5">B.E. CSE</td>
                  <td>AVS Engineering College</td>
                  <td>8.67</td>
                  <td>2022‑2026</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-1.5">Senior Secondary</td>
                  <td>St. Mary's Junior College</td>
                  <td>77.2%</td>
                  <td>2020‑2022</td>
                </tr>
                <tr>
                  <td className="py-1.5">Secondary</td>
                  <td>XLNC EM High School</td>
                  <td>98.0%</td>
                  <td>2019‑2020</td>
                </tr>
                <tr>
                  <td colSpan="4" className="pt-3 text-center text-sm text-gray-600 dark:text-gray-400">
                    Completed all exams in Hindi (A degree Holder in Hindi)
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </Section>
          
          {/* Current Learning & Interests */}
          <Section title="Current Learning & Interests">
              <h4 className="font-semibold mb-2">Currently Exploring:</h4>
              <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                <li>Intermediate React and Django integration patterns.</li>
                <li>Building and consuming REST APIs with Django REST Framework.</li>
                <li>Full-stack application architecture and deployment strategies.</li>
                <li>Authentication & state management (e.g., JWT, Redux).</li>
                <li>Clean code principles, best practices, and performance optimization.</li>
              </ul>
              <div className="flex items-start gap-3 mt-4">
                 <Zap size={16} className="shrink-0 mt-1 text-blue-700 dark:text-blue-400" />
                 <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Fun Fact:</strong> Debugging and building feel equally thrilling to me — every bug is a hidden puzzle, and every feature is a small innovation. I often find myself working late into the night, fully focused until the project is complete. I also enjoy exploring AI tools to speed up development — some even say I’m a natural <strong>prompt engineer!</strong>
                 </p>
              </div>
          </Section>

          {/* Languages */}
          <Section title="Languages Known">
            <ul className="list-disc ml-6 space-y-1">
              <li className="flex gap-2 items-start">
                <LanguagesIcon size={16} className="mt-1 shrink-0 text-blue-700 dark:text-blue-400" /> English  
              </li>
              <li className="flex gap-2 items-start">
                <LanguagesIcon size={16} className="mt-1 shrink-0 text-blue-700 dark:text-blue-400" /> Telugu (Native)
              </li>
               <li className="flex gap-2 items-start">
                <LanguagesIcon size={16} className="mt-1 shrink-0 text-blue-700 dark:text-blue-400" /> Tamil 
              </li>
               <li className="flex gap-2 items-start">
                <LanguagesIcon size={16} className="mt-1 shrink-0 text-blue-700 dark:text-blue-400" /> Hindi 
              </li>
            </ul>
          </Section>
          
          {/* Footer
          <footer className="text-center text-xs text-gray-500 mt-8 print:hidden">
            Last updated: {new Date().toLocaleDateString()} - Built with React & TailwindCSS
          </footer> */}
        </div>
      </div>
    </div>
  );
}

// ------------- Reusable Components ------------ //
function Section({ title, children }) {
  return (
    <section className="mb-6 last:mb-0 print:mb-4">
      <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 border-b-2 border-blue-200 dark:border-blue-700 pb-1 mb-3 print:bg-transparent tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ContactLine({ icon: Icon, text, href, target }) {
  const Content = (
    <span className="inline-flex items-center gap-2">
      <Icon size={14} className="shrink-0" /> {text}
    </span>
  );
  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" className="hover:underline text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block transition-colors">
        {Content}
      </a>
    );
  }
  return <p>{Content}</p>;
}
ContactLine.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
};

function Project({ name, period, description, github, details }) {
  return (
    <div className="mb-5">
      <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
        {name}
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-2">({period})</span>
      </h3>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span>{description}</span>
        <span className="mx-1">|</span>
        <a href={github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
      <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
        {details.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
Project.propTypes = {
  name: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SkillGrid({ skills }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
      {Object.entries(skills).map(([category, stack]) => (
        <div key={category} className="flex gap-2 items-start">
          <Star size={16} className="shrink-0 mt-1 text-blue-700 dark:text-blue-400" />
          <div>
            <strong className="font-semibold text-gray-800 dark:text-gray-200">{category}:</strong>
            <span className="text-gray-700 dark:text-gray-300"> {stack}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
SkillGrid.propTypes = {
  skills: PropTypes.objectOf(PropTypes.string).isRequired,
};
