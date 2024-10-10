// eslint-disable-next-line react/prop-types
const Navbar = ({ lightMode }) => {
  console.log("this is boolean", lightMode);
  return (
    <nav
      className={`flex z-10 sticky top-0 ${
        lightMode ? "bg-gradient-to-r from-gray-500 to-black/50" : "bg-gray-500"
      }  px-5 py-2`}
    >
      <div className="flex gap-4 items-center justify-center text-4xl">
        <img src="/images/logo-inverted.png" width={50} alt="inverted logo" />
        <p className="font-bold font-serif italic">
          Music:<span className="text-blue-900">Aekaay</span>
        </p>
      </div>

      <div className="md:hidden ml-auto cursor-pointer">
        <div className="bg-zinc-200 w-8 h-1 mt-2 rounded-full"></div>
        <div className="bg-zinc-200 w-8 h-1 mt-2 rounded-full"></div>
        <div className="bg-zinc-200 w-8 h-1 mt-2 rounded-full"></div>
      </div>

      <div className="hidden md:flex flex-1 gap-5 text-zinc-900 items-center justify-end  transition-colors ease-in-out duration-500 ">
        <div className=" menu-items group">
          <span>Home</span>
          <div className="absolute  group-hover:block hidden top-full text-right right-0 whitespace-nowrap rounded-b-md bg-gray-500">
            <div className="p-2 hover:bg-white/20">menu items</div>
            <div className="p-2 hover:bg-white/20">menu items</div>
          </div>
        </div>
        <div className=" menu-items group">
          <span>Line ups</span>
          <div className="absolute  group-hover:block hidden top-full text-right right-0 whitespace-nowrap rounded-b-md bg-gray-500">
            <div className="p-2 hover:bg-white/20">menu items</div>
            <div className="p-2 hover:bg-white/20">menu items</div>
          </div>
        </div>
        <div className=" menu-items group">
          <span>Tickets</span>
          <div className="absolute group-hover:block hidden top-full text-right right-0 whitespace-nowrap rounded-b-md bg-gray-500">
            <div className="p-2 hover:bg-white/20">menu items</div>
            <div className="p-2 hover:bg-white/20">menu items</div>
          </div>
        </div>
        <div className=" menu-items group">
          <span>Support</span>
          <div className="absolute  group-hover:block hidden top-full text-right right-0 whitespace-nowrap rounded-b-md bg-gray-500">
            <div className="p-2 hover:bg-white/20">menu items</div>
            <div className="p-2 hover:bg-white/20">menu items</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
