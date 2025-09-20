// import { useState } from 'react';
import '../styles/NavButtons.css'

const NavButtons = ({ onClick, showSection }) => {
  const isDisabled = showSection.personalDetails
  
  return ( 
    <div className="btns btns--nav">
      <button className="btn btn--nav" onClick={onClick} disabled={isDisabled} aria-disabled={isDisabled ? "true" : "false"}>Previous{showSection.education && ': Personal Details'}</button>
      <button className="btn btn--nav" onClick={onClick}>Next{showSection.personalDetails && ': Education'}
      </button>
    </div>
   );
}
 
export default NavButtons;