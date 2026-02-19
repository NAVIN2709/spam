import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="E-Cell NIT Trichy Logo" className="h-12 w-auto bg-white rounded-md p-1" />
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">E-Cell NITT</h3>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <span>Made with <span className="text-red-500 animate-pulse">❤️</span> by</span>
            <span className="font-bold text-white hover:text-indigo-400 transition-colors">E-Cell NITT</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} E-Cell NITT. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
