import NavBar from "../../components/navbar";
import "./index.css"
const imgclass = "w-100 shadow-1-strong rounded mb-4";
const colclass = "col-lg-4 col-md-12 mb-4 mb-lg-0";

const aeropress = [
  "/src/assets/aeropress/aeropress01.webp",
  "/src/assets/aeropress/aeropress02.webp",
  "/src/assets/aeropress/aeropress03.webp",
  "/src/assets/aeropress/aeropress04.webp",
  "/src/assets/aeropress/aeropress05.webp",
  "/src/assets/aeropress/aeropress06.webp",
  "/src/assets/aeropress/aeropress07.webp",
  "/src/assets/aeropress/aeropress08.webp",
  "/src/assets/aeropress/aeropress09.webp",
];

const chemex = [
  "/src/assets/chemex/chemex01.webp",
  "/src/assets/chemex/chemex02.webp",
  "/src/assets/chemex/chemex03.webp",
  "/src/assets/chemex/chemex04.webp",
  "/src/assets/chemex/chemex05.webp",
  "/src/assets/chemex/chemex06.webp",
  "/src/assets/chemex/chemex07.webp",
  "/src/assets/chemex/chemex08.webp",
  "/src/assets/chemex/chemex09.webp",
];

const french_press = [
  "/src/assets/french_press/frenchpress1.webp",
  "/src/assets/french_press/frenchpress2.webp",
  "/src/assets/french_press/frenchpress3.webp",
  "/src/assets/french_press/frenchpress4.webp",
  "/src/assets/french_press/frenchpress5.webp",
  "/src/assets/french_press/frenchpress6.webp",
];

const kalita = [
  "/src/assets/kalita/kalita1.webp",
  "/src/assets/kalita/kalita2.webp",
  "/src/assets/kalita/kalita3.webp",
  "/src/assets/kalita/kalita4.webp",
  "/src/assets/kalita/kalita5.webp",
  "/src/assets/kalita/kalita6.webp",
];

const moka = [
  "/src/assets/moka/moka1.webp",
  "/src/assets/moka/moka2.webp",
  "/src/assets/moka/moka3.webp",
  "/src/assets/moka/moka4.webp",
  "/src/assets/moka/moka5.webp",
  "/src/assets/moka/moka6.webp",
];

const mrcoffee = [
  "/src/assets/mrcoffee/mrcoffee1.webp",
  "/src/assets/mrcoffee/mrcoffee2.webp",
  "/src/assets/mrcoffee/mrcoffee3.webp",
  "/src/assets/mrcoffee/mrcoffee4.webp",
  "/src/assets/mrcoffee/mrcoffee5.webp",
  "/src/assets/mrcoffee/mrcoffee6.webp",
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
