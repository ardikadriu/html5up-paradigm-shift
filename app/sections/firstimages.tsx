const Firstimages = () => {
  return (
    <section>
      {" "}
      <header>
        <h3>Erat aliquam</h3>
        <p>
          Vehicula ultrices dolor amet ultricies et condimentum. Magna sed etiam
          consequat, et lorem adipiscing sed dolor sit amet, consectetur amet do
          eiusmod tempor incididunt ipsum suspendisse ultrices gravida.
        </p>
      </header>
      <div className="content">
        <div className="gallery">
          <a href="images/gallery/fulls/01.jpg" className="landscape">
            <img src="images/gallery/thumbs/01.jpg" alt="" />
          </a>
          <a href="images/gallery/fulls/02.jpg">
            <img src="images/gallery/thumbs/02.jpg" alt="" />
          </a>
          <a href="images/gallery/fulls/03.jpg">
            <img src="images/gallery/thumbs/03.jpg" alt="" />
          </a>
          <a href="images/gallery/fulls/04.jpg" className="landscape">
            <img src="images/gallery/thumbs/04.jpg" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Firstimages;
