import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import CardOne from '../../components/CardOne';
import CardTwo from '../../components/CardTwo';
import CardThree from '../../components/CardThree'
import CardFour from '../../components/CardFour';
import ChatCard from '../../components/ChatCard';
import TableOne from '../../components/TableOne'
import ChartOne from '../../components/ChartOne';
import ChartTwo from '../../components/ChartTwo';
import ChartThree from '../../components/ChartThree';
import MapOne from '../../components/MapOne'
import TableThree from '../../components/TableThree';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Clouds = () => {
 
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        {/* <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour /> */}
      </div>

      <div className='flex flex-col gap-10 '>
        {/* <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne /> */}
        <div className='container'>
    
          <TableThree   />
        </div>
        
        {/* <ChatCard /> */}
      </div>
    </DefaultLayout>
  )
}

export default Clouds;
