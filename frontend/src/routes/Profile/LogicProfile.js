import { useEffect, useState } from "react";
import Profile from "./Profile";

function LogicProfile({ setUser, getUser, user, closeSession }) {
  useEffect(() => {
    getUser(setUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [edit, setEdit] = useState({
    age: "readonly",
    name: "readonly",
    interest: "readonly",
  });

  const editability = (body, setter, where) => {
    if (body[where] === "readonly") {
      setter({ ...body, [where]: "" });
      return;
    }
    setter({ ...body, [where]: "readonly" });
  };

  return (
    <div>
      <Profile
        body={user}
        setter={setUser}
        edit={edit}
        setEdit={setEdit}
        editability={editability}
        closeSession={closeSession}
      />
    </div>
  );
}

export default LogicProfile;
