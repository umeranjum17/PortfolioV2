import React, { useEffect, useRef,useMemo } from 'react';
import Terminal from './components/Terminal';
import Card from './components/Card';
import About from './components/About';
import FindMe from './components/FindMe';
import Contact from './components/Contact';
import data from "./assets/markup"
import gsap from "gsap";;

function App() {
  const divRef = useRef(0);
  const timeline = useMemo(() => gsap.timeline({ paused: false }), []);
  useEffect(() => {
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: "elastic.inOut",
      duration: 1.4,
      stagger: 0.2
    });
  }, [])
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="mt-20 bg-blue w-full mx-auto" >
          <Terminal />
          <div className="my-10 flex flex-col  md:flex-row justify-between">
            <About />
            <FindMe />
          </div>
          <h1 className="text-center font-black mt-32 md:my-10 text-xl md:text-3xl">
            Some of my Recent Projects
          </h1>
          <div ref={divRef}  class="grid grid-flow-col grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4">
            {data.projects.map((p, i) => (

              <Card  project={p} />
            ))}

          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
