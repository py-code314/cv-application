const CVReferences = ({ referencesData }) => {
  return (
    <div className="resume__references section-content">
      <h2 className="resume__heading">References </h2>
      {referencesData.map((reference) => (
        <div key={reference.id}>
          <p className="resume__subheading">
            {reference.fullName && `${reference.fullName}`}
            {reference.company && ` from ${reference.company}`}
          </p>
          <p>
            {reference.email} | {reference.phoneNumber}
          </p>
        </div>
      ))}
    </div>
  )
}

export default CVReferences
