import { setMovies } from "../slice/movieSlice";

export const getMovies = (filters) => async (dispatch) => {
  try {
    const response = await fetch('https://685cbdc6769de2bf085da85a.mockapi.io/movies');
    const data = await response.json();

    let filtered = data;

    // Log raw values for debugging
    console.log("Example movie:", data[0]); // Check field names



    if (filters.title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.genre && filters.genre !== "All") {
      filtered = filtered.filter((movie) => movie.genre === filters.genre);
    }

    if (filters.rating && filters.rating !== "All") {
  const minRating = parseFloat(filters.rating);
  filtered = filtered.filter((movie) => {
    const rating = parseFloat(movie.imdbRating);
    return !isNaN(rating) && rating >= minRating;
  });
}



console.log("Filter rating value:", filters.rating);
console.log("Movies after rating filter:", filtered.map(m => ({ title: m.title, rating: m.rating })));


    dispatch(setMovies(filtered));
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
