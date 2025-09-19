import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Award,
  FileText,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
} from "lucide-react";

import VerifierPanel from "./VerifierPanel";
import StudentsPage from "./StudentsPage";
import ActivitiesPage from "./ActivitiesPage";
import ReportsPage from "./ReportsPage";

export default function Dashboard() {
  const [activePage, setActivePage] = useState<
    "dashboard" | "students" | "activities" | "reports" | "verifier" | "settings"
  >("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { title: "Total Students", value: "1,245", icon: <Users className="w-6 h-6 text-indigo-600" /> },
    { title: "Certifications", value: "320", icon: <Award className="w-6 h-6 text-pink-500" /> },
    { title: "Events Logged", value: "150", icon: <FileText className="w-6 h-6 text-green-500" /> },
    { title: "Pending Approvals", value: "45", icon: <Bell className="w-6 h-6 text-yellow-500" /> },
  ];

  const sidebarItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, key: "dashboard" },
    { label: "Students", icon: <Users className="w-5 h-5" />, key: "students" },
    { label: "Activities", icon: <Award className="w-5 h-5" />, key: "activities" },
    { label: "Reports", icon: <BarChart3 className="w-5 h-5" />, key: "reports" },
    { label: "Verifier", icon: <FileText className="w-5 h-5" />, key: "verifier" },
    { label: "Settings", icon: <Settings className="w-5 h-5" />, key: "settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg flex flex-col z-40 transform transition-transform duration-300 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div className="px-6 py-6 flex items-center gap-3 border-b">
          <LayoutDashboard className="w-7 h-7 text-indigo-600" />
          <span className="text-xl font-bold text-indigo-600">StudentHub</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setActivePage(item.key as any);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg transition ${
                activePage === item.key
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 transition-all duration-300 md:ml-64">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          <div className="hidden md:flex items-center gap-3 w-full max-w-md bg-white px-3 py-2 rounded-lg shadow-sm">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search students or activities..."
              className="w-full outline-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
            <img
              src="https://ctetezpur.org/wp-content/uploads/2025/07/demouser.jpeg"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </div>

        {/* Pages */}
        {activePage === "dashboard" && (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-indigo-50">{stat.icon}</div>
                    <div>
                      <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow p-4 sm:p-6 overflow-x-auto">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                Recent Activities
              </h2>
              <table className="w-full text-sm text-left text-gray-600 min-w-[500px]">
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
                    { student: "Bibhu Ranjan Mohanty", activity: "Workshop: AI & ML", status: "Approved", date: "2025-09-10" },
                    { student: "Dinakrushna Mohanta", activity: "Certification: ReactJS", status: "Pending", date: "2025-09-12" },
                    { student: "Rosni Palei", activity: "Hackathon Participation", status: "Approved", date: "2025-09-14" },
                    { student: "Anuradha Patra", activity: "Hackathon Participation", status: "Approved", date: "2025-09-14" },
                    { student: "Nabagata Mohapatra", activity: "Hackathon Participation", status: "Approved", date: "2025-09-14" },
                    { student: "Rojalin Swain", activity: "Hackathon Participation", status: "Approved", date: "2025-09-14" },
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
          </>
        )}

        {activePage === "verifier" && <VerifierPanel />}
        {activePage === "students" && <StudentsPage />}
        {activePage === "activities" && <ActivitiesPage />}
        {activePage === "reports" && <ReportsPage />}
      </main>
    </div>
  );
}
