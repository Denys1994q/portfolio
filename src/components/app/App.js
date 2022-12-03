// картинки
import photo from "../../images/photo.jpg";
// хуки
import { BrowserRouter as Router, NavLink, Link, Route, Routes } from "react-router-dom";
import { createSpanLetters } from "../skills/Skills";
// компоненти
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Resume from "../resume/Resume";
import MapComponent from "../map/Map";

const App = () => {
    const frontEnd = createSpanLetters("Front-end developer");

    const contactsData = [
        { title: "drybachok@gmail.com", iconClassName: "fa fa-envelope" },
        { title: "097 53 000 83", iconClassName: "fa fa-phone" },
    ];

    const showContacts = contactsData.map((item, index) => {
        return (
            <li key={index}>
                <i className={item.iconClassName}></i>
                <span>{item.title}</span>
            </li>
        );
    });

    const linksData = [
        { title: "Resume", link: "/resume" },
        { title: "Portfolio", link: "/portfolio" },
    ];

    let activeStyle = {
        background: "#5b628f",
    };

    const showLinks = linksData.map((item, index) => {
        return (
            <li key={index}>
                <NavLink to={item.link} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    {item.title}
                </NavLink>
            </li>
        );
    });

    return (
        <Router>
            <div className='container'>
                <div className='first-page'>
                    <div className='first-page__left'>
                        <div className='first-page__wrapper'>
                            <div className='first-page__left-img'>
                                <Link to='/'>
                                    <img src={photo} alt='photo' />
                                </Link>
                            </div>
                            <div>
                                <h1 className='first-page__left-name'>
                                    <Link to='/'>
                                        <span>Denys Rybachok</span>
                                    </Link>
                                </h1>
                                <h2 className='first-page__left-position'>{frontEnd}</h2>
                            </div>
                        </div>
                        <ul className='first-page__left-contacts'>{showContacts}</ul>
                        <div className='map'>
                            <MapComponent lat={50.12424} long={27.51087} />
                        </div>
                        <div className='first-page__left-icons'>
                            <div className='first-page__left-icons-icon'>
                                <a className='facebook' href='https://www.facebook.com/denis.rybachok' target='_blank'>
                                    <i className='fab fa-facebook fa-3x'></i>
                                </a>
                            </div>
                            <div className='first-page__left-icons-icon'>
                                <a className='git' href='https://github.com/Denys1994q' target='_blank'>
                                    <i className='fab fa-github fa-3x'></i>
                                </a>
                            </div>
                            <div className='first-page__left-icons-icon'>
                                <a className='telegram' href='https://t.me/drybachok' target='_blank'>
                                    <i className='fab fa-telegram fa-3x'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='first-page__right'>
                        <Link className='first-page__right-home' to='/'>
                            <i className='fa fa-home'></i>
                        </Link>
                        <ul className='first-page__right-list'>{showLinks}</ul>
                        <Routes>
                            <Route path='/' element={<Skills />} />
                            <Route path='/resume' element={<Resume />} />
                            <Route path='/portfolio' element={<Portfolio />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
