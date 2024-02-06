import React from "react";
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
  Button,
  IconButton,
  Toolbar,
  MenuIcon,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { NavigateBefore, NavigateNext, Search } from "@mui/icons-material";
import Swal from "sweetalert2";
import "../styles/Admin.css";
import TableHeader from "../components/TableHeader";




const ClientListing = () => {
  const [data, setData] = useState([
    {
      clientName: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      totalRequests: 5,
      location: "New York",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    {
      clientName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      totalRequests: 8,
      location: "Los Angeles",
      status: "active",
    },
    // Add more data objects as needed
  ]);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("All")

  const handleRowClick = (item) => {
    console.log(item);
    setSelectedRowData(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const filteredData = data.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const status = filterValue.toLowerCase();
  
    return (
      (status === "all" ||
        (status === "blocked" && item.status.toLowerCase() === "blocked") ||
        (status === "unblocked" && item.status.toLowerCase() === "active")) &&
      (item.clientName.toLowerCase().includes(lowerCaseQuery) ||
        item.location.toLowerCase().includes(lowerCaseQuery))
    );
  });
  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setFilterValue(selectedValue);
   };

  return (
    <div>
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
              CLIENT LISTING
            </Typography>
          </Grid>
        </Grid>

          <div style={{ height: "550px", overflowY: "auto" }}>
            <TableContainer>
              <Table sx={{ minWidth: 800 }}>
                <TableHead
                  sx={{
                    backgroundColor: "#1769aa",
                    color: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    position: "sticky",
                    top: 0,
                    zIndex: 1, // Ensure the header stays above the body
                  }}
                >
                  <TableRow>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Client Name
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Email Address
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Phone Number
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Total Requests
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Location
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
                      <TableCell align="center">{item.clientName}</TableCell>
                      <TableCell align="center">{item.email}</TableCell>
                      <TableCell align="center">{item.phone}</TableCell>
                      <TableCell align="center">{item.totalRequests}</TableCell>
                      <TableCell align="center">{item.location}</TableCell>
                      <TableCell>
                        <Box>
                          <div
                            style={{
                              display: "flex",
                              gap: "5px",
                              fontSize: "10px",
                              textAlign: "center",
                            }}
                          >
                            <Button
                              variant="text"
                              color="primary"
                              size="small"
                              disabled={
                                currentItems[index].status === "blocked"
                              }
                              sx={{
                                fontSize: "12px",
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
                                fontSize: "12px",
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
              </Box>{" "}
            </TableContainer>
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
                    Total Requests: {selectedRowData.totalRequests}
                  </Typography>
                  <Typography variant="body1">
                    Location: {selectedRowData.location}
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
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default ClientListing;
