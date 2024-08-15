import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Message from './pages/Message/Message';
import Authentication from './pages/Authentication/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './Redux/Auth/auth.action';
import PasswordChangeSuccess from './pages/Authentication/PasswordChangeSuccess';
import VideoCall from './components/Message/VideoCall';
import Demo from './pages/Message/Demo';
import VideoCalling from './components/Message/VideoCalling';
import AccommodationPage from './pages/Accomodation/AccommodationPage';
import darkTheme from './theam/darkTheme';
import { ThemeProvider } from '@mui/material';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import ViewJobPosting from './pages/Jobs/ViewJobPostings'; // Ensure this path is correct
import AddJobPosting from './pages/Jobs/AddJobPosting';  // Ensure this path is correct

//D:\Project\Project\ActsConnect_Frontend\frontend\src\pages\Jobs\ViewJobPostings.jsx

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector(store => store);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(getUserProfile(jwt));
    }
  }, [dispatch, auth.jwt]); // Added dispatch to dependencies

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        <Route path='/*' element={auth.user ? <HomePage /> : <Authentication />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/accommodation" element={<AccommodationPage />} />
        <Route path="/password-change-success" element={<PasswordChangeSuccess />} />
        <Route path='/video-call' element={<VideoCall />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/video-calling' element={<VideoCalling />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/view-job" element={<ViewJobPosting />} />
        <Route path="/add-job" element={<AddJobPosting />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
