import React from "react";

const Thirdimages = () => {
  return (
    <section>
      <header>
        <h3>Lorem gravida</h3>
        <p>
          Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
          tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper
          dolore. ac varius enim lorem ullamcorper dolore. Proin aliquam
          facilisis.
        </p>
      </header>
      <div className="content">
        <div className="gallery">
          <a href="images/gallery/fulls/08.jpg" className="portrait">
            <img src="images/gallery/thumbs/08.jpg" alt="" />
          </a>
          <a href="images/gallery/fulls/09.jpg" className="portrait">
            <img src="images/gallery/thumbs/09.jpg" alt="" />
          </a>
          <a href="images/gallery/fulls/10.jpg" className="landscape">
            <img src="images/gallery/thumbs/10.jpg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Thirdimages;
