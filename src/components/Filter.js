function Filter({filterData , setCategory, category}){
   
    const filterHandler = (title)=>{
        setCategory(title)
    }
    return(
        <div className=" w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center"> 
            {filterData.map((data)=>
                <button className={`rounded-md font-medium hover:bg-opacity-80 trasition-all 
                   duration-200 px-3 py-2 text-white bg-black border-2  ${category===data.title ? "bg-opacity-60 border-white":
                   "bg-opacity-40 border-transparent"}
                   `}
                
                   onClick={()=>filterHandler(data.title)} key={data.id}>{data.title}
                </button>)}
        </div>
    )
}
export default Filter;