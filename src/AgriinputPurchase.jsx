import { NavLink } from 'react-router-dom'

function AgriinputPurchase() {
  return (
    <>
    <div className="mainagri" >
    <h2> Agri-input Purchase requests</h2>
    <div>
      <ul className="agriinput">
        <li className="agri_li"><NavLink exact activeClassName="activeclass" className="link" to="/agri/pending">Pending</NavLink></li>
        <li className="agri_li"><NavLink exact activeClassName="activeclass" className="link" to="/agri/executing">Executing</NavLink></li>
        <li className="agri_li"><NavLink exact activeClassName="activeclass" className="link" to="/agri/executed">Executed</NavLink></li>
        <li className="agri_li"><NavLink exact activeClassName="activeclass" className="link" to="/agri/completed">Completed</NavLink></li>
      </ul>
    </div>
    </div>
    </>
  );
}

export default AgriinputPurchase;
