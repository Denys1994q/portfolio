import pokemons from "../../images/pokemons.png";
import pets from "../../images/pets.png";
import arsenal from "../../images/arsenal.png";
import chat from "../../images/chat.png";
import jobs from "../../images/jobs.png";
import converter from "../../images/converter.png";
import marvel from "../../images/marvel.png";
import movies from "../../images/movies.png";
import baloons from "../../images/baloons.png";
import employers from "../../images/employers.png";
import shop from "../../images/shop.png";
import heroes from "../../images/heroes.png";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";

const Portfolio = () => {
    const [selectValue, setSelectValue] = useState("all");
    const projects = [
        {
            name: "Pokemons",
            description: "",
            img: pokemons,
            pageSpeed: 97,
            deploy: "https://pokemons-redux1.vercel.app/",
            github: "https://github.com/Denys1994q/Pokemons-Redux",
            technologies: [
                "react",
                "redux",
                "redux-toolkit",
                "sass",
                "grid",
                "chart-js",
                "react-select",
                "react-lazy-load",
                "react-spinners",
                "react-transition-group",
                "react-loading-skeleton",
                "react-font-awesome",
                "git",
            ],
        },
        {
            name: "FC Arsenal",
            img: arsenal,
            pageSpeed: 95,
            deploy: "https://arsenal1994q.vercel.app/",
            github: "https://github.com/Denys1994q/Arsenal-React",
            technologies: [
                "next",
                "react",
                "redux-toolkit",
                "sass",
                "grid",
                "git",
                "fetch",
                "omdb-api",
                "weather-api",
                "marvel-api",
                "react-image-magnify",
            ],
        },
        {
            name: "Pets",
            description: "",
            img: pets,
            pageSpeed: 92,
            deploy: "https://cats-page-eosin.vercel.app/",
            github: "https://github.com/Denys1994q/test-task-CatsAPI",
            technologies: ["react", "react-router-dom", "sass", "flex", "grid", "git", "post", "fetch"],
        },
        {
            name: "Jobs",
            description: "",
            img: jobs,
            pageSpeed: 100,
            deploy: "https://jobs-tawny.vercel.app/",
            github: "https://github.com/Denys1994q/jobs",
            technologies: ["next", "react", 'redux', "redux-toolkit", "sass", "git", "fetch"],
        },
        {
            name: "Chat",
            description: "",
            img: chat,
            pageSpeed: 98,
            deploy: "https://chat-react-henna.vercel.app/",
            github: "https://github.com/Denys1994q/chat_React",
            technologies: [
                "react",
                "sass",
                "git",
                "fetch",
                "chuck-norris-jokes-api",
                "react-google-login",
                "gapi-script",
            ],
        },
        {
            name: "Marvel",
            description: "",
            img: marvel,
            deploy: "",
            github: "https://github.com/Denys1994q/Project_React_marvelComics",
            technologies: ["react", "sass", "react-transition-group", "git", "fetch", "helmet", "marvel-api"],
        },
        {
            name: "Movies API",
            description: "",
            img: movies,
            deploy: "",
            github: "https://github.com/Denys1994q/React-Movies-API",
            technologies: ["react", "materialize-css", "flex", "git", "fetch", "omdb-api"],
        },
        {
            name: "currency converter",
            img: converter,
            deploy: "",
            github: "https://github.com/Denys1994q/currency_converter_REACT",
            technologies: ["react", "flex", "git", "fetch", "currencies-api"],
        },
        {
            name: "magic heroes",
            description: "",
            img: heroes,
            deploy: "",
            github: "https://github.com/Denys1994q/heroes-redux",
            technologies: ["react", "redux", "git"],
        },
        {
            name: "react shop",
            description: "",
            img: shop,
            deploy: "",
            github: "https://github.com/Denys1994q/React-Shop",
            technologies: ["react", "flex", "git", "fetch", "currencies-api"],
        },
        {
            name: "employers",
            description: "",
            img: employers,
            deploy: "",
            github: "https://github.com/Denys1994q/Project_React_employers",
            technologies: ["react", "git"],
        },
        {
            name: "Balloons",
            description: "",
            img: baloons,
            deploy: "",
            github: "https://github.com/Denys1994q/HTML-CSS_Ballons",
            technologies: ["html", "sass", "flex", "git", "git"],
        },
    ];

    const [filteredProjects, setFilteredProjects] = useState(projects);

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                enabled: false,
                position: "nearest",
            },
        },
    };

    const showProjects = filteredProjects.map((item, i) => {
        const data = {
            labels: ["page speed", ""],
            datasets: [
                {
                    data: [item.pageSpeed, 100 - item.pageSpeed],
                    backgroundColor: ["#38E54D", "#2c2b2b"],
                    borderWidth: 3,
                    borderColor: "#2c2b2b",
                    cutout: "85%",
                    centertext: "123",
                },
            ],
        };
        return (
            <div key={i} className={`potrfolio-grid-item potrfolio-grid-item-${i + 1}`}>
                <div className='potrfolio-grid-item-title'>
                    {item.pageSpeed > 0 ? (
                        <div className='chart'>
                            <Doughnut data={data} options={options} />
                            <span className='chart__text'>{item.pageSpeed}%</span>
                            {i === 0 ? <p className='chart__title'>page speed</p> : null}
                        </div>
                    ) : null}
                    {item.deploy !== "" ? (
                        <a className='potrfolio-grid-item-title-icon' href={item.deploy} target='_blank'>
                            <i className='fa fa-globe fa-2x'></i>
                        </a>
                    ) : null}
                    <a className='potrfolio-grid-item-title-icon' href={item.github} target='_blank'>
                        <i className='fab fa-github fa-2x'></i>
                    </a>
                </div>
                <div className='potrfolio-grid-item-img'>
                    <img className='potrfolio-grid-item-img-show' src={item.img} alt='' />
                    <div className='potrfolio-grid-item-img-title'>
                        {item.deploy !== "" ? (
                            <a href={item.deploy} target='_blank'>
                                <span className='potrfolio-grid-item-img-title-span'>{item.name}</span>
                            </a>
                        ) : (
                            <span className='potrfolio-grid-item-img-title-span'>{item.name}</span>
                        )}
                    </div>
                </div>
                <ul className='potrfolio-grid-item-tecnhs'>
                    {item.technologies.map((tech, index) => {
                        return (
                            <li key={index} className={`potrfolio-grid-item-tecnhs-item ${tech}`}>
                                {tech}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    });

    const filterProjects = e => {
        setSelectValue(e.target.value);
        if (e.target.value === "all") {
            setFilteredProjects(projects);
        } else {
            const filteredArr = projects.filter(project => {
                return project.technologies.indexOf(e.target.value) > -1;
            });
            setFilteredProjects(filteredArr);
        }
    };

    const showDeployedOnly = e => {
        if (e.target.checked) {
            const filteredArr = filteredProjects.filter(project => {
                return project.deploy;
            });
            setFilteredProjects(filteredArr);
        } else {
            console.log(selectValue);
            selectValue === "all"
                ? setFilteredProjects(projects)
                : setFilteredProjects(
                      projects.filter(project => {
                          return project.technologies.indexOf(selectValue) > -1;
                      })
                  );
        }
    };

    return (
        <>
            <select value={selectValue} className='selectSortProjects' onChange={e => filterProjects(e)}>
                <option value='all'>all</option>
                <option value='react'>react</option>
                <option value='next'>next</option>
                <option value='redux'>redux</option>
            </select>
            <div className='checkbox'>
                <input
                    onChange={e => showDeployedOnly(e)}
                    id='checkProjects'
                    type='checkbox'
                    className='checkbox__input'
                />
                <label htmlFor='checkProjects' className='checkbox__label'>
                    Deployed only
                </label>
            </div>

            <div className='potrfolio-grid'>{showProjects}</div>
        </>
    );
};

export default Portfolio;
