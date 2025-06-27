import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies"; // make sure this function supports filters!
import Grid from "@mui/material/Grid";
import { Box, Container } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();

  // ✅ Get filter values from Redux store
  const searchTitle = useSelector((state) => state.filters.searchTitle);
  const selectedGenre = useSelector((state) => state.filters.selectedGenre);
  const minRating = useSelector((state) => state.filters.minRating);

  // ✅ Get movie list from Redux
  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
  const filters = {};

  // Only add title filter if there's input
  if (searchTitle.trim() !== '') {
    filters.title = searchTitle;
  }

  // Only add genre filter if selected
  if (selectedGenre && selectedGenre !== "All") {
    filters.genre = selectedGenre;
  }

  // Only add rating filter if it's 5 or more
  if (minRating && minRating >= 5) {
    filters.rating = minRating;
  }

  dispatch(getMovies(filters));
}, [dispatch, searchTitle, selectedGenre, minRating]);



  return (
    <Container>
      <Navbar /> {/* Make sure Navbar includes filter inputs */}
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          {movies?.length > 0 ? (
            movies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} />
              </Grid>
            ))
          ) : (
            <p>No movies found.</p> // 🟡 Optional fallback if nothing matches
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
