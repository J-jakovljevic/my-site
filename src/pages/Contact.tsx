import BottomBanner from "@pages/contact/BottomBanner";
import ContactCards from "@pages/contact/ContactCards";
import ContactHero from "@pages/contact/ContactHero";

const Contact = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
      <ContactHero />
      <ContactCards />
      <BottomBanner />
    </section>
  );
};

export default Contact;
