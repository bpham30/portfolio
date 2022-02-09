import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Cards.css'
import OpenCard from './OpenCard';
import Overview from './Overview';

export default function Cards() {
  return (
    <div className='card-container'>
            <div className="card-wrapper">
              <OpenCard/>
            </div>
    </div>
  )
}
