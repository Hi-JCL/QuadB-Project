function Carousel() {
  return (
    <div className="flex w-screen max-w-7xl px-12 flex-col gap-8">
      <img src="/src/assets/homeBanner.png" alt="Home Banner" />
      <div className="flex justify-between items-center">
        <h1 className="text-6xl font-medium text-[#141718] w-[90%]">
          Simple Unique<span className="text-[#6C7275]">/</span> <br /> Simply
          Better<span className="text-[#6C7275]">.</span>
        </h1>
        <p className="text-[#6C7275]">
          <span className="font-medium text-black">3legant</span> is a gift &
          decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </div>
    </div>
  );
}

export default Carousel;
