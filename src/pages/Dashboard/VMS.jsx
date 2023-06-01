import React, { useEffect } from 'react';
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

const VMS = () => {
  const location = useLocation()
  const { pathname } = location
  useEffect(()=>{
    console.log("🚀 ~ file: VMS.jsx:21 ~ useEffect ~ pathname:", pathname)
    switch (pathname) {
      case "/vms/lists/all":
        
        break;
      case "/proxmox/lists":
        
        break;
      case "/vcenter/lists":
        
        break;
    
      
    }
  })
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
        <div className='col-span-12 xl:col-span-8'>
          <TableThree />
        </div>
        
        {/* <ChatCard /> */}
      </div>
    </DefaultLayout>
  )
}

export default VMS;
