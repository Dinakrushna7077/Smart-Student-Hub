import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Award, BookOpen, Trophy, Briefcase, Users, Download } from "lucide-react";

// Sample portfolio data
const portfolioData = [
  {
    id: 1,
    title: "ReactJS Certification",
    category: "Certification",
    description: "Completed an online ReactJS course with practical projects.",
    date: "Aug 2025",
    verified: true,
  },
  {
    id: 2,
    title: "AI Workshop",
    category: "Workshop",
    description: "Participated in a workshop on AI & Machine Learning.",
    date: "July 2025",
    verified: true,
  },
  {
    id: 3,
    title: "Hackathon Winner",
    category: "Competition",
    description: "Won a 48-hour coding hackathon focused on student-centric apps.",
    date: "June 2025",
    verified: true,
  },
  {
    id: 4,
    title: "Internship at Tech Corp",
    category: "Internship",
    description: "Worked on developing a MERN stack application for internal automation.",
    date: "May 2025",
    verified: true,
  },
  {
    id: 5,
    title: "Community Service",
    category: "Volunteering",
    description: "Participated in a social outreach program for underprivileged students.",
    date: "April 2025",
    verified: true,
  },
];

export default function Portfolio() {
  const downloadPDF = () => {
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();

    // Title
    pdf.setFontSize(22);
    pdf.setTextColor(30, 30, 60);
    pdf.text("Verified Student Portfolio", pageWidth / 2, 50, { align: "center" });

    // Subtitle
    pdf.setFontSize(12);
    pdf.setTextColor(80, 80, 80);
    pdf.text(
      "This document contains verified academic, extracurricular, and leadership achievements.",
      pageWidth / 2,
      70,
      { align: "center" }
    );

    // Draw a line
    pdf.setLineWidth(1);
    pdf.line(40, 80, pageWidth - 40, 80);

    // Portfolio entries
    let y = 100;
    portfolioData.forEach((item, index) => {
      pdf.setFontSize(14);
      pdf.setTextColor(20, 20, 50);
      pdf.text(`${index + 1}. ${item.title}`, 60, y);
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Category: ${item.category}`, 60, y + 15);
      pdf.text(`Date: ${item.date}`, 60, y + 30);
      pdf.text(`Description: ${item.description}`, 60, y + 45);

      // Verified badge
      if (item.verified) {
        pdf.setDrawColor(0, 128, 0);
        pdf.setFillColor(200, 255, 200);
        pdf.roundedRect(pageWidth - 140, y - 10, 80, 20, 4, 4, "FD");
        pdf.setFontSize(9);
        pdf.setTextColor(0, 128, 0);
        pdf.text("Verified", pageWidth - 100, y + 5, { align: "center" });
      }

      y += 70;
      if (y > 750) {
        pdf.addPage();
        y = 50;
      }
    });

    // Footer
    pdf.setFontSize(10);
    pdf.setTextColor(120, 120, 120);
    pdf.text(
      "This portfolio is verified by Smart Student Hub. Unauthorized edits are invalid.",
      pageWidth / 2,
      780,
      { align: "center" }
    );

    pdf.save("Student_Portfolio.pdf");
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Student <span className="text-blue-600">Portfolio</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A showcase of verified achievements, certifications, and activities.
        </p>
        <button
          onClick={downloadPDF}
          className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <Download className="w-5 h-5" /> Download Verified PDF
        </button>
      </div>

      {/* Portfolio UI (unchanged) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioData.map((a) => (
          <div
            key={a.id}
            className="relative bg-white border border-gray-100 shadow-sm rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-1">{a.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{a.category}</p>
            <p className="text-xs text-gray-400 mb-4">{a.date}</p>
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                a.verified ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {a.verified ? "Verified" : "Pending Verification"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
