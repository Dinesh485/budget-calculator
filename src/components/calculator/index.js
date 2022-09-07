import { useEffect, useState } from "react";
import Input from "./input";
import List from "./list";
import Total from "./total";

const Calculator = () => {
    
    const [list, updateList] = useState([])
    
    useEffect(() =>{
        const localList = JSON.parse(localStorage.getItem('list'))
        if(localList && localList.length >0){
            updateList(localList)
        }
    },[])

     useEffect(() =>{
         localStorage.setItem('list',JSON.stringify(list))
     },[list])

    return ( 


        <div className ='mx-auto  p-5  rounded-xl relative h-full flex flex-col max-w-[1200px]'>
            <h1 className = ' text-3xl mb-4 text-gray-900/90 xl:text-5xl'><span >Budget</span> Calculator</h1>
            <Input updateList = {updateList}  />
            <List list = {list} updateList = {updateList}/>
            <Total list = {list}/>
        </div>
     );
}
 
export default Calculator;