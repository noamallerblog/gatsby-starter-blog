import * as React from "react"

const Intro = ({children}) => {
  return (
    <div className="intro-box">
        <span> 
            {children}
        </span>
    </div>
  )
}

export default Intro