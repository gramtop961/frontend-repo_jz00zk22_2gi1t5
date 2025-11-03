import { Scissors, Sparkles } from "lucide-react";

function ServiceCard({ icon: Icon, title, description, price }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-gray-900 text-white p-3 inline-flex">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="ml-auto rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">{price}</span>
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Services</h2>
            <p className="mt-2 text-gray-600">Expert cuts and grooming tailored to your style.</p>
          </div>
          <a href="#booking" className="hidden sm:inline-flex rounded-full bg-black px-5 py-2 text-white hover:bg-gray-900">Book now</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={Scissors}
            title="Classic Haircut"
            description="Consultation, cut, and style with premium products."
            price="$30"
          />
          <ServiceCard
            icon={Sparkles}
            title="Beard Trim & Shape"
            description="Define, shape, and condition for a sharp look."
            price="$20"
          />
          <ServiceCard
            icon={Scissors}
            title="Skin Fade"
            description="Seamless fade with precise detailing and finish."
            price="$35"
          />
          <ServiceCard
            icon={Sparkles}
            title="Hot Towel Shave"
            description="Luxurious shave with hot towel and soothing aftercare."
            price="$28"
          />
          <ServiceCard
            icon={Scissors}
            title="Kids Cut (Under 12)"
            description="Gentle, patient service to keep the little ones fresh."
            price="$22"
          />
          <ServiceCard
            icon={Sparkles}
            title="Haircut & Beard Combo"
            description="The full package—clean cut with beard trim and finish."
            price="$45"
          />
        </div>
      </div>
    </section>
  );
}
