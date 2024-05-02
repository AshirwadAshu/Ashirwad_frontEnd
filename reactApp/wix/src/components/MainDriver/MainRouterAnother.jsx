import { BrowserRouter,Routes,Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage"
import PortFolio from "../PortfolioPage/PortFolio"
import AboutPage from "../AboutPage/AboutPage"
import BooksPage from "../BooksPage/BooksPage"
import ClientAlbums from "../ClientAlbumsPage/ClientAlbums"
import ContactPage from "../ContactPage/ContactPage"
import NoMatch from "../NoMatch/NoMatch";

//Simple Example for Routing.

const MainRouterAnother = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="portfolio" element={<PortFolio/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="books" element={<BooksPage/>}/>
        <Route path="client-albums" element={<ClientAlbums/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MainRouterAnother;