import * as Icons from 'react-icons/md';
const NotFoundPage = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col justify-center items-center w-full">
          <span className="p-3  animate-bounce text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <Icons.MdError />
          </span>
          <h1 className="mt-3 text-center text-2xl capitalize font-semibold text-gray-800 dark:text-white md:text-3xl">
            page not found
          </h1>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
