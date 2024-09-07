import { facebook, github, instagram, linkedin } from "../assets";
import Section from './Section';
const Footer = () => {
  const socials = [
    // {
    //   id: "0",
    //   title: "Discord",
    //   iconUrl: discordBlack,
    //   url: "#",
    // },
    // {
    //   id: "1",
    //   title: "Twitter",
    //   iconUrl: twitter,
    //   url: "#",
    // },

    {
      id: "0",
      title: "LinkedIn",
      iconUrl: linkedin,
      url: "https://www.linkedin.com/in/sayandas-s1",
    },
    {
      id: "1",
      title: "Instagram",
      iconUrl: instagram,
      url: "https://www.instagram.com/sayan_200462/",
    },
    {
      id: "2",
      title: "Github",
      iconUrl: github,
      url: "https://github.com/Sayan-01",
    },
    {
      id: "3",
      title: "Facebook",
      iconUrl: facebook,
      url: "https://www.facebook.com/profile.php?id=100035727935505",
    },
  ];

  return (
    <Section
      crosses
      className={"!px-0  !py-10 "}
    >
      <div className="container flex sm:justify-between justify-center items-center gap-6 max-sm:flex-col">
        <p className=" caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights</p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img
                src={item.iconUrl}
                width={20}
                height={20}
                alt={item.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
