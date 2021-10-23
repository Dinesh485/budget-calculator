const Total = ({list}) => {
    
    let total = 0;

   list.forEach(item =>{
     total = total + parseInt(item.amount)
   })


    return ( 
        <div className = "flex justify-between my-5">
            <h2 className = 'font-medium text-lg'>Total spendings</h2>
             <p className = 'bg-red-500 text-white px-4 py-1 rounded-md'>${total }</p>
        </div>
     );
}
 
export default Total;