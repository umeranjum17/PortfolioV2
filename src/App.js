import React from 'react';
import Terminal from './components/Terminal';
import Card from './components/Card';
import About from './components/About';
import FindMe from './components/FindMe';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="mt-20 bg-blue w-full mx-auto" >
          <Terminal />
          <div className="mt-10 flex justify-between">
            <About />
            <FindMe/>
          </div>
          <h1 className="text-center font-black text-3xl">
Some of my Recent Projects
          </h1>
          <div className="mt-10 flex justify-between flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <Contact/>
      </div>
    </>
  );
}

export default App;
