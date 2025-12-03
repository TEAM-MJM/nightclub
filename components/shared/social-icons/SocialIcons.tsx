import Image from "next/image";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "/assets/icon/icon_Facebook.svg",
      url: "#",
    },
    {
      name: "Snapchat",
      icon: "/assets/icon/icon_Snapchat.svg",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "/assets/icon/icon_Instagram.svg",
      url: "#",
    },
  ];

  return (
    <div className="flex gap-6">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="w-12 h-12 relative block hover:opacity-80 transition-opacity"
          aria-label={social.name}
        >
          <Image src={social.icon} alt={social.name} fill className="object-contain" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
