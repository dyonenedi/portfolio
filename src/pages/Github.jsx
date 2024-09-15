import { Link } from "react-router-dom";

export default function About(){
    return (
        <div className="page_content flex-grow">
           <div className="flex flex-col justify-start items-start flex-grow h-full p-10">
                <Link to="https://github.com/dyonenedi/" target="_blank" className="text-xl">GitHub - Dyon Enedi</Link>
                <iframe className="w-full h-full" src="https://github-readme-activity-graph.vercel.app/graph?username=dyonenedi&bg_color=000000&color=00bfbf&line=00bfbf&point=14575b&area=true&hide_border=true"></iframe>
           </div>
        </div>
    )
}