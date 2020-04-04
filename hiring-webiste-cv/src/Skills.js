import React from 'react'

function Skills(props)
{
    var skills=[]
    for(var i=0;i<props.skills.length;i++)
        skills.push(<button style={{background: 'grey',borderRadius:'10px'}}>{props.skills[i]}</button>)
    
        return(
            <div style={{borderRadius : '8px',boxShadow: '4px 4px grey',background: 'white'}}>
                <h4 className="header">Skills</h4>
                <div >
                    {skills}
                </div>
            </div>
             
        )
}
export default Skills