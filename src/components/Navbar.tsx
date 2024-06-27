
const Navbar = () => {
  return (
    <nav className="bg-customPurple w-full h-24 px-8 fixed top-0 left-0 z-50 hidden md:block">
      <div className="md:h-16 h-28 mx-auto md:px-4 flex items-center justify-between flex-wrap">
        <div className="text-white text-2xl mb-3 md:mb-0 font-bold mx-auto">
          <img src="/logo.svg" alt="logo" className="h-14 w-15 mt-4 flex " />
        </div>
        <div className="hidden md:flex mx-auto">
          <ul className="flex space-x-32 text-xl">
            <li className="text-white">
              <a href="#home">Home</a>
            </li>
            <li className="text-white">
              <a href="#about">About</a>
            </li>
            <li className="text-white">
              <a href="#lab">Lab</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

