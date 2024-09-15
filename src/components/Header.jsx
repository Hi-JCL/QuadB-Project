function Header() {
  return (
    <header className="flex h-[80px] justify-between items-center px-12 bg-[var(--primary)] max-w-7xl w-screen">
      <div className="text-2xl font-medium">3legant.</div>
      <nav>
        <ul className="flex space-x-8 text-sm text-[var(--head-text-color)]">
          <li className="font-medium text-black">
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:underline">
              Shop
            </a>
          </li>
          <li>
            <a href="/product" className="hover:underline">
              Product
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex space-x-4 items-center">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          <svg
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4_2688)">
              <circle cx="20.2896" cy="5.28955" r="5.28955" fill="#141718" />
              <path
                d="M18.5489 7.64478V6.94151L20.1921 5.42001C20.3319 5.28476 20.4491 5.16304 20.5438 5.05485C20.64 4.94665 20.7128 4.84071 20.7624 4.73703C20.812 4.63184 20.8368 4.51838 20.8368 4.39666C20.8368 4.26142 20.806 4.14496 20.7444 4.04728C20.6828 3.9481 20.5986 3.87221 20.4919 3.81962C20.3852 3.76552 20.2643 3.73847 20.129 3.73847C19.9878 3.73847 19.8646 3.76702 19.7594 3.82413C19.6542 3.88123 19.573 3.96313 19.5159 4.06982C19.4588 4.17651 19.4303 4.30349 19.4303 4.45076H18.5038C18.5038 4.14871 18.5722 3.88649 18.709 3.66409C18.8457 3.44169 19.0373 3.26963 19.2838 3.14791C19.5302 3.02619 19.8142 2.96533 20.1358 2.96533C20.4664 2.96533 20.7542 3.02393 20.9991 3.14114C21.2455 3.25685 21.4371 3.41764 21.5739 3.62351C21.7106 3.82939 21.779 4.06531 21.779 4.33129C21.779 4.50561 21.7444 4.67767 21.6753 4.84747C21.6077 5.01728 21.4867 5.20587 21.3124 5.41325C21.1381 5.61912 20.8924 5.86631 20.5753 6.15484L19.9014 6.81528V6.84683H21.8399V7.64478H18.5489Z"
                fill="white"
              />
            </g>
            <path
              d="M10 11L10 12C10 13.6569 11.3431 15 13 15C14.6569 15 16 13.6569 16 12V11"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6116 8H9.3886C7.43325 8 5.76449 9.41365 5.44303 11.3424L3.77636 21.3424C3.37001 23.7805 5.25018 26 7.72194 26H18.2783C20.75 26 22.6302 23.7805 22.2238 21.3424L20.5572 11.3424C20.2357 9.41365 18.5669 8 16.6116 8Z"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
            <defs>
              <clipPath id="clip0_4_2688">
                <rect
                  width="10.5791"
                  height="10.5791"
                  fill="white"
                  transform="translate(15)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <a href="/signin">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
