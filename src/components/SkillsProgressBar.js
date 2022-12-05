import { CodeIcon } from "@heroicons/react/solid";
import React from "react";


import SkillBar from 'react-skillbars';
import styled from "styled-components";
import { colors, devSkills } from "../data";
export default function SkillsProgressBar() {
  return (
    <section id="SkillsProgressBar">
      <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <CodeIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Habilidades Profesionales  &amp; Tecnologias
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Desarrollo con las tecnologias mencionadas abajo, algunas con mas profundidad que otras, pero seguimos aprendiendo!
              </p>
          </div>
          <SkillBar skills={devSkills} colors={colors} height={'2.5vh'} symbol = {'%'} animationDelay={1000} animationThreshold={0.8}/>
          
      </div>
    </section>
  );
}


const section = styled.section`
padding: 0.25em 1em;
`;