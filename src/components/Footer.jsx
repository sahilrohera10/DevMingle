import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white p-16 w-[85%] m-auto rounded-3xl h-[45vh] mb-10 mt-10 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">
            {" "}
            <span className="bg-[#389856] p-2 py-3 border border-white rounded-3xl">
              Subscribe
            </span>{" "}
            <br /> <br />
            <span className="p-2 py-3 border border-white rounded-3xl">
              to our updates
            </span>
          </h2>
          <br />
          <form className="flex space-x-2 ">
            <Input
              className="rounded-full bg-white text-black"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="bg-[#389856] text-white rounded-full p-2">
              Send
            </Button>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col space-y-2">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Programmes
            </Link>
            <Link className="hover:underline" href="#">
              Resources
            </Link>
            <Link className="hover:underline" href="#">
              Academy
            </Link>
            <Link className="hover:underline" href="#">
              Business coaching
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <FacebookIcon className="text-white" />
              <TwitterIcon className="text-white" />
            </div>
            <Link className="hover:underline mt-auto" href="#">
              Privacy policy
            </Link>
          </div>
        </div>
        <div className="flex space-x-4">
          <div>
            <div className="absolute -top-8 right-20 w-20 h-20 bg-yellow-300 rounded-full border border-black " />
            <div className="absolute -top-4 right-28 w-20 h-20 bg-yellow-300 rounded-full border border-black " />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
