import axios from 'axios';
import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AddVm from './AddVm';
import { deleteVm, powerVm, powerVmof, suspendVm } from '../../api/vcenterApi';
 
const TableThree = () => {
  const location = useLocation()
  const { pathname } = location
  const [data, setData] = useState([])
 
  useEffect(() => {
    async function fetchData() {
      console.log(pathname);
      switch (pathname) {
        case "/clouds/all":
          return null;
        case "/clouds/proxmox":
          return null;
        case "/clouds/vcenter/":
          console.log(pathname);
          try {
            const response = await axios.get("http://192.168.1.2:5000/vms");
            console.log("🚀 ~ fetchData ~ response:", response.data);
            return response.data;
          } catch (error) {
            console.error("Error fetching data:", error);
            return null;
          }
        default:
          return null;
      }
    }
  
    fetchData()
      .then((response) => {
        console.log("🚀 ~ file: TableThree.jsx:37 ~ .then ~ response:", response)
        setData(response?.value ? response.value  : []);
       })
      .catch((error) => {
        console.error("Error setting data:", error);
      });
      
    }, []);
    console.log("🚀 ~ data:", data);
    const [show,setShow] = useState(false)
    const onClick =()=>{setShow(true)}
    const onClose =()=>{setShow(false)}
  return (
    <div className='rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1'>
      <div className='max-w-full overflow-x-auto'>
      <div className="flex flex-row-reverse py-3 ">
      <Link onClick={onClick}
              to='#'
              className='inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10'
            >
              Add vm
            </Link>

     
<Modal
  onClose={onClose}
  show={show}
>
  <Modal.Header>
   Add vm
  </Modal.Header>
  <Modal.Body>
    <AddVm pathname={pathname}/>
  </Modal.Body>
   
</Modal>
</div>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-gray-2 text-center dark:bg-meta-4'>
              <th className='min-w-[220px] py-4 px-4 font-medium   text-black dark:text-white xl:pl-11'>
              ID
              </th>
              <th className='min-w-[150px] py-4 px-4 font-medium  text-black dark:text-white'>
              VM
              </th>
              <th className='min-w-[120px] py-4 px-4 font-medium   text-black dark:text-white'>
              CPU COUNT
              </th>
              <th className='py-4 px-4 font-medium text-black   dark:text-white'>
              MEMORY SIZE MiB
              </th>
              <th className='py-4 px-4 font-medium text-black   dark:text-white'>
              STATE
              </th>
              <th className='py-4 px-4 font-medium text-black   dark:text-white'>
              ACTION
              </th>
            </tr>
          </thead>
          <tbody>
          {data.length  ?
      data.map((vm, i) => (

            <tr key={i}>
              <td className='border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11'>
 
                <p className='text-black dark:text-white'>{vm.vm}</p>
               </td>
              <td className='border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11'>
                <h5 className='font-medium text-black dark:text-white'>
                {vm.name}
                </h5>
               </td>
              <td className='border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11'>
                <h5 className='font-medium text-black dark:text-white'>
                {vm.cpu_count}
                </h5>
               </td>
              <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
                <p className='text-black dark:text-white'>{vm.memory_size_MiB}</p>
              </td>
              <td className='border-b border-[#eee] py-5 px-4 dark:border-strokedark'>
             { vm.power_state =="POWERED_ON"&&<p className='inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success'>
                {vm.power_state}
                </p>}
                {vm.power_state =="POWERED_OFF" &&<p className='inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger'>
                {vm.power_state}
                </p>}
                {vm.power_state =="SUSPENDED" &&<p className='inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning'>
                {vm.power_state}
                </p>}
              </td>
              <td className='border-b border-[#eee] py-5 px-2 dark:border-strokedark'>
                <div className='grid grid-cols-4 gap-2 items-center  '>
                   {/* <button className='hover:text-primary'>
                    <svg
                      className='fill-current'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z'
                        fill=''
                      />
                      <path
                        d='M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z'
                        fill=''
                      />
                    </svg>
                  </button> */}
                 
                  <button onClick={() => powerVm(vm.vm)} className='hover:text-primary'>
                  <svg  className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"></path>
                  </svg>
                  </button>
                  <button onClick={() => suspendVm(vm.vm)} className='hover:text-primary'>
                  <svg  className="w-6 h-6 dark:text-white"  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  </button>
                  <button onClick={() => powerVmof(vm.vm)} className='hover:text-primary'>
                  <svg  className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"></path>
                  </svg>
                  </button>
                  <button onClick={() => deleteVm(vm.vm)} className='hover:text-primary'>
                    <svg
                      className='fill-current'
                      width='18'
                      height='18'
                      viewBox='0 0 18 18'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z'
                        fill=''
                      />
                      <path
                        d='M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z'
                        fill=''
                      />
                      <path
                        d='M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z'
                        fill=''
                      />
                      <path
                        d='M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z'
                        fill=''
                      />
                    </svg>
                  </button>
                
         
                </div>
              </td>
            </tr>
            )): <tr>
          <td  colSpan="6" >
          <div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
            <div className="flex justify-center">
              <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
          </td>
          </tr>}
          
           
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default TableThree;
