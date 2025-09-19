import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export default function Events() {
  const upcomingEvents = [
    { title: "Workshop: Cloud Computing", date: "2025-09-25", time: "10:00 AM" },
    { title: "Seminar: Data Science Trends", date: "2025-10-05", time: "2:00 PM" },
    { title: "Hackathon: AI Challenge", date: "2025-10-20", time: "9:00 AM" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-indigo-600" /> Upcoming Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">{event.title}</h2>
            <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {event.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {event.time}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
