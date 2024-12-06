import { images } from "../assets/assets";

const HeaderSemLink = () => {
  return (
    <nav className="w-full bg-white border-gray-200 dark:bg-gray-900 z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={images.logo} className="h-14" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Gmaps Card
          </span>
        </a>
      </div>
    </nav>
  );
};

export default HeaderSemLink;
