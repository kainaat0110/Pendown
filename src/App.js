import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WritingPage from './Pages/WritingPage';  
import AskQuestion from './Pages/AskQuestion';
import Read from './Pages/Read';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/question" element={<AskQuestion />} />
        <Route path="/read" element={<Read />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path ="/signup" element= {<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
