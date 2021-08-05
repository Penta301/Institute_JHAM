import MiLogo from "../Svg/MiLogo/MiLogo";
import "./index.css";
import Logic from "./Logic";

function Footer() {
  const {
    showContentLogo,
    showLocation,
    showContact,
    setShowContentLogo,
    setShowLocation,
    setShowContact,
  } = Logic();

  return (
    <footer className=" footer_body_father shadow">
      <div className="container_footer">
        <div
          className="item_footer shadow"
          onClick={() => setShowContentLogo(!showContentLogo)}
        >
          <MiLogo width={150}></MiLogo>
          {showContentLogo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              sint provident aperiam accusantium commodi reprehenderit harum
              temporibus animi dolore fugiat. Ad totam quisquam delectus commodi
              illo aliquam aut architecto tempora?
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="container_footer">
        <div
          className="item_footer shadow"
          onClick={() => setShowLocation(!showLocation)}
        >
          <h4>Ubicacion</h4>
          {showLocation ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              sint provident aperiam accusantium commodi reprehenderit harum
              temporibus animi dolore fugiat. Ad totam quisquam delectus commodi
              illo aliquam aut architecto tempora?
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="container_footer ">
        <div
          className="item_footer shadow"
          onClick={() => {
            setShowContact(!showContact);
          }}
        >
          <h4>Contacto</h4>
          {showContact ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              sint provident aperiam accusantium commodi reprehenderit harum
              temporibus animi dolore fugiat. Ad totam quisquam delectus commodi
              illo aliquam aut architecto tempora?
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
