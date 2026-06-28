import Image from "next/image";
import { companyInfo } from "@/data/company";
import RatingSummary from "@/components/RatingSummary";

export const metadata = {
  title: "Our Clients - Radiatech Electra",
  description: "Trusted by leading industrial and process companies across India.",
};

export default function ClientsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-18">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Our Clients</h1>
          <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Trusted by leading names in India&apos;s industrial and process sectors.
          </p>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">Our Valued Clients</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companyInfo.clientLogos.map((client) => (
              <div 
                key={client.name} 
                className="group bg-white p-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20"
              >
                <div className="relative h-20 w-full flex items-center justify-center">
                  <Image 
                    src={client.image} 
                    alt={client.name} 
                    fill 
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
                <span className="text-gray-700 text-sm font-semibold tracking-wide text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ratings & Reviews</h2>
          
            <RatingSummary />
          
        </div>
      </section>
    </main>
  );
}
