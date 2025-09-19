import { motion } from "framer-motion";
import {
    User,
    Award,
    Calendar,
    BookOpen,
    Bell,
    Upload,
    FileText,
    Search,
} from "lucide-react";
import { useState } from "react";

// Import additional components
import UploadForm from "../components/UploadForm";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Events from "../components/Events";
import Resources from "../components/Resources";


export default function DashboardStudent() {
    const [activeTab, setActiveTab] = useState("dashboard");

    const achievements = [
        { title: "Certification: ReactJS", date: "2025-08-15" },
        { title: "Hackathon Participation", date: "2025-07-20" },
        { title: "Workshop: AI & ML", date: "2025-06-12" },
    ];

    const upcomingEvents = [
        { event: "Workshop: Cloud Computing", date: "2025-09-25" },
        { event: "Seminar: Data Science Trends", date: "2025-10-05" },
    ];

    const resources = [
        { name: "React Handbook", type: "PDF" },
        { name: "AI & ML Notes", type: "DOCX" },
        { name: "GitHub Student Pack", type: "Link" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg hidden md:flex flex-col fixed h-screen">
                <div className="px-6 py-6 flex items-center gap-3 border-b">
                    <User className="w-7 h-7 text-indigo-600" />
                    <span className="text-xl font-bold text-indigo-600">MyHub</span>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-3 overflow-y-auto">
                    {[
                        { key: "dashboard", label: "Dashboard", icon: <User className="w-5 h-5" /> },
                        { key: "achievements", label: "My Achievements", icon: <Award className="w-5 h-5" /> },
                        { key: "events", label: "Events", icon: <Calendar className="w-5 h-5" /> },
                        { key: "resources", label: "Resources", icon: <BookOpen className="w-5 h-5" /> },
                        { key: "upload", label: "Upload Certificate", icon: <Upload className="w-5 h-5" /> },
                        { key: "portfolio", label: "Portfolio", icon: <FileText className="w-5 h-5" /> },
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setActiveTab(item.key)}
                            className={`flex items-center gap-3 w-full text-gray-700 px-3 py-2 rounded-lg transition
        ${activeTab === item.key ? "bg-indigo-50 text-indigo-600 font-medium" : "hover:bg-indigo-50 hover:text-indigo-600"}`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>


            {/* Main Content */}
            <main className="flex-1 p-6 ml-64">
                {/* Topbar */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3 w-full max-w-md bg-white px-3 py-2 rounded-lg shadow-sm">
                        <Search className="w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search achievements, events..."
                            className="w-full outline-none text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600 transition" />
                        <img
                            src="https://i.pravatar.cc/40?img=12"
                            alt="profile"
                            className="w-10 h-10 rounded-full border"
                        />
                    </div>
                </div>

                {/* Conditional Rendering for Tabs */}
                {activeTab === "dashboard" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl shadow p-6"
                        >
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-indigo-600" /> My Achievements
                            </h2>
                            {achievements.map((a, i) => (
                                <div key={i} className="flex justify-between border-b py-3">
                                    <span>{a.title}</span>
                                    <span className="text-sm text-gray-500">{a.date}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Upcoming Events */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow p-6"
                        >
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-indigo-600" /> Upcoming Events
                            </h2>
                            {upcomingEvents.map((e, i) => (
                                <div key={i} className="flex justify-between border-b py-3">
                                    <span>{e.event}</span>
                                    <span className="text-sm text-gray-500">{e.date}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl shadow p-6 lg:col-span-2"
                        >
                            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-indigo-600" /> Resources
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {resources.map((r, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.03 }}
                                        className="p-4 bg-indigo-50 rounded-xl shadow-sm"
                                    >
                                        <h3 className="font-medium text-gray-800">{r.name}</h3>
                                        <p className="text-sm text-gray-500">{r.type}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}

                {activeTab === "upload" && <UploadForm />}
                {activeTab === "portfolio" && <Portfolio />}
                {activeTab === "achievements" && <Achievements />}
                {activeTab === "events" && <Events />}
                {activeTab === "resources" && <Resources />}
            </main>
        </div>
    );
}

