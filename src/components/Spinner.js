import "./Spinner.css"
function Spinner(){
    return(
        <div className="flex flex-col items-center space-y-2">
            <div className="custom-loader"></div>
            <p className="text-bgDark text-lg font-semibold text-white">loading....</p>
        </div>
    )
}
export default Spinner