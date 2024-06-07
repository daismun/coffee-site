import Carousel from "./components/carousel";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/navbar";
import "./styles/globals.css";
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col">              
                {Jumbotron(
                  "Lorem Ipsum",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua."
                )}
              </div>
              <div className="col">
                {Carousel(
                  "./src/assets/banner/banner1.jpg",
                  "./src/assets/banner/banner2.jpg",
                  "./src/assets/banner/banner3.jpg"
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="products">
          <div className="container">
            <div className="row">
              <div className="col">
                {Jumbotron(
                  "Products",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                )}
              </div>
              <div className="col">
                <h1>IMG HERE</h1>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>IMG HERE</h1>
              </div>
              <div className="col">
                {Jumbotron(
                  "Services",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                )}
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col">
                {Jumbotron(
                  "About",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                )}
              </div>
              <div className="col">
                <h1>IMG HERE</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
