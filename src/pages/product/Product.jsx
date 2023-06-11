import { GlobeAmericasIcon } from "@heroicons/react/24/outline";
import { DataMakanan } from "../../components/dataMakanan";
GlobeAmericasIcon;

function Product() {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const data = [
    { value: "chinese", label: "Chinese" },
    { value: "soto-bakso", label: "Soto dan Bakso" },
  ];

  return (
    <div className="flex flex-col items-center w-full justify-center mt-20">
      <div className="header-produk w-10/12 flex items-center justify-between mt-10">
        <div className="ml-7 flex items-center">
          <h3 className="font-semibold text-3xl max-sm:text-sm mr-5">
            Semua Masakan
          </h3>
          <div>
            <span>Kategori : </span>
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="e.g : Martabak"
            className="border-2"
          />
        </div>
      </div>

      <div className="all-masakan flex justify-around flex-wrap mt-10 w-full p-5 bg-slate-50">
        <div className="flex flex-wrap items-center w-4/5 justify-around">
          {DataMakanan?.map(({ label, description, img, harga }, index) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
