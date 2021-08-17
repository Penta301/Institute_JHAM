import { Cloudinary as Cloud } from "@cloudinary/base";
import { AdvancedImage } from "@cloudinary/react";

function Cloudinary() {
  const imageGeneration = (setter, body) => {
    const id = Math.random().toString(36).substring(2, 7);
    console.log(id);
    const myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "smartrestaurantapi",
        uploadPreset: "z9b3irjk",
        public_id: id,
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          setter({ ...body, img: id });
        }
      }
    );
    myWidget.open();
  };

  const cld = new Cloud({
    cloud: {
      cloudName: "smartrestaurantapi",
    },
  });

  const createImage = (img) => {
    let previewImage = cld.image(img);
    return <AdvancedImage cldImg={previewImage} />;
  };

  return {
    imageGeneration,
    cld,
    createImage,
  };
}

export default Cloudinary;
