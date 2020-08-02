import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./contact.styles.scss";

const Contact = () => (
  <section class="text-gray-700 body-font relative contact-body">
    <div class="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
      <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4022966194934!2d90.36869205040821!3d23.733029384522286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf33f166b779%3A0x8568dda83da3b8a8!2sBir%20Shreshtha%20Noor%20Mohammad%20Public%20College!5e0!3m2!1sen!2sbd!4v1596149708296!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
          scrolling="no"
          style={{ border: "0", filter: "contrast(0.8)" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="map"
          class="absolute inset-0"
        ></iframe>
        <div class="bg-white relative flex flex-wrap py-6">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">
              ADDRESS
            </h2>
            <p class="leading-relaxed">
              Birshreshtha Noor Mohammad Public College, Peelkhana, Newmarket
              PO, Lalbagh PS, Dhaka 1205, Dhaka <br className="mb-5" /> EIIN -
              108161 | School Code - 1217 | College Code - 1203
            </p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm">
              EMAIL
            </h2>
            <a class="text-indigo-500 leading-relaxed">bnmpcitc@gmail.com</a>
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
              PHONE
            </h2>
            <p class="leading-relaxed">01XXXXXXXX</p>
          </div>
        </div>
      </div>
      <div class=" p-12 rounded lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 order-first sm:order-last">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Send Us a Nice Message :)
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          {" "}
          If you have any questions regarding our club or college, feel free to
          ask us. We usually respond within a day as we have to study a lot :")
        </p>
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Name"
          type="text"
        />
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          placeholder="Email"
          type="email"
        />
        <textarea
          class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
          placeholder="Message"
        ></textarea>
        <CustomButton isPrimary>Send Message</CustomButton>
        <p class="text-xs text-gray-500 mt-3">
          BNMPC IT Club prevails with the view to propagate the features of IT
          among the students.
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
