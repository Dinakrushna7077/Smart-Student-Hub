// src/pages/Home.tsx
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Star, Sparkles, CheckCircle, Mail } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Centralized Student Records",
      desc: "Access all achievements, activities, and academic milestones in one place.",
      icon: <Users className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Achievements & Recognition",
      desc: "Highlight certifications, workshops, and competitions effortlessly.",
      icon: <Award className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Modern UI Dashboard",
      desc: "Intuitive design with smooth animations for admins and students.",
      icon: <Star className="w-10 h-10 text-yellow-500" />,
    },
  ];

  const steps = [
    "Upload achievements like certificates, workshops, and internships.",
    "Faculty/Admin validates records for authenticity.",
    "System auto-generates a verified portfolio instantly.",
    "Students share portfolio for jobs, internships, and admissions.",
  ];

  const faqs = [
    {
      q: "Is this platform only for students?",
      a: "No. Faculty, admins, and institutions also benefit from analytics and easy accreditation reporting.",
    },
    {
      q: "Can I download my achievements?",
      a: "Yes. Students get a verified digital portfolio that can be downloaded as PDF or shared as a link.",
    },
    {
      q: "Does it integrate with existing systems?",
      a: "Yes. It can be connected to LMS, ERP, and other digital platforms used by colleges.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#6366f1,transparent_40%),radial-gradient(circle_at_80%_70%,#ec4899,transparent_40%)]"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 relative z-10">
          Student Achievement Portal
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl relative z-10">
          Showcase, manage, and track all student achievements in one modern,
          digital platform designed for institutions.
        </p>
        <a
          href="/dashboard"
          className="mt-10 inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition relative z-10"
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </a>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white/80 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Platform?
        </h2>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl shadow-lg bg-white border border-gray-100 hover:shadow-2xl transition"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-pink-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md"
            >
              <CheckCircle className="w-8 h-8 text-indigo-600 flex-shrink-0" />
              <p className="text-gray-700 text-lg">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-extrabold">1,200+</h3>
            <p className="text-lg opacity-90">Students Enrolled</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold">3,500+</h3>
            <p className="text-lg opacity-90">Achievements Recorded</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold">200+</h3>
            <p className="text-lg opacity-90">Workshops & Events</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What People Are Saying
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["This platform helped me get an internship easily!", "Finally, no more paper records during audits!", "Super easy to track student progress."].map(
            (text, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-indigo-50 rounded-2xl shadow"
              >
                <p className="text-gray-700 italic">“{text}”</p>
                <p className="mt-4 font-semibold text-gray-800">— User {i + 1}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-pink-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold text-gray-800">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 px-6 text-center bg-white">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-10 rounded-3xl shadow-2xl"
        >
          <Sparkles className="w-10 h-10 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Student Records?
          </h2>
          <p className="mb-6">
            Join us in building the future of academic achievement tracking.
          </p>
          <a
            href="/dashboard"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Get Started Today
          </a>
        </motion.div>
      </section>
      
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">About</h3>
            <p>
              A centralized digital hub for students and institutions to manage
              achievements, portfolios, and analytics seamlessly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
              <li><a href="/profile" className="hover:text-white">Profile</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700">
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">
          © 2025 Student Achievement Portal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
