import safety from "../assets/icon/safety.png";
import higienis from "../assets/icon/icon-higienis.png";
function CardOrder() {
  const dataCard = [
    {
      label: "Cepat & Pengiriman Aman",
      img: safety,
      alt: "safe-delivery",
      color: "#DC5A00",
    },
    {
      label: "Original & Higienis",
      img: higienis,
      alt: "higienis",
      color: "#9D32AD",
    },
    {
      label: "Cepat & Pengiriman Aman",
      img: safety,
      alt: "safe-delivery",
      color: "#0096B9",
    },
    {
      label: "Original & Higienis",
      img: higienis,
      alt: "higienis",
      color: "#D3509B",
    },
  ];

  return (
    <>
      <div className="flex mt-10 justify-center max-sm:flex-col max-sm:items-center max-sm:p-5 max-sm:mt-2">
        {dataCard.map(({ label, img, color, alt }) => {
          return (
            <>
              <div
                className="card-order relative py-10 px-5 mx-4 w-64 h-80 rounded-3xl max-sm:w-full max-sm:my-3"
                style={{ backgroundColor: `${color}` }}
              >
                <div></div>
                <img src={img} className="" alt={alt} />
                <div className="absolute w-44 mb-9 bottom-5">
                  <span className="text-lg text-white font-semibold">
                    {label}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CardOrder;
