import faker from 'faker';
import React from 'react'
import SubConCard from './SubheadingContentCard'
import user from './user.png'

function  Title(props)
{
    return(
        <div style={{margin:'5px',boxShadow: '4px 4px grey',borderColor:'grey',borderRadius:'15px',background: 'white'}} className="ui internally celled grid">
            <div className="row">
                <div className="three wide column image">
                    <img style={{    width: "50%",marginLeft: "25%"}} alt="avatar" src={user}/>
                </div>
                <div className="ui thirteen wide column grid">
                    <div style={{background:'lightblue'}} className="row">
                        <h2 className="header">Ketan Verma</h2>
                    </div>
                    <div className="row">
                        <SubConCard Title="Temple University" meta="Junior" desc="Graduates May 2020"/>
                        <SubConCard Title="Mechanical Engineering" meta="College of Engineering" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Title