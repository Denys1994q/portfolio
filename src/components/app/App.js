// картинки
import photo from '../../images/photo.jpg';
// хуки
import { BrowserRouter as Router, NavLink, Link, Route, Routes } from "react-router-dom";
import {createSpanLetters} from '../main/Main'
// компоненти
import Main from '../main/Main'
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";

const App = () => {
    const frontEnd = createSpanLetters('Front-end developer')
    return (
        <div className='container'>
            <Router>
            <div className="portfolio-wrapper">
            <div className="portfolio-wrapper-left">
                <div className="portfolio-wrapper-left-img">
                    <Link to="/"><img src={photo} alt="photo" /></Link>
                </div>
                <h1 className="portfolio-wrapper-left-name"><Link to="/"><span>Denys Rybachok</span></Link></h1>
                <h2 className="portfolio-wrapper-left-position">{frontEnd}</h2>
                <ul className="portfolio-wrapper-left-contacts">
                    <li>
                        <i className='fa fa-envelope'></i>
                        <a href="">drybachok@gmail.com</a>
                    </li>
                    <li>
                        <i className='fa fa-phone'></i>
                        <a href="">097 53 000 83</a>
                    </li>
                </ul>
                <div className="portfolio-wrapper-left-icons">
                    <div className="portfolio-wrapper-left-icons-icon">
                        <a className="facebook" href="https://www.facebook.com/denis.rybachok" target="_blank">
                            <i class="fab fa-facebook fa-3x"></i>
                        </a>
                    </div>
                    <div className="portfolio-wrapper-left-icons-icon">
                        <a className="git" href="https://github.com/Denys1994q" target="_blank">
                            <i class="fab fa-github fa-3x"></i>
                        </a>
                    </div>
                    <div className="portfolio-wrapper-left-icons-icon">
                        <a className="telegram" href="https://t.me/drybachok" target="_blank">
                            <i class="fab fa-telegram fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-wrapper-right">
                    <ul className="portfolio-wrapper-right-list">
                        <li><NavLink to="/resume">Resume</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    </ul>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/resume' element={<Resume />} />
                </Routes>
            </div>
        </div>
            </Router>
      </div>
    )
}

export default App;