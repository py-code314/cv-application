const PreviewReferences = ({ referencesData }) => {
  return (
    <div className="preview__references category-preview">
      <h2 className="preview__heading">References </h2>
      {referencesData.map((reference) => (
        <div key={reference.id}>
          <p className="preview__subheading">
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

export default PreviewReferences
