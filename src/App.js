import React, { useEffect, useRef, useMemo } from "react";
import Terminal from "./components/Terminal";
import Card from "./components/Card";
import About from "./components/About";
import ReactDOM from "react-dom"
import FindMe from "./components/FindMe";
import Contact from "./components/Contact";
import data from "./assets/markup";
import gsap from "gsap";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

function App() {
  const divRef = useRef(0);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  useEffect(() => {
  (divRef.current).addEventListener('scroll',handleScroll) 
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: "elastic.inOut",
      duration: 3.4,
      stagger: 0.8,
    });
    return ()=>{
      (divRef.current).removeEventListener('scroll',handleScroll)
    }
  }, []);
  useScrollPosition(
    ({ currPos }) => {
      console.log(currPos)
      if(currPos.y<1000){
        timeline.play()
      }
      else{
        timeline.reverse()
      }
    }, [], divRef
  )
 const handleScroll=()=>{
console.log("firing")
  timeline.play()}
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
            onScroll={()=>{
              console.log("firing ")
            }}
            class="grid grid-flow-col grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4"
          >
            {data.projects.map((p, i) => (
              <Card project={p} />
            ))}
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
