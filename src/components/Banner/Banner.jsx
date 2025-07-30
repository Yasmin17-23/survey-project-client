import bannerImg from "../../assets/images/banner-img.jpg";

const Banner = () => {
  return (
    <div className="my-6 p-4 rounded-2xl opacity-80">
      <div
        className="w-full bg-center bg-cover h-[26rem] rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl font-display">
              Collect Real <span className="text-blue-600">Feedback</span> &
              Drive Better Results.
            </h1>

            <button className="relative px-7 py-3 font-bold text-white rounded-lg group mt-6">
              <span
                className="absolute inset-0 w-full h-full transition duration-300 
              transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 
              group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"
              ></span>
              <span
                className="absolute inset-0 w-full h-full transition duration-300 
              transform translate-x-1 translate-y-1 bg-pink-700 ease opacity-80 
              group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen rounded-md"
              ></span>
              <span className="relative uppercase">View All Survey</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
