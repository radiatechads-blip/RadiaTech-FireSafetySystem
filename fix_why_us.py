#!/usr/bin/env python3
import re

# Read the file
with open('src/app/why-us/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the section using regex to handle any apostrophe issues
old_pattern = r'<section className="pb-20">\s*<div className="mx-auto max-w-7xl px-6">\s*<div className="rounded-\[2rem\] border border-gray-100 bg-white p-8 shadow-xl shadow-red-900/10 lg:flex lg:items-center lg:justify-between lg:p-10">\s*<div>\s*<h2 className="text-2xl font-bold text-gray-900">Ready to secure your project with trusted fire protection expertise\?</h2>\s*<p className="mt-3 max-w-2xl text-lg text-gray-600">\s*Let.s discuss your requirements and deliver a solution that meets safety, compliance, and performance expectations\.\s*</p>\s*</div>\s*<a\s*href="/contact"\s*className="mt-6 inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 lg:mt-0"\s*>\s*Contact Us\s*</a>\s*</div>\s*</div>\s*</section>'

new_section = '''      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2rem] bg-white/10 backdrop-blur-md p-8 shadow-2xl lg:p-12 border border-white/20">
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to secure your project?</h2>
              <p className="mt-4 text-lg text-red-50">
                Connect with our fire protection experts to discuss your requirements and discover how we can deliver comprehensive solutions that meet your safety, compliance, and performance expectations.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-red-600 px-8 py-4 text-base font-bold transition-all duration-300 hover:bg-red-50 hover:shadow-lg hover:scale-105"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 text-white px-8 py-4 text-base font-bold border border-white/30 transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>'''

# Try to replace with the regex pattern
content = re.sub(old_pattern, new_section, content, flags=re.DOTALL)

# Write the file back
with open('src/app/why-us/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('File updated successfully!')
