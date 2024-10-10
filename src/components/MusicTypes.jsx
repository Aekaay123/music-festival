import { useState } from "react";

const MusicTypes = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const musicGenres = [
    [
      "Classical music is a rich and diverse tradition that spans several centuries, primarily from the late 16th century to the present. It is characterized by its complexity, formality, and adherence to established musical structures and styles. The genre can be divided into several historical periods, including the Baroque (1600-1750), known for its intricate polyphony and ornamentation, with composers like Johann Sebastian Bach; the Classical period (1750-1820), which emphasizes clarity and balance, featuring figures such as Wolfgang Amadeus Mozart; and the Romantic era (1820-1900), where emotional expression and individualism flourished, highlighted by composers like Ludwig van Beethoven.",
    ],
    [
      "Pop music, short for  originated in the mid-20th century and is characterized by catchy melodies, simple lyrics, and broad appeal. It typically follows standard song structures, such as verse-chorus form, making it accessible and enjoyable for a wide audience. The lyrics often focus on themes of love, relationships, and everyday experiences, using straightforward language that resonates with listeners. Production-wise, pop music combines electronic instruments, synthesizers, and traditional instruments like guitars and drums, often utilizing studio techniques to create polished soundscapes. ",
    ],
    [
      "Rock music is a genre that emerged in the 1950s in the United States, characterized by strong beats, electric guitars, and energetic performances. It encompasses various styles, including classic rock, hard rock, punk rock, alternative rock, and grunge. Instrumentation typically features electric guitars, bass, drums, and vocals, often expressing themes of rebellion, love, and social issues. Iconic bands like The Beatles, Led Zeppelin, and Nirvana have significantly influenced the genre, shaping youth culture and social movements. Rock music continues to evolve, integrating elements from other genres and adapting to modern technology, making it a dynamic and enduring part of music history.",
    ],
    [
      "Hip-hop is a vibrant cultural movement and music genre that originated in the 1970s in the Bronx, New York City. It encompasses four key elements: rapping (MCing), DJing, graffiti art, and breakdancing. Hip-hop music is characterized by its rhythmic vocal style known as rapping, which often includes complex wordplay and storytelling about life experiences, social issues, and personal struggles. The genre features a diverse range of beats and sounds, often produced using samples from funk, soul, and jazz music, alongside synthesized sounds and drum machines. Pioneering artists like Grandmaster Flash, Afrika Bambaataa, and Run-D.M.C.",
    ],
    [
      "Jazz music is a dynamic and influential genre that originated in the early 20th century in New Orleans, Louisiana. It is characterized by its improvisational nature, syncopated rhythms, and distinctive use of harmony and melody. Jazz blends elements of African American musical traditions, blues, ragtime, and European classical music, resulting in a rich and diverse sound.Key features of jazz include swing and blue notes, call-and-response patterns, and the use of extended chords. Instruments commonly associated with jazz include the saxophone, trumpet, piano, double bass, and drums, although many other instruments can be incorporated",
    ],
  ];

  return (
    <div className="max-w-6xl mx-auto p-2 mt-10">
      <h1 className="flex justify-center">
        <span className=" bg-gradient-to-r from-cyan-500 text-7xl  to-pink-500 text-transparent bg-clip-text">
          music genres
        </span>
      </h1>
      <div className="w-full flex mt-10">
        <button
          className={`flex-1 p-4 ${
            activeIndex == 0
              ? "bg-gradient-to-r from-violet-500 to-blue-500 text-black"
              : "bg-green-500"
          }`}
          onClick={() => setActiveIndex(0)}
        >
          Classical
        </button>
        <button
          className={`flex-1 p-2 ${
            activeIndex == 1
              ? "bg-gradient-to-r from-violet-500 to-blue-500 text-black"
              : "bg-green-500"
          }`}
          onClick={() => setActiveIndex(1)}
        >
          Pop
        </button>
        <button
          className={`flex-1 p-2 ${
            activeIndex == 2
              ? "bg-gradient-to-r from-violet-500 to-blue-500 text-black"
              : "bg-green-500"
          }`}
          onClick={() => setActiveIndex(2)}
        >
          Rock
        </button>
        <button
          className={`flex-1 p-2 ${
            activeIndex == 3
              ? "bg-gradient-to-r from-violet-500 to-blue-500 text-black"
              : "bg-green-500"
          }`}
          onClick={() => setActiveIndex(3)}
        >
          Jazz
        </button>
        <button
          className={`flex-1 p-2 ${
            activeIndex == 4
              ? "bg-gradient-to-r from-violet-500 to-blue-500 text-black"
              : "bg-green-500"
          }`}
          onClick={() => setActiveIndex(4)}
        >
          Blues
        </button>
      </div>
      <div className="p-4">{musicGenres[activeIndex]}</div>
    </div>
  );
};

export default MusicTypes;
