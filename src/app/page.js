// import Image from "next/image";

import Footer from "@/components/Footer";
import SimilarTopics from "@/components/SimilarTopics";

// import Flow from "../components/flow";
export default function App() {
  return (
    <>
      <div className="w-[90%] m-auto overflow-x-hidden ">
        <SimilarTopics />
        <Footer />
      </div>{" "}
    </>
  );
}
