import React from 'react'
import StudentCard from './StudentCard'
function DiscoverStudents()
{
    return(
        <div style={{borderRadius : '8px',boxShadow: '4px 4px grey',background: 'white'}}>
            <strong>
                Discover Students
            </strong>
            <div style={{marginBottom: '10px'}}>
                <StudentCard 
                    desingnation="Software Developer"
                    department= "Computer Science"
                    company="ABC pvt ltd."
                />
                <StudentCard
                    desingnation="Software Intern"
                    department= "IT Engineering"
                    company="XYZ pvt ltd."
                />
                <StudentCard
                    desingnation="Production Engineering"
                    department= "MEchanical Engineering"
                    company="JCB pvt ltd."
                />
            </div>
            <div>
                <a style={{marginLeft:" 15px",marginTop:'15px'}} href="#0">See all others at Temple University</a>
            </div>
        </div>
    )
}
export default DiscoverStudents