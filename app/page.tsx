"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="pt-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black border border-green-500 rounded-xl p-6 w-full max-w-xl shadow-lg mt-10"
        >
          <p className="text-green-500">$ whoami</p>
          <h1 className="text-2xl mt-2">Mahalaxmi B</h1>

          <p className="text-green-500 mt-4">$ role</p>
          <p>Cybersecurity Enthusiast | SOC Analyst Aspirant</p>

          <p className="text-green-500 mt-4">$ skills</p>
          <p>SIEM | Linux | Threat Monitoring</p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 max-w-4xl mx-auto p-6">
        <h2 className="text-3xl mb-4">About Me</h2>
        <p className="text-gray-300">
          Cybersecurity enthusiast with hands-on experience in security monitoring,
          network analysis, and vulnerability assessment. Skilled in SIEM tools,
          Linux security operations, and Python automation.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 max-w-5xl mx-auto p-6">
        <h2 className="text-3xl mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <motion.div whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            <h3 className="font-bold mb-3">Core Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li>SIEM & Threat Monitoring</li>
              <li>Incident Response</li>
              <li>Log Analysis</li>
              <li>Network Security</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
            <h3 className="font-bold mb-3">Technical Skills</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Splunk, Chronicle</li>
              <li>Wireshark, Nmap, Nessus</li>
              <li>Python, SQL</li>
              <li>Linux (Bash)</li>
            </ul>
          </motion.div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto p-6">
        <h2 className="text-3xl mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["SOC Simulation", "Traffic Analysis", "Vulnerability Scan"].map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
              <h3 className="font-bold">{p}</h3>
              <p className="text-gray-300 mt-2">
                Cybersecurity project focused on detection and analysis.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <a href="/resume.pdf" download className="inline-block mt-6 px-6 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-black transition">Download Resume</a>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 text-center p-10">
        <h2 className="text-3xl mb-4">Contact</h2>
        <p className="text-gray-300">📧 mahalakshmi444.0@gmail.com</p>
        <p className="text-gray-300">📞 9581371039</p>

        <div className="flex justify-center gap-6 mt-4">
          <FaGithub size={24} />
          <FaLinkedin size={24} />
        </div>
      </section>

    </main>
  );
}