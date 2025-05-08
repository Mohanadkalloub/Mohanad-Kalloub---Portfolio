import Image from "next/image";
import ME from "../../../public/My Photo.jpg";
export default function Home() {
  return (
    <div className="md:flex justify-between items-center mt-5 p-25">
      <div className="pt-5 text-start mt-5">
        <h1 className="text-blue-500 text-3xl">Hello , i am Mohanad 👋</h1>
        <p className="text-1xl text-gray-500 mt-2 leading-relaxed mr-5">
          I'm a full stack react developer (React.js & Next.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 3 years, I still
          love it as if it was something new.
        </p>
        <div className="mt-5 pt-3 text-gray-500">
          <h2>Palestine - Gaza</h2>
          <h3>Available for new projects</h3>
        </div>
      </div>
      <div>
        <Image
          src={ME}
          alt="mohanad image"
          width={1000}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
