import React, { useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export default function MessageModal({toggleModal}) {
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  useEffect(() => {
    timeline.from(divRef.current, {
      ease: "elastic.inOut",
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 3,
    });
    timeline.play();
    return () => {
      timeline.reverse();
    };
  }, []);
  const divRef = useRef(null);
  return (
    <div className="overflow-hidden h-screen w-full flex flex-col items-center justify-center bg-teal-lightest font-sans">
      <div className="h-screen w-full absolute flex items-center justify-center bg-modal">
        <div className="bg-white overflow-hidden rounded shadow p-8 m-4 max-w-xs max-h-full text-center ">
          <div className="mb-4">
            <div className="" ref={divRef}>
              <FontAwesomeIcon className="text-xl text-green-500" icon={faCheckDouble} />
            </div>
            <h1>Email Sent!</h1>
          </div>
          <div className="mb-8">
            <p>
              Your Email has been dispatched successfully, I will get back to
              you as soon as possible.
            </p>
            <p>
                Have a Great Day!!!
            </p>
          </div>
          <div className="flex justify-center">
            <button onClick={()=>toggleModal(false)} className="flex-no-shrink text-white p-2  rounded bg-green-500 hover:bg-teal-dark">
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
