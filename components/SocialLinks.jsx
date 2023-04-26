import { getSocialLinks } from "../utils/data";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import snapchat from "../images/snapchat.svg";
import Image from "next/image";

const SocialLinks = () => {
  const setSocialLinks = getSocialLinks();

  return (
    <section className="flex justify-center p-3 items-center mt-14">
      {setSocialLinks.map((link) => {
        switch (link.title) {
          case "Twitter":
            return (
              <a href={link.url}>
                <Image src={twitter} alt={"Twitter"} height="55" width="55" />
              </a>
            );
          case "Facebook":
            return (
              <a href={link.url}>
                {" "}
                <Image
                  src={facebook}
                  alt={"Facebook"}
                  height="50"
                  width="50"
                />{" "}
              </a>
            );
          case "Instagram":
            return (
              <a href={link.url}>
                {" "}
                <Image
                  src={instagram}
                  alt={"Instagram"}
                  height="50"
                  width="50"
                />{" "}
              </a>
            );
          case "Snapchat":
            return (
              <a href={link.url}>
                {" "}
                <Image
                  src={snapchat}
                  alt={"Snapchat"}
                  height="50"
                  width="50"
                />{" "}
              </a>
            );
          default:
        }
      })}
    </section>
  );
};

export default SocialLinks;
