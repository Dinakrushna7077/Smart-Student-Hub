import { motion } from "framer-motion";
import { User } from "lucide-react";

const students = [
  { id: 1, name: "Amit Kumar", email: "amit@example.com", department: "CS", status: "Active" },
  { id: 2, name: "Sneha Rani", email: "sneha@example.com", department: "IT", status: "Pending" },
  { id: 3, name: "Rahul Das", email: "rahul@example.com", department: "ECE", status: "Active" },
];

export default function StudentsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Students</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student) => (
          <motion.div
            key={student.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow p-6 border hover:border-indigo-500 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-full">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.department}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-2">{student.email}</p>
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                student.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {student.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
