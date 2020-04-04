import React from 'react';
import './App.css';
import Header from './Header'
import Title from './Title'
import Education from './Education'
import WorkEx from './WorkEx'
import DiscoverStudents from './DiscoverStudents'
import AboutMe from './AboutMe'
import Skills from './Skills';
function App() {
  return (
      <div >
        <Header/>
        <Title/>
        <div className="ui internally celled grid">
          <div className="ten wide column">
            <div style={{marginBottom: '20px'}} className="sixteen wide column">
              <Education/>
            </div>
            <WorkEx/>
          </div>
          <div  className="six wide column">
            <div style={{marginBottom: '20px'}} className="sixteen wide column">
              <DiscoverStudents/>
            </div>
            <div style={{marginBottom: '20px'}} className="row">
              <AboutMe/>
            </div>
            <div className="row">
              <Skills
                skills={['html','css','JS','Jquery','RectJS','Php','Python','NodeJS','MsWord','PPT']}
              />
            </div>
              
          </div>
        </div>
      </div>
      
  );
}

export default App;




