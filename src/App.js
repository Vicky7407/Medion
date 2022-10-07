import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Container/Home';
import About from './Container/About';
import Medicine from './Container/Medicine';
import Onlinebuy from './Container/Onlinebuy';
import Contectus from './Container/Contectus';
import Layout from './Layout';
import Routes from './routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <>
    <Routes />
      {/* <BrowserRouter> */}
        {/* <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='home' element={<Home />} /> */}
            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          {/* </Route>
        </Routes> */}
      {/* </BrowserRouter> */}
      {/* <Header/> */}
      {/* <Home /> */}
      {/* <About />
      <Medicine />
      <Onlinebuy/>
      <Contectus /> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
