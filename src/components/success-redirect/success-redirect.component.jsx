import React from "react";
import "./success-redirect.styles.scss";

const SuccessRedirect = () => (
  <div className="success-redirect">
    <section class="text-gray-700 body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://lh3.googleusercontent.com/proxy/PLpHjijM37vg3WAj9CawHkVp24oNREUaYgm8SyhuNKTOBF9LQik3-oCVdtZa9YukVnD6TeD_xdCR_ZJJI202KnUi228r9dWtE7KbEPd8Av-ALFV9llhuhWF0xBUoBfXl4wg9SzvtWIpioRNuInyOq1MSy66ROIuhu97gHvRc30uS"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Thank You For Registering
          </h1>
          <p class="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Return Home
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default SuccessRedirect;
