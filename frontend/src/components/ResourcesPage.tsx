import { motion } from "framer-motion";
import { BookOpen, FileText, Link } from "lucide-react";

const resources = [
  { id: 1, name: "React Handbook", type: "PDF" },
  { id: 2, name: "AI & ML Notes", type: "DOCX" },
  { id: 3, name: "GitHub Student Pack", type: "Link" },
];

export default function ResourcesPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Resources</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((res) => (
          <motion.div
            key={res.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow p-6 border hover:border-indigo-500 transition flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-xl">
                {res.type === "Link" ? <Link size={24} /> : <FileText size={24} />}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{res.name}</h3>
            </div>
            <p className="text-xs text-gray-400 mb-3">{res.type}</p>
            <a
              href="#"
              className="text-indigo-600 font-medium text-sm hover:underline"
            >
              Download / Open
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
