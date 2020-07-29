import React from "react";
import ScheduleEvent from "./schedule-event/schedule-event.component";

import SCHEDULE_DETAILS_DAY_1 from "./schedule.data.day-1";
import SCHEDULE_DETAILS_DAY_2 from "./schedule.data.day-2";

import Tabs from "../tab-component/tabs/tabs.component";

import "./schedule.styles.scss";

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      collections_1: SCHEDULE_DETAILS_DAY_1,
      collections_2: SCHEDULE_DETAILS_DAY_2,
    };
  }

  render() {
    const { collections_1, collections_2 } = this.state;
    return (
      <div>
        <section id="schedule">
          <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col ">
            <h1 class="sm:text-4xl text-3xl text-center mb-10">
              Here is the schedule
            </h1>

            <div class="flex mx-auto flex-wrap">
              <Tabs>
                <div label="First Day">
                  <div className="container px-5 py-2 mx-auto">
                    <div class="flex sm:flex-nowrap text-center items-center custom-wrap">
                      <div class="p-4 sm:w-1/4 w-full">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 header-css">
                          Time
                        </h2>
                      </div>
                      <div class="p-4 sm:w-1/4 w-full">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 header-css">
                          Name
                        </h2>
                      </div>
                      <div class="p-4 sm:w-3/4 w-full">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 header-css">
                          Description
                        </h2>
                      </div>
                      <div class="p-4 sm:w-1/4 w-full"></div>
                    </div>
                  </div>
                  {collections_1.map(({ id, ...collectionProps }) => (
                    <ScheduleEvent key={id} {...collectionProps} />
                  ))}
                </div>
                <div label="Second Day">
                  <div className="container px-5 py-2 mx-auto">
                    <div class="flex sm:flex-nowrap text-center items-center custom-wrap">
                      <div class="p-4 sm:w-1/4 w-full">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 header-css">
                          Time
                        </h2>
                      </div>
                      <div class="p-4 sm:w-1/4 w-full">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 header-css">
                          Name
                        </h2>
                      </div>
                      <div class="p-4 sm:w-3/4 w-full">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900 header-css">
                          Description
                        </h2>
                      </div>
                      <div class="p-4 sm:w-1/4 w-full"></div>
                    </div>
                  </div>

                  {collections_2.map(({ id, ...collectionProps }) => (
                    <ScheduleEvent key={id} {...collectionProps} />
                  ))}
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Schedule;
