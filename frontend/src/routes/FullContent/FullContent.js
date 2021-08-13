import "./index.css";

function FullContent({
  Title,
  DescriptionSchool,
  DescriptionUniversity,
  GeneralDescrition,
}) {
  return (
    <>
      <article className="full-content-father">
        <div className="main-full-content">
          <h1 className="title-main-content ">{Title}</h1>
          <p>{GeneralDescrition}</p>
        </div>
        <div className="inner-full-content">
          <div className="content-card">
            <h2 className="title-full-content">Secundario</h2>
            <p>{DescriptionSchool}</p>
          </div>
          <div className="content-card">
            <h2 className="title-full-content">Universidad</h2>
            <p>{DescriptionUniversity}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default FullContent;
