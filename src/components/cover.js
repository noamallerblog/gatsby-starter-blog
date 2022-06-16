import * as React from "react"
import Img from "gatsby-image"
import Box from "./box"

const Cover = ({roles, image}) => {
  return (
      <div className="cover-panel">
        <div className="cover-box">
            <Img fluid={image}/>
        </div>
        <div className="cover-details">
            <Box level={1}>
                {roles}
            </Box>
        </div> 
      </div>     
  )
}

export default Cover