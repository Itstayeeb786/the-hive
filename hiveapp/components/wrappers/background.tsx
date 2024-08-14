import Image from "next/image";
import bgimage from "@/public/bg.jpeg";

export default function Background() {
  return (
    <>
      <Image
        src={bgimage}
        alt="bg"
        className="inset-0 fixed z-[-999] w-full h-screen object-cover  blur-sm"
      />
    </>
  );
}
