const HeroSection = () => {
  return (
    <div className={` flex flex-col gap-5 justify-center items-center h-[calc(100vh-200px)] min-h-[400px] bg-[url('/images/band5.jpg')] bg-cover bg-center bg-fixed `}>
      <div className="relative flex flex-col bg-white/0 rounded-xl p-5">
        <img src="/images/logo.png" alt="logo" width={175} />
        <div className="flex h-14 w-14 absolute top-[115px] left-[80px] gap-1 justify-center items-center rounded-full bg-pink-600">
          <div className="bg-white/50 animate-waywe rounded-full w-1 h-2"></div>
          <div className="bg-white/50 animate-waywe rounded-full w-1 h-3"></div>
          <div className="bg-white/50 animate-waywe rounded-full w-1 h-5"></div>
          <div className="bg-white/50 animate-waywe rounded-full w-1 h-3"></div>
          <div className="bg-white/50 animate-waywe rounded-full w-1 h-2"></div>
        </div>
        <div className="text-3xl text-zinc-200 text-center font-bold">
          tw: <span className="text-blue-900">mf</span>
        </div>
      </div>
      <div className="text-white text-2xl font-bold text-center">
        <p>keep me updated with news and information </p>
      </div>
      <form className="">
        <div className="flex gap-2 ">
          <input
            type="email"
            className="p-2 backdrop-blur-md caret-pink-900 rounded-md outline-none opacity-50 place-content-center placeholder-black bg-white/50"
            placeholder="Enter your email"
          />
          <button className="bg-pink-700 p-2 font-bold backdrop-blur-sm hover:bg-green-500 rounded-md opacity-90">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
