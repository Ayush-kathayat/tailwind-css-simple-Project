const Hero = () => {
  return (
    <div className="relative ">
      <div className="bg-cover bg-center aspect-auto">
        <img src="./hero.webp" alt="hero-cat" />
      </div>

      <div className="absolute top-0 left-0 w-full flex justify-between bg-[rgba(0,0,0,0.7)] items-center">
        <img className="ml-4" src="./chevron-left.svg" alt="left" />
        <a href="#" className="text-background text-xs underline">
          20% Off + Free Shipping on your first order
        </a>
        <img className="mr-4" src="./chevron-right.svg" alt="right" />
      </div>

      <div className="absolute top-64 right-48 flex max-w-[405px] flex-col items-center justify-center rounded-lg bg-white/60 px-4 py-8 backdrop-blur-lg sm:pb-5 w-4/5 h-3/5">
        <h1 className="font-bold text-xl ">Voted #1 Healthiest </h1>
        <h3 className="font-bold text-xl ">Cat Food 🐱🥩</h3>
        <p className="mt-16 w-64">Receive vet-formulated fresh food every month. Take our 1-minute quiz to find the best plan for your cat.</p>

        <button className="mt-10 bg-black rounded-full text-white px-4 py-2 w-36 border-2 border-black hover:bg-background hover:text-black font-bold">Start Now</button>
        <p className="mt-8">100% Money-back guarantee</p>
      </div>
    </div>
  );
};

export default Hero;
