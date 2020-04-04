import React from 'react'
import './Header.css'

function Header()
{
    return(
        <div style={{backgroundColor:'#3b3bff'}} className="ui  menu">
            <div className="header item">
                <img src="data:image/jpeg;base64,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"/>Handshake
            </div>
            <div className="item">
                <div className="ui icon input">
                    <input type="text" placeholder="Search Jobs , Emplyees, events.."/>
                    <i className="search icon"/>
                </div>
            </div>
            <a  href="#0" className="item">
                Jobs
            </a>
            <a  href="#0" className="item">
                Events
            </a>
            <a  href="#0" className="item">
                Q&A
            </a>
            <a href="#0" className="item">
                Students
            </a>
            <div className="ui dropdown item">
                Career Centre
                <i className="dropdown icon"></i>
                <div className="menu">
                    <a href="#0" className="item">Electronics</a>
                    <a href="#0" className="item">Automotive</a>
                    <a href="#0" className="item">Home</a>
                </div>
            </div>
        </div>
    )
}
export default Header;