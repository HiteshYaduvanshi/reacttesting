import React from 'react';
import { NavLink } from 'react-router-dom'

const MainMenue =()=>{
    return(
        <>
        <div className='menue'>
            <NavLink exact activeClassName="activeclass" className="link" to="/agripurchase">Agri-Purchase Management</NavLink>  <hr />
            <NavLink exact activeClassName="activeclass" className="link" to="/agriinput">Agri-Input Master Maintenance</NavLink> <hr />
            <NavLink exact activeClassName="activeclass" className="link" to="/supplier">Supplier Master Maintenance</NavLink> <hr />
            <NavLink exact activeClassName="activeclass" className="link" to="/">Agri-Input Purchase Request</NavLink> 
            <span><hr /><NavLink exact activeClassName="activeclass" className="bottomlink" to="/taxmaster">Tax Master Maintenance</NavLink></span>
        </div>
        </>
    )
}
export default MainMenue;