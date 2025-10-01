/* Component to display a list of references */
const PreviewReferences = ({ referencesData }) => {
  return (
    <div className="preview__references section-content">
      {/* Section heading */}
      <h2 className="preview__heading">References </h2>
      {referencesData.map((reference) => (
        <div key={reference.id}>
          {/* Subheading */}
          <h3 className="preview__subheading">
            {reference.fullName && `${reference.fullName}`}
            {reference.company && ` from ${reference.company}`}
          </h3>
          {/* Email and phone number */}
          <p>
            {reference.email && `${reference.email}`}
            {reference.phoneNumber && ` | ${reference.phoneNumber}`}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PreviewReferences
