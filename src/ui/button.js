const Button = ({children, extend}) => {


     let classes = 'bg-blue-500 text-white px-4 py-1 rounded-lg shadow uppercase text-sm mx-auto mt-3 block w-[fit-content] '

     if(extend){
         classes = classes + extend
     }
    return ( 
        <button className = {classes}>
            {children}
        </button>
     );
}
 
export default Button;