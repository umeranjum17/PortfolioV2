import React, { useEffect, useRef,useState, useMemo } from "react";
import Terminal from "./components/Terminal";
import Card from "./components/Card";
import About from "./components/About";
import FindMe from "./components/FindMe";
import Contact from "./components/Contact";
import data from "./assets/markup";
import gsap from "gsap";
import Modal from "react-modal";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import MessageModal from "./components/MessageModal";

function App() {
  const divRef = useRef(0);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);

  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    divRef.current.addEventListener("scroll", handleScroll);
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: "elastic.inOut",
      duration: 2.4,
      stagger: 0.3,
    });
    return () => {
      divRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      
      if (currPos.y < 1000) {
        timeline.play();
      } else {
        timeline.reverse();
      }
    },
    [],
    divRef
  );

  const handleScroll = () => {
    console.log("firing");
    timeline.play();
  };

  return (
    <>
      <div className="container mx-auto px-3">
        <div className="mt-20 bg-blue w-full mx-auto">
          <Terminal />
          <div className="my-10 flex flex-col  md:flex-row justify-between">
            <About />
            <FindMe />
          </div>
          <h1 className="text-center font-black mt-32 md:my-10 text-xl md:text-3xl">
            Some of my Recent Projects
          </h1>
          <div
            ref={divRef}
            onScroll={() => {
              console.log("firing ");
            }}
            class="grid grid-flow-col grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4"
          >
            {data.projects.map((p, i) => (
              <Card project={p} />
            ))}
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
         overlayClassName="Overlay"
         className="Modal"
          onRequestClose={() => setisModalOpen(false)}
        >
          <MessageModal toggleModal={setisModalOpen} />
        </Modal>
        <Contact openModal={setisModalOpen} />
      </div>
    </>
  );
}

export default App;
