import React, { useRef, useEffect } from "react";
import {
  faLightbulb,
  faPencilRuler,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap, Power1 } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./features.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const Features = ({ heading, subtitle }) => {
  let feature1 = useRef(null);
  let feature2 = useRef(null);
  let feature3 = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: false,
        //start: "-100px 100px", // when the top of the trigger hits the top of the viewport
        //end: "+=500", // end after scrolling 500px beyond the start
        //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    tl.from(feature1, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" })
      .from(feature2, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" })
      .from(feature3, 1, { y: 80, autoAlpha: 0, ease: "power1.inOut" });
  }, []);

  return (
    <div
      ref={(con) => {
        container = con;
      }}
    >
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              {heading}
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {subtitle}
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div
              class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
              ref={(feature) => {
                feature1 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full feature-bg-color text-white mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Ideate
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div
              class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
              ref={(feature) => {
                feature2 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full feature-bg-color text-white mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faPencilRuler} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Create
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
            <div
              class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
              ref={(feature) => {
                feature3 = feature;
              }}
            >
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full feature-bg-color text-white mb-5 flex-shrink-0">
                <FontAwesomeIcon icon={faTv} size="2x" />
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Showcase
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                  banh mi pug VHS try-hard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

// class Features extends React.Component {
//   constructor(props) {
//     super(props);
//     this.timeline = new TimelineMax({ paused: true });
//   }

//   componentDidMount() {
//     this.timeline
//       .from(this.box1, 0.8, {
//         y: 25,
//         autoAlpha: 0,
//         ease: Power1.easeInOut,
//       })
//       .from(this.box2, 0.8, {
//         y: 25,
//         autoAlpha: 0,
//         ease: Power1.easeInOut,
//       })
//       .from(this.box3, 0.8, {
//         y: 25,
//         autoAlpha: 0,
//         ease: Power1.easeInOut,
//       });

//     this.timeline.play();
//   }

//   render() {
//     return (
//       <div>
//         <section class="text-gray-700 body-font">
//           <div class="container px-5 py-24 mx-auto">
//             <div class="text-center mb-20">
//               <h1 class="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
//                 Bring Your Talents to the Table
//               </h1>
//               <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//                 TechnoCloud isn't just any online event. It will let you bring
//                 out your inner potential and let you get creative with just
//                 about anything because we focus on the following things
//               </p>
//               <div class="flex mt-6 justify-center">
//                 <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
//               </div>
//             </div>
//             <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//               <div
//                 class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
//                 ref={(p) => (this.box1 = p)}
//               >
//                 <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
//                   <FontAwesomeIcon icon={faLightbulb} size="2x" />
//                 </div>
//                 <div class="flex-grow">
//                   <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
//                     Ideate
//                   </h2>
//                   <p class="leading-relaxed text-base">
//                     Blue bottle crucifix vinyl post-ironic four dollar toast
//                     vegan taxidermy. Gastropub indxgo juice poutine, ramps
//                     microdosing banh mi pug VHS try-hard.
//                   </p>
//                 </div>
//               </div>
//               <div
//                 class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
//                 ref={(p) => (this.box2 = p)}
//               >
//                 <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
//                   <FontAwesomeIcon icon={faPencilRuler} size="2x" />
//                 </div>
//                 <div class="flex-grow">
//                   <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
//                     Create
//                   </h2>
//                   <p class="leading-relaxed text-base">
//                     Blue bottle crucifix vinyl post-ironic four dollar toast
//                     vegan taxidermy. Gastropub indxgo juice poutine, ramps
//                     microdosing banh mi pug VHS try-hard.
//                   </p>
//                 </div>
//               </div>
//               <div
//                 class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center"
//                 ref={(p) => (this.box3 = p)}
//               >
//                 <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
//                   <FontAwesomeIcon icon={faTv} size="2x" />
//                 </div>
//                 <div class="flex-grow">
//                   <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
//                     Showcase
//                   </h2>
//                   <p class="leading-relaxed text-base">
//                     Blue bottle crucifix vinyl post-ironic four dollar toast
//                     vegan taxidermy. Gastropub indxgo juice poutine, ramps
//                     microdosing banh mi pug VHS try-hard.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Features;
