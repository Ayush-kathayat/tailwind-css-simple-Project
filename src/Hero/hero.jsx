const Hero = () => {
  return (
    <div className="relative">
      <div>
        <img src="./hero.webp" alt="hero-cat" />
      </div>

      <div className="absolute top-0 left-0 w-full flex justify-between bg-[rgba(0,0,0,0.7)] items-center">
        <img className="ml-4" src="./chevron-left.svg" alt="left" />
        <a href="#" className="text-background text-xs underline">20% Off + Free Shipping on your first order</a>
        <img className="mr-4" src="./chevron-right.svg" alt="right" />
      </div>
    </div>
  );
};

export default Hero;
