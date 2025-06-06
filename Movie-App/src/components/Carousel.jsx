import { endpoints } from "../utils/endpoints";

export default function Carousel({ trendingMovie }) {
  return (
    <>
      <div className="carousel w-full ">
        {trendingMovie.map((movie, index) => (
          <div id={`slide${index}`} className="carousel-item relative w-full ">
            <img
              src={`${endpoints.backdrop(movie.backdrop_path)}`}
              className="w-full h-[75vh] object-cover"
            />
            <div className=" h-full absolute  w-full flex transform justify-between items-center bg-gradient-to-br from-black to-transparent">
              <button onClick={(e) => {e.preventDefault()}}
                href={`#slide${
                  (index - 1 + trendingMovie.length) % trendingMovie.length
                }`}
                className="btn btn-circle bg-contrast ms-5"
              >
                ❮
              </button>
              <a
                href={`#slide${(index + 1) % trendingMovie.length}`}
                className="btn btn-circle me-5 "
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

{
  /* <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between bg-transparent">
            <a href="#slide1" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between bg-transparent">
            <a href="#slide2" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between bg-transparent">
            <a href="#slide3" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle ">
              ❯
            </a>
          </div>
        </div> */
}
