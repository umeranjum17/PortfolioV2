import React from 'react';
import Terminal from './components/Terminal';
import Card from './components/Card';
import About from './components/About';
import FindMe from './components/FindMe';
import Contact from './components/Contact';
import data from "./assets/markup"
function App() {
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
          <div class="grid grid-flow-col grid-rows-6 grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-4">
            {data.projects.map(p => (

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
