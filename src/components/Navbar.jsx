import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import {
  BellIcon,
  ChatBubbleLeftEllipsisIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { NavLink as Link } from "react-router-dom";
import listProfile from "../assets/jsonData/listDataProfile.json";
import dataCart from "../assets/jsonData/listDataCart.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { data } = listProfile;
  const { data_cart } = dataCart;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <>
      <Disclosure as="nav" className="shadow">
        {() => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> */}
                {/* Mobile menu button*/}
                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div> */}

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link
                    to="/"
                    className="flex max-sm:mr-14 flex-shrink-0 items-center"
                  >
                    {/* <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="Your Company"
                    /> */}
                    <span className="font-semibold mx-2">
                      Mother <i className="text-green-500">Foods</i>
                    </span>
                  </Link>
                  <div className="flex flex-1 items-center sm:ml-6 sm:flex">
                    {/* <div className="flex ml-52 items-center space-x-7">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={({ isActive }) =>
                            isActive
                              ? "text-black font-semibold"
                              : "text-slate-700 hover:bg-gray-700 hover:text-white"
                          }
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div> */}

                    <div className="w-full max-sm:hidden flex items-center relative rounded-md shadow-sm border-0 py-1.5 pl-2 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-200 sm:text-sm sm:leading-6">
                      <span className="text-gray-500 mr-2 sm:text-sm">
                        <MagnifyingGlassIcon
                          className="flex h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>

                      <input
                        type="text"
                        name="search"
                        id="price"
                        className="block w-full outline-none"
                        placeholder="Search..."
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex items-center">
                    <div className="chat-icon cursor-pointer relative items-center h-11 w-9 flex max-sm:hidden">
                      <span
                        className="absolute rounded-full flex text-white font-semibold top-0 right-0 items-center  justify-center h-5 w-7 text-center bg-green-600"
                        style={{ fontSize: "11px" }}
                      >
                        {/* <span className="relative inline-flex rounded-full h-3 w-3"> */}
                        99+
                        {/* </span> */}
                      </span>
                      <ChatBubbleLeftEllipsisIcon
                        className="hover:text-slate-400 ml-1 h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="bell-icon cursor-pointer relative flex">
                      <BellIcon
                        className="hover:text-slate-400 mx-1 h-6 w-6"
                        aria-hidden="true"
                      />
                      <span className="absolute right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                    </div>

                    <Menu
                      as="div"
                      className="cart-icon cursor-pointer justify-center flex relative items-center h-12 w-10"
                    >
                      <div className="">
                        <Menu.Button>
                          {data_cart.length > 0 && (
                            <span
                              className="absolute rounded-full flex text-white font-semibold top-0 right-0 items-center justify-center h-5 w-7 text-center bg-red-500"
                              style={{ fontSize: "11px" }}
                            >
                              {/* <span className="relative inline-flex rounded-full h-3 w-3"> */}
                              {data_cart.length}
                              {/* </span> */}
                            </span>
                          )}
                          <ShoppingCartIcon
                            className="hover:text-slate-400 mx-1 h-6 w-6"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white px-2 pb-2 pt-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {data_cart.map(
                              ({ path, label, quantity, harga }, i) => {
                                return (
                                  <>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <>
                                          <div
                                            className={`flex flex-col ${
                                              i > 0 ? ` border-t-2` : ""
                                            } mb-1 `}
                                          >
                                            <div className="flex items-center justify-between">
                                              <a
                                                key={i}
                                                href={path}
                                                className={classNames(
                                                  active ? "bg-gray-100" : "",
                                                  "block px-4 pt-2 text-sm font-semibold text-gray-700"
                                                )}
                                              >
                                                {label}
                                              </a>
                                              <span className="text-xs flex w-16 justify-end text-slate-500">
                                                <span>qty:</span>&nbsp;
                                                <p>( {quantity} )</p>
                                              </span>
                                            </div>
                                            <div className="flex text-xs px-4 mt-2 text-slate-400">
                                              IDR : {formatter.format(harga)}
                                            </div>
                                          </div>
                                        </>
                                      )}
                                    </Menu.Item>
                                  </>
                                );
                              }
                            )}
                          </Menu.Items>
                        </Transition>
                      </div>
                    </Menu>
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3 cursor-pointer">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        {/* <span className="sr-only">Open user menu</span> */}
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {data.map(({ path, label }, i) => {
                          return (
                            <>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    key={i}
                                    href={path}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "px-4 py-2 text-sm flex text-gray-700"
                                    )}
                                  >
                                    <span className="flex w-full">
                                      {i === 0 && (
                                        <UserIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {i === 1 && (
                                        <Cog6ToothIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      )}
                                      {i === 2 && (
                                        <ArrowLeftOnRectangleIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                      )}
                                      &nbsp;
                                      {label}
                                    </span>
                                  </a>
                                )}
                              </Menu.Item>
                            </>
                          );
                        })}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {/* {open && <NavMobile />} */}

            {/* <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
          </>
        )}
      </Disclosure>
    </>
  );
}
