import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './pic_style.css'


const PicCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  return (
    <div className='flex '>
      <div className='flex flex-col'>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      </div>
      {imageSrc && (
        <div>
          <h2>Captured Image:</h2>
          <div className='absolute'>
            <div style={
              {
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '40em',
                height: '32em',
                position: 'relative',
                zIndex: 1,
              }
            }>
              <div className='absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img src="public\necklace_1.png" alt="" />
              </div>
            </div>
          {/* <img src={imageSrc} alt="Captured" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PicCapture;