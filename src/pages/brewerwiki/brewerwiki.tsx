import NavBar from "../../components/navbar";
import Jumbotron from "../../components/jumbotron";
import Carousel from "../../components/carousel";
function BrewerWiki() {
  return (
    <>
      <div>
        <NavBar />
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col">
                {Jumbotron(
                  "Second Page",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
                )}
              </div>
              <div className="col">
                {Carousel(
                  "/src/assets/banner/banner1.jpg",
                  "/src/assets/banner/banner2.jpg",
                  "/src/assets/banner/banner3.jpg"
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BrewerWiki;
