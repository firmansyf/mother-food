/* eslint-disable react/prop-types */
import { lazy } from "react";
import martabak from "../../assets/icon/martabak.jpg";
import soto_bakso from "../../assets/icon/soto-bakso.png";
import chinese from "../../assets/icon/chinese-food.png";
import fast_food from "../../assets/icon/fast-food.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import makaroni from "../../assets/icon/makaroni-sous.png";
import friedRice from "../../assets/icon/fried-rice.png";
import friedChicken from "../../assets/icon/fried-chicken.png";
import { DataMakanan } from "../../components/dataMakanan";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const Crousel = lazy(() => import("../../components/crousel"));
const CardOrder = lazy(() => import("../../components/cardOrder"));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#b3b1ad",
        borderRadius: 50,
        opacity: ".5",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#b3b1ad",
        borderRadius: 50,
        opacity: ".5",
      }}
      onClick={onClick}
    />
  );
}

function Index() {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const category = [
    { alt: "martabak", img: martabak, label: "Martabak" },
    { alt: "chinese food", img: chinese, label: "Chinese food" },
    { alt: "soto-bakso", img: soto_bakso, label: "Soto & Bakso" },
    { alt: "fast-food", img: fast_food, label: "Fast food" },
    { alt: "soto-bakso", img: soto_bakso, label: "Soto & Bakso" },
    { alt: "fast-food", img: fast_food, label: "Fast food" },
  ];

  const img = [
    { alt: "makaroni-sous", img: makaroni, label: "Makaroni Sous" },
    { alt: "nasi-goreng", img: friedRice, label: "Nasi Goreng" },
    { alt: "chicken-mantul", img: friedChicken, label: "Chicken Mantul" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col max-sm:overflow-x-hidden max-sm:px-2 mt-24 max-sm:mt-20">
        <Crousel />
        <div className="w-3/4 mb-10 flex justify-center items-center flex-col mt-20 max-sm:w-full max-sm:mb-32 max-sm:mt-20">
          <h2 className="font-semibold text-3xl max-sm:text-sm">
            Pilih dari masakan
          </h2>

          <div className="flex w-full justify-between mt-7 max-sm:w-full max-sm:justify-center max-sm:flex-wrap z-10">
            {Array.isArray(category) &&
              category.map(({ alt, img, label }, i) => {
                return (
                  <>
                    <Link to="#" key={i}>
                      <div
                        className="flex flex-col justify-center p-2 max-sm:px-5 shadow-sm cursor-pointer hover:shadow-xl hover:transition-all duration-100 rounded-lg"
                        style={{ overflowX: "hidden" }}
                      >
                        <img
                          src={img}
                          alt={alt}
                          className="w-28 rounded-full shadow-sm shadow-slate-400"
                        />
                        <span className="w-full text-center font-semibold text-sm mt-2 text-slate-500">
                          {label}
                        </span>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>

          <div className="mt-32 max-sm:mt-20 flex justify-start max-sm:justify-center w-full max-sm:mb-5">
            <h2 className="font-semibold ml-5 text-3xl max-sm:text-sm mb-5 max-sm:mb-2">
              Hore... ada yang baru nih!
            </h2>
          </div>

          <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center mt-3 w-full h-72">
            <Slider
              {...settings}
              dots={false}
              slidesToShow={2}
              className="w-6/12 max-sm:w-96 rounded-l pb-10 max-sm:pb-5 shadow-sm"
            >
              {img.map(({ img, alt, label }, i) => {
                return (
                  <div
                    className="px-1 relative cursor-pointer flex flex-col justify-center items-center"
                    key={i}
                  >
                    <img
                      src={img}
                      alt={alt}
                      className="rounded-xl w-72 h-72 mx-10 w-100 outline-none max-sm:h-36"
                      // style={{ height: "21rem" }}
                    />

                    <span
                      className="absolute font-semibold
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> mx-12 w-100 text-slate-50  bottom-2"
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </Slider>

            <div className="col ml-10 flex max-sm:items-center max-sm:justify-center text-center max-sm:m-0">
              <p className="text-slate-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been thes standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="mt-32 max-sm:mt-20 w-ful">
            <h2 className="font-semibold text-3xl text-center max-sm:text-sm">
              Makanan Terlaris 2023
            </h2>

            <div className="w-full flex items-center justify-center mt-3">
              <span className="text-center">
                Cari selera kamu dan makanan kesukaan kamu, rasakan di lidah{" "}
                <br /> dan nikmati ke lezatannya
              </span>
            </div>

            <div className="flex flex-wrap justify-center mt-7 w-full">
              {DataMakanan.slice(0, 8)?.map(
                ({ label, description, img, harga }, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        className="card mx-5 my-5 relative flex flex-col shadow-sm hover:shadow-lg rounded-md w-60 h-72 max-sm:mx-2 max-sm:w-40 max-sm:h-48"
                      >
                        <img src={img} alt="img" className="h-full" />
                        <section
                          className="absolute card-body bottom-0 bg-slate-50 shadow-sm w-full px-2 py-2"
                          // style={{ backgroundColor: "#EEE" }}
                        >
                          <h4 className="title-makanan font-semibold text-slate-500">
                            {label}
                          </h4>
                          <span className="text-yellow-500 rating-makanan">
                            &#9733; &#9733; &#9733; &#9733; &#9733;{" "}
                            <span className="text-slate-500 text-xs">(5)</span>
                          </span>
                          <p className="text-xs harga-makanan mt-1">
                            IDR :{" "}
                            <strong className="text-slate-500">
                              {formatter.format(harga)}
                            </strong>
                          </p>
                          <div className="description-makanan">
                            <p className="">{description || "-"}</p>
                          </div>
                        </section>
                      </div>
                    </>
                  );
                }
              )}
              <div className="w-full">
                <Link
                  to="/product"
                  className="ml-7 max-sm:justify-center max-sm:text-xs flex items-center text-sm text-blue-400 cursor-pointer hover:text-blue-700"
                >
                  Lihat lebih banyak
                  <ChevronDoubleRightIcon
                    className="w-7 h-4"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-32 max-sm:mt-16 w-full ">
            <h2 className="font-semibold text-3xl text-center max-sm:text-sm">
              Kenapa order dari Mother <i className="text-green-500">Foods</i> ?
            </h2>
            <CardOrder />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
