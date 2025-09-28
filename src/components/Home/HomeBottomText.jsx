import { Link } from "react-router-dom"

const HomeBottomText = () => {
  return (
    <div className="font-[Lausanne-500] flex items-center justify-center gap-2">
   <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full uppercase px-10 flex items-center h-35">
     <Link className="text-[6.5vw] mt-4" to="/Project">Project</Link>  
   </div>
    <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] border-white rounded-full uppercase px-10  flex items-center h-35  ">
      <Link className="text-[6.5vw] mt-4 " to="/agency">Agency</Link>  </div>
    </div>
  )
}

export default HomeBottomText