import udemy from "../../images/udemy.png";

const Resume = () => {
    return (
        <div className='resume'>
            <a
                target='_blank'
                className='resume__file'
                href='https://drive.google.com/file/d/18axEP8lVwBu1-wqSeLL9T4uBuuhWhK3_/view?usp=share_link'
                download>
                CV_Denys_Rybachok.pdf
            </a>
            <div className='resume__item'>
                <div className='resume__info'>
                    <i className='fa fa-address-card fa-2x'></i>
                    <p className='resume__info-title'>Bio:</p>
                </div>
                <div className='resume__text'>
                    <p className='birth'>Date of birth: 14.09.1994</p>
                    <p className='place'>Live in: Bucha, Kyivska oblast</p>
                </div>
            </div>
            <div className='resume__item'>
                <div className='resume__info'>
                    <i className='fa fa-laptop fa-2x'></i>
                    <p className='resume__info-title'>It experience:</p>
                </div>
                <div className='resume__text'>
                    <p className='upwork'>
                        Freelance:
                        <a href=' https://www.upwork.com/freelancers/~017a31f35385ec40b9' target='_blank'>
                            Upwork
                        </a>
                    </p>
                </div>
            </div>
            <div className='resume__item'>
                <div className='resume__info'>
                    <i className='fa fa-book fa-2x'></i>
                    <p className='resume__info-title'>Front-end studying:</p>
                </div>
                <ul className='resume__text resume__text-duties-list'>
                    <p>Udemy online courses (June 2021 - ...):</p>
                    <li>Full course on JavaScript + React - from scratch to the result</li>
                    <li>Practical JavaScript (Advanced Level)</li>
                    <li>Front-end for advanced (online-cinema)</li>
                    <li>Web-site creation in 2022</li>
                    <li>Intensive course React-2022</li>
                    <li>TypeScript from basics</li>
                </ul>
            </div>
            <div className='resume__item'>
                <div className='resume__info'>
                    <i className='fa fa-graduation-cap fa-2x'></i>
                    <p className='resume__info-title'>Education</p>
                </div>
                <div className='resume__text'>
                    <p>National university of 'Kyiv-Mohyla Academy'</p>
                    <p>Political Science</p>
                    <p>Bachelor degree: 2011-2015</p>
                    <p>Master degree: 2015-2017</p>
                </div>
            </div>
            <div className='resume__item'>
                <div className='resume__info'>
                    <i className='fa fa-briefcase fa-2x'></i>
                    <p className='resume__info-title'>Employment</p>
                </div>
                <div className='resume__text'>
                    <p>2014-2022</p>
                    <p>Political analyst</p>
                    <p>Non-governmental organization 'Committee of Voters of Ukraine'</p>
                    <ul className='resume__text-duties-list'>
                        <li>development of analytical reports during election campaigns</li>
                        <li>communication with international partnets</li>
                        <li>realisation of projects: working on methodology etc.</li>
                        <li>preparation of changes to election legislation</li>
                        <li>work as a trainer on election-related topics</li>
                        <li>participation in TV, radio shows</li>
                        <li>publications in political media</li>
                        <li>electoral observer in different countries</li>
                    </ul>
                </div>
            </div>
            <div className='resume__item'>
                <div className='resume__info'>
                    <i className='fa fa-language fa-2x'></i>
                    <p className='resume__info-title'>Languages</p>
                </div>
                <div className='resume__text'>
                    <p>English: upper-intermediate</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
