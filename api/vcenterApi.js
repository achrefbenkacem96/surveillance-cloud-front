import axios from "axios";

export const deleteVm = async(idvm)=>{        await axios({   method: "delete",  url: `http://192.168.1.2:5000/delete/${idvm}`, }).then((response)=>{  window.location.reload();  })}
export const powerVm = async(idvm)=>{        await axios({   method: "post",  url: `http://192.168.1.2:5000/poweron?ID=${idvm}`, }).then((response)=>{  window.location.reload();  })}
export const powerVmof = async(idvm)=>{        await axios({   method: "post",  url: `http://192.168.1.2:5000/poweroff?ID=${idvm}`, }).then((response)=>{  window.location.reload();  })}
export const suspendVm = async(idvm)=>{        await axios({   method: "post",  url: `http://192.168.1.2:5000/suspend?ID=${idvm}`, }).then((response)=>{  window.location.reload();  })}
 
  
    