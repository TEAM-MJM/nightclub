import ContactForm from "@/components/contact/contact-form/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Experience the Ultimate Nightlife",
};

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-[1440px] flex-col items-center justify-betweensm:items-start">
        <ContactForm />
      </main>
    </div>
  );
}
