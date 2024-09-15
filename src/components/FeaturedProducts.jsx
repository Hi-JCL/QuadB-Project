function FeaturedProducts() {
  return (
    <div className="flex max-w-7xl px-12 gap-8 pt-16">
      <div className="flex flex-col gap-4 bg-[#F3F5F7] p-10 flex-[50%]">
        <div>
          <h1 className="text-4xl font-medium">Living Room</h1>
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
        <img
          src="/src/assets/fp1.jpeg"
          alt="Living Room"
          className="mix-blend-multiply scale-[1.2]"
        />
      </div>
      <div className="flex flex-[50%] flex-col gap-8">
        <div className="flex gap-4 bg-[#F3F5F7] p-10 items-end flex-[50%]">
          <div>
            <h1 className="text-4xl font-medium">Bedroom</h1>
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
          <img
            src="/src/assets/fp2.jpeg"
            alt="Bedroom"
            className="mix-blend-multiply h-[250px] scale-[1.3] ml-16 mt-[-10%]"
          />
        </div>
        <div className="flex gap-4 bg-[#F3F5F7] p-10 items-end flex-[50%] w-full justify-between">
          <div>
            <h1 className="text-4xl font-medium">Kitchen</h1>
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
          <img
            src="/src/assets/fp3.jpeg"
            alt="Kitchen"
            className="mix-blend-multiply h-[250px] scale-[0.9] mt-[-10%]"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
