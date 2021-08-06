import "./index.css";

function FullContent({ Title, Description }) {
  return (
    <>
      <article className="full-content-father">
        <div className="full-content-children shadow">
          <h1 className="title-full-content primary-title ">{Title}</h1>
          <div className="inner-full-content">
            <div></div>
            <div className="content-card">
              <h2 className="title-full-content">Secundario</h2>
              <p>{Description}</p>
            </div>
            <div className="content-card">
              <h2 className="title-full-content">Universidad</h2>
              <p>{Description}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default FullContent;
