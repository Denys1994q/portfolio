import pokemons from "../../images/pokemons.png";
import pets from "../../images/pets.png";
import arsenal from "../../images/arsenal.png";
import chat from "../../images/chat.png";
import converter from "../../images/converter.png";
import marvel from "../../images/marvel.png";
import movies from "../../images/movies.png";
import baloons from "../../images/baloons.png";
import employers from "../../images/employers.png";
import shop from "../../images/shop.png";
import heroes from "../../images/heroes.png";

import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Portfolio = () => {
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
                "react-redux",
                "redux-toolkit",
                "sass",
                "grid",
                "chart-js",
                "react-select",
                "react-lazy-load",
                "react-loading-skeleton",
                "react-spinners",
                "react-transition-group",
                "react-font-awesome",
                "fetch",
                "git",
                "pokemons-api",
                "vercel",
            ],
        },
        {
            name: "Pets",
            description: "",
            img: pets,
            pageSpeed: 92,
            deploy: "https://petsapi1994.herokuapp.com/",
            github: "https://github.com/Denys1994q/test-task-CatsAPI",
            technologies: [
                "react",
                "react-router-dom",
                "node-sass",
                "less",
                "font-awesome",
                "flex",
                "grid",
                "git",
                "fetch",
                "cat-api",
                "heroku",
            ],
        },
        {
            name: "FC Arsenal",
            img: arsenal,
            pageSpeed: 95,
            deploy: "https://arsenal1994q.vercel.app/",
            github: "https://github.com/Denys1994q/Arsenal-React",
            technologies: [
                "react",
                "redux-toolkit",
                'next',
                "sass",
                "flex",
                "grid",
                "git",
                "fetch",
                "omdb-api",
                "weather-api",
                "marvel-api",
                "vercel",
                "react-image-magnify",
            ],
        },
        {
            name: "Chat",
            description: "",
            img: chat,
            pageSpeed: 98,
            deploy: "https://chat199.herokuapp.com/",
            github: "https://github.com/Denys1994q/chat_React",
            technologies: [
                "react",
                "node-sass",
                "sass",
                "flex",
                "git",
                "fetch",
                "chuck-norris-jokes-api",
                "react-google-login",
                "gapi-script",
                "heroku",
            ],
        },
        {
            name: "Marvel",
            description: "",
            img: marvel,
            deploy: "https://marvel-comics19.herokuapp.com/",
            github: "https://github.com/Denys1994q/Project_React_marvelComics",
            technologies: [
                "react",
                "node-sass",
                "less",
                "react-transition-group",
                "flex",
                "git",
                "fetch",
                "helmet",
                "marvel-api",
                "heroku",
            ],
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
            technologies: ["react", "flex", "git", "fetch", "currencies-api", "heroku"],
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
            technologies: ["react", "flex", "git", "fetch", "currencies-api", "heroku"],
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
            technologies: ["landing", "html", "sass", "flex", "git", "git"],
        },
    ];

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

    const showProjects = projects.map((item, i) => {
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
            <div className={`potrfolio-grid-item potrfolio-grid-item-${i + 1}`}>
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
                            <i class='fa fa-globe fa-2x'></i>
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
                    {item.technologies.map(it => {
                        return <li className='potrfolio-grid-item-tecnhs-item'>{it}</li>;
                    })}
                </ul>
            </div>
        );
    });

    return <div className='potrfolio-grid'>{showProjects}</div>;
};

export default Portfolio;
