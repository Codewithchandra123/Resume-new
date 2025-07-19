
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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 px-4 transition-colors duration-300 print:bg-white print:text-black leading-tight">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 print:p-4 print:shadow-none">
          {/* Header utilities */}
          <div className="flex justify-end gap-3 mb-3 print:hidden">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 border rounded-full px-3 py-1.5 hover:bg-blue-50 dark:hover:bg-gray-700 text-xs"
            >
              <Download size={14} className="shrink-0" /> Download PDF
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 border rounded-full p-1.5 hover:bg-blue-50 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between border-b dark:border-gray-700 pb-3 mb-3 gap-3">
            <div>
              <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
                Kancharla Chandra Teja
              </h1>
              <p className="mt-0.5 text-md font-medium">
               Aspiring Full-Stack & Software Developer Roles
              </p>
              <div className="mt-2 space-y-0.5 text-xs">
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
                <ContactLine icon={MapPin} text="Andhra Pradesh, India" />
              </div>
            </div>
          </header>

          {/* --- Quick Links --- */}
          <div className="flex justify-center items-center gap-6 my-3 text-xs font-medium print:hidden">
            <a href="https://chandra-new-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Globe size={14} />
              <span>Portfolio</span>
            </a>
            <a href="https://github.com/Codewithchandra123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kancharla-chandra-teja-711519278" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Professional Summary */}
          <Section title="About Me">
            <p className="text-sm">
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
                "Languages & Backend": "Java (intermediate), Django(Basic)",
                "Frontend": "React, JavaScript, HTML5, CSS3, Tailwind CSS",
                "Tools & Platforms": "Git, GitHub, Pycham , VS Code",
                "CS Fundamentals": "Data Structures & Algorithms, REST APIs, OOP.  (Basic)",
              }}
            />
          </Section>

          {/* Projects */}
          <Section title="Selected Projects">
            <Project
              name="Vouchify - Smart Voucher Exchange"
              period="2025"
              description="Full-Stack Web App | React, Django,Firebase, Tailwind CSS"
              github="https://github.com/Codewithchandra123/Vouchify.git"
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
            <p className="text-sm text-gray-600 dark:text-gray-400">
              I am actively seeking full-time Full-Stack or Java Developer roles (Remote or On-site) where I can contribute to impactful projects, grow alongside experienced professionals, and help shape modern digital solutions. I am also open to freelance and collaborative open-source projects and ready to join a team where innovation, mentorship, and creativity thrive.
            </p>
          </Section>

          {/* Education */}
         <Section title="Education">
           <div className="sm:overflow-visible overflow-x-auto -mx-4 sm:mx-0">
    <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b dark:border-gray-600">
                  <th className="py-1.5 font-semibold">Degree/Certificate</th>
                  <th className="font-semibold">Institute/Board</th>
                  <th className="font-semibold">CGPA/Percentage</th>
                  <th className="font-semibold">Year</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-1">B.E. CSE</td>
                  <td>AVS Engineering College</td>
                  <td>8.67</td>
                  <td>2022‑2026</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-1">Senior Secondary</td>
                  <td>St. Mary's Junior College</td>
                  <td>77.2%</td>
                  <td>2020‑2022</td>
                </tr>
                <tr>
                  <td className="py-1">Secondary</td>
                  <td>XLNC EM High School</td>
                  <td>98.0%</td>
                  <td>2019‑2020</td>
                </tr>
                <tr>
                  <td colSpan="4" className="pt-2 text-center text-xs text-gray-600 dark:text-gray-400">
                    Completed all exams in Hindi (A degree Holder in Hindi)
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </Section>

            <Section title="Internships">
            <ul className="list-disc ml-5 space-y-0.5 text-sm">
              <li>Completed a Web Development internship at<strong> Apex Planet Pvt Ltd</strong> (Online), where I improved my frontend skills.</li>
              <li>Learned  Python concepts through an online internship with<strong>SoloLearn</strong>, gaining a solid foundation in programming.</li>
              <li>Worked on-site at <strong>Odugaa Tech Pvt Ltd</strong>, building real-time web features and gaining hands-on development experience.</li>
            </ul>
          </Section>

          <Section title="Achievements">
            <ul className="list-disc ml-5 space-y-0.5 text-sm">
              <li>Led my team to victory at Hackxelerate '25 in KPR Engineering College with our innovative project is <strong>Vouchify</strong>.</li>
              <li>Participated in <strong>CodeVolt '25</strong> at VIT Chennai — although we didn’t win, the experience fueled my determination.</li>
              <li>That loss motivated me to form a new team for KPR Hackathon, where I led from the front, found a strong idea, and won.</li>
              <li>I believe setbacks are setups for comebacks — I push myself harder after every challenge to achieve what I once missed.</li>
            </ul>
          </Section>

          {/* Languages */}
                  <Section title="Languages Known">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <li className="flex items-center gap-1">
              <LanguagesIcon size={14} className="text-blue-700 dark:text-blue-400" /> English
            </li>
            <li className="flex items-center gap-1">
              <LanguagesIcon size={14} className="text-blue-700 dark:text-blue-400" /> Telugu (Native)
            </li>
            <li className="flex items-center gap-1">
              <LanguagesIcon size={14} className="text-blue-700 dark:text-blue-400" /> Tamil
            </li>
            <li className="flex items-center gap-1">
              <LanguagesIcon size={14} className="text-blue-700 dark:text-blue-400" /> Hindi
            </li>
          </ul>
        </Section>

        </div>
      </div>
    </div>
  );
}

// ------------- Reusable Components ------------ //
function Section({ title, children }) {
  return (
    <section className="mb-4 last:mb-0 print:mb-3">
      <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 border-b-2 border-blue-200 dark:border-blue-700 pb-1 mb-2 print:bg-transparent tracking-tight">
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
    <span className="inline-flex items-center gap-1.5">
      <Icon size={12} className="shrink-0" /> {text}
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
    <div className="mb-4">
      <h3 className="font-bold text-base text-gray-900 dark:text-gray-100">
        {name}
        <span className="text-xs font-normal text-gray-500 dark:text-gray-400 ml-1.5">({period})</span>
      </h3>
      <div className="text-xs text-gray-600 dark:text-gray-400 mb-1.5">
        <span>{description}</span>
        <span className="mx-1">|</span>
        <a href={github} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
      <ul className="list-disc ml-5 mt-1 space-y-0.5 text-sm text-gray-700 dark:text-gray-300">
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
    <div className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
      {Object.entries(skills).map(([category, stack]) => (
        <div key={category} className="flex gap-1.5 items-start">
          <Star size={14} className="shrink-0 mt-0.5 text-blue-700 dark:text-blue-400" />
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
