import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { skills } from '../data';
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";


const ProgressBar = props => {
  const { value, max, color, width } = props;

  return (
  
  <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  {skills.map((skill) => (
    <div key={skill} className="p-2 sm:w-1/2 w-full">
      <div className="bg-gray-800 rounded flex p-4 h-full items-center">
        <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
        <span className="title-font font-medium text-white">
          
          {skill}
        </span>
      </div>
    </div>
  ))}
</div>)

  {/* <progress  value={value} max={max} width={width} color={color} /> */}

}

ProgressBar.PropTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
};

ProgressBar.defaultProps = {
  max: 100,
  color: '#ff7979',
  width: '150px',
};


export default ProgressBar


const Container = styled.div`
  progress[value]{
    width: ${ props => props.width };
  }



`;