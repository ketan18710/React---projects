import React from 'react'
import faker from 'faker'
import TempleUniversity from './TempleUniversity.png'
function EducationCard(props)
{
    return(
        <div className="ui internally celled grid">
            <div className="row">
                <div className="two wide column image">
                    <img className="ui small image"  alt="avatar" src={TempleUniversity}/>
                </div>
                <div className="thirteen wide column gird">
                    <div className="ui thirteen content  column ">
                        <span style={{backgroundRadius: '5px'}} className="ui medium header">
                            <h4 style={{background: 'white',backgroundRadius: '5px'}}>{props.schoolName}   
                                <button style={{background: 'grey',border:'none',backgroundRadius: '15px'}}>{props.schoolType}</button>
                            </h4>
                            
                        </span>
                        {props.degree}
                    </div>
                    <div className="row">
                        <div className="meta">
                            <span>{props.from} - {props.to}</span>
                        </div>
                        <div className="description">
                            <span><strong>Major in</strong>  {props.major}</span>
                        </div>
                        <div className="description">
                            <span><strong>Minor in</strong>  {props.minor}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default EducationCard