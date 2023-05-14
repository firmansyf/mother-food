import { lazy } from "react";
import martabak from "../../assets/icon/martabak.jpg";
import soto_bakso from "../../assets/icon/soto-bakso.png";
import chinese from "../../assets/icon/chinese-food.png";
import fast_food from "../../assets/icon/fast-food.png";
import { Link } from "react-router-dom";

const Crousel = lazy(() => import("../../components/crousel"));
function Index() {
  const category = [
    { alt: "martabak", img: martabak, label: "Martabak" },
    { alt: "chinese food", img: chinese, label: "Chinese food" },
    { alt: "soto-bakso", img: soto_bakso, label: "Soto & Bakso" },
    { alt: "fast-food", img: fast_food, label: "Fast food" },
    { alt: "soto-bakso", img: soto_bakso, label: "Soto & Bakso" },
    { alt: "fast-food", img: fast_food, label: "Fast food" },
  ];

  return (
    <>
      <div className="flex items-center justify-center flex-col max-sm:overflow-x-hidden max-sm:px-2">
        <Crousel />
        <div className="w-3/4 flex justify-center items-center flex-col mt-16 max-sm:mt-11 max-sm:w-full max-sm:mb-14">
          <h2 className="font-semibold text-3xl max-sm:text-sm">
            Choose from cuisines
          </h2>

          <div className="flex w-3/4 justify-between mt-7 max-sm:w-full max-sm:justify-center max-sm:flex-wrap">
            {Array.isArray(category) &&
              category.map(({ alt, img, label }) => {
                return (
                  <>
                    <Link to="#">
                      <div
                        className="flex flex-col justify-center p-2  max-sm:px-5 shadow-sm cursor-pointer hover:shadow-xl hover:transition-all duration-100 rounded-md"
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
        </div>
      </div>
    </>
  );
}

export default Index;
