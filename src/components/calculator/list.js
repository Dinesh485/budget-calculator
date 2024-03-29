
import Item from "./item";

const List  = ({list, updateList}) => {
    const deleteAll = (e) =>{
        e.preventDefault()
        updateList([])
    }
   
    return ( 
        <div className  = 'mt-4  box-border   flex-grow overflow-y-auto'>
           {
               
   Array.isArray(list) && list.length > 0 && list.map((item, index) =>{
    return(
       <Item item = {item} index = {index} updateList = {updateList} key = {index}/>
    )
   })
           }
        {Array.isArray(list) && list.length > 0 && 
           <a href = '/' onClick = {deleteAll} className = 'mt-5 block'>
                <button className= "bg-red-500/80 flex  items-center py-1 px-6  mx-auto  w-fit text-gray-200"  >
          <svg xmlns="http://www.w3.org/2000/svg"  className = 'w-[15px] mr-2 py-1 stroke-current ' fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
                 <div> delete all</div>
          </button>
           </a>  
          }
        </div>
     );
}
 
export default List;