import {FcLike  , FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";
function Card(props){
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedcourses = props.setLikedcourses;
    function clickHandler(){
        //if course is already liked course.id will be present in array
        if(likedCourses.includes(course.id)){
            setLikedcourses((prev) => prev.filter( (cid) => cid!== course.id) )
            toast.warning("Like Removed")
        }
        else{
            //not liked
            // need to insert in the array
           if(likedCourses.length===0) setLikedcourses([course.id])
           else{
            setLikedcourses((prev)=>[...prev , course.id])
           }
           toast.success("Liked Successfully")
        }
        console.log("clicked");
    }
    return(
        <div className="w-[300px]  bg-slate-600 rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}/>
                <button onClick={clickHandler} className="w-[35px] h-[35px] grid place-items-center bg-white rounded-full absolute right-2 bottom-0">
                    {
                        likedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>) 
                    }
                </button>
            </div>
           
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6" >{course.title}</p>
                <p className="mt-2 text-white">{course.description}</p>
            </div>
        </div>
    )
}
export default Card;