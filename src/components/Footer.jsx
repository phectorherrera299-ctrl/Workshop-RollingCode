import Container from "./Container";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const redes = [
  {
    nombre: "Instagram",
    Icon: FiInstagram,
    url: "https://www.instagram.com/rollingcodeschool/",
  },
  {
    nombre: "Facebook",
    Icon: FiFacebook,
    url: "https://www.facebook.com/RollingCodeSchool",
  },
  {
    nombre: "LinkedIn",
    Icon: FiLinkedin,
    url: "https://www.linkedin.com/company/rollingcodeschool/",
  },
  {
    nombre: "YouTube",
    Icon: FiYoutube,
    url: "https://youtube.com/@rollingcode7175",
  },
  {
    nombre: "X",
    Icon: RiTwitterXLine,
    url: "https://x.com/rollingcodeok?s=11",
  },
  {
    nombre: "GitHub",
    Icon: FiGithub,
    url: "https://github.com/RollingCodeSchool",
  },
];

export const Footer = () => {
  const base = import.meta.env.BASE_URL;

  return (
    <footer id="footer" className="bg-rc-black pb-20">
      <Container>
        <div className="flex flex-col items-center gap-8 border-t border-rc-line py-12 text-center">
          <a
            href="#inicio"
            aria-label="Volver al inicio"
            className="inline-flex items-center"
          >
            <img
              src={`${base}rollingcode-oficial.webp`}
              alt="Rolling Code School"
              className="brand-logo block h-auto w-44 max-w-full sm:w-52"
            />
          </a>

          <ul className="flex flex-wrap justify-center gap-3">
            {redes.map(({ nombre, Icon, url }) => (
              <li key={nombre}>
                <a
                  href={url}
                  aria-label={nombre}
                  title={nombre}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-rc-border bg-rc-surface text-rc-text-soft transition duration-200 hover:-translate-y-1 hover:border-rc-red hover:text-white focus-visible:-translate-y-1 focus-visible:border-rc-red focus-visible:text-white focus-visible:outline-none"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
