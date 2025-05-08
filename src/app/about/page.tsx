import Image from "next/image";
import ME from "../../../public/My Photo.jpg";
import Link from "next/link";
export default function about() {
  return (
    <div className="md:flex justify-between items-center p-25">
      <div className="p-5">
        <Image
          src={ME}
          alt="Mohanad image"
          width={3000}
          className="rounded-md"
        />
      </div>
      <div>
        <h1 className="text-blue-500 text-3xl ml-4">
          Curious about me? Here you have it:
        </h1>
        <p className="text-1xl text-gray-500 mt-2 leading-relaxed ml-5">
          Hi, I'm Mohanad Kalloub, a passionate Front-End Developer from Gaza,
          Palestine. I started learning web development in 2021, driven by
          curiosity and a love for building things that people can use. Since
          then, I’ve focused on creating clean, user-friendly interfaces using
          modern technologies like React.js and Next.js. Before the recent war,
          I was actively working as a developer—but due to the difficult
          circumstances, I lost both my job and my home. Despite that, I never
          stopped learning and improving. My love for technology and
          problem-solving keeps me going. In addition to front-end development,
          I also have experience in content writing and data entry, which helped
          me build strong attention to detail and effective communication
          skills. I’m currently looking for new opportunities to grow, build,
          and contribute to meaningful projects. I believe in the power of
          teamwork, continuous learning, and turning challenges into
          opportunities. Let’s connect and build something amazing together.
        </p>
        <Link href="contact">
          <button className="ml-5 mt-5 bg-blue-500 hover:bg-blue-900 text-white rounded-md p-2">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}
