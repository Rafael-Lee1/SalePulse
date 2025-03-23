
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you would handle signout logic here
    // For example, clear authentication tokens

    // Redirect to login page after a brief delay
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1">
      <div className="w-full h-[815px] bg-[#171821] p-6 rounded-3xl max-md:h-auto overflow-y-auto flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#A9DFD8] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#171821" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Signing Out...</h1>
          <p className="text-[#87888C]">Redirecting to login page</p>
        </div>
      </div>
    </div>
  );
}
