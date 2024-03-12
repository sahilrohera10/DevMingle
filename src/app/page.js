// import Image from "next/image";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SimilarTopics from "@/components/SimilarTopics";

// import Flow from "../components/flow";
export default function App() {
  return (
    <>
      <div className="w-[90%] m-auto overflow-x-hidden ">
        <Hero />
        <SimilarTopics />
        <Footer />
      </div>{" "}
    </>
  );
}
