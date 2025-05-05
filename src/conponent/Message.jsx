import { useState } from "react";

function Message()
{
    const[message,setmessage]=
    useState("")

    const copier=(e)=>
    {
setmessage(e.target.value);
    };
    
    
    return(
       <div>
        <input type="text" onDoubleClick={copier} placeholder="saisais"/>
        <p>vous avez saisais {message}</p>
        
       </div>

    )
}


export default Message;