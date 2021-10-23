import { useState } from "react";
import Button from "../../ui/button";

const Input = ({updateList}) => {
    const [I1, setI1] = useState('')
    const [I2, setI2] = useState('')
   
    const handleSubmit  =(e) =>{
         e.preventDefault();
         const data ={
             id: Date.now(),
             name : I1,
             amount: I2
         }
         updateList(list => {
             return [...list, data] 
         })
         setI1('')
         setI2('')
    }

    return ( 
        <form onSubmit = {handleSubmit}>
            <div className = 'grid gap-2 grid-cols-2'>
             <input type="text" className = "w-full border rounded px-2 py-1 text-base outline-none" placeholder = 'Name' onChange = {(e) => setI1(e.target.value)} value = {I1}/>
             <input type="number" className = "w-full border rounded px-2 py-1 text-base outline-none" placeholder = 'Amount' onChange = {(e) => setI2(e.target.value)} value = {I2}/>
            </div>
            <Button>add</Button>
        </form>
     );
}
 
export default Input;