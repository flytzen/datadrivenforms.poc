import React from 'react';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from './TopNavBar';
import SampleForm from './SampleForm';
import SayHello from './SayHello';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopNavBar />
      <div>
        <h1>Hello</h1>

        <BrowserRouter>
// https://mui.com/material-ui/guides/routing/#link
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sayhello">Say Hello</Link></li>
              <li><Link to="/sampleform">Sample Form</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/sayhello" element={<SayHello />} />
            <Route path="/sampleform" element={<SampleForm />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;