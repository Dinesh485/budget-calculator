const Total = ({list}) => {
    
    let total = 0;

   list.length > 0 && list.forEach(item =>{
     total = total + parseInt(item.amount)
   })


    return ( 
        <div className = "flex justify-between my-5 text-gray-900/90 items-center">
            <h2 className = 'font-medium text-lg'>Total spendings</h2>
             <p className = ' py-1 rounded-md font-thin  text-7xl absolute bottom-0 right-0 text-gray-700/90'>${total }</p>
        </div>
     );
}
 
export default Total;