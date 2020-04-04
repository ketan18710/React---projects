import React from 'react'

function SubheadingContentCard(props)
{
    var text = props.desc? props.desc : '' ;
    return(
        <div className="three wide column">
            <h4 className="header">{props.Title}</h4>
            <div className="meta">
                {props.meta}
            </div>
            <div className="description">
                {text}
            </div>
        </div>
    )
}
export default SubheadingContentCard