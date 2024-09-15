function Footer() {
  return (
    <footer className="bg-[#141718] text-[#E8ECEF] py-24 px-28 w-full pb-20 w-screen flex justify-center">
      <div className="w-full max-w-[100rem]">
      <div className="flex justify-between items-start pb-16 border-b-[1px] border-[#6C7275]">
        <div className="flex items-center">
          <h2 className="text-[#FFFFFF] text-2xl font-medium pr-6 border-r-[1px] border-[#6C7275] py-0">
            3legant<span className="text-[#6C7275]">.</span>
          </h2>
          <p className="pl-6 py-0">Gift & Decoration Store</p>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-center pt-6">
        <div className="flex space-x-8">
          <p>Copyright © 2023 3legant. All rights reserved</p>
          <p className="text-white font-medium">Privacy Policy</p>
          <p className="text-white font-medium">Terms of Use</p>
        </div>
        <div className="flex space-x-6">
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="4"
                stroke="#FEFEFE"
                stroke-width="1.5"
              />
              <circle cx="18" cy="6" r="1" fill="#FEFEFE" />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#FEFEFE"
                stroke-width="1.5"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                stroke="#FEFEFE"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#FEFEFE"
                stroke-width="1.5"
              />
              <path
                d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                stroke="#FEFEFE"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
