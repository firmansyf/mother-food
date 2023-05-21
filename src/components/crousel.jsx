import Slider from "react-slick";
// import banner1 from "../assets/icon/banner1.png";
import banner2 from "../assets/icon/banner2.png";
import banner3 from "../assets/icon/banner3.png";

function Crousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imgData = [
    // { img: banner1, alt: "banner-1" },
    { img: banner2, alt: "banner-2" },
    { img: banner3, alt: "banner-3" },
  ];

  return (
    <>
      <Slider
        {...settings}
        className="w-3/4 max-sm:w-full"
        touchMove={false}
        autoplay={true}
      >
        {imgData.map(({ img, alt }, i) => {
          return (
            <div className="" key={i}>
              <img
                src={img}
                alt={alt}
                className="w-full rounded-xl border-2 max-h-96 max-sm:h-36"
              />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Crousel;
