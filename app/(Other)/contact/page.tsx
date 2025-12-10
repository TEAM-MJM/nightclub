import ContactForm from "@/components/contact/contact-form/ContactForm";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="w-full max-w-[1440px] flex-col items-center justify-betweensm:items-start">
        <ContactForm />
      </main>
    </div>
  );
}
