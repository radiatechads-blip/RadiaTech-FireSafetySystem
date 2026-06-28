import Link from "next/link";
import Image from "next/image";
import { Download, ExternalLink, FileText, BookOpen } from "lucide-react";

export const metadata = {
  title: "Catalogue - Radiatech Electra",
  description: "View and download the Radiatech Electra product catalogue and technical brochures.",
};

export default function CataloguePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-18">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Product Catalogue</h1>
          <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Browse our complete product range online or download the official PDF for offline reference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/CATALOGUE-PPR.pdf" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent-dark px-8 py-4 font-bold text-sm text-white transition-all flex items-center gap-2 rounded-2xl">
              <ExternalLink size={16} /> Open Catalogue
            </a>
            <a href="/CATALOGUE-PPR.pdf" download className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 font-bold text-sm text-white transition-all flex items-center gap-2 rounded-2xl">
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue Viewer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-2 mb-12">
            <Image 
              src="/technical details_page-0001.jpg.jpeg" 
              alt="Technical Details" 
              width={1200} 
              height={1600} 
              className="rounded-2xl w-full h-auto mb-2" 
              priority 
            />
            <div className="h-[70vh] w-full rounded-2xl overflow-hidden border border-gray-100">
              <iframe src="/RADIATECH-CATALOGUE.pdf#view=FitH" title="Product Catalogue" className="h-full w-full" />
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm">
            Having trouble viewing? <Link href="/RADIATECH-CATALOGUE.pdf" target="_blank" className="text-primary font-bold hover:underline">Open in full screen</Link>.
          </p>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-accent mb-3">
                <BookOpen size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Company Resources</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Pipes & Fittings Brochure</h2>
              <p className="mt-4 text-gray-600 max-w-xl">Detailed technical specifications, application guidelines, and system data for our PPR-C solutions.</p>
            </div>
            <div className="flex gap-4">
              <a href="/RADIATECH-BROCHURE-PIPE.pdf" target="_blank" className="bg-primary hover:bg-primary-dark px-6 py-3 font-bold text-sm text-white transition-all flex items-center gap-2">
                <ExternalLink size={16} /> Open Brochure
              </a>
            </div>
          </div>

          <div className="h-[70vh] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-white">
            <iframe src="/CATALOGUE-PPR.pdf#view=FitH" title="Pipe & Fittings Brochure" className="h-full w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}
