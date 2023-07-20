import logo from "../assets/img6.jpeg";
import logo1 from "../assets/img2.jpeg";
import logo2 from "../assets/img3.jpg";
import logo3 from "../assets/img4.jpg";
import logo4 from "../assets/img5.jpg";

const BookCover = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-2xl">
        Here's our book gallery
      </div>
      <div>
        <section className="py-6">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src={logo4}
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={logo3}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={logo2}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={logo1}
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src={logo}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookCover;
