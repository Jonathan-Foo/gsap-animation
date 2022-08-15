import React, { useEffect } from "react";
import gsap from 'gsap';
import "./styles/App.scss";
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import Cases from "./assets/components/Cases";
import IntroOverlay from "./assets/components/IntroOverlay";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // prevent flashing
    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible"
      }
    });

    //timline
    const tl = gsap.timeline();

    tl.from('.line span', {
      duration: 1,
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to('.overlay-top', {
      height: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4
      }
    }).to('.overlay-bottom', {
      width: 0,
      duration: 1.6,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4
      },
    })

  }, []);

  return (
    <div className="App">
      <IntroOverlay/>
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
