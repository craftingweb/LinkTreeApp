import Image from "next/image";
import cargoBlack from "../images/cargo-black.svg";

const Footer = () => {
  return (
    <footer className="barge flex justify-between mt-14 mb-10 px-15">
      <p className="h2 px-3">Copyright 2023</p>
      <Image src={cargoBlack} alt="LinkBarge" width={44} height={36} />
    </footer>
  );
};

export default Footer;
