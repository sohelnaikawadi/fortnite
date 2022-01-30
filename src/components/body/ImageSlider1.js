import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://cdn.nutrabay.com/wp-content/uploads/2021/12/AminosBCAA-DesktopBanner-Upto50.jpg" },
    { url: "https://cdn.nutrabay.com/wp-content/uploads/2021/04/Nutrabay-All-HomePage-Desktop-Banner.jpg" },
    { url: "https://cdn.nutrabay.com/wp-content/uploads/2021/12/3800-x-800-1-1.jpg" },
    { url: "https://cdn.nutrabay.com/wp-content/uploads/2022/01/BigMuscles-DesktopBanner.jpg" }
  ];

function ImageSlider1() {
    return (
        <div>
            <SimpleImageSlider
            width={1440}
            height={300}
            images={images}
            showBullets={false}
            navSize={35}
            showNavs={true}
            loop={true}
            autoPlay={true}
            autoPlayDelay={5.0}
            />
        </div>
    )
}

export default ImageSlider1
