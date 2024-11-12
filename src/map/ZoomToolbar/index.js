import React from "react";
import "./styles.scss"

function ZoomToolbar({zoomIn,zoomOut}){
return(
    <div className="zoom-tool-root">
        <div className="zoom-button" onClick={zoomIn}>+</div>
        <div className="zoom-button" onClick={zoomOut}>-</div>
    </div>
)
}

export default ZoomToolbar