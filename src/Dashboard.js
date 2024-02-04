import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from "./logo.png"
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAuth } from "./Auth";
import Cookies from "universal-cookie";
import ADDCOMP from "./ADDCOMP";
import { Title, SearchBar, Numresult } from "./TableData";
import Footer from "./Footer";

export default function DashBoard() {
  const { logout, accessToken } = useAuth();
  const cookies = new Cookies();
  const token = cookies.get("token")
  const [selectedbtn, setSelectedBtn] = useState(null)
  const [component, setComponent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const [operationResult, setOperationResult] = useState('');


  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  const handleClickBtn = (btnName) => {
    setSelectedBtn(btnName);
    setCurrentPage(1)
  }
  const handleFetch = async (btnName) => {
    FetchComponent(btnName)
  }
  async function FetchComponent(btnName) {
    const api = `http://127.0.0.1:8000/dashboard/${btnName}/?page=${currentPage}&search=${query}`
    try {
      const res = await fetch(api, {
        method: 'GET',
        headers: {
          //'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      setComponent(data);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (errors) {
      console.error('Error fetching component:', errors);
    }
  };
  
  const handleNextPage = () => {
    console.log(currentPage);
    if (nextPage) {
      setCurrentPage(currentPage => currentPage + 1);

    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      setCurrentPage(currentPage => currentPage - 1);

    }

  };

  const handleDelete = async (itemId) => {

    try {
      const deleteUrl = `http://127.0.0.1:8000/dashboard/${selectedbtn}/${itemId}/`;
      const deleteResponse = await fetch(deleteUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },

      });
      setOperationResult("Deleted item successfully!");
      setTimeout(() => {
        setOperationResult('');
      }, 2000);
      handleFetch(selectedbtn)
      
    } catch (error) {
      console.error('Error deleting item:', error);
      setOperationResult('Delete failed. Please try again.');

    }
  };

  const handleLogout = async () => {
    try {
      const logoutUrl = 'http://127.0.0.1:8000/dashboard/accounts/logout/';
      const logoutResponse = await fetch(logoutUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      ;
      cookies.remove('token');
      sessionStorage.clear();
      localStorage.clear();
      navigate("/login", {replace: true});
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    if (selectedbtn) {
      FetchComponent(selectedbtn);
    }
    setOperationResult('');
  }, [currentPage, selectedbtn, query]);
console.log(token)
  return ( token ? 
    <div style={{ display: "flex", flexDirection: "column", marginBottom:"80px" }}>
      <div style={{ width: "fit-content", position: "absolute", right: "0px" }}>
        <Button variant="outlined"
          sx={{
            "&:hover": {
              bgcolor: "#d0d0d0",
              borderRadius: "15px",
              borderColor: "#138A5F",
              color: "#138A5F",
              fontWeight: "600"
            },
            color: "white",
            margin: "auto",
            marginTop: "10px",
            marginRight:"10px",
            borderRadius: "15px",
            marginBottom: "20px",
            fontSize: "17px",
            width: "150px",
            height: "50px",
            cursor: "pointer",
            backgroundColor: "#138A5F",
          }}
          onClick={handleLogout}>Logout</Button>
      </div>
      <a href="/"><img style={{ height: "200px", display: "flex", margin: "auto", marginTop: "30px", marginBottom: "30px" }} src={logo} alt="" /></a>
      <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", width: "fit-content", margin: "auto", padding: "30px", borderRadius: "15px" }}>
        <div className="btn-group0">
          <button className="btn" onClick={() => { handleClickBtn('motherboards'); handleFetch('motherboards') }} > Motherboard  </button>
          <button className="btn" onClick={() => { handleClickBtn('cpus'); handleFetch('cpus') }}> CPU  </button>
          <button className="btn" onClick={() => { handleClickBtn('gpus'); handleFetch('gpus') }}> GPU </button>
          <button className="btn" onClick={() => { handleClickBtn('cases'); handleFetch('cases') }}> Case  </button>
          <button className="btn" onClick={() => { handleClickBtn('internal-drives'); handleFetch('internal-drives') }}> Internal Drive  </button>
          <button className="btn" onClick={() => { handleClickBtn('power-supplies'); handleFetch('power-supplies') }}> Power Supply  </button>
          <button className="btn" onClick={() => { handleClickBtn('rams'); handleFetch('rams') }}> RAM  </button>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="btn-group2">
          <button className="btn" onClick={() => { handleClickBtn('laptops'); handleFetch('laptops') }}>Laptops</button>
          <button className="btn" onClick={() => { handleClickBtn('mobiles'); handleFetch('mobiles') }}>Mobiles</button>
        </div>
        <div>
          <hr />
        </div>
        {selectedbtn && (
          <div>
            <Title selectedbtn={selectedbtn} />
            <ADDCOMP selectedbtn={selectedbtn} />
            <SearchBar
              component={component}
              handleDelete={handleDelete}
              selectedbtn={selectedbtn}
              onQueryChange={updateQuery}
              operationResult={operationResult} />

            <div style={{ width: "fit-content", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Numresult component={component.count} />
              <div>
                <button disabled={currentPage === 1} onClick={handlePrevPage} > <ArrowBackIcon sx={{ color: "#138A5F" }} /> </button>
                <button disabled={currentPage === Math.ceil(component.count / 10)} onClick={handleNextPage} > <ArrowForwardIcon sx={{ color: "#138A5F" }} /> </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>

: window.location.href = '/login') ;
}

