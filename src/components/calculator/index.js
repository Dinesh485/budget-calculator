import { useState } from "react";
import Input from "./input";
import List from "./list";
import Total from "./total";

const Calculator = () => {
    
    const [list, updateList] = useState([])

    
    return ( 


        <div className ='bg-gray-100/20 shadow-lg rounded-lg max-w-[500px] mx-auto mt-10 p-5 px-7 '>
            <h1 className = 'font-bold text-2xl mb-4 text-red-500'><span className = 'text-blue-500'>Budget</span> Calculator</h1>
            <Input updateList = {updateList}/>

            <List list = {list} updateList = {updateList}/>

            <Total list = {list}/>
        </div>
     );
}
 
export default Calculator;