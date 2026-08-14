export const metadata = {
  title: "Privacy Policy | Fix and Glaze",
};

export default function PrivacyPage() {
  return (
    <div className="section-padding">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              Fix and Glaze ("we", "our", or "us") is committed to protecting the privacy of all
              individuals who interact with our website and services. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details — name, phone number, email address, and property address</li>
              <li>Project details — descriptions of work requested, photos submitted</li>
              <li>Website usage data — IP address, browser type, pages visited</li>
              <li>Communications — records of enquiries, quotes, and correspondence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your enquiries and provide quotes</li>
              <li>Schedule and complete service appointments</li>
              <li>Process payments and maintain service records</li>
              <li>Improve our website and services through analytics</li>
              <li>Send service updates or follow-up communications (you may opt out)</li>
              <li>Comply with legal or regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Data Security
            </h2>
            <p>
              We take reasonable steps to protect your personal information from misuse, loss,
              unauthorised access, modification, or disclosure. Our website uses SSL encryption
              for data transmission, and we restrict access to personal information to authorised
              personnel only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the
              privacy practices of those sites. We encourage you to review their privacy policies
              before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
