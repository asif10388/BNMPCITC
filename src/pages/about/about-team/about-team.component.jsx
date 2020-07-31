import React from "react";
import "./about-team.styles.scss";
import { coreTeam, foundingTeam, successorTeam } from "./team";
import Tabs from "../../../components/tab-component/tabs/tabs.component";
import TeamMember from "./team-member/team-member.component";

class AboutTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coreTeam: coreTeam,
      foundingTeam: foundingTeam,
      successorTeam: successorTeam,
    };
  }
  render() {
    const { coreTeam, foundingTeam, successorTeam } = this.state;
    return (
      <div>
        <section>
          <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Our Team
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Here are the people that made it all possible. Meet the
                harbingers of the community who are relentlessly trying their
                best to make this club the best it can be.
              </p>
            </div>
            <Tabs>
              <div label="The Peaky Blinders">
                {coreTeam.map(({ id, ...collectionProps }) => (
                  <TeamMember key={id} {...collectionProps} />
                ))}
              </div>
              <div label="The Boro Bhais">
                {foundingTeam.map(({ id, ...collectionProps }) => (
                  <TeamMember key={id} {...collectionProps} />
                ))}
              </div>
              <div label="The Chunoputis">
                {successorTeam.map(({ id, ...collectionProps }) => (
                  <TeamMember key={id} {...collectionProps} />
                ))}
              </div>
            </Tabs>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutTeam;
