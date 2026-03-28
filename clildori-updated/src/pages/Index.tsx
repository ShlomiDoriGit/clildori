import { useState } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] w-full shadow-sm sticky top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-row-reverse">
        {/* דסקטופ */}
        <div className="hidden md:flex gap-6 flex-row-reverse items-center">
          <a href="#clinic-process" className="text-gray-800 hover:text-gray-600">התהליך בקליניקה</a>
          <a href="#products" className="text-gray-800 hover:text-gray-600">מוצרים</a>
          <a href="#about-me" className="text-gray-800 hover:text-gray-600">מי אני</a>
        </div>

        {/* CTA דסקטופ */}
        <div className="hidden md:block">
          <button className="bg-primary text-white px-4 py-2 rounded-md font-medium">לתיאום פגישת ייעוץ</button>
        </div>

        {/* כפתור מובייל */}
        <button 
          className="md:hidden p-2 text-gray-800" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* תפריט מובייל נפתח */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-end gap-4 mt-4 bg-white p-4 border-t shadow-lg absolute w-full left-0">
          <a href="#clinic-process" onClick={() => setIsMobileMenuOpen(false)}>התהליך בקליניקה</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>מוצרים</a>
          <a href="#about-me" onClick={() => setIsMobileMenuOpen(false)}>מי אני</a>
          <button className="bg-primary text-white px-4 py-2 rounded-md w-full mt-2 font-medium">לתיאום פגישת ייעוץ</button>
        </div>
      )}
    </nav>
  );
}
