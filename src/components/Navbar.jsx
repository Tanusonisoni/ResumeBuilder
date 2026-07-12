import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Personal" },
    { path: "/education", label: "Education" },
    { path: "/project", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-6 py-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

    {/* Logo */}
    <h1 className="text-2xl font-bold text-blue-600 whitespace-nowrap">
      Resume Builder
    </h1>

    {/* Navigation */}
    <div className="flex flex-wrap justify-center gap-3">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            location.pathname === item.path
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
</nav>
  );
}

export default Navbar;