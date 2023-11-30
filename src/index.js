import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './assets/bulma/css/bulma.min.css';
import App from './App';
import DataAction from './components/tools/data-action';
import InputControl from './components/tools/input-control';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import About from './components/pages/about';
import Home from './components/pages/home';
import AutoDropdown from './components/tools/auto-dropdown';
import AutoCheckBox from './components/tools/auto-checkbox';
import PrivacyPolicy from './components/pages/privacy-policy';
import Terms from './components/pages/terms';
import CopyFilter from './components/tools/copy-filter';
import FAQ from './components/pages/faq';
import ContactUs from './components/pages/contact-us';
import { GetProperty } from './components/tools/get-property';

ReactDOM.render(
  <Router>
    <React.Fragment>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<App />} />
          <Route path="/tools/data-action" element={<DataAction />} />
          <Route path="/tools/input-control" element={<InputControl />} />
          <Route path="/tools/auto-dropdown" element={<AutoDropdown />} />
          <Route path="/tools/auto-checkbox" element={<AutoCheckBox />} />
          <Route path="/tools/copy-filter" element={<CopyFilter />} />
          <Route path="/tools/get-property" element={<GetProperty />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
