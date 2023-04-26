import { getLinksLinks } from "../utils/data";
import { Link } from "next/link";
const NonSocialLinks = () => {
  const setNonSocialLinks = getLinksLinks();

  return (
    <section className="grid justify-center mt-14">
      {setNonSocialLinks.map((link) => {
        return (
          <a className="mt-6  " href={link.url} key={link.id}>
            <button className="px-14 pb-3 button max-w-md ">
              <p className="">{link.title}</p>
            </button>
          </a>
        );
      })}
    </section>
  );
};

export default NonSocialLinks;
