'use client'
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import NumInc from "@/app/(components)/numInc";
import Link from "next/link";
// import MotionDiv from "@/app/(components)/motion-div";

const App = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#00000",
              },
            },
            fpsLimit: 320,
            interactivity: {
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 800,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#00000",
              },
              links: {
                color: "#8b8b8b",
                distance: 200,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "polygon",
              },
              size: {
                value: { min: 1, max: 10 },
              },
            },
            detectRetina: true,
          }}
        />


        <div className="fixed flex justify-between items-center px-4 z-20 w-[90%] md:w-[80%] mt-4 mx-auto border-2 border-gray-200 dark:border-gray-800 border-2 border-white rounded-lg shadow-lg"
          style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}
        >
          <img src="/Logo.png" alt="Logo" className="w-30 h-12 rounded-t-lg" />
          <div className="flex flex-row gap-2 justify-center items-center text-md text-center text-gray-800 dark:text-gray-200">
            <div className="hidden md:block text-center text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer border-r-2 border-gray-200 dark:border-gray-800 pr-2" onClick={() => //scroll to testimonials
              document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
            }>
              Testimonials
            </div>
            <div className=" hidden md:block text-center text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer border-r-2 border-gray-200 dark:border-gray-800 pr-2"
              onClick={() => //scroll to projects
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </div>
            <button className="bg-gray-200 text-sm font-semibold text-gray-700 border-2 border-white font-semibold rounded p-1 px-2 hover:bg-gray-600 dark:hover:bg-gray-400 transition duration-300 ease-in-out">
              Get Quote
            </button>
          </div>
        </div>


        <div className="flex flex-col gap-4 justify-center min-h-screen p-4">

          <section className="relative mt-8">
            <div className="absolute inset-0 m-auto max-w-xs h-[200px] blur-[800px] sm:max-w-md md:max-w-lg" style={{ background: "#8b8b8bc0" }}></div>
            <div className="relative max-w-screen-xl mx-auto px-4 py-28 md:px-8">

              <div className="flex flex-row gap-2 justify-center items-center text-5xl md:text-8xl font-bold text-center text-gray-800 dark:text-gray-200">
                <img src="/design.jpg" alt="Design" className="w-16 h-16 md:w-24 md:h-24 rounded-full" />
                gkrastenov
              </div>
              <div className="text-2xl mt-4 font-bold text-center text-gray-800">
                Independant Security Researcher
              </div>


              <div className="flex flex-col w-fit mx-auto gap-2 justify-center items-center p-4 rounded border-2 border-white mt-8" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="text-md font-bold text-center text-gray-600">
                  Working with me, you get:
                </div>
                <ol className="text-sm gap-2 font-semibold text-center text-gray-600">
                  <li>A high-quality and detailed security review</li>
                  <li>Pre-audit and fixes review</li>
                  <li>Bonus* refunding of money, if not satisfied with the service</li>
                  <li>Bonus* free to hire me before launching of project</li>
                </ol>
                <div className="rounded p-2 text-gray-700 border-2 border-gray-700 text-sm font-bold text-center hover:bg-gray-700 hover:text-gray-600 hover:border-white hover:shadow-none transition duration-300 ease-in-out cursor-pointer" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                  Let's work together
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 w-full max-w-lg relative mx-auto mt-4">
                <div className="flex items-center text-gray-600 relative justify-center gap-x-2 -ml-4 mt-5 ">
                  <img
                    className="w-14 h-14 md:w-16 md:h-16"
                    src={"/rightPoint.svg"}
                    alt="right"
                  />
                  <div className="-ml-2 flex flex-col justify-center items-center">
                    <strong className="text-xl md:text-2xl">6</strong>
                    <span className="text-[#1F2128] text-xs text-center">
                      Conducted <br />
                      Audits
                    </span>
                  </div>
                  <img
                    className="w-14 h-14 md:w-16 md:h-16 -ml-2"
                    src={"/leftPoint.svg"}
                    alt="right"
                  />
                </div>
                <div className="flex items-center relative justify-center gap-x-2 -ml-4 mt-5">
                  <img
                    className="w-14 h-14 md:w-16 md:h-16"
                    src={"/rightPoint.svg"}
                    alt="right"
                  />
                  <div className="-ml-2 flex text-gray-600 flex-col justify-center gap-x-2 items-center">
                    <strong className="text-xl md:text-2xl">
                      <NumInc num={20} delay={1} />
                      <span className="text-gray-600">+</span>
                    </strong>
                    <span className="text-[#1F2128] text-xs font-normal text-center">
                      Critical & High Vulnerabilities<br />
                      Detected
                    </span>
                  </div>
                  <img
                    className="w-14 h-14 md:w-16 md:h-16 -ml-2"
                    src={"/leftPoint.svg"}
                    alt="right"
                  />
                </div>
                <div className="flex items-center relative justify-center -ml-4 mt-5">
                  <img
                    className="w-14 h-14 md:w-16 md:h-16"
                    src={"/rightPoint.svg"}
                    alt="right"
                  />
                  <div className="-ml-2 flex text-gray-600 flex-col justify-center gap-x-2 items-center">
                    <strong className="text-xl md:text-2xl">
                      <NumInc num={10} delay={1} />
                      <span className="text-gray-600">M+</span>
                    </strong>
                    <span className="text-[#1F2128] text-xs font-normal text-center">
                      TVL <br />
                      Secured
                    </span>
                  </div>
                  <img
                    className="w-14 h-14 md:w-16 md:h-16 -ml-2"
                    src={"/leftPoint.svg"}
                    alt="right"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 justify-center items-center text-xl font-bold text-center text-gray-800 dark:text-gray-200 mt-8">
                Trusted by
                <div className="flex flex-row flex-wrap gap-6 justify-center items-center p-2 rounded border-2 border-white"
                  // style={{ backgroundColor: "#1F2128" }}
                  style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}
                >
                  <Link href="https://spartadex.io/"><img src="/logo.svg" alt="Sparta Dex" className="w-16 h-16 rounded border-2 border-white px-2 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></Link>
                  <Link href="https://gameswift.io/"><img src="/logo2.png" alt="Trusted" className="w-28 h-16 rounded border-2 border-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></Link>
                  <Link href="https://x.com/Cookie3_com"><img src="/cookie.jpg" alt="Cookie" className="w-16 h-16 rounded border-2 border-white  cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></Link>
                  <Link href="https://x.com/StarHeroes_game"><img src="/pbs.jpg" alt="Star Heros" className="w-16 h-16 rounded border-2 border-white cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></Link>

                </div>
              </div>

            </div>
          </section>
          <section className="mt-8" id="testimonials">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200"> Testimonials </h1>
            <p className="text-center text-gray-800 dark:text-gray-200">Here are some of the latest testimonials from my clients</p>
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col gap-2 justify-start items-start p-4 rounded border-2 border-white" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="text-sm font-light text-left text-gray-800">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="flex flex-row gap-2 justify-start items-center">
                  <img src="/game.png" alt="Client" className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-sm text-gray-600">
                      GameSwift
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      CEO
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start p-4 rounded border-2 border-white" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="text-sm font-light text-left text-gray-800">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="flex flex-row gap-2 justify-start items-center">
                  <img src="/game.png" alt="Client" className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-sm text-gray-600">
                      GameSwift
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      CEO
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>


          <section className="mt-24" id="projects">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200"> Latest Completed Projects </h1>
            <p className="text-center text-gray-800 dark:text-gray-200">Here are some of the latest projects I have completed</p>
            <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col gap-2 justify-start items-start p-4 rounded border-2 border-white" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="flex flex-row gap-2 justify-start items-start">
                  <img src="/game.png" alt="Project" className="w-20 h-20 rounded" />
                  <div className="text-xl font-bold text-left md:text-center text-gray-600">
                    GameSwift-Security-Review-2
                    <div className="flex flex-row mt-2 gap-2 justify-start items-center">
                      <div className="text-xs bg-yellow-300 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> Airdrop </div>
                      <div className="text-xs bg-green-400 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> Staking </div>
                    </div>

                  </div>
                </div>
                <div className="text-sm font-semibold text-left text-gray-600">
                  GameSwift Security Review A security review of the GameSwift. The first modular gaming blockchain..
                </div>
                <div className="rounded p-2 text-gray-700 border-2 border-gray-700 text-sm font-bold text-center hover:bg-gray-700 hover:text-gray-600 hover:border-white hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                  Learn More
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start p-4 rounded border-2 border-white" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="flex flex-row gap-2 justify-start items-start">
                  <img src="/logo.svg" alt="Project" className="w-20 h-20 rounded" />
                  <div className="text-xl font-bold text-left md:text-center text-gray-600">
                    SpartaDex-Security-Review-2
                    <div className="flex flex-row mt-2 gap-2 justify-start items-center">
                      <div className="text-xs bg-yellow-300 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> Pre-Deploy Review </div>
                    </div>

                  </div>
                </div>
                <div className="text-sm font-semibold text-left text-gray-600">
                  SpartaDex Security Review A second security review of the SpartaDex before deploying of their...
                </div>
                <div className="rounded p-2 text-gray-700 border-2 border-gray-700 text-sm font-bold text-center hover:bg-gray-700 hover:text-gray-600 hover:border-white hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                  Learn More
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start p-4 rounded border-2 border-white" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="flex flex-row gap-2 justify-start items-start">
                  <img src="/game.png" alt="Project" className="w-20 h-20 rounded" />
                  <div className="text-xl font-bold text-left md:text-center text-gray-600">
                    GameSwift-Security-Review
                    <div className="flex flex-row mt-2 gap-2 justify-start items-center">
                      <div className="text-xs bg-yellow-300 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> Airdrop </div>
                      <div className="text-xs bg-green-400 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> Staking </div>
                    </div>

                  </div>
                </div>
                <div className="text-sm font-semibold text-left text-gray-600">
                  GameSwift Security Review A security review of the GameSwift. GameSwift is a one-stop gaming...
                </div>
                <div className="rounded p-2 text-gray-700 border-2 border-gray-700 text-sm font-bold text-center hover:bg-gray-700 hover:text-gray-600 hover:border-white hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                  Learn More
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start items-start p-4 rounded border-2 border-white" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(200, 200, 200, 0.3)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", }}>
                <div className="flex flex-row gap-2 justify-start items-start">
                  <img src="/game.png" alt="Project" className="w-20 h-20 rounded" />
                  <div className="text-xl font-bold text-left md:text-center text-gray-600">
                    SpartaDex-Security-Review
                    <div className="flex flex-row mt-2 gap-2 justify-start items-center">
                      <div className="text-xs bg-yellow-300 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> DEX </div>
                      <div className="text-xs bg-green-400 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> NFT </div>
                      <div className="text-xs bg-blue-400 font-normal text-gray-800 dark:text-gray-200 p-1 px-2 rounded"> Staking </div>
                    </div>

                  </div>
                </div>
                <div className="text-sm font-semibold text-left text-gray-600">
                  SpartaDex Security Review A security review of the SpartaDex. The first DEX with gamified yeild....
                </div>
                <div className="rounded p-2 text-gray-700 border-2 border-gray-700 text-sm font-bold text-center hover:bg-gray-700 hover:text-gray-600 hover:border-white hover:shadow-none transition duration-300 ease-in-out cursor-pointer">
                  Learn More
                </div>
              </div>

            </div>
          </section>


          <section className="mt-24">
            <div className="flex flex-col gap-2 justify-center items-center text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
              <div className="flex flex-row gap-4 justify-center items-center">
                <img src="/design.jpg" alt="Design" className="w-12 h-12 rounded-full" />
                Contact Me
              </div>
              <div className="text-2xl font-semibold text-center text-gray-800">
                Let's work together
              </div>
              <div className="flex flex-row gap-2 justify-center items-center">
                <button className="bg-gray-700 p-1 px-4 text-sm font-semibold text-white border-2 border-white font-semibold rounded p-1 px-2 hover:bg-gray-600 dark:hover:bg-gray-400 transition duration-300 ease-in-out">
                  Get Quote
                </button>
                <button className="bg-gray-200 p-1 px-4 text-sm font-semibold text-gray-700 border-2 border-white font-semibold rounded p-1 px-2 hover:bg-gray-600 dark:hover:bg-gray-400 transition duration-300 ease-in-out">
                  Contact Me
                </button>
              </div>


            </div>
          </section>




        </div>

        {/*move to top button*/}
        <div className="fixed bottom-4 right-4">
          <button className="bg-gray-200 text-sm font-semibold text-gray-700 border-2 border-white font-semibold rounded p-2 px-2 hover:bg-gray-600 dark:hover:bg-gray-400 transition duration-300 ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFFF" className="bi bi-chevron-up text-white" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          </button>
        </div>


      </main>
      <Footer />
    </>
  );
};

const Footer = () => {

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="/design.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="ml-3 text-xl">gkrastenov</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 gkrastenov —
          <a href="https://twitter.com/gkrastenov" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@gkrastenov</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-500" href="https://twitter.com/gkrastenov" rel="noopener noreferrer" target="_blank">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          {/*github*/}
          <a className="ml-3 text-gray-500" href="https://github.com/gkrastenov/audits">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5" viewBox="0 0 50 50">
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default App;
