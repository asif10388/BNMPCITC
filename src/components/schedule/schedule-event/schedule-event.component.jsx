import React from "react";
import "./schedule-event.styles.scss";

const ScheduleEvent = ({ eventTime, eventName, description }) => (
  <div>
    <section>
      <div class="container px-5 py-6 mx-auto text-white">
        <div class="flex lg:flex-no-wrap text-center items-center custom-wrap custom-css-shadow card">
          <div class="p-4 lg:w-1/4 w-full">
            <p class="leading-relaxed sm:text-3xl text-xl">{eventTime}</p>
          </div>
          <div class="p-4 lg:w-1/4 w-full">
            <p class="leading-relaxed sm:text-4xl text-4xl">{eventName}</p>
          </div>
          <div class="p-4 lg:w-1/4 w-full">
            <p class="leading-relaxed sm:text-xl">{description}</p>
          </div>
          <div class="p-4 lg:w-1/4 w-full">
            <button class="border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded schedule_read-more_button">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ScheduleEvent;
