import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/builder/personal", label: "Personal" },
    { path: "/builder/education", label: "Education" },
    { path: "/builder/skills", label: "Skills" },
    { path: "/builder/project", label: "Projects" },
    { path: "/builder/experience", label: "Experience" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-md px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 lg:flex-row">
        <h1 className="whitespace-nowrap text-2xl font-bold text-blue-600">
          Resume Builder
        </h1>

        <div className="flex flex-wrap justify-center gap-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`rounded-lg px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;