import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const PicCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  return (
    <div className="flex flex-col md:flex-row p-5 gap-5 md:gap-40 bg-neutral-900 h-screen justify-center items-center">
      <div className="flex flex-col rounded-4xl bg-neutral-600 group hover:bg-neutral-800 transition-all duration-300 ease-in-out shadow-gray-500 hover:shadow-xl">
        <div className="flex relative">
          <Webcam
            className="rounded-4xl w-full md:w-auto"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ height: "30em" }}
          />
          <div className="absolute top-57 left-80 transform -translate-x-1/2 -translate-y-1/2 scale-80">
            <img src="./face_capture.png" alt="" />
          </div>
        </div>
        <button className="border-0 group-hover:text-gray-300 text-3xl text-white" onClick={capture}>
          Capture photo
        </button>
      </div>
      {imageSrc && (
        <div className="flex flex-col gap-5">
          <div className="relative bg-neutral-600 rounded-4xl">
            <div
              className="rounded-4xl"
              style={{
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "40em",
                height: "32em",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div className="absolute top-60 right-43 scale-25 transform -translate-x-1/2 -translate-y-1/2">
                <img src="public/ear_rings2_right.png" alt="" />
              </div>

              <div className="absolute top-60 left-60 scale-25 transform -translate-x-1/2 -translate-y-1/2">
                <img src="public/ear_rings2_right.png" alt="" />
              </div>

              <div className="absolute scale-90 top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src="public/necklace_1.png" alt="" />
              </div>
            </div>
            <h2 className="text-center text-3xl text-white">Captured Image</h2>
            <h3 className="text-center text-1xl text-gray-300 pt-2 pb-2">If the image is not captured correctly, just recapture</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default PicCapture;