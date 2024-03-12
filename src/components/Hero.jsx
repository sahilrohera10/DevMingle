import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CardContent, Card } from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "white",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/cream-pixels.png")',
      }}
      className=" p-8 "
    >
      <header
        style={{ width: "85vw" }}
        className="flex justify-around items-center py-4"
      >
        <h1 className="w-1/6 text-2xl font-bold">DeveMingle</h1>
        <nav className="w-3/12 flex justify-between font-semibold">
          <div>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              About
            </a>
          </div>
          <div>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Programmes
            </a>
          </div>
          <div>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Resources
            </a>
          </div>
        </nav>
        <div style={{ border: "2px solid black" }} className="rounded">
          <Button
            className="font-semibold text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white py-2 px-4 rounded"
            variant="outline"
          >
            Get in touch
          </Button>
        </div>
      </header>
      <main className="mt-16">
        <section className="text-center font-sans">
          <div style={{}} className="relative py-12">
            <QuoteIcon
              style={{ left: "15rem", height: "10vh" }}
              className="absolute top-0  text-gray-400 "
            />
            <div className="text-6xl font-bold leading-tight gap-x-3">
              Find
              <span
                style={{
                  backgroundColor: "white",
                  backgroundSize: "cover",
                  backgroundImage:
                    'url("https://img.freepik.com/free-photo/students-working-study-group_23-2149281150.jpg?t=st=1710223734~exp=1710224334~hmac=783f51a3e4938e8831c8a8dbfbee110ec09242bd434ef41bc945ace08581ccc2")',
                }}
                className="text-[#bd1e59] w-1/6 mx-4 bg-black px-32 rounded-full"
              ></span>
              <span className="text-[#bd1e59]">seminars</span>
              <br />
              <span className="text-[#bd1e59]">trainings</span>
              <span
                style={{
                  zIndex: 10,
                  marginRight: "-40px",
                  position: "relative",
                  height: "5vh",
                  border: "2px solid black",
                }}
                className="text-black w-1/6 mx-4 bg-yellow-100 px-4 rounded-full text-5xl"
              >
                &
              </span>
              <span
                style={{
                  zIndex: 1,
                  position: "relative",
                  border: "2px solid black",
                }}
                className="text-5xl text-white w-1/6 mx-4 bg-blue-500 px-5  rounded-full"
              >
                <SmileIcon
                  style={{ zIndex: -1 }}
                  className="inline-block color-white"
                />
              </span>
              <span className="text-[#bd1e59]">trainers</span>
              <span
                style={{
                  backgroundColor: "blue",
                  backgroundSize: "cover",
                  backgroundImage:
                    'url("https://img.freepik.com/free-photo/graduate-female-shows-like-with-her-friends-graduation-gowns-holding-diploma-smiling-camera_496169-1308.jpg?size=626&ext=jpg&ga=GA1.1.855480348.1707422896&semt=ais")',
                }}
                className="text-[#bd1e59]  mx-4 bg-black px-16  rounded-full"
              ></span>
            </div>
            <QuoteIcon
              style={{ right: "15rem" }}
              className="absolute bottom-0 right-0 text-gray-400"
            />
          </div>
          <p className="mt-4 text-gray-600 font-bold text-lg">
            Do you want to learn techniques that will make your
            <br /> day job or starting a new position easier?
          </p>
          <div className="mt-8">
            <Input
              className="h-12 rounded-xl rounded-r-none"
              placeholder="Enter your email"
            />
            <Button className="text-white bg-black rounded-2xl px-4 py-3 rounded-l-none">
              Send
            </Button>
            <br />
            <div className="flex flex-row-reverse">
              <Button className="bg-black p-2 px-8 rounded-l-2xl text-white flex-end">
                Management
              </Button>
            </div>
          </div>
        </section>
        <section
          style={{ marginTop: "-4rem" }}
          className="flex justify-between items-center"
        >
          <Card className="bg-black text-white ml-36 h-48 w-1/6 rounded-2xl p-4">
            <CardContent>
              <div className="mb-4">DevMingle</div>
              <ul>
                <li className="flex items-center">
                  <CheckIcon className="mr-2" />
                  Implementation guarantee
                </li>
                <li className="flex items-center mt-4">
                  <CheckIcon className="mr-2" />
                  Hygiene concept & 3G rule
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <footer className="flex justify-center items-center mt-16">
          <StampIcon className="text-gray-700" />
        </footer>
      </main>
    </div>
  );
}

function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function QuoteIcon(props) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function SmileIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function StampIcon(props) {
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
      <path d="M5 22h14" />
      <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13" />
    </svg>
  );
}
