import SimpleNavigation from "../../components/SimpleNavigation/SimpleNavigation";
import CloudinaryWidget from "../../helpers/Cloudinary/Cloudinary";
import "./index.css";

function AdminPanel({ closeSession, course, setCourse, createCourses }) {
  const { imageGeneration, createImage } = CloudinaryWidget();

  return (
    <>
      <SimpleNavigation Cb={closeSession} />
      <div className="header_content_admin_panel">
        <div
          className="image_container_admin_panel shadow"
          onClick={() => imageGeneration(setCourse, course)}
        >
          {course.img ? (
            createImage(course.img)
          ) : (
            <div className="upload_picture_admin_panel ">+</div>
          )}
        </div>
        <div className="main_inputs_text_header_admin_panel">
          <input
            className="text_input text_input_admin_panel shadow"
            type="text"
            placeholder="title"
            value={course.title}
            onChange={(e) =>
              setCourse({ ...course, title: e.currentTarget.value })
            }
          />
          <input
            className="text_input text_input_admin_panel shadow"
            type="text"
            placeholder="general description"
            value={course.general_description}
            onChange={(e) =>
              setCourse({
                ...course,
                general_description: e.currentTarget.value,
              })
            }
          />
        </div>
      </div>
      <div className="main_content_admin_panel">
        <textarea
          value={course.content_school}
          className="text_area shadow text_area_admin_panel"
          cols="30"
          rows="10"
          placeholder="content for the school"
          onChange={(e) =>
            setCourse({
              ...course,
              content_school: e.currentTarget.value,
            })
          }
        ></textarea>
        <textarea
          className="text_area shadow text_area_admin_panel"
          value={course.content_university}
          cols="30"
          rows="10"
          placeholder="content for the university"
          onChange={(e) =>
            setCourse({
              ...course,
              content_university: e.currentTarget.value,
            })
          }
        ></textarea>
      </div>
      <div className="footer_content_admin_panel">
        <input
          type="text"
          className="text_input shadow"
          placeholder="owner"
          value={course.owner}
          onChange={(e) =>
            setCourse({
              ...course,
              owner: e.currentTarget.value,
            })
          }
        />
        <input
          type="text"
          className="text_input shadow"
          placeholder="category"
          value={course.category}
          onChange={(e) =>
            setCourse({
              ...course,
              category: e.currentTarget.value,
            })
          }
        />

        <input
          type="number"
          className="number_input shadow"
          placeholder="price"
          value={course.price}
          onChange={(e) =>
            setCourse({
              ...course,
              price: e.currentTarget.value,
            })
          }
        />
        <select
          className="text_input"
          onChange={(e) =>
            setCourse({ ...course, type_course: e.currentTarget.value })
          }
        >
          <option value="Materia">Materia</option>
          <option value="Curso">Curso</option>
          <option value="Ingreso">Ingreso</option>
        </select>
      </div>
      <div className="button_container_admin_panel">
        <button
          className="button_send text shadow button_send_admin_panel"
          onClick={() => createCourses(course, setCourse)}
        >
          Create
        </button>
      </div>
    </>
  );
}

export default AdminPanel;
