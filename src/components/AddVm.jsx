import axios from 'axios';
import React, { useState } from 'react'

export default function AddVm({pathname}) {
    const [name, setName] = useState("");
    const [resource_pool, setResource_pool] = useState("");
    const [guest_OS, setGuest_OS] = useState("");
    const [folder, setFolder] = useState("");
    const [datastore, setDatastore] = useState("");
    const [size_MiB, setSize_MiB] = useState("");
    const [count, setCount] = useState("");
    const [message, setMessage] = useState("");
    const addvm = async (e) => {
      e.preventDefault();
      setMessage("wait...")
     console.log({
            name:name,
            folder:folder,
            resource_pool:resource_pool,
            datastore:datastore,
            guest_OS:guest_OS
           
          })
        await axios({
          method: "post",
          url: `http://192.168.1.2:5000/vm`,
        
          data: {
            name:name,
            folder:folder,
            resource_pool:resource_pool,
            datastore:datastore,
            guest_OS:guest_OS,
            count:count,
            size_MiB:size_MiB
           
          },
        })
          .then((response) => {
            console.log(response.data)
            if(response.data?.value){
            window.location.href = pathname
            }else{
                      setMessage("error !!!")
            }
          })
     
       
      
    };
  return (
    <div>
      <form>
  <div class="space-y-12">
  
    <div class="border-b border-gray-900/10 pb-12">
       
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
       
    

        <div class="sm:col-span-2 sm:col-start-1">
          <label for="NAME" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div class="mt-2">
            <input      onChange={(e) => setName(e.target.value)} type="text" name="NAME" id="NAME" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="pool" class="block text-sm font-medium leading-6 text-gray-900">Resource pool</label>
          <div class="mt-2">
            <input  onChange={(e) => setResource_pool(e.target.value)}  type="text" name="pool" id="pool" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="Os" class="block text-sm font-medium leading-6 text-gray-900">Guest Os</label>
          <div class="mt-2">
            <input onChange={(e) => setGuest_OS(e.target.value)}  type="text" name="Os" id="Os" autocomplete="Os" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2 sm:col-start-1">
          <label for="Datastore" class="block text-sm font-medium leading-6 text-gray-900">Datastore</label>
          <div class="mt-2">
            <input onChange={(e) => setDatastore(e.target.value)} type="text" name="Datastore" id="Datastore" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="Folder" class="block text-sm font-medium leading-6 text-gray-900">Folder</label>
          <div class="mt-2">
            <input onChange={(e) => setFolder(e.target.value)} type="text" name="Folder" id="Folder" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="CPU-COUNT" class="block text-sm font-medium leading-6 text-gray-900">CPU COUNT</label>
          <div class="mt-2">
            <input onChange={(e) => setCount(e.target.value)} type="text" name="CPU-COUNT" id="CPU-COUNT" autocomplete="CPU COUNT" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="MEMORY_SIZE_MiB" class="block text-sm font-medium leading-6 text-gray-900">MEMORY SIZE MiB</label>
          <div class="mt-2">
            <input onChange={(e) => setSize_MiB(e.target.value)} type="text" name="MEMORY_SIZE_MiB" id="MEMORY_SIZE_MiB" autocomplete="MEMORY_SIZE_MiB" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>
    </div>


  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="button" onClick={addvm} class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
    </div>
  )
}
