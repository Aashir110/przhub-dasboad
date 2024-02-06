import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "../styles/Admin.css";
import Swal from "sweetalert2";
import TableHeader from "../components/TableHeader";


const ProfessionalListing = () => {
  const [data, setData] = useState([
    {
      clientName: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      service: "Service A",
      location: "New York",
      companyName: "Company X",
      website: "www.companyx.com",
      range: "Range A",
      servesNationWide: "Yes",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      service: "Service B",
      location: "Los Angeles",
      companyName: "Company Y",
      website: "www.companyy.com",
      range: "Range B",
      servesNationWide: "No",
      status: "active",
    },
    // Add more objects as needed
  ]);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const [filterValue, setFilterValue] = useState("All")


  const filteredData = data.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const status = filterValue.toLowerCase();
  
    return (
      (status === "all" ||
        (status === "blocked" && item.status.toLowerCase() === "blocked") ||
        (status === "unblocked" && item.status.toLowerCase() === "active")) &&
      (item.clientName.toLowerCase().includes(lowerCaseQuery) ||
        item.companyName.toLowerCase().includes(lowerCaseQuery) ||
        item.service.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery))
    );
  });

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setFilterValue(selectedValue);
   };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleRowClick = (item) => {
    setSelectedRowData(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };
  const handleBlock = (index) => {
    // Update the status of the corresponding data item to "blocked"
    const updatedData = [...data];
    updatedData[index].status = "blocked";
    setData(updatedData);
    setIsModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "Client Blocked!",
      text: "Client has been successfully blocked.",
    });
  };

  const handleUnblock = (index) => {
    // Update the status of the corresponding data item to "active" (unblocked)
    const updatedData = [...data];
    updatedData[index].status = "active";
    setData(updatedData);
    setIsModalOpen(false);
    Swal.fire({
      icon: "success",
      title: "Client Unblocked!",
      text: "Client has been successfully unblocked.",
    });
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      <Paper sx={{ padding: "20px", width: "100%", overflowX: "auto" }}>
        <Grid container spacing={2}>
        <TableHeader setSearchQuery={setSearchQuery} handleFilterChange={handleFilterChange}  filterValue={filterValue} />
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="h5"
              sx={{ marginBottom: "20px", color: "#1769aa" }}
            >
              PROFESSIONAL LISTING
            </Typography>
          </Grid>
        </Grid>
        <TableContainer>
          <Table sx={{ minWidth: 800 }}>
            <TableHead sx={{ backgroundColor: "#1769aa" }}>
              <TableRow>
                <TableCell align="center" sx={{ color: "white" }}>
                  Name
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Email
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Phone
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Service
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Location
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Company Name
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Website
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Range
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Serves Nation Wide?
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Block / Unblock
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredData.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
              <TableRow
                  key={index}
                  onClick={(e) => {
                    if (e.target.tagName.toLowerCase() !== "button") {
                      handleRowClick(item);
                    }
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.clientName}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.email}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.phone}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.service}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.location}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.companyName}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.website}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {" "}
                    {item.range}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    {item.servesNationWide}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: "12px" }}>
                    <Box>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "2px",
                          fontSize: "5px",
                          textAlign: "center",
                        }}
                      >
                        <Button
                          variant="text"
                          color="primary"
                          size="small"
                          disabled={currentItems[index].status === "blocked"}
                          sx={{
                            fontSize: "10px",
                            "&:hover": {
                              background: "red",
                              color: "white",
                              textAlign: "center",
                            },
                          }}
                          onClick={() => handleBlock(index)}
                        >
                          Block
                        </Button>
                        <Button
                          variant="text"
                          color="primary"
                          size="small"
                          sx={{
                            fontSize: "10px",
                            "&:hover": {
                              background: "green",
                              color: "white",
                              textAlign: "center",
                            },
                          }}
                          onClick={() => handleUnblock(index)}
                        >
                          Un block
                        </Button>
                      </div>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
            marginBottom: "20px",
            position: "sticky",
            bottom: 0,
            zIndex: 1,
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <IconButton
            color="primary"
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            <NavigateBefore />
          </IconButton>
          <IconButton
            color="primary"
            disabled={indexOfLastItem >= data.length}
            onClick={handleNextPage}
            sx={{ marginLeft: "10px" }}
          >
            <NavigateNext />
          </IconButton>
        </Box>
      </Paper>
      {selectedRowData && (
        <div
          className="modal"
          style={{
            display: isModalOpen ? "block" : "none",
          }}
        >
          <div className="modal-content">
            <Typography variant="h6" gutterBottom>
              Client Details
            </Typography>
            <Typography variant="body1">
              Name: {selectedRowData.clientName}
            </Typography>
            <Typography variant="body1">
              Email: {selectedRowData.email}
            </Typography>
            <Typography variant="body1">
              Phone Number : {selectedRowData.phone}
            </Typography>
            <Typography variant="body1">
              Service: {selectedRowData.service}
            </Typography>
            <Typography variant="body1">
              Location: {selectedRowData.location}
            </Typography>
            <Typography variant="body1">
              Company: {selectedRowData.companyName}
            </Typography>
            <Typography variant="body1">
              Website: {selectedRowData.website}
            </Typography>
            <Typography variant="body1">
              Range: {selectedRowData.range}
            </Typography>
            <Typography variant="body1">
              serves Nation Wide: {selectedRowData.servesNationWide}
            </Typography>
            <Typography variant="body1">
              Status:{" "}
              {selectedRowData.status === "active" ? "Active" : "Blocked"}
            </Typography>
            <Button
              variant="contained"
              onClick={handleCloseModal}
              sx={{ mt: "20px" }}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </Box>
  );
};

export default ProfessionalListing;
