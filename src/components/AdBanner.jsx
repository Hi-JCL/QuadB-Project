function AdBanner() {
  return (
    <div className="flex w-full">
      <div className="flex-[50%] bg-[url('/src/assets/homed1.jpeg')] bg-cover bg-center w-full "></div>
      <div className="flex-[50%] flex flex-col py-28 px-16 gap-4 items-start">
        <p className="text-[#377DFF] font-bold text-lg">SALE UP TO 35% OFF</p>
        <h2 className="text-5xl font-medium">
          HUNDREDS of
          <br /> New lower prices!
        </h2>
        <p className="text-[#141718] max-w-[35rem] text-xl pt-2 pb-2">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <a
          href="#"
          className="inline-flex items-center border-b-[1px] border-black gap-1 mt-3"
        >
          Shop Now{" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16675 10H15.8334"
              stroke="#141718"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8333 15L15.8332 10"
              stroke="#141718"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.8333 5L15.8332 10"
              stroke="#141718"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AdBanner;
