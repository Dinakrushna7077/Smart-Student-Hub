import { motion } from "framer-motion";
import { Award, BookOpen, Trophy } from "lucide-react";

const activities = [
  { id: 1, title: "AI Workshop", type: "Workshop", status: "Approved", date: "Aug 2025", icon: BookOpen },
  { id: 2, title: "Hackathon Winner", type: "Competition", status: "Approved", date: "July 2025", icon: Trophy },
  { id: 3, title: "MOOC: Data Science", type: "Certification", status: "Approved", date: "June 2025", icon: Award },
];

export default function ActivitiesPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Activities</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <motion.div
              key={activity.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow p-6 border hover:border-indigo-500 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.type}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 mb-3">{activity.date}</p>
              <span
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  activity.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {activity.status}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
