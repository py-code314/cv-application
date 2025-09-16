import '../styles/NavButtons.css'

const NavButtons = ({onClick, showSection}) => {
  return ( 
    <div className="btns btns--nav">
      <button className="btn btn--nav">Previous</button>
      <button className="btn btn--nav" onClick={onClick}>Next{showSection.personalDetails && ': Education'}
      </button>
    </div>
   );
}
 
export default NavButtons;