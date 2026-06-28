import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/data/company";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Contact Us - Radiatech Electra",
  description: "Get in touch with Radiatech Electra for PPR-C pipes, fittings, and industrial piping solutions.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-red-700 py-5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-red-100 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question or need a quote? Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Contact Info Cards */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone-1", value: companyInfo.contact.phone1, href: `tel:${companyInfo.contact.phone1}` },
                  { icon: Phone, label: "Phone-2", value: companyInfo.contact.phone2, href: `tel:${companyInfo.contact.phone2}` },
                  { icon: Mail, label: "Email", value: companyInfo.contact.email, href: `mailto:${companyInfo.contact.email}` },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="bg-red-50 p-3 rounded-2xl h-fit">
                      <item.icon size={22} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.label}</h3>
                      <a href={item.href} className="text-gray-600 hover:text-red-600 transition-colors">{item.value}</a>
                    </div>
                  </div>
                ))}
                
                {companyInfo.addresses.map((addr) => (
                  <div key={addr.label} className="flex gap-4">
                    <div className="bg-red-50 p-3 rounded-2xl h-fit">
                      <MapPin size={22} className="text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{addr.label}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{addr.address}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4">
                  <div className="bg-red-50 p-3 rounded-2xl h-fit">
                    <Clock size={22} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 bg-gray-50 p-8 sm:p-10 rounded-3xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <InquiryForm />
            </div>
          </div>

          {/* Map Embed with Rounded Corners */}
          <div className="mt-20 rounded-3xl overflow-hidden shadow-2xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14010.323299611075!2d77.3944027!3d28.6123494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef4ac7007baf%3A0x1c29dd89f7f9b075!2sRadiatech%20Electra!5e0!3m2!1sen!2sin!4v1782324890802!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              title="Radiatech Electra Location"
            />
          </div>
        </div>
      </section>
    </main>
  );
}