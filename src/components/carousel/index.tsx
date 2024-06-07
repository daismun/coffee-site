import "./index.css";

function Carousel(img1: string, img2: string, img3: string) {
  return (
    <>
      <div id="coffeeImages" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="Banner 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Banner 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Banner 3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
