import Card from "./Card";
import { useState } from "react";
function Cards(props){
    const courses = props.courses;
    const category = props.category;
    const [likedCourses,setLikedcourses]=useState([])
    function getCourseData(){
        if(category==="All"){
            let allcourses = [];
            Object.values(courses).forEach(array=>{
                array.forEach( coursedata =>{ allcourses.push(coursedata) })
            })
            return allcourses;
        }
        else{
            return courses[category]
        }
       
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourseData().map((course)=><Card key={course.id} course={course}
                    likedCourses={likedCourses} setLikedcourses={setLikedcourses}
                />)
            }
        </div>
    )
  
}


    

export default Cards;