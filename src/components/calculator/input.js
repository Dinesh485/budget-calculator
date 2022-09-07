import { useState } from "react";


const Input = ({updateList}) => {
    const [I1, setI1] = useState('')
    const [I2, setI2] = useState('')
   
    const handleSubmit  =(e) =>{
         e.preventDefault();
        if(I1 && I2){
            const data ={
                id: Date.now(),
                name : I1,
                amount:parseInt(I2)
            }
            updateList((list) => [...list, data])
            setI1('')
            setI2('')
        }
    }

    return ( 
        <form onSubmit = {handleSubmit}>
            <div className = ' gap-2 flex flex-col items-center lg:flex-row lg:items-stretch'>
             <input type="text" className = "w-full border-2 font-bold text-gray-900/90  px-4 py-1 text-base outline-none bg-transparent border-gray-900/90 h-[40px]" required placeholder = 'Name' onChange = {(e) => setI1(e.target.value)} value = {I1}/>
             <input type="number" className = "w-full border-2 font-bold text-gray-900/90  px-4 py-1 text-base outline-none bg-transparent border-gray-900/90 h-[40px]" required placeholder = 'Amount' onChange = {(e) => setI2(e.target.value)} value = {I2}/>
             <button className="bg-gray-900/90 py-1 px-6 text-gray-200 mx-auto block w-min m-3 lg:m-0 ">Add</button>
            </div>
          
        </form>
     );
}
 
export default Input;