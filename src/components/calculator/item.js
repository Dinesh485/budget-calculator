import { useRef, useState } from "react"
import Button from "../../ui/button"

const Item = ({item,index, updateList}) => {
  const inputE1 = useRef(null)
  const inputE2 = useRef(null)
   const [name, setName] = useState(item.name)
   const [amount, setAmount] = useState(item.amount)
    const [editMode, setEditMode] = useState(false)
  
    const deleteThis = () =>{
       updateList(list =>{
           const newList = list.filter(val =>{
               return val.id !== item.id
           })
           return newList
       })
    }

    const editThis = () =>{
       inputE1.current.classList.toggle('pointer-events-none')
       inputE2.current.classList.toggle('pointer-events-none')
       inputE1.current.classList.toggle('outline-none')
       inputE1.current.focus()
       inputE2.current.classList.toggle('outline-none')
       setEditMode(true)
    }
    const doneEdit = (e) =>{
      e.preventDefault()
     
      updateList(list =>{

        const newItem = {
          id : item.id,
          name: name,
          amount : amount
        }
      
          list[index] = newItem
       
        return [...list]


      })
      inputE1.current.classList.toggle('pointer-events-none')
       inputE2.current.classList.toggle('pointer-events-none')
       setEditMode(false)
    }

    return ( 
        <div className  = "grid grid-cols-3 justify-items-center p-2  px-4 rounded border bg-white mb-2">
             <input ref = {inputE1} type="text" value  ={name} onChange = {(e) => setName(e.target.value)}className = "   w-11/12 mx-auto text-center font-medium block outline-none pointer-events-none" />
             <div>
               <input ref = {inputE2} type="text" value  ={'$'+amount} onChange = {(e) => setAmount(e.target.value)}className = "w-11/12 mx-auto text-center font-medium block outline-none pointer-events-none" />
             </div>
             <div className = "flex items-center">
               <button className = 'w-[17px] text-red-400 mr-3' onClick = {deleteThis}>
               <svg xmlns="http://www.w3.org/2000/svg"  className = 'w-full stroke-current' fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
               </button >
               {!editMode ?  <button className = 'w-[17px] text-green-500' onClick = {editThis}>
               <svg xmlns="http://www.w3.org/2000/svg" className = 'w-full stroke-current' fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg>
               </button> :<a href = '/' onClick = {doneEdit}> <Button extend = 'lowercase py-[2px] px-[10px] mt-0'>done</Button></a>}
             </div>
        </div>
     );
}
 
export default Item;