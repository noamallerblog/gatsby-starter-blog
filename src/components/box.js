import * as React from "react"

const Box = ({level, children}) => {
  
  const compute = (level) => {
    switch (level) {
        case 0:
            return "boxlevel0"
        case 1:
            return "boxlevel1" 
        case 2:
            return "boxlevel2"      
        default:
            break;
    }
  }

  return (
      <div className={compute(level)}>
        {children}
      </div>
  )
}

export default Box