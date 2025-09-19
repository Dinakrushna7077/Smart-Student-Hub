import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";

export default function Resources() {
  const resources = [
    { name: "React Handbook", type: "PDF", link: "#" },
    { name: "AI & ML Notes", type: "DOCX", link: "#" },
    { name: "GitHub Student Pack", type: "Link", link: "#" },
    { name: "Data Structures Guide", type: "PDF", link: "#" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-indigo-600" /> Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{res.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{res.type}</p>
            </div>
            <a
              href={res.link}
              className="mt-4 inline-flex items-center gap-1 text-indigo-600 text-sm hover:underline"
            >
              <Download className="w-4 h-4" /> Download / View
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
