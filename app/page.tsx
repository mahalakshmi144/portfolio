export default function Home() {
  return (
    <main className="pt-20 bg-black text-green-400 scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-green-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          
          <h1 className="font-bold text-lg">Mahalaxmi<span className="animate-pulse">|</span></h1>

          <div className="space-x-6 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO - TERMINAL STYLE */}
      <section className="h-screen flex items-center justify-center px-4">
        <div className="bg-black border border-green-500 rounded-xl p-6 w-full max-w-xl shadow-lg">
          
          <p>$ whoami</p>
          <h1 className="text-2xl mt-2">Mahalaxmi B</h1>

          <p className="mt-4">$ role</p>
          <p>Cybersecurity Enthusiast | SOC Analyst Aspirant</p>

          <p className="mt-4">$ skills</p>
          <p>SIEM | Linux | Threat Monitoring</p>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl mb-4">About Me</h2>
        <p className="text-green-300">
          Cybersecurity enthusiast with hands-on experience in security monitoring,
          network analysis, and vulnerability assessment. Skilled in SIEM tools,
          Linux security operations, and Python automation. Passionate about
          detecting threats and improving system security.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl mb-6">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 hover:shadow-green-500/50">
            <h3 className="font-bold mb-3">Core Skills</h3>
            <ul className="space-y-2 text-green-300">
              <li>SIEM & Threat Monitoring</li>
              <li>Incident Response</li>
              <li>Log Analysis</li>
              <li>Network Security</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 hover:shadow-green-500/50">
            <h3 className="font-bold mb-3">Technical Skills</h3>
            <ul className="space-y-2 text-green-300">
              <li>Splunk, Chronicle</li>
              <li>Wireshark, Nmap, Nessus</li>
              <li>Python, SQL</li>
              <li>Linux (Bash)</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl mb-6">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 hover:scale-105 transition">
            <h3 className="font-bold">SOC Simulation</h3>
            <p className="text-green-300 mt-2">
              Built a SOC lab to monitor logs and detect brute-force attacks.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 hover:scale-105 transition">
            <h3 className="font-bold">Traffic Analysis</h3>
            <p className="text-green-300 mt-2">
              Used Wireshark to analyze packets and detect anomalies.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500 hover:scale-105 transition">
            <h3 className="font-bold">Vulnerability Scan</h3>
            <p className="text-green-300 mt-2">
              Identified vulnerabilities using Nmap & Nessus.
            </p>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto p-6">
        <h2 className="text-2xl mb-6">Experience</h2>

        <div className="space-y-4">
          
          <div className="bg-gray-900 p-6 rounded-xl border border-green-500">
            <h3 className="font-bold">Wipro</h3>
            <p className="text-green-300">
              Content moderation, threat identification, and risk escalation.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-green-500">
            <h3 className="font-bold">Vodafone Idea</h3>
            <p className="text-green-300">
              Customer support, KYC compliance, and issue resolution.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="text-center p-10">
        <h2 className="text-2xl mb-4">Contact</h2>
        <p className="text-green-300">📧 mahalakshmi444.0@gmail.com</p>
        <p className="text-green-300">📞 9581371039</p>
        <p className="text-green-300 mt-2">
          🔗 linkedin.com/in/mahalaxmi-b-29551538a
        </p>
      </section>

    </main>
  );
}