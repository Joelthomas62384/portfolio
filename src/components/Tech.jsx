import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  // Determine if the device is a phone (you can adjust the width threshold as needed)
  const isPhone = window.innerWidth <= 768;

  // Filter technologies for mobile devices
  const filteredTechnologies = isPhone
    ? technologies.filter((tech) => 
        ['Python', 'JavaScript', 'React JS', 'Tailwind CSS'].includes(tech.name)
      )
    : technologies;

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {filteredTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
