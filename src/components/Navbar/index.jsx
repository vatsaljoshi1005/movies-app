import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SelectorComponent from '../selectorcomponent';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTitle, setSelectedGenre, setMinRating } from '../../slice/filterSlice';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const dispatch = useDispatch();
  const searchTitle = useSelector((state) => state.filters.searchTitle);
  const selectedGenre = useSelector((state) => state.filters.selectedGenre);
  const minRating = useSelector((state) => state.filters.minRating);

  // ✅ Declare these ABOVE the return
  const genres = ['All','Sci-Fi','Action','Adventure', 'Thriller', 'Crime', 'Drama','Romance','Biography','Animation','Superhero'];
  const ratings = ['All',7,8,9];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Movies App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTitle}
              onChange={(e) => dispatch(setSearchTitle(e.target.value))}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <SelectorComponent
              label="Genre"
              value={selectedGenre}
              onChange={(value) => dispatch(setSelectedGenre(value))}
              options={genres}
            />
            <SelectorComponent
              label="Rating"
              value={minRating}
              onChange={(value) => dispatch(setMinRating(parseFloat(value)))}
              options={ratings}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
