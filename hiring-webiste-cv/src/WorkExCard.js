import React from 'react'
import faker from 'faker'
import user from './user.png'
function printDesc(desc)
{
    var descList = []
    for(var i=0;i<desc.length;i++)
        descList.push(<p> - {desc[i]}</p>);
    return descList;
}

function WorkExCard(props)
{

    return(
        <div style={{marginBottom: '20px'}} className="ui internally celled grid">
            <div className="row">
                <div className="two wide column image">
                    <img className="ui medium image"  alt="avatar" src={user}/>
                </div>
                <div className="thirteen wide column gird">
                    <div className="ui thirteen content  column ">
                        <span className="ui medium header">
                            <h4 style={{background: 'white',backgroundRadius: '5px'}}>{props.designation}</h4>
                        </span>
                        <div class="ui sub header">{props.company}</div>
                    </div>
                    <div className="row">
                        <div className="meta">
                            <span>{props.from} - {props.to} | {props.companyLoc}</span>
                        </div>
                        <div className="description">
                            {printDesc(props.desc)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default WorkExCard