import React from 'react'
import githubWhite from './assets/github_white.svg'

const cardComponent = ({image, title, githubLink, linkedinLink, description, tags}) => {
  return (
    <div className = "flex flex-col h-84 w-3/12 bg-[#102240] gap-2 p-5 pt-2">
        <a target="_blank" href = {githubLink}><img className = "ml-auto h-8" src = {githubWhite}></img> </a>
        <img className="self-center max-w-full max-h-full object-contain " src={image}></img>
        
        <div className = "text-white text-lg font-rubik"> {title}  </div>
        <p className = "text-white text-justify text-sm font-extralight"> {description}</p>
        <div className = "flex gap-2 mt-auto text-xs ">
            {tags.map((tag, index) =>{
                return(
                <div className = "text-gray-300 border rounded-md p-1.5 pl-3 pr-3" key = {index}> {tag} </div>
                )
            }   
            
            )}

        </div>
    </div>

  )
}
export default cardComponent;
