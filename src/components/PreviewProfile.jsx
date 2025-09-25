const PreviewProfile = ({personalDetailsData}) => {
  return (<div className="preview__profile">
    <h2>Profile</h2>
    <p>{personalDetailsData.aboutMe}</p>
  </div> );
}
 
export default PreviewProfile;