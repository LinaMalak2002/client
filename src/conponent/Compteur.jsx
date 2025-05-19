import { useState } from "react"

function Compteur(){
    const [compteur,setcompteur]=useState(0)
    const incrementer = ()=> {
        setcompteur(compteur+3);
    }
const rest= () => {
    setcompteur(0);
}

return(
    <div>
        <p>compteur:{compteur}</p>
        <button onClick={incrementer}>Click</button>
        <button onClick={rest}>reset </button>
    </div>
)
}

export default Compteur;
