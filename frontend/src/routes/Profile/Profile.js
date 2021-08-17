import "./index.css";
import SimpleNavigation from "../../components/SimpleNavigation/SimpleNavigation";
function Profile({ body, edit, setter, editability, setEdit, closeSession }) {
  const { name, age, interest } = body;
  return (
    <>
      <div className="turn_into_telephone">
        <div className="profile_body_father">
          <SimpleNavigation Cb={closeSession} />
          <div className="horizontal_input_profile">
            <input
              className="text_input text_input_profile shadow"
              type="text"
              readOnly={edit.name}
              value={name}
              onChange={(e) => {
                setter({ ...body, name: e.currentTarget.value });
              }}
            />
            <button
              className="shadow"
              onClick={() => editability(edit, setEdit, "name")}
            >
              Edit
            </button>
          </div>
          <div className="horizontal_input_profile">
            <input
              className="text_input text_input_profile shadow"
              type="text"
              readOnly={edit.age}
              value={age}
              onChange={(e) => {
                setter({ ...body, age: e.currentTarget.value });
              }}
            />
            <button
              className="shadow"
              onClick={() => editability(edit, setEdit, "age")}
            >
              Edit
            </button>
          </div>
          <div className="text_area_section_profile shadow">
            <textarea
              cols="30"
              rows="10"
              className="text_area text_area_profile shadow"
              type="text"
              readOnly={edit.interest}
              value={interest}
              onChange={(e) => {
                setter({ ...body, interest: e.currentTarget.value });
              }}
            ></textarea>
            <div className="button_edit_text_area_section">
              <button
                className="shadow"
                onClick={() => editability(edit, setEdit, "interest")}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="courses_list_profile shadow">
            <h4 className="title_courses">Courses</h4>
            <div className="list_body_inside_profile shadow">
              <ul className="list_profile list">
                {body.courses.map((course) => {
                  return (
                    <li className="item_list_profile shadow text" key={course}>
                      {course}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
