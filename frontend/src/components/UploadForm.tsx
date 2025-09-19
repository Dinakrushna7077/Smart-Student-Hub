import React, { useState } from "react";
import { FileUp, Upload, CheckCircle2 } from "lucide-react";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Workshop");
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !file) {
      alert("Please fill all fields and upload a file.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setTitle("");
    setType("Workshop");
    setFile(null);
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Upload New Activity
      </h2>

      {submitted && (
        <div className="flex items-center gap-2 p-3 mb-4 text-green-700 bg-green-100 border border-green-200 rounded-lg">
          <CheckCircle2 className="w-5 h-5" />
          <span>Activity submitted successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Activity Title
          </label>
          <input
            type="text"
            placeholder="e.g. AI Workshop"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        {/* Type Select */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Activity Type
          </label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          >
            <option>Workshop</option>
            <option>Conference</option>
            <option>Certification</option>
            <option>Competition</option>
            <option>Internship</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Proof/Certificate
          </label>
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-400 transition">
            <div className="flex flex-col items-center justify-center text-gray-500">
              <Upload className="w-8 h-8 mb-2 text-indigo-500" />
              {file ? (
                <span className="text-sm">{file.name}</span>
              ) : (
                <span className="text-sm">Click or drag file to upload</span>
              )}
            </div>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          <FileUp size={20} /> Submit Activity
        </button>
      </form>
    </div>
  );
}
