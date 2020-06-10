import React from "react";
import Slider from "infinite-react-carousel";
import styled from "styled-components";

const ImageSlider = styled(Slider)`
  width: 100%;
`;

export default () => (
  <ImageSlider dots={true} arrows={false} autoplay={true} autoplaySpeed={5000}>
    <div>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvregRlsnz-VBMYN1SDDSu4EEypsnRSZ1CSAF9qXb3F9_Pndek"
        }
      />
    </div>
    <div>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvregRlsnz-VBMYN1SDDSu4EEypsnRSZ1CSAF9qXb3F9_Pndek"
        }
      />
    </div>
    <div>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvregRlsnz-VBMYN1SDDSu4EEypsnRSZ1CSAF9qXb3F9_Pndek"
        }
      />
    </div>
    <div>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvregRlsnz-VBMYN1SDDSu4EEypsnRSZ1CSAF9qXb3F9_Pndek"
        }
      />
    </div>
    <div>
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvregRlsnz-VBMYN1SDDSu4EEypsnRSZ1CSAF9qXb3F9_Pndek"
        }
      />
    </div>
  </ImageSlider>
);
