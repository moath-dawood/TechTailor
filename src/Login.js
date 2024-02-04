import { Stack, TextField, Box, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import logo from "./logo.png"
import { useAuth } from './Auth';
import Cookies from 'universal-cookie';
import Alert from '@mui/material/Alert';



import React, {
  useState,
} from "react";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [res, setres] = useState('')
  const [error, setError] = useState();
  const { login } = useAuth();
  const cookies = new Cookies();
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const apiEndpoint = 'http://127.0.0.1:8000/accounts/login/';
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setError('')
        const data = await response.json();
        const token = data.access_token;
        login(token);
        cookies.set('token', token, { path: '/dashboard' });
        window.location.href = '/dashboard';
      } else {
        setError("Username or password are incorrect.")
      }
    } catch (error) {
      console.error('Error during login');
    }
  };


  return (
    <div>
      <a href="/"><img style={{ height: "200px", display: "flex", margin: "auto", marginTop: "30px", marginBottom: "30px" }} src={logo} alt="" /></a>
      <div className="login">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Stack mt={"20px"} width={"400px"} height={"fit-content"} margin={"auto"} borderColor={"red"}>
            <Box mt={"30px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PersonIcon fontSize='large' sx={{ color: 'green', mr: 1, my: 1.5 }} />
              <TextField sx={{ "&:focused": { borderColor: "#138A5F", } }} value={username} onChange={(e => setUsername(e.target.value))} fullWidth id="input-with-sx" label="Enter your Username" />
            </Box>
            <Box mt={"20px"} width={"100%"} sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <LockTwoToneIcon fontSize='large' sx={{ color: 'green', mr: 1, my: 2 }} />
              <TextField value={password} onChange={(e => setPassword(e.target.value))} fullWidth type='password' id="input-with-sx" label="Enter your password" />
            </Box>
            <Button variant="outlined"
              type='submit'
              fullWidth
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
                marginTop: "50px",
                borderRadius: "10px",
                marginBottom: "20px",
                fontSize: "17px",
                cursor: "pointer",
                bordercolor: "#138A5F",
                backgroundColor: "#138A5F",
              }}
            > Login </Button>
            {error && <Alert severity="error">{error}</Alert>}
          </Stack>
        </form>
      </div>
    </div>
  )
}

