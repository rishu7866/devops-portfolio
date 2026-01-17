import { motion } from "framer-motion"; import { Phone,Mail, Linkedin, Award, Cloud, GitBranch, Server } from "lucide-react"; import profile from "./assets/profile.jpg";
 
export default function App() { return ( <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white">
 
{/* HERO */}
  <section className="min-h-screen flex items-center px-6 md:px-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
 
      <motion.img
        src={profile}
        alt="Rishabh Kumar"
        className="w-64 h-64 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
 
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">Rishabh Kumar</h1>
        <p className="mt-4 text-xl text-cyan-400">DevOps Engineer | Azure | AWS | Kubernetes</p>
        <p className="mt-6 text-slate-300 leading-relaxed">
          DevOps Engineer with 2+ years of experience designing and operating cloud-native infrastructure on Azure and AWS.
          Expert in Kubernetes, Terraform, CI/CD automation, and system observability.
        </p>
 
        <div className="mt-8 flex flex-wrap gap-4">
  <a href="mailto:rishabhk.9835@gmail.com" className="px-6 py-3 bg-cyan-400 text-black rounded-xl flex items-center gap-2 hover:scale-105 transition">
    <Mail size={18} /> Email: rishabhk.9835@gmail.com
  </a>
  <a href="tel:+911234567890" className="px-6 py-3 bg-cyan-400 text-black rounded-xl flex items-center gap-2 hover:scale-105 transition">
    <Phone size={18} /> Mobile: +91 8340637031
  </a>
  <a href="https://linkedin.com/in/rishabh-kumar7866" target="_blank" className="px-6 py-3 border border-cyan-400 rounded-xl flex items-center gap-2 hover:bg-cyan-400/10 transition">
    <Linkedin size={18} /> LinkedIn
  </a>
</div>
      </motion.div>
    </div>
  </section>
 
  {/* SKILLS */}
  <section className="py-20 px-6 md:px-20">
    <h2 className="text-3xl font-bold mb-10">Core Skills</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {["Azure", "AWS", "Docker", "Kubernetes", "Terraform", "Helm", "Azure DevOps", "GitLab CI/CD", "Jenkins", "Prometheus", "Grafana", "Elasticsearch", "Python", "Linux"].map((skill, i) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-4 text-center hover:border-cyan-400 hover:scale-105 transition"
        >
          {skill}
        </motion.div>
      ))}
    </div>
  </section>
 
  {/* EXPERIENCE */}
  <section className="py-20 px-6 md:px-20 bg-black/40">
    <h2 className="text-3xl font-bold mb-10">Experience</h2>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 border border-slate-700 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-semibold">Software Engineer – DevOps</h3>
      <p className="text-slate-400">Anunta Technologies | 2024 – Present</p>
      <ul className="mt-6 space-y-3 text-slate-300 list-disc list-inside">
        <li>Designed and managed Kubernetes clusters on Azure and AWS</li>
        <li>Built CI/CD pipelines reducing failures by 25% and release time by 30%</li>
        <li>Implemented Infrastructure as Code using Terraform and ARM templates</li>
        <li>Optimized cloud cost achieving 15% monthly savings</li>
        <li>Improved observability using Prometheus, Grafana, and Elasticsearch</li>
        <li>Handled production incidents and root cause analysis</li>
      </ul>
    </motion.div>
  </section>
 
  {/* PROJECTS */}
  <section className="py-20 px-6 md:px-20">
    <h2 className="text-3xl font-bold mb-10">Projects</h2>
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-slate-900 border border-slate-700 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-semibold">Azure VM Management Telegram Bot</h3>
      <p className="text-slate-400">Python | Telegram Bot API | Azure REST API</p>
      <ul className="mt-6 space-y-3 list-disc list-inside text-slate-300">
        <li>Secure VM power ON/OFF via Telegram</li>
        <li>Real-time VM status monitoring</li>
        <li>Automated scheduling to reduce manual operations</li>
      </ul>
    </motion.div>
  </section>
 {/* EDUCATION */}
  <section className="py-20 px-6 md:px-20">
    <h2 className="text-3xl font-bold mb-10">Education</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
      >
        <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
        <p className="text-slate-400">Pondicherry University</p>
        <p className="text-slate-300 mt-2">2020 – 2022 · CGPA: <span className="text-cyan-400 font-semibold">8.1</span></p>
      </motion.div>
 
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition"
      >
        <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
        <p className="text-slate-400">Magadh University</p>
        <p className="text-slate-300 mt-2">2016 – 2019 · CGPA: <span className="text-cyan-400 font-semibold">6.3</span></p>
      </motion.div>
    </div>
  </section>
  {/* CERTS & AWARDS */}
  <section className="py-20 px-6 md:px-20 bg-black/40 grid md:grid-cols-2 gap-12">
    <div>
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><Award /> Certifications</h2>
      <ul className="space-y-3 text-slate-300">
        <li>Microsoft Certified: DevOps Engineer Expert (AZ-400)</li>
        <li>Microsoft Certified: Azure Administrator Associate (AZ-104)</li>
      </ul>
    </div>
  </section>
 
  {/* FOOTER */}
  <footer className="py-10 text-center text-slate-400">
    © 2026 Rishabh Kumar · DevOps Engineer
  </footer>
 
</div>
 
); }
