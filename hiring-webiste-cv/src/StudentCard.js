import React from 'react'
import faker from 'faker'
import user from './user.png'
function StudentCard(props)
{
    return(
        <div style={{height: '90px'}} className="ui internally celled grid">
            <div className="four wide column circular  small image">
                <img style={{width: '80px'}} className="ui small circular image" src={user} />
            </div>
            <div style={{height:'90px'}} className="twelve wide middle aligned  column">
                <div className="ui medium header">
                    <h4 className="header">{faker.name.findName()}</h4>
                </div>
                <div className="meta">{props.department} '20</div>
                <span className="meta">{props.company}, {props.designation}</span>
            </div>
        </div>
        
    )
}
export default StudentCard