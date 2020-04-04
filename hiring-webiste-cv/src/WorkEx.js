import React from 'react'
import WorkExCard from './WorkExCard'
import faker from 'faker'
function WorkEx()
{
    return(
        <div style={{borderRadius : '8px',boxShadow: '4px 4px grey',background: 'white',marginTop:'8px'}}>
            <h4 style={{marginLeft: '10px'}}>
                Work Experience
            </h4>
            <WorkExCard 
                designation="Software Developer"
                company="ABC pvt ltd."
                from = "Aug 2019"
                to="Present {June 2020}"
                companyLoc="Gurgaon, Haryana"
                desc={[faker.lorem.sentence(), faker.lorem.sentence()]}
            />
            <WorkExCard 
                designation="Software Intern"
                company="XYZ pvt ltd."
                from = "Aug 2018"
                to="June 2019"
                companyLoc="Gurgaon, Haryana"
                desc={[faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence()]}
            />
        </div>
    )
}
export default WorkEx