import { useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Heading = ({ lightMode }) => {
  const scrollRef = useRef(null); // Reference to the container element
  console.log('this is light mode for heading',lightMode)

  const images = [
    { src: "/images/band1.jpg", title: "Charlie Puth", date: "6th July" },
    { src: "/images/band2.jpg", title: "Kencho Wangdi", date: "6th July" },
    { src: "/images/band3.jpg", title: "Karsel Dawa", date: "4th July" },
    { src: "/images/band4.jpg", title: "Eminem", date: "4th July" },
    { src: "/images/band5.jpg", title: "William James", date: "11th July" },
    { src: "/images/band6.jpg", title: "Justein Bieber", date: "16th July" },
    { src: "/images/band7.jpg", title: "Taylor Swift", date: "9th July" },
  ];

  const scrollToNext = () => {
    if (scrollRef.current) {
      // Scroll the container to the right by the width of one image
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollToPrev = () => {
    if (scrollRef.current) {
      // Scroll the container to the left by the width of one image
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className={`mx-2 p-2 rounded-md mt-20 border-1 ${lightMode?"bg-white text-black":"bg-black text-white"}`}>
      <div className="space-y-4">
        <h1 className="font-bold text-4xl text-center">Headliners</h1>
        <p className="text-zinc-500">
          Music is an art form that combines sounds and rhythms to create
          expressive compositions. It can evoke emotions, tell stories, and
          connect people across cultures and generations. Music is created using
          various instruments, voices, and digital technology, and it
          encompasses diverse genres, including classical, jazz, rock, pop,
          hip-hop, and more.
        </p>
        <div className="flex items-center justify-center">
          <div>
            <GrPrevious onClick={scrollToPrev} className="text-3xl relative -top-10 cursor-pointer" />
          </div>
          <div
            ref={scrollRef} // Attach the ref to the scrollable container
            className="md:snap-x md:flex md:flex-1 scroll-smooth gap-2 md:overflow-x-scroll md:scrollbar-hide p-4"
          >
            {images.map((image, index) => (
              <div key={index} className="relative min-w-[80%] md:min-w-[30%] snap-center group">
                <div
                  style={{ backgroundImage: `url('${image.src}')` }}
                  className="h-80 w-full bg-cover bg-center hover:backdrop-blur-sm rounded-xl shadow-xl shadow-zinc-500 group-hover:blur-sm"
                ></div>
                <div className="hover:flex flex-col space-y-3 justify-center items-center w-[200px] hidden group-hover:block group-hover:animate-center absolute">
                  <button className="bg-green-900 hover:bg-blue-900 w-[140px] rounded-md p-2 text-md">
                    Listen now
                  </button>
                  <button className="bg-green-900 w-[140px] hover:bg-blue-900 rounded-md p-2 text-sm">
                    Save to listen
                  </button>
                </div>
                <p className="text-lg font-bold text-center">{image.title}</p>
                <p className="text-zinc-500 text-center">{image.date}</p>
              </div>
            ))}
          </div>
          <div>
            <MdOutlineNavigateNext onClick={scrollToNext} className="text-5xl relative -top-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
