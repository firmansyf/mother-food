import { Link } from "react-router-dom";
import youtube from "../assets/icon/youtube.png";
import linkedin from "../assets/icon/linkedin.png";
import tiktok from "../assets/icon/tiktok.png";
import facebook from "../assets/icon/facebook.png";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  const navigator = [
    { label: "Tentang Mother Foods", path: "/" },
    { label: "List makanan", path: "/" },
    { label: "FAQ", path: "/" },
    { label: "Panduan Belanja", path: "/" },
    { label: "Panduan keamanan", path: "/" },
    { label: "Panduan HAKI", path: "/" },
  ];

  const motherFoods = [
    { label: "Mitra", path: "/" },
    { label: "Karir di Mother Foods", path: "/" },
    { label: "Kebijakan Privasi", path: "/" },
  ];

  const pembeli = [
    { label: "Cara Belanja", path: "/" },
    { label: "Pembayaran", path: "/" },
  ];

  const medsos = [
    { label: "Facebook", img: facebook, path: "/mother-foods" },
    { label: "Youtube", img: youtube, path: "/mother-foods" },
    { label: "Linkedin", img: linkedin, path: "/mother-foods" },
    { label: "Tiktok", img: tiktok, path: "/mother-foods" },
  ];

  const alamat = [{ label: "Bandung, Jawa Barat, Indonesia" }];

  return (
    <>
      <div className="flex flex-col mt-20 items-center w-full max-sm:mt-7">
        <div className="flex justify-between items-center w-full p-5 bg-slate-50 border-t-2 border-b-2 max-sm:flex-col max-sm:p-2 max-sm:items-start">
          <div className="flex items-center ml-20 max-sm:ml-0">
            <h4 className="mx-3 font-semibold text-lg max-sm:text-sm max-sm:m-0">
              Mother <i className="text-green-500">Foods</i>
            </h4>
            <span className="text-xs text-slate-500">
              Platform jual beli makanan online mudah & terpercaya
            </span>
          </div>

          <div className="flex items-center w-64 max-sm:mt-2">
            <span className="text-xs text-slate-500">Temukan kami di :</span>
            <div className="flex w-5/12 ml-3 justify-between ">
              {medsos.map(({ label, img, path }, i) => {
                return (
                  <>
                    <Link to={path}>
                      <img
                        title={label}
                        src={img}
                        key={i}
                        className="w-6 rounded-full shadow-sm max-sm:w-5"
                        alt={label}
                      />
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-evenly bg-slate-50 w-full max-sm:flex-col">
          <div className="flex flex-col max-w-xl w-72 py-5 max-sm:w-full">
            {navigator.map(({ label, path }, i) => {
              return (
                <Link to={path} key={i}>
                  <div className="border-2 text-center my-3 p-1 max-sm:w-4/6 max-sm:ml-16">
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col py-8 max-sm:justify-center max-sm:items-center">
            <span className="mb-2 text-slate-400">Mother Foods</span>
            {motherFoods.map(({ label, path }, i) => {
              return (
                <Link to={path} key={i}>
                  <div className="my-2">
                    <span className="text-xs">{label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col py-8 max-sm:justify-center max-sm:items-center">
            <span className="mb-2 text-slate-400">Pembeli</span>
            {pembeli.map(({ label, path }, i) => {
              return (
                <Link to={path} key={i}>
                  <div className="my-2">
                    <span className="text-xs">{label}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col py-8 max-sm:justify-center max-sm:items-center">
            <span className="mb-2 text-slate-400">Alamat</span>
            {alamat.map(({ label }, i) => {
              return (
                <div className="my-2" key={i}>
                  <span className="text-xs">{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex p-3 bg-slate-50 border-t-2 w-full max-sm:mb-11 max-sm:justify-center max-sm:items-center">
          <span className="text-xs ml-20 text-slate-500 max-sm:ml-0">
            &copy; {year} Hak Cipta Terpelihara Mother{" "}
            <i className="text-green-500">Foods</i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
