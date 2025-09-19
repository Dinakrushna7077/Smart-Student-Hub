import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Certification: ReactJS",
      issuer: "Udemy",
      date: "2025-08-15",
      status: "Completed",
    },
    {
      title: "Hackathon Participation",
      issuer: "Smart India Hackathon",
      date: "2025-07-20",
      status: "Completed",
    },
    {
      title: "Workshop: AI & ML",
      issuer: "IIT Bhubaneswar",
      date: "2025-06-12",
      status: "Completed",
    },
    {
      title: "Ongoing: Data Structures Course",
      issuer: "Coursera",
      date: "2025-10-15",
      status: "In Progress",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Award className="w-6 h-6 text-indigo-600" /> My Achievements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-500">{a.issuer}</p>
              </div>
              {a.status === "Completed" ? (
                <CheckCircle className="w-6 h-6 text-green-500" />
              ) : (
                <Calendar className="w-6 h-6 text-yellow-500" />
              )}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-600">{a.date}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  a.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {a.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
