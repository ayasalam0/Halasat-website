import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          HalaSat Company: Internet services includes Share ,TV ,Cienma
        </title>

        <meta
          name="description"
          content="Find The Best Internet Services For All Of Your Needs like fast Internet services Apps Share  , TV ,Cienma"
        />
        <meta property="og:title" content="Halasat " />
        <meta property="og:title" content="هاله سات " />
        <meta
          property="og:description"
          content="هاله سات افضل خدمات انترنت لجميع حاجاتكم"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="w-screen ">
        <Image
          className="w-full "
          src="/1.svg"
          alt="Header Photo"
          width={2000}
          height={800}
        />
        <div className="p-8  md:w-3/5 flex flex-row text-center  md:text-left   ">
          <div className="hidden md:block ">
            {" "}
            <Image
              className="w-1/2"
              src="/Group2.svg"
              alt="cienma photo"
              width={2000}
              height={800}
            />
          </div>

          <div className="text-Gray space-y-3">
            <h1 className=" text-xl font-bold  text-white ">Shashety Cinema</h1>
            <p className="font-light">
              An entertainment platform for watching international and Arab
              films and series, with a daily update of the latest cinematic
              works
            </p>
            <a href="http://cinema.shashety.com/">
              <button className="bg-red  rounded-xl  w-36    h-10 text-white   ">
                Visit the Website
              </button>
            </a>

            <h1 className=" text-xl font-bold text-white  ">
              You can get the APP
            </h1>
            <span className="flex flex-row space-x-2 ">
              <a href="http://google.com">
                {" "}
                <Image
                  className="w-1/2"
                  src="/store1.svg"
                  alt="App Link Photo"
                  width={300}
                  height={100}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=net.halasat.tv">
                <Image
                  className="w-1/2"
                  src="/store2.svg"
                  alt="App Link Photo"
                  width={300}
                  height={100}
                />
              </a>
            </span>
          </div>
        </div>
        <Image
          className="w-1/2"
          src="/Smart panner.svg"
          alt="Header Photo"
          width={2000}
          height={800}
        />

        <div className=" text-center flex flex-row p-8">
          <div className="hidden md:block ">
            <Image
              className="w-1/2    "
              src="/222222.svg"
              alt="Header Photo"
              width={678}
              height={350}
            />
          </div>

          <div className="text-Gray md:text-left md:w-1/2 px-6 space-y-4">
            <h1 className=" text-xl font-bold text-white  ">
              Shashety Live TV
            </h1>
            <p className="font-light">
              A platform to display live channels and the most important local
              and international sports matches with a wide range of
              entertainment channels
            </p>
            <a href="http://cinema.shashety.com/">
              {" "}
              <button className="bg-red  rounded-xl  w-36    h-10 text-white ">
                Visit the Website
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-row  p-8">
          <div className="hidden md:block ">
            <Image
              className="w-1/2  "
              src="/wwwwwwwwwwwwwww.svg"
              alt="Live Tv Photo"
              width={678}
              height={350}
            />
          </div>

          <div className="text-Gray text-center md:w-1/2 py-6 px-6 space-y-4 md:text-left">
            <h1 className=" text-xl font-bold text-white ">Shashety Share</h1>
            <p className="font-light">
              A platform for sharing digital content that contains the largest
              library of programs and electronic games that are ready and can be
              activated and used
            </p>
            <a href="http://cinema.shashety.com/">
              <button className="bg-red  rounded-xl  w-36    h-10 text-white ">
                Visit the Website
              </button>
            </a>
          </div>
        </div>
        <footer>
          <p className="text-Gray  text-center ">
            copyright © 2022 <span className="text-red">Shashety</span>
          </p>
        </footer>
      </main>
    </>
  );
}
