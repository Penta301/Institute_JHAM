import "./index.css";
import { useHistory } from "react-router-dom";

function Profile({ body, edit, setter, editability, setEdit, closeSession }) {
  const history = useHistory();
  const { name, age, interest } = body;
  return (
    <>
      <div>
        <input
          className="input_profile"
          type="text"
          readOnly={edit.name}
          value={name}
          onChange={(e) => {
            setter({ ...body, name: e.currentTarget.value });
          }}
        />
        <button onClick={() => editability(edit, setEdit, "name")}>Edit</button>
        <input
          className="input_profile"
          type="text"
          readOnly={edit.age}
          value={age}
          onChange={(e) => {
            setter({ ...body, age: e.currentTarget.value });
          }}
        />
        <button onClick={() => editability(edit, setEdit, "age")}>Edit</button>
        <input
          className="input_profile"
          type="text"
          readOnly={edit.interest}
          value={interest}
          onChange={(e) => {
            setter({ ...body, interest: e.currentTarget.value });
          }}
        />
        <button onClick={() => editability(edit, setEdit, "interest")}>
          Edit
        </button>
      </div>
      <div>
        {body.courses.map((course) => {
          return (
            <ul key={course}>
              <li>
                <div>{course}</div>
              </li>
            </ul>
          );
        })}
      </div>
      <button
        onClick={() => {
          closeSession();
          history.push("/");
        }}
      >
        Logout
      </button>
    </>
  );
}

export default Profile;
