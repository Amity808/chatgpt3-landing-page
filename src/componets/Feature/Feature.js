import React from 'react';
import './Feature.css';

const Feature = ({title, para}) => {
  return (
    <div className='gpt3__feature'>
        <div className='gpt3__feature__tittle'>
        <div className='empty'/>
        <h1>{title}</h1>
        </div>
        <div className='gpt3__feature__body'>
          <p>{para}</p>
        </div>
    </div>
  )
}

export default Feature
