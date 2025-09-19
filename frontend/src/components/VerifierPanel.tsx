import React, { useState } from "react";
import { BookOpen, Trophy, User } from "lucide-react";

const requests = [
  { id: 1, title: "AI Workshop", student: "Bibhu", type: "Workshop" },
  { id: 2, title: "Hackathon Winner", student: "Ramesh", type: "Competition" },
];

export default function VerifierPanel() {
  const [pending, setPending] = useState(requests);

  const handleAction = (id: number, action: "approve" | "reject") => {
    setPending(pending.filter((r) => r.id !== id));
    alert(`Activity ${id} ${action}d!`);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "Workshop":
        return <BookOpen className="text-blue-600" size={22} />;
      case "Competition":
        return <Trophy className="text-yellow-600" size={22} />;
      default:
        return <User className="text-gray-500" size={22} />;
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Pending Approvals</h2>
        <p className="text-gray-500">
          Review and verify student activities before they are added to portfolios.
        </p>
      </div>

      {/* Requests List */}
      {pending.length > 0 ? (
        <ul className="grid gap-6 md:grid-cols-2">
          {pending.map((r) => (
            <li
              key={r.id}
              className="flex flex-col justify-between border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gray-100 rounded-lg">{getIcon(r.type)}</div>
                <div>
                  <div className="text-lg font-semibold">{r.title}</div>
                  <div className="text-sm text-gray-500">
                    {r.student} • {r.type}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <button
                  onClick={() => handleAction(r.id, "approve")}
                  className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(r.id, "reject")}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-12 text-gray-500">
          🎉 No pending requests. All caught up!
        </div>
      )}
    </div>
  );
}
