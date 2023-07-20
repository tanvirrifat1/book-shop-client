import BookCover from "../components/BookCover";
import Books from "../components/Books";

const Home = () => {
  return (
    <div className="mt-[4rem]">
      <Books />
      <BookCover />
    </div>
  );
};

export default Home;
