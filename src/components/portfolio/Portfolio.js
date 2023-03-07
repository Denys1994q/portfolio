import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";

import { projects } from "./data";

const Portfolio = () => {
    const [selectValue, setSelectValue] = useState("all");
    const [newProjectsValue, setNewProjectsValue] = useState(false);
    const [deployedProjectsValue, setDeployedProjectsValue] = useState(false);

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
            <div key={item.index} className={`potrfolio-grid-item potrfolio-grid-item-${i + 1}`}>
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
                    {item.githubBackend && (
                        <>
                            <div style={{ position: "relative" }}>
                                <a className='potrfolio-grid-item-title-icon' href={item.githubBackend} target='_blank'>
                                    <i className='fab fa-github fa-2x'></i>
                                </a>
                                <span style={{ position: "absolute", top: "33px", left: "-7px", fontSize: "11px" }}>
                                    server
                                </span>
                            </div>
                        </>
                    )}
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

        setDeployedProjectsValue(false);
        setNewProjectsValue(false);

        if (e.target.value === "all") {
            setFilteredProjects(projects);
        } else {
            const filteredArr = projects.filter(project => {
                return project.technologies.indexOf(e.target.value) > -1;
            });
            setFilteredProjects(filteredArr);
        }
    };

    // фільтр: показує лише задеплоєні проекти
    const showDeployedOnly = e => {
        if (e.target.checked) {
            setDeployedProjectsValue(true);
            const filteredArr = filteredProjects.filter(project => {
                return project.deploy;
            });
            setFilteredProjects(filteredArr);
        } else {
            setDeployedProjectsValue(false);

            if (newProjectsValue) {
                // all
                const copy = [...projects];
                let sortedArr = copy.sort((a, b) => {
                    return b.index - a.index;
                });
                // not all
                let s = projects.filter(project => {
                    return project.technologies.indexOf(selectValue) > -1;
                });
                let sSortedArr = s.sort((a, b) => {
                    return b.index - a.index;
                });
                selectValue === "all" ? setFilteredProjects(sortedArr) : setFilteredProjects(sSortedArr);
            } else {
                selectValue === "all"
                    ? setFilteredProjects(projects)
                    : setFilteredProjects(
                          projects.filter(project => {
                              return project.technologies.indexOf(selectValue) > -1;
                          })
                      );
            }
        }
    };

    // сортування: показує нові проекти спочатку
    const showNewFirst = e => {
        let sortedArr;
        const copy = [...filteredProjects];
        // якщо checked
        if (e.target.checked) {
            setNewProjectsValue(true);
            sortedArr = copy.sort((a, b) => {
                return b.index - a.index;
            });
            setFilteredProjects(sortedArr);
        } else {
            // якщо !checked
            setNewProjectsValue(false);
            // якщо newProjectsValue !checked, а deployed checked
            if (deployedProjectsValue) {
                const copy2 = projects.filter(project => {
                    return project.technologies.indexOf(selectValue) > -1;
                });

                selectValue === "all"
                    ? setFilteredProjects(
                          projects.filter(project => {
                              return project.deploy;
                          })
                      )
                    : setFilteredProjects(
                          copy2.filter(project => {
                              return project.deploy;
                          })
                      );
                // показує задеплоєні, але в порядку нових
            } else {
                // якщо newProjectsValue !checked і deployed !checked
                selectValue === "all"
                    ? setFilteredProjects(projects)
                    : setFilteredProjects(
                          projects.filter(project => {
                              return project.technologies.indexOf(selectValue) > -1;
                          })
                      );
            }
        }
    };

    return (
        <>
            <select value={selectValue} className='selectSortProjects' onChange={e => filterProjects(e)}>
                <option value='all'>all</option>
                <option value='express'>express</option>
                <option value='react'>react</option>
                <option value='next'>next</option>
                <option value='typescript'>typescript</option>
                <option value='redux'>redux</option>
            </select>
            <div className='checkbox'>
                <input
                    checked={deployedProjectsValue}
                    onChange={e => showDeployedOnly(e)}
                    id='deployed'
                    type='checkbox'
                    className='checkbox__input'
                />
                <label htmlFor='deployed' className='checkbox__label'>
                    Deployed
                </label>
            </div>
            <div className='checkbox'>
                <input
                    checked={newProjectsValue}
                    onChange={e => showNewFirst(e)}
                    id='new'
                    type='checkbox'
                    className='checkbox__input'
                />
                <label htmlFor='new' className='checkbox__label checkbox__labelNewFirst'>
                    New first
                </label>
            </div>
            <div className='potrfolio-grid'>{showProjects}</div>
        </>
    );
};

export default Portfolio;
