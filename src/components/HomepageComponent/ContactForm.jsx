import {useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ContactForm = () => {
  const [ init, setInit ] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
    }).then(() => {
        setInit(true);
    });
}, []);
const particlesLoaded = (container) => {
  console.log(container);
};

  return (
    <div className="min-h-screen flex items-center justify-center relative">
   <div className="absolute particles-container inset-0">
   { init && <Particles
            id="tsparticles"
            className="h-[1000px]"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen:{enable:false},
                background: {
                    color: {
                        value: "#0d47a1",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
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
                        speed: 6,
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
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
}
   </div>

      {/* Form Container */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full z-10">
        {/* Form Content */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Get In Touch
        </h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;