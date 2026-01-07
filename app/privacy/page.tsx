import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
        <p className="mb-12 text-muted-foreground">
          Last updated: January 7, 2026
        </p>

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Clipio (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates
            a Chrome Extension and a web application (collectively, the
            &quot;Service&quot;). This Privacy Policy explains how we collect,
            use, and protect your information when you use Clipio.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            By using the Service, you agree to this Privacy Policy.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            1. Information We Collect
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We collect only the information necessary to operate and improve
            Clipio.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-semibold">
            a. Account Information (if applicable)
          </h3>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>Email address</li>
            <li>Username or identifier</li>
          </ul>

          <h3 className="mb-3 mt-8 text-xl font-semibold">
            b. Usage and Technical Data
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            Collected automatically:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device and extension-related identifiers</li>
            <li>Pages or features used</li>
            <li>Date and time of access</li>
          </ul>

          <h3 className="mb-3 mt-8 text-xl font-semibold">c. Content Data</h3>
          <p className="leading-relaxed text-muted-foreground">
            Clipio may temporarily process content (such as text or data you
            choose to clip or save). We do not access content unless you
            explicitly interact with the extension or web app.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            2. How We Use Your Information
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We use your data to:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>Provide and operate the Service</li>
            <li>Sync data between the extension and the web app</li>
            <li>Improve performance and reliability</li>
            <li>Detect abuse, fraud, or technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We do not use your data for advertising.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            3. Cookies and Local Storage
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            The web version of Clipio may use cookies or local storage for:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>Authentication</li>
            <li>Session management</li>
            <li>Basic analytics</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You can control cookies through your browser settings.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            4. Legal Bases for Processing (GDPR)
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            If you are in the European Economic Area (EEA), we process personal
            data based on:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>Your consent</li>
            <li>Performance of a contract (providing the Service)</li>
            <li>
              Legitimate interests (security and improvement of the Service)
            </li>
            <li>Legal obligations</li>
          </ul>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            5. Data Sharing
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We do not sell your personal data.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We may share data only with:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>
              Infrastructure providers (hosting, databases, authentication)
            </li>
            <li>Analytics services (in aggregated or anonymized form)</li>
            <li>Authorities when required by law</li>
          </ul>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            All service providers are required to protect your data.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            6. Data Retention
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We retain personal data only for as long as necessary to provide the
            Service or comply with legal requirements. You may request deletion
            of your data at any time.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            7. Your Rights
          </h2>

          <h3 className="mb-3 mt-8 text-xl font-semibold">
            European Union (GDPR):
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            You have the right to access, correct, delete, restrict, or port
            your data, and to withdraw consent.
          </p>

          <h3 className="mb-3 mt-8 text-xl font-semibold">
            United States (CCPA-style rights):
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            You may request:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>Information about data collected</li>
            <li>Deletion of your personal data</li>
            <li>Confirmation that your data is not sold</li>
          </ul>

          <h3 className="mb-3 mt-8 text-xl font-semibold">
            Colombia (Ley 1581 de 2012 – Habeas Data):
          </h3>
          <p className="leading-relaxed text-muted-foreground">
            You have the right to:
          </p>
          <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
            <li>Know, update, and correct your personal data</li>
            <li>Request proof of authorization</li>
            <li>Request deletion or revocation of consent</li>
            <li>
              File complaints with the Superintendencia de Industria y Comercio
              (SIC)
            </li>
          </ul>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            To exercise any of these rights, contact us at:{" "}
            <a
              href="mailto:privacy@clipio.xyz"
              className="text-accent hover:underline"
            >
              privacy@clipio.xyz
            </a>
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            8. Data Security
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We apply reasonable technical and organizational measures to protect
            your data. However, no system is completely secure, and we cannot
            guarantee absolute security.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            9. Third-Party Services
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Clipio may include links or integrations with third-party services.
            We are not responsible for their privacy practices.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            10. Children&apos;s Privacy
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Clipio is not intended for users under the age of 13. We do not
            knowingly collect personal data from children.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            11. Changes to This Policy
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            We may update this Privacy Policy occasionally. Changes will be
            posted on this page with an updated date.
          </p>

          <hr className="my-8 border-border" />

          <h2 className="mb-4 mt-12 text-2xl font-bold md:text-3xl">
            12. Contact
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            For any questions or requests regarding privacy, contact:{" "}
            <a
              href="mailto:privacy@clipio.xyz"
              className="text-accent hover:underline"
            >
              privacy@clipio.xyz
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
