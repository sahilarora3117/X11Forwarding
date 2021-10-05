import React, { useState } from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
const electron = window.require('electron');
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
const startSession = (
  _IP: string,
  _PORT: string,
  _USERNAME: string,
  _PASSWORD: string,
  _COMMAND: string
) => {
  var ses = {
    ip: _IP,
    port: _PORT,
    username: _USERNAME,
    password: _PASSWORD,
    command: _COMMAND,
  };
  electron.ipcRenderer.send('ipc-example', ses);
};

const Hello = () => {
  const [IP, setIP] = useState('');
  const [PORT, setPORT] = useState('');
  const [USERNAME, setUSERNAME] = useState('');
  const [PASSWORD, setPASSWORD] = useState('');
  const [COMMAND, setCOMMAND] = useState('');
  return (
    <>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Forward X11 Server</h1>
      </Container>
      
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
      >
        <TextField
          id="outlined-basic"
          type="text"
          onChange={(e) => setIP(e.target.value)}
          label="IP"
        />
        <TextField
          id="outlined-basic"
          type="number"
          onChange={(e) => setPORT(e.target.value)}
          label="Port"
        />
        <br />
        <TextField
          id="outlined-basic"
          type="text"
          onChange={(e) => setUSERNAME(e.target.value)}
          label="Username"
        />
        <TextField
          id="outlined-basic"
          type="password"
          onChange={(e) => setPASSWORD(e.target.value)}
          label="Password"
        />
        <br />
        <TextField
          id="outlined-multiline-flexible"
          multiline
          type="text"
          onChange={(e) => setCOMMAND(e.target.value)}
          label="Command"
        />
        <br />
      </Box>
      </Container>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <button
        type="submit"
        onClick={() => startSession(IP, PORT, USERNAME, PASSWORD, COMMAND)}
      >
        Start Session
      </button>
      </Container>
    </>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
