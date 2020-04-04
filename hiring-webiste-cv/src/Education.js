import React from 'react'
import EducationCard from './EducationCard'

function Education()
{
    return(
        <div style={{borderRadius : '8px',boxShadow: '4px 4px grey',background: 'white'}}>
            <strong>
                Education
            </strong>
            <EducationCard 
                schoolName="Temple University"
                schoolType="primary education"
                degree = "Bachelors,  College of Engineering"
                from = "Aug 2016"
                to="June 2020"
                major="Computer Science"
                minor="Economics"
            />
        </div>
    )
}
export default Education