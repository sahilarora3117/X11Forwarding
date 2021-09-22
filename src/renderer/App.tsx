import React, {useState} from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
const electron = window.require('electron');
const startSession = (_IP: string, _PORT: string, _USERNAME: string, _PASSWORD: string, _COMMAND: string) => {
  var ses = {
    ip: _IP,
    port: _PORT,
    username: _USERNAME,
    password: _PASSWORD,
    command: _COMMAND
  }
  electron.ipcRenderer.send('ipc-example', ses);

}


const Hello = () => {
  const [IP, setIP] = useState("");
  const [PORT, setPORT] = useState("");
  const [USERNAME, setUSERNAME] = useState("");
  const [PASSWORD, setPASSWORD] = useState("");
  const [COMMAND, setCOMMAND] = useState("");
  return (
    <div>
      <h1>
        Forward X11 Server
      </h1>
      <form>
        <input id="standard-basic" type="text" onChange={e => setIP(e.target.value)} placeholder="IP" required/>
        <input id="standard-basic" type="number" onChange={e => setPORT(e.target.value)} placeholder="port" required/><br />
        <input id="standard-basic" type="text" onChange={e => setUSERNAME(e.target.value)} placeholder="username" required/>
        <input id="standard-basic" type="password" onChange={e => setPASSWORD(e.target.value)} placeholder="password"/><br />
        <input id="standard-full-width"  type="text" onChange={e => setCOMMAND(e.target.value)} placeholder="command" required/><br />
        <button type="submit" onClick={() => startSession(IP, PORT, USERNAME, PASSWORD, COMMAND)}>Start Session</button>
      </form>
    </div>
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
