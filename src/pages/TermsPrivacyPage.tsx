import React, { useState } from "react";

const terms = [
  {
    heading: "About Us",
    content: (
      <>
        CallNexus is a professional call center support service provider specializing in:
        <ul className="list-disc pl-5 mt-2">
          <li>Inbound customer support</li>
          <li>Outbound customer support</li>
          <li>Chat & email support</li>
          <li>Technical support</li>
          <li>Lead qualification</li>
          <li>Appointment scheduling</li>
          <li>Customer retention services</li>
          <li>BPO & back-office support</li>
        </ul>
        <p className="mt-2">
          We use a VAPT-compliant dialer system and follow strict security measures to protect client and customer data.
        </p>
      </>
    ),
  },
  {
    heading: "Restricted Industries (Services NOT Offered)",
    content: (
      <>
        CallNexus does <strong>NOT</strong> provide services to the following industries:
        <ul className="list-disc pl-5 mt-2 text-red-500">
          <li>Insurance sales</li>
          <li>Loan sales or loan processing</li>
          <li>Loan collection / debt recovery</li>
          <li>Gambling services</li>
          <li>Betting services</li>
          <li>Fraudulent, illegal, harmful, or high-risk industries</li>
        </ul>
        <p className="mt-2">
          We reserve the right to refuse or terminate any service immediately if a client is found misrepresenting their industry.
        </p>
      </>
    ),
  },
  {
    heading: "Client Obligations",
    content: (
      <ul className="list-disc pl-5 mt-2">
        <li>Provide accurate and truthful business information</li>
        <li>Ensure their business complies with applicable laws</li>
        <li>Not request services outside the permitted industries</li>
        <li>Not misuse company resources or systems</li>
        <li>Maintain confidentiality of internal processes</li>
      </ul>
    ),
  },
  {
    heading: "Payment Terms",
    content: (
      <>
        <ul className="list-disc pl-5 mt-2">
          <li>Payment terms shall be specified in the Service Proposal or Agreement.</li>
          <li>Services may be paused or terminated for delayed payments.</li>
          <li>Payments for completed work or ongoing service periods are non-refundable.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Confidentiality",
    content: (
      <>
        Both parties agree to keep all shared information confidential, including:
        <ul className="list-disc pl-5 mt-2">
          <li>Customer data</li>
          <li>Call recordings</li>
          <li>Internal processes</li>
          <li>CRM information</li>
          <li>Scripts and SOPs</li>
        </ul>
        <p className="mt-2">Confidential data will only be used for service execution.</p>
      </>
    ),
  },
  {
    heading: "Data Security",
    content: (
      <>
        We use VAPT (Vulnerability Assessment & Penetration Testing) compliant dialer systems and secure infrastructure, including:
        <ul className="list-disc pl-5 mt-2">
          <li>Encrypted communication</li>
          <li>Access-controlled systems</li>
          <li>Secure work environments</li>
          <li>Regular security audits</li>
        </ul>
        <p className="mt-2">
          However, no digital system is 100% secure; therefore, the Company is not liable for breaches beyond reasonable control.
        </p>
      </>
    ),
  },
  {
    heading: "Limitation of Liability",
    content: (
      <>
        CallNexus is not responsible for:
        <ul className="list-disc pl-5 mt-2">
          <li>Client's financial loss</li>
          <li>Indirect, incidental, or consequential damages</li>
          <li>Issues caused by third-party tools, internet outages, or software failures</li>
        </ul>
        <p className="mt-2">Our liability will not exceed the total amount paid in the last 30 days.</p>
      </>
    ),
  },
  {
    heading: "Termination",
    content: (
      <>
        <ul className="list-disc pl-5 mt-2">
          <li>We may terminate services for non-payment, Terms violation, restricted/illegal industries, or system misuse.</li>
          <li>Clients may terminate services by giving written notice as per agreement.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Amendments",
    content: (
      <p>
        CallNexus may update these Terms at any time. Continued usage of our Website or Services implies acceptance of updates.
      </p>
    ),
  },
  {
    heading: "Contact Us",
    content: (
      <ul className="list-none pl-0 mt-2">
        <li>📧 Email: [Your Email]</li>
        <li>📞 Phone: [Your Number]</li>
        <li>📍 Address: [Your Address]</li>
      </ul>
    ),
  },
];

const privacy = [
  {
    heading: "Information We Collect",
    content: (
      <>
        <strong>A. Personal Information</strong>
        <ul className="list-disc pl-5 mt-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Business details</li>
          <li>Billing information</li>
        </ul>
        <strong className="block mt-2">B. Technical Information</strong>
        <ul className="list-disc pl-5 mt-2">
          <li>IP address</li>
          <li>Device and browser type</li>
          <li>Website usage statistics (cookies, analytics)</li>
        </ul>
        <strong className="block mt-2">C. Client Project Data</strong>
        <ul className="list-disc pl-5 mt-2">
          <li>Customer contact details</li>
          <li>Call logs</li>
          <li>Call recordings</li>
          <li>Ticketing information</li>
        </ul>
        <p className="mt-2">All such data is handled under strict confidentiality.</p>
      </>
    ),
  },
  {
    heading: "How We Use Your Information",
    content: (
      <>
        <ul className="list-disc pl-5 mt-2">
          <li>Provide call center services</li>
          <li>Communicate with you</li>
          <li>Ensure quality & training</li>
          <li>Process billing</li>
          <li>Improve service performance</li>
          <li>Maintain legal & compliance standards</li>
        </ul>
        <p className="mt-2">We do NOT sell or trade your data to third parties.</p>
      </>
    ),
  },
  {
    heading: "Data Security",
    content: (
      <>
        We maintain strong, tested security measures:
        <ul className="list-disc pl-5 mt-2">
          <li>VAPT-compliant dialer and communication systems</li>
          <li>Encrypted data transfer</li>
          <li>Access controls & role-based permissions</li>
          <li>Regular vulnerability assessments</li>
          <li>Strict workstation policies</li>
          <li>Secure cloud/server storage</li>
        </ul>
        <p className="mt-2">Despite best practices, no system can eliminate all risks.</p>
      </>
    ),
  },
  {
    heading: "Sharing of Information",
    content: (
      <>
        <ul className="list-disc pl-5 mt-2">
          <li>Authorized internal teams</li>
          <li>Trusted third-party service providers (billing, hosting, dialer providers)</li>
          <li>Legal authorities if required by law</li>
        </ul>
        <p className="mt-2">We do NOT share data with external marketing agencies or unauthorized entities.</p>
      </>
    ),
  },
  {
    heading: "Restricted Industry Notice",
    content: (
      <>
        We do not collect, process, or store data from industries involving:
        <ul className="list-disc pl-5 mt-2 text-red-500">
          <li>Insurance sales</li>
          <li>Loan sales</li>
          <li>Loan collection</li>
          <li>Gambling</li>
          <li>Betting</li>
          <li>Illegal or high-risk activities</li>
        </ul>
        <p className="mt-2">
          Any such data received inadvertently will be deleted, and the associated contract may be terminated.
        </p>
      </>
    ),
  },
  {
    heading: "Cookies & Tracking",
    content: (
      <>
        <ul className="list-disc pl-5 mt-2">
          <li>Website functionality</li>
          <li>Traffic analytics</li>
          <li>Improving user experience</li>
        </ul>
        <p className="mt-2">
          Users may disable cookies in browser settings.
        </p>
      </>
    ),
  },
  {
    heading: "Data Retention",
    content: (
      <>
        Client and customer data is retained only for:
        <ul className="list-disc pl-5 mt-2">
          <li>The duration of the active contract</li>
          <li>Required legal & compliance periods</li>
        </ul>
        <p className="mt-2">Afterward, data is securely deleted.</p>
      </>
    ),
  },
  {
    heading: "User Rights",
    content: (
      <>
        Users may request:
        <ul className="list-disc pl-5 mt-2">
          <li>Access to stored data</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of personal data (within legal limits)</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Policy Updates",
    content: <p>We may update this Privacy Policy. Changes will be posted on this page with the updated date.</p>,
  },
  {
    heading: "Contact Us",
    content: (
      <ul className="list-none pl-0 mt-2">
        <li>📧 Email: [Your Email]</li>
        <li>📞 Phone: [Your Number]</li>
        <li>📍 Address: [Your Address]</li>
      </ul>
    ),
  },
];

function CollapsibleSection({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border rounded">
      <button
        className={`w-full text-left px-4 py-2 font-semibold bg-gray-100 hover:bg-gray-200`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
      </button>
      {open && (
        <div className="p-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

export default function TermsPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">Terms & Conditions</h1>
      <div className="mb-12">
        {terms.map((item, idx) => (
          <CollapsibleSection key={idx} title={item.heading}>
            {item.content}
          </CollapsibleSection>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <div>
        {privacy.map((item, idx) => (
          <CollapsibleSection key={idx} title={item.heading}>
            {item.content}
          </CollapsibleSection>
        ))}
      </div>
    </div>
  );
}

