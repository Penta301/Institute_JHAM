import Content from "./Content";
import FullContent from "../FullContent/FullContent";
import { useState, useEffect } from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import "./index.css";

function LogicContent({ getAllCourses, typeCourse, coursesData }) {
  const [contentId, setContentId] = useState(false);

  useEffect(() => {
    getAllCourses(typeCourse);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeCourse]);

  const setter = (value) => {
    if (contentId) {
      setContentId(false);
      return;
    }
    setContentId(value);
  };

  return (
    <>
      <h1 className="title_name_content">{typeCourse}</h1>
      <AnimateSharedLayout>
        <AnimatePresence>
          {contentId && (
            <motion.div layoutId={contentId} className="test_window_father">
              <div className="test_window shadow">
                <div>
                  {coursesData
                    .filter((e) => e.title === contentId)
                    .map((item, index) => {
                      const {
                        title,
                        content_school,
                        content_university,
                        owner,
                        general_description,
                        price,
                        response_id,
                      } = item;
                      let id = owner + index;
                      return (
                        <FullContent
                          key={id}
                          Title={title}
                          GeneralDescrition={general_description}
                          DescriptionSchool={content_school}
                          DescriptionUniversity={content_university}
                          Owner={owner}
                          CloseContent={() => setContentId(undefined)}
                          Price={price}
                          response_id={response_id}
                        />
                      );
                    })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {coursesData.map((item) => {
          const { general_description, img, title } = item;
          return (
            <Content
              key={title}
              img={img}
              description={general_description}
              title={title}
              id={title}
              setter={setter}
            />
          );
        })}
      </AnimateSharedLayout>
    </>
  );
}

export default LogicContent;
