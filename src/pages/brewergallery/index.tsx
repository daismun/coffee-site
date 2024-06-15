import NavBar from "../../components/navbar";
import "./index.css"
const imgclass = "w-100 shadow-1-strong rounded mb-4";
const colclass = "col-lg-4 col-md-12 mb-4 mb-lg-0";

const aeropress = [
  "/aeropress/aeropress01.webp",
  "/aeropress/aeropress02.webp",
  "/aeropress/aeropress03.webp",
  "/aeropress/aeropress04.webp",
  "/aeropress/aeropress05.webp",
  "/aeropress/aeropress06.webp",
  "/aeropress/aeropress07.webp",
  "/aeropress/aeropress08.webp",
  "/aeropress/aeropress09.webp",
];

const chemex = [
  "/chemex/chemex01.webp",
  "/chemex/chemex02.webp",
  "/chemex/chemex03.webp",
  "/chemex/chemex04.webp",
  "/chemex/chemex05.webp",
  "/chemex/chemex06.webp",
  "/chemex/chemex07.webp",
  "/chemex/chemex08.webp",
  "/chemex/chemex09.webp",
];

const french_press = [
  "/french_press/frenchpress1.webp",
  "/french_press/frenchpress2.webp",
  "/french_press/frenchpress3.webp",
  "/french_press/frenchpress4.webp",
  "/french_press/frenchpress5.webp",
  "/french_press/frenchpress6.webp",
];

const kalita = [
  "/kalita/kalita1.webp",
  "/kalita/kalita2.webp",
  "/kalita/kalita3.webp",
  "/kalita/kalita4.webp",
  "/kalita/kalita5.webp",
  "/kalita/kalita6.webp",
];

const moka = [
  "/moka/moka1.webp",
  "/moka/moka2.webp",
  "/moka/moka3.webp",
  "/moka/moka4.webp",
  "/moka/moka5.webp",
  "/moka/moka6.webp",
];

const mrcoffee = [
  "/mrcoffee/mrcoffee1.webp",
  "/mrcoffee/mrcoffee2.webp",
  "/mrcoffee/mrcoffee3.webp",
  "/mrcoffee/mrcoffee4.webp",
  "/mrcoffee/mrcoffee5.webp",
  "/mrcoffee/mrcoffee6.webp",
];

function ImageGrid({ title, images }: { title: string; images: string[] }) {
  return (
    <div className="row coffee-row">
      <h1>{title}</h1>
      {images.map((img, index) => (
        <div key={index} className={colclass}>
          <img src={img} className={imgclass} />
        </div>
      ))}
    </div>
  );
}
function BrewerGallery() {
  return (
    <>
      <NavBar />
      <div className="container">
      <ImageGrid title="The Chemex" images={chemex} />
      <ImageGrid title="The Aeropress" images={aeropress} />
      <ImageGrid title="The French Press" images={french_press} />
      <ImageGrid title="The Kalita" images={kalita} />
      <ImageGrid title="The Moka Pot" images={moka} />
      <ImageGrid title="The Mr. Coffee" images={mrcoffee} />
      </div>
    </>
  );
}

export default BrewerGallery;
