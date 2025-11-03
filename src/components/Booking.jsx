import { Calendar, MapPin, Phone, Clock } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-black text-white p-3 inline-flex">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">Book an appointment</h3>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Call or message to lock in your time. Walk-ins are welcome when available.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href="tel:+15555550123" className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-white hover:bg-gray-900">
                <Phone className="h-4 w-4" /> Call (555) 555-0123
              </a>
              <a href="mailto:book@fadedfresh.com" className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-gray-900 hover:bg-gray-50">
                Email book@fadedfresh.com
              </a>
            </div>
            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Tue–Sun, 9:00 AM – 7:00 PM</div>
              <div className="mt-2 flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Fade St, Suite 8, Your City</div>
            </div>
            <p className="mt-6 text-xs text-gray-500">Prices may vary by barber. Please arrive 5 minutes early.</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509342!2d144.95373631531555!3d-37.81627974201127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjMiRQ!5e0!3m2!1sen!2sus!4v1614642200000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <footer className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Faded & Fresh Barbershop. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
