import { Star, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <Star className="h-3 w-3 text-amber-500" /> 4.9 average • Walk-ins welcome
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Crisp fades. Clean shaves. Classic style.
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Faded & Fresh is your neighborhood barbershop for precision cuts and good vibes. Step in for a fade, beard trim, or hot towel shave—and leave feeling brand new.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#booking" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white shadow hover:bg-gray-900 transition">
                Book an Appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-900 hover:bg-gray-50 transition">
                Explore Services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Tue–Sun, 9am–7pm</div>
              <div className="inline-flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-full bg-green-500" /> Walk-ins ok</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1621600411688-376796ed2ed0?q=80&w=2069&auto=format&fit=crop"
                alt="Barber giving a fade haircut"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
