import React from "react";
import img1 from'./images/abc.png';
import img2 from'./images/a1.png';
import img3 from'./images/a2.png';
import img4 from'./images/Frame5.png';

function LandingPage(){
  const imgStyle1 = {
    width: "1800px",
    height: "auto",
    margin: "0 25px"
     // 0 for top and bottom, 10px for left and right
  };
  const imgStyle2 = {
    marginLeft: "650px"
  };
  


  return(
    <div>
<div>
      <a href="login"><img src={img1} alt="Image 1" style={imgStyle1} /></a>
      <a href="/login"><img src={img2} alt="Image 2" style={imgStyle2} /></a>
      <a href="/login"><img src={img3} alt="Image 3"  /></a>
      <a href="/login"><img src={img4} alt="Image 4" style={imgStyle1} /></a>
    </div>
    </div>
  );
}

export default LandingPage;
