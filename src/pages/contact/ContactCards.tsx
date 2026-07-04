import Reveal from "@components/Reveal";
import { profile } from "@data/profileData";
import ContactCard from "@pages/contact/ContactCard";
import { LinkedInIcon, MailIcon, PinIcon } from "@utils/icons";
import WorldMapDots from "@pages/contact/WorldMapDots";

const ContactCards = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Reveal>
        <ContactCard
          href={`mailto:${profile.email}`}
          icon={<MailIcon className="h-6 w-6" />}
          label="Email"
          value={profile.email}
          helper="I usually reply within 24 hours."
        />
      </Reveal>

      <Reveal>
        <ContactCard
          href={profile.linkedin}
          external
          icon={<LinkedInIcon className="h-6 w-6" />}
          label="LinkedIn"
          value={profile.linkedin.replace("https://", "")}
          helper="Let’s connect!"
        />
      </Reveal>

      <Reveal delay={0.1} className="sm:col-span-2">
        <div className="relative overflow-hidden rounded-3xl border border-transparent bg-surface p-4 md:p-7 shadow-soft transition-shadow duration-300 sm:p-10">
          <div className="relative z-10 flex flex-col items-center gap-8 min-[730px]:flex-row min-[730px]:items-center min-[730px]:justify-between">
            <div className="flex items-start gap-5">
              <span className="bg-accent/10 text-accent flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                <PinIcon className="h-6 w-6" />
              </span>

              <div className="flex flex-col gap-3">
                <span className="block text-xs font-semibold tracking-widest text-muted uppercase">
                  Location
                </span>

                <p className="font-cormorant text-3xl font-black text-ink">
                  Based in {profile.location}
                </p>

                <p className="text-base text-muted">
                  Remote-first <span className="text-accent">•</span> Available
                  worldwide
                </p>

                <div className="h-px w-full max-w-xs bg-edge" />

                <p className="max-w-sm text-base text-muted">
                  Happy to travel for client meetings, workshops and team
                  offsites!
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <WorldMapDots />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactCards;
