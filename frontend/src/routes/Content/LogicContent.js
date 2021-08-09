import Content from "./Content";
import FullContent from "../FullContent/FullContent";
import { useState, useEffect } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import "./index.css";

function LogicContent({ getAllCourses, typeCourse, coursesData }) {
  const [contentId, setContentId] = useState(false);
  const [showContent, setShowContent] = useState();

  useEffect(() => {
    getAllCourses(typeCourse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeCourse]);

  const handleModal = (array, setterContent, setterId, title) => {
    let newItem = array.filter((v) => v.title === title);
    setterContent(newItem);
    setterId(newItem.title);
  };

  const filterItem = () => {};

  return (
    <>
      <h1 className="title_name_content">{typeCourse}</h1>
      <AnimateSharedLayout>
        <AnimatePresence>
          {contentId && (
            <motion.div layoutId={contentId} className="test_window_father">
              <div className="test_window shadow">
                <h4
                  className="close_button border"
                  onClick={() => setContentId(false)}
                >
                  X
                </h4>
                <div>
                  {filterItem(coursesData, "title", "Test Corto")}
                  {coursesData.filter((item, index) => {
                    const {
                      contentSchool,
                      contentUniversity,
                      title,
                      owner,
                      img,
                    } = item;
                    let id = owner + index;
                    return (
                      <FullContent
                        key={id}
                        title={title}
                        DescriptionSchool={contentSchool}
                        DescriptionUniversity={contentUniversity}
                        Image={img}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {coursesData.map((item) => {
          const { content, img, title } = item;
          return (
            <Content
              key={title}
              img={img}
              description={content}
              title={title}
              setter={setContentId}
              id={title}
            />
          );
        })}
      </AnimateSharedLayout>
    </>
  );
}

export default LogicContent;
