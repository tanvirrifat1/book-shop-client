import { Link } from "react-router-dom";
import { useGetBookQuery } from "../redux/features/book/bookAPi";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToWishlist } from "../redux/features/whislist/whislistSlice";
import { addToReaded } from "../redux/features/readedBook/readedBookSlice";
import Swal from "sweetalert2";

interface IBook {
  _id?: string | any;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
const Books = () => {
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading } = useGetBookQuery(undefined);
  console.log("🚀 ~ file: Books.tsx:16 ~ Books ~ data:", data);

  const books: IBook[] = data?.data;

  const dispatch = useAppDispatch();

  const handleAddBook = (BookData: IBook) => {
    dispatch(addToWishlist(BookData));
    Swal.fire("Added WishList", "Successfully added books", "success");
  };
  const handleAddReaded = (BookData: IBook) => {
    dispatch(addToReaded(BookData));
    Swal.fire("Added Readed", "Successfully added books", "success");
  };

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
      <h2 className="mt-1 text-3xl font-bold font-serif">Our Latest Book</h2>
      <p className="text-black mt-1 mb-4 font-mono">
        There are some popular books of mine . You can Explore our book from
        here. Our new Book will publish soon
      </p>

      {isLoading && (
        <div className="mt-1 text-xl font-bold font-serif text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          </div>
        </div>
      )}
      <div className="grid  lg:grid-cols-3 gap-7 sm:max-w-sm sm:mx-auto lg:max-w-full mt-5">
        {/*  */}
        {books?.map((book, i) => {
          const { _id, title, author, genre, publicationDate } = book;
          return (
            <div
              key={i + 1}
              className="flex flex-wrap -mx-4 shadow-md hover:shadow-2xl hover:scale-105 py-1 text-center"
            >
              <Link to={`/bookDetails/${_id}`} className="w-full  px-4 my-1 ">
                <div className="bg-white ">
                  <h2 className="text-lg font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">{author}</p>
                  <p className="text-gray-600">{genre}</p>
                  <p className="text-gray-600">
                    Publication Date: {publicationDate}
                  </p>
                  {/* <Link to={`/bookDetails/${_id}`} className='bg-slate-300 p-2 m-1 shadow-lg font-serif my-4 rounded-md'>Details</Link> */}
                </div>
              </Link>
              {user?.email && (
                <section className="mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm font-medium">
                  <Link
                    to={`/bookDetails/${_id}`}
                    className="py-2 bg-slate-300 rounded-sm my-2 px-1"
                  >
                    Go Details
                  </Link>
                  <button
                    onClick={() => handleAddBook(book)}
                    className="py-2 bg-pink-600 rounded-lg my-2 px-1"
                  >
                    Add Wishlist
                  </button>
                  <button
                    onClick={() => handleAddReaded(book)}
                    className="py-2  bg-pink-600 rounded-lg my-2 px-1"
                  >
                    Add Readed
                  </button>
                </section>
              )}
            </div>
          );
        })}
      </div>

      <Link
        to="/allBook"
        className="px-8 py-3 hover:font-bold font-semibold rounded-full dark:bg-gray-500 text-white"
      >
        See All
      </Link>
    </div>
  );
};

export default Books;
