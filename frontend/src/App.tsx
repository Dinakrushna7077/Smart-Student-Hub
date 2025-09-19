import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth,AuthProvider } from "./context/AuthContext";

// Components
import DashboardStudent from "./components/DashboardStudent";
import DashboardAdmin from "./components/DashboardAdmin";
import UploadForm from "./components/UploadForm";
import VerifierPanel from "./components/VerifierPanel";
import Portfolio from "./components/Portfolio";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function AppRoutes() {
  const { role } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="p-6 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* Student Routes */}
          {role === "student" && (
            <>
              <Route path="/dashboard" element={<DashboardStudent />} />
              <Route path="/upload" element={<UploadForm />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </>
          )}

          {/* Admin Routes */}
          {role === "admin" && (
            <>
              <Route path="/dashboard" element={<DashboardAdmin />} />
              <Route path="/verifier" element={<VerifierPanel />} />
            </>
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  // ✅ No Router here, only AuthProvider
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}
