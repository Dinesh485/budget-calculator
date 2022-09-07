

const Total = ({list}) => {
    
    
  let total = 0;
  
   Array.isArray(list) && list.length > 0 && list.forEach(item =>{
      total = total + item.amount
    })

    return ( 
        <div className = "flex justify-between my-5 text-gray-900/90 items-center">
            <h2 className = 'font-medium text-lg'>Total spendings</h2>
             <p className = ' py-1 rounded-md font-thin  text-5xl lg:text-7xl  text-gray-700/90'>${total }</p>
        </div>
     );
}
 
export default Total;