import React from "react";
 //  material ui
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { Container } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// searchBar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
 
  height: "40px",
  margin: "0 5%",
  borderRadius: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#f6f6f6",
  // color: "#bbb",
  "&:hover": {
    backgroundColor: "#f6f6f6",
  },
  marginTop: theme.spacing(2),

 

  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  "& .css-1oqqzyl-MuiContainer-root": {
    padding: " 0",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({}));

// import './second.scss'
const SearchBar = () => {
  return (
    <div div className="flex w-full  justify-between h-auto  pb-3">
      <Search className="px-2 w-1/2">
        <div className=" w-full  flex ">
         

          <StyledInputBase
            className=""
            placeholder="Search here..."
            inputProps={{ "aria-label": "Search " }}
          />
        </div>
        <div className=" flex justify-center  m-0 p-0 ">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
      </Search>
      <div className="flex gap-3     ">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
