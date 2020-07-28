import React from "react";
import "./schedule-event.styles.scss";

const ScheduleEvent = ({ eventTime, eventName, description }) => (
  <div>
    <section className="card">
      <div class="container px-5 py-6 mx-auto ">
        <div class="flex sm:flex-nowrap text-center items-center custom-wrap custom-css">
          <div class="p-4 sm:w-1/4 w-full">
            <p class="leading-relaxed">{eventTime}</p>
          </div>
          <div class="p-4 sm:w-1/4 w-full">
            <p class="leading-relaxed">{eventName}</p>
          </div>
          <div class="p-4 sm:w-3/4 w-full">
            <p class="leading-relaxed">{description}</p>
          </div>
          <div class="p-4 sm:w-1/4 w-full">
            <button class="text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded schedule_read-more_button">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ScheduleEvent;
