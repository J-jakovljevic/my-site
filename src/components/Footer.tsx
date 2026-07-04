import { profile } from "@data/profileData";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-edge">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-x-4 gap-y-2 px-6 py-6 text-base text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>

        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
};

export default Footer;
