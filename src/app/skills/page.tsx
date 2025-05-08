import Image from "next/image";
import {
  Figma,
  Git,
  React,
  Next,
  MongoDB,
  TypeScript,
  JavaScript,
  Tailwindcss,
  Socket,
} from "../../../public/index";
export default function Skills() {
  return (
    <div className="p-5">
      <h1 className="text-center text-blue-500 text-2xl mt-5 p-5">
        The skills, tools and technologies I am really good at:
      </h1>
      <div className="md:flex justify-center items-center space-x-10 space-y-3 mt-5 text-center">
        <Image src={JavaScript} alt="JavaScript" width={50} />
        <Image src={TypeScript} alt="TypeScript" width={50} />
        <Image src={React} alt="React.js" width={55} />
        <Image src={Next} alt="Next.js" width={50} />
        <Image src={Tailwindcss} alt="Tailwindcss" width={75} />
        <Image src={MongoDB} alt="mongodb" width={60} />
        <Image src={Socket} alt="Socket" width={60} />
        <Image src={Git} alt="Git" width={60} />
        <Image src={Figma} alt="figma" width={45} />
      </div>
    </div>
  );
}
