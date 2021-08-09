function FullContent({
  Title,
  DescriptionSchool,
  DescriptionUniversity,
  GeneralDescrition,
  Image,
  Owner,
}) {
  return (
    <>
      <article className="full-content-father">
        <div className="full-content-children">
          <h1 className="title-full-content primary-title ">{Title}</h1>
          <div className="inner-full-content">
            <div></div>
            <div className="content-card">
              <h2 className="title-full-content">Secundario</h2>
              <p>{DescriptionSchool}</p>
            </div>
            <div className="content-card">
              <h2 className="title-full-content">Universidad</h2>
              <p>{DescriptionUniversity}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default FullContent;
