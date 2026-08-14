export const metadata = {
  title: "Terms of Use | Fix and Glaze",
};

export default function TermsPage() {
  return (
    <div className="section-padding">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Fix and Glaze website (the "Site"), you agree to be bound
              by these Terms of Use ("Terms"). If you do not agree with any part of these Terms,
              please do not use our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Use of This Website
            </h2>
            <p>
              You agree to use this Site only for lawful purposes and in a manner that does not
              infringe the rights of others or restrict their use of the Site. Prohibited
              activities include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submitting false, misleading, or fraudulent information through our contact forms</li>
              <li>Attempting to gain unauthorised access to any part of the Site</li>
              <li>Using automated tools (bots, scrapers) to extract data without permission</li>
              <li>Posting or transmitting defamatory, offensive, or illegal content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Quotes & Estimates
            </h2>
            <p>
              Any quote, estimate, or pricing information provided through this website is an
              estimate only and is not a binding contract. A formal written quote will be provided
              prior to commencement of any work. Fix and Glaze reserves the right to revise an
              estimate if site conditions, material costs, or scope of work differ from initial
              information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              All content on this Site — including text, images, logos, graphics, and design
              elements — is the property of Fix and Glaze or its content suppliers and is
              protected by copyright and intellectual property laws. You may not reproduce,
              distribute, modify, or use any content without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p>
              This Site and its content are provided "as is" and "as available" without any
              warranties of any kind. Fix and Glaze does not warrant that the Site will be
              uninterrupted, error-free, or free from viruses or other harmful components. You
              access and use the Site at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Fix and Glaze shall not be liable for any
              direct, indirect, incidental, special, or consequential damages arising from your
              use of (or inability to use) this Site, or from any information, products, or
              services obtained through the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Contact Us
            </h2>
            <p>If you have any questions about these Terms of Use, please contact us:</p>
            <ul className="space-y-1">
              <li>
                <strong>Phone:</strong> 0432 800 802
              </li>
              <li>
                <strong>Email:</strong> francis.antonio@rocketmail.com
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
