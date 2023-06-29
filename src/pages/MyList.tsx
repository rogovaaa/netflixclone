import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard/MovieCard";
import { favoritesMoviesSelector } from "../store/selectors";
import NavBar from "../components/NavBar/NavBar";

const MyList = () => {
  const favoritesMovies = useSelector(favoritesMoviesSelector);

  return (
    <>
      <NavBar isScrolled />
      <h1 style={{ padding: "80px 0 0 40px" }}>MyList</h1>
      {favoritesMovies.length ? (
        <div
          style={{
            padding: " 40px",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "20px 40px",
          }}
        >
          {favoritesMovies.map((item) => (
            <MovieCard key={item.id} docs={item} />
          ))}
        </div>
      ) : (
        <div>
          <p style={{ padding: "40px" }}>
            You haven't added any titles to your list yet.
          </p>
        </div>
      )}
    </>
  );
};

export default MyList;
