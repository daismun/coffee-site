function Section({
  section_name,
  header,
  text,
  image,
  reverse,
}: {
  section_name: string;
  image: string;
  header: string;
  text: string;
  reverse: number;
}) {
  if (reverse == 0) {
    return (
      <>
        <section id={section_name}>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <img className="banner_images" src={image} />
              </div>
              <div className="col">
                <div className="jumbotron jumbotron-fluid">
                  <h1 className="display-4">{header}</h1>
                  <p className="lead">{text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else if (reverse == 1) {
    return (
      <>
        <section id={section_name}>
          <div className="container text-center">
            <div className="row">
              <div className="col">
                <div className="jumbotron jumbotron-fluid">
                  <h1 className="display-4">{header}</h1>
                  <p className="lead">{text}</p>
                </div>
              </div>
              <div className="col">
                <img className="banner_images" src={image} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Section;
