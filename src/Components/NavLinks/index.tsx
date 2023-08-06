import { Link } from 'react-router-dom';
const NavLinks = () => {
  return (
    <section className="flex space-x-6 items-center flex-wrap">
      <Link
        className="inline-flex justify-center rounded-md border border-transparent capitalize px-4 py-2  text-lg font-medium text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 "
        to="/"
      >
        home
      </Link>
    </section>
  );
};

export default NavLinks;
