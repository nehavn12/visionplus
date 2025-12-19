import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      {/* Outer container – screen padding */}
      
      <div className="max-w-360 mx-auto">
        {/* White box – exactly like Figma */}

        <div className="bg-white rounded-full shadow-md px-6 lg:px-10 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="Vision Plus Healthcare"
              width={140}
              height={40}
              priority
            />
          </div>

          {/* MENU – desktop only */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-800">
            <a href="#" className="hover:text-red-600">Home</a>
            <a href="#" className="hover:text-red-600">Company</a>
            <a href="#" className="hover:text-red-600">Products</a>
            <a href="#" className="hover:text-red-600">Visual Aid</a>
            <a href="#" className="hover:text-red-600">Franchise</a>
            <a href="#" className="hover:text-red-600">Calculators</a>
            <a href="#" className="hover:text-red-600">Blog</a>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* Contact button – desktop */}
            <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700">
              Contact Us
            </button>

            {/* Search icon */}
            <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
              🔍
            </button>

            {/* Mobile menu icon */}
            <button className="lg:hidden w-10 h-10 rounded-full border flex items-center justify-center">
              ☰
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
