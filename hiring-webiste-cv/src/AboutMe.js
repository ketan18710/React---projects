import React from 'react'
import faker from 'faker'

function AboutMe()
{
    return(
        <div style={{borderRadius : '8px',boxShadow: '4px 4px grey',background: 'white'}}>
            <h3 class="header">Get to know Me</h3>
            <div class="description">
                {faker.lorem.paragraph()}
            </div>
        </div>
    )
}
export default AboutMe