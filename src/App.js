import "./App.css";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
// import Card from "./components/Card";
function App() {
  
  const[courses,setCourses]=useState(null)
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)
  
  
  const fetchData= async()=>{
    setLoading(true)
    try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      //save data on variable
      setCourses(data.data);
      console.log(data.data);
      
    }
    catch(error){
      toast.error("Something went wrong")
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  return(
    <div className=" min-h-screen flex flex-col bg-slate-800">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData={filterData}
          category={category} setCategory={setCategory}
        />
      </div>
      <div className="w-11/12 max-w-[1200] mx-auto flex justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>
    </div>
  )
}

export default App;
