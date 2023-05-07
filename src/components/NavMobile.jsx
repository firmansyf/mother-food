import {
  HomeIcon,
  Squares2X2Icon,
  ChatBubbleLeftEllipsisIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function NavMobile() {
  return (
    <>
      <div className="hidden bg-slate-50 w-full max-sm:absolute max-sm:flex max-sm:justify-evenly max-sm:h-12 z-10 bottom-0">
        <div className="flex cursor-pointer">
          <HomeIcon className="flex h-10 w-8 text-black" aria-hidden="true" />
        </div>
        <div className="flex">
          <Squares2X2Icon
            className="block h-10 w-8 text-black"
            aria-hidden="true"
          />
        </div>
        <div className="flex cursor-pointer">
          <ChatBubbleLeftEllipsisIcon
            className="block h-10 w-8 text-black"
            aria-hidden="true"
          />
        </div>
        <div className="flex cursor-pointer">
          <RocketLaunchIcon
            className="block h-10 w-8 text-black"
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}

export default NavMobile;
