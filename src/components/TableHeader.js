import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const TableHeader = ({ setSearchQuery, handleFilterChange, filterValue }) => {
  const handleSearch = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue.toLowerCase()); // Update searchQuery state
  };

  return (
    <>
      <Grid item xs={3} sm={3} md={3}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D1D1D1", // Outline border color
            },
            "& .MuiInputBase-root": {
              color: "#1769aa", // Text color
            },
            "& .MuiInputBase-input": {
              padding: "10px", // Input padding
            },
            "& .MuiInputLabel-root": {
              color: "#1769aa", // Label color
            },
            "& .MuiInputAdornment-root": {
              color: "#1769aa", // Icon color
            },
          }}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={6}></Grid>
      <Grid item xs={3} sm={3} md={3}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <select
            onChange={handleFilterChange}
            value={filterValue}
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
              borderColor: "#D1D1D1",
              color: "#1769aa",
              padding: "10px",
              width: "150px",
              textAlignLast: "center",
            }}
            className="form-select custom-select" // Adding a custom class for additional styling
            aria-label="Default select example"
          >
            <option style={{ textAlign: "center" }} value="All">
              All
            </option>
            <option style={{ textAlign: "center" }} value="Unblocked">
              Unblocked
            </option>
            <option style={{ textAlign: "center" }} value="Blocked">
              Blocked
            </option>
          </select>
        </div>
      </Grid>
    </>
  );
};

export default TableHeader;
