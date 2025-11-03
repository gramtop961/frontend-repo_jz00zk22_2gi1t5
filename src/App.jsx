import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="barbers" className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-600">
              Meet the team section coming next — for now, book with any of our experienced barbers!
            </div>
          </div>
        </section>
        <Booking />
      </main>
    </div>
  );
}

export default App;
