import Image from "next/image";
import ProfileImage from "../images/x.jpeg";

export default function Profile() {
  return (
    <div>
      <Image
        width="120"
        height="200"
        decoding="async"
        src={ProfileImage}
        loading="lazy"
        alt="Profile"
        className="rounded-full object-cover w-[90px] h-[90px]"
      />
      <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
        Jigar Suthar
      </h1>
      <p className="text-gray-500">Software Engineer</p>
    </div>
  );
}
