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
                  "Welcome to my website",
                  "It's my first ever fininshed website and I'm very excited to share it with the world. \
                  I didn't really finish it but I'm very proud of it. I'm a begginer in web development so go easy on me."
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

        <section id="design">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <img
                  className="banner_images"
                  src="/src/assets/banner/banner4.jpg"
                  alt="banner4"
                />
              </div>
              <div className="col">
                {Jumbotron(
                  "Design?",
                  "I tried Figma but my designs were not as good as I wanted them to be. So I just threw everything together.\
                   I'm not a designer so I don't know what I'm doing."
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="pictures">
          <div className="container text-center">
            <div className="row">
              <div className="col">
                {Jumbotron(
                  "The Pictures",
                  "Except some stock images, all of my pictures were taken by me. I don't have a camera so I just took pictures with my phone.\
                  I think they're pretty good."
                )}
              </div>

              <div className="col">
                <img
                  className="banner_images"
                  src="/src/assets/banner/banner5.jpg"
                  alt="banner5"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container text-center">
            <div className="row">
            <div className="col">
                <img
                  className="banner_images"
                  src="/src/assets/banner/banner6.jpg"
                  alt="banner6"
                />
              </div>
              <div className="col">
               {Jumbotron(
                  "Time",
                  "All things considered, time is the most important thing in life. Sometimes you find yourself in a situation where\
                  you can't find time to do the most basic things. Including this website. It took two full days to finish it. One sleepless night and\
                  a single free saturday."
                )}
              </div>
      
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
