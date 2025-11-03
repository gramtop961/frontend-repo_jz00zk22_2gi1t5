import { Scissors, Phone, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <Scissors className="h-5 w-5" />
            </span>
            Faded & Fresh
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-gray-700 hover:text-gray-900">Services</a>
            <a href="#barbers" className="text-gray-700 hover:text-gray-900">Barbers</a>
            <a href="#booking" className="text-gray-700 hover:text-gray-900">Booking</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+15555550123" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-white hover:bg-gray-900 transition">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(555) 555-0123</span>
            </a>
            <a href="#booking" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-gray-900 hover:bg-gray-50 transition">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Book</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
