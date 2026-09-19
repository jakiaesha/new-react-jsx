import stackImage from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section className="flex items-center justify-between px-10 py-20 gap-10">
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="text-gray-500 text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        <div className="flex gap-4 mt-2">
          <button className="px-6 py-3 rounded-lg font-medium text-white bg-linear-to-r from-orange-500 to-pink-600">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-lg font-medium border border-gray-300 text-gray-700">
            Learn More
          </button>
        </div>
      </div>

      <div className="shrink-0">
        <img src={stackImage} alt="Dev stack illustration" className="w-96" />
      </div>
    </section>
  );
};

export default Banner;