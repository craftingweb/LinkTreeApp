import { getCurrentUser } from "../utils/data";
import Image from "next/image";

const { name, email, avatar, bio } = getCurrentUser();

const TopContent = () => {
  return (
    <div className="grid justify-center justify-items-center">
      {avatar && (
        <Image
          className="rounded-full mt-14"
          src={avatar}
          alt={name}
          height="145"
          width="145"
        />
      )}
      {name && <h1 className=" h1 ">{name}</h1>}
      {name && <p className=" h2">{email}</p>}
      {name && <p className=" h2">{bio}</p>}
    </div>
  );
};

export default TopContent;
