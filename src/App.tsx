import Carousel from "./components/carousel";
import NavBar from "./components/navbar";
import Section from "./components/section";
import "./styles/globals.css";

function App() {
  return (
    <>
      <NavBar />

      <section id="hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Welcome to my website</h1>
                <p className="lead">
                  It's my first ever fininshed website and I'm very excited to
                  share it with the world. I didn't really finish it but I'm
                  very proud of it. I'm a begginer in web development so go easy
                  on me.
                </p>
              </div>
            </div>
            <div className="col">
              {Carousel(
                "/banner/banner1.jpg",
                "/banner/banner2.jpg",
                "/banner/banner3.jpg"
              )}
            </div>
          </div>
        </div>
      </section>

      <Section
        section_name="design"
        header="Design?"
        text="I tried Figma but my designs were not as good as I wanted them to be. So I just threw everything together.
                   I'm not a designer so I don't know what I'm doing."
        image="/banner/banner4.jpg"
        reverse={0}
      />

      <Section
        section_name="pictures"
        header="The Pictures"
        text="Except some stock images, all of my pictures were taken by me. I don't have a camera so I just took pictures 
      with my phone. I think they're pretty good."
        image="/banner/banner5.jpg"
        reverse={1}
      />

      <Section
        section_name="time"
        header="Time"
        text="All things considered, time is the most important thing in life. Sometimes you find yourself in a situation where
      you can't find time to do the most basic things. Including this website. It took two full days to finish it. One sleepless night and
      a single free saturday (Excluding all the polishing)."
        image="/banner/banner6.jpg"
        reverse={0}
      />
    </>
  );
}

export default App;
