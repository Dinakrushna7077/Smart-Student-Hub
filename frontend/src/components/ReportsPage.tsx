import { motion } from "framer-motion";
import { BarChart3, FileText, Award, Calendar } from "lucide-react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const stats = [
  { title: "Total Students", value: "1,245", icon: <BarChart3 className="w-6 h-6 text-indigo-600" /> },
  { title: "Certifications", value: "320", icon: <Award className="w-6 h-6 text-pink-500" /> },
  { title: "Events Logged", value: "150", icon: <FileText className="w-6 h-6 text-green-500" /> },
  { title: "Pending Approvals", value: "45", icon: <Calendar className="w-6 h-6 text-yellow-500" /> },
];

export default function ReportsPage() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Student Participation",
        data: [65, 59, 80, 81, 56, 75],
        backgroundColor: "#6366F1",
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Certificates Issued",
        data: [20, 30, 25, 40, 35, 50],
        borderColor: "#EC4899",
        backgroundColor: "#FCE7F3",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex items-center gap-4"
          >
            <div className="p-3 rounded-full bg-indigo-50">{stat.icon}</div>
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Bar Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" /> Student Participation Overview
          </h3>
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-pink-500" /> Certificates Issued
          </h3>
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
        </div>
      </div>

      {/* Recent Reports Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-green-500" /> Recent Activities Report
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-gray-700 bg-gray-100">
              <tr>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Activity</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { student: "Amit Kumar", activity: "AI Workshop", status: "Approved", date: "2025-08-15" },
                { student: "Sneha Rani", activity: "React Certification", status: "Pending", date: "2025-08-20" },
                { student: "Rahul Das", activity: "Hackathon", status: "Approved", date: "2025-09-01" },
              ].map((row, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{row.student}</td>
                  <td className="px-4 py-3">{row.activity}</td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      row.status === "Approved" ? "text-green-600" : "text-yellow-600"
                    }`}
                  >
                    {row.status}
                  </td>
                  <td className="px-4 py-3">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
