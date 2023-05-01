import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-1 flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <span className="uppercase">Mother Foods</span>
              </div>
            </div>
            <div className="flex space-x-4 max-sm:flex-col max-sm:bg-white max-sm:absolute max-sm:mt-52 max-sm:w-full max-sm:items-center max-sm:space-x-0 max-sm:m-0">
              <Link
                to="/product"
                className="text-dark-500 uppercase rounded-md px-3 py-2 text-sm font-medium"
              >
                Product
              </Link>
              <Link
                to="/category"
                className="text-dark-500 uppercase rounded-md px-3 py-2 text-sm font-medium"
              >
                Category
              </Link>

              <Link
                to="/cousine"
                className="text-dark-500 uppercase rounded-md px-3 py-2 text-sm font-medium"
              >
                Cousine
              </Link>

              <Link
                href="/about"
                className="text-dark-500 uppercase rounded-md px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
