import "./index.css";
import LogicPayment from "../../helpers/Payment/Logic2";
import { IconContext } from "react-icons";
import { GrClose } from "react-icons/gr";

function FullContent({
  Title,
  DescriptionSchool,
  DescriptionUniversity,
  GeneralDescrition,
  Owner,
  CloseContent,
  Price,
  response_id,
}) {
  return (
    <>
      <article className="full-content-father">
        <div className="main-full-content">
          <h1 className="title-main-content">{Title}</h1>
          <IconContext.Provider value={{ className: "close_content_icon" }}>
            <GrClose onClick={CloseContent} />
          </IconContext.Provider>
        </div>
        <p className="description_showed_content">{GeneralDescrition}</p>
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
        <LogicPayment response_id={response_id}></LogicPayment>
        <h4 className="owner_showed_content">Teacher: {Owner}</h4>
        <h4 className="owner_showed_content">Price: {Price}</h4>
      </article>
    </>
  );
}

export default FullContent;
