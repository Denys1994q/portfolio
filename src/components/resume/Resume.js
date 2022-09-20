import udemy from '../../images/udemy.png'

const Resume = () => {
    return (
        <div>
            <div>
                <div className="info">
                    <i class="fa fa-address-card fa-2x"></i>
                    <p>Bio:</p>
                </div>
                <div className="text">
                    <p className="birth">Date of birth: 14.09.1994</p>
                    <p className="place">Live in: Bucha, Kyivska oblast</p>
                </div>
            </div>
            <div>
                <div className="info">
                    <i class="fa fa-laptop fa-2x"></i>
                    <p>IT EXPERIENCE:</p>
                </div>
                <div className="text">
                    <p className="upwork">Freelance: 
                        <a href=" https://www.upwork.com/freelancers/~017a31f35385ec40b9" target='_blank'>Upwork</a>
                    </p>
                </div>
            </div>
            <div>
                <div className="info">
                    <i class="fa fa-book fa-2x"></i>
                    <p>Front-end studying:</p>
                </div>
                {/* <div className="text">
                    <ul>
                        <li>Full course on JavaScript + React - from scratch to the result Logo Udemy</li>
                        <li>Intensive course React-2022</li>
                        <li>Practical JavaScript (Advanced Level)</li>
                    </ul>
                </div> */}
                <div className='text-courses'>
                    <div className='text-course'><img src={udemy} alt="" /></div>
                </div>
            </div>
            <div>
                <div className="info">
                    <i class="fa fa-graduation-cap fa-2x"></i>
                    <p>Education</p>
                </div>
                <div className="text">
                    <p>National university of 'Kyiv-Mohyla Academy'</p>
                    <p>Political Science</p>
                    <p>Bachelor degree: 2011-2015</p>
                    <p>Master degree: 2015-2017</p>
                </div>
            </div>
            <div className="employment">
                <div className="info">
                    <i class="fa fa-briefcase fa-2x"></i>
                    <p>Employment</p>
                </div>
                <div className="text">
                    <p>2014-2022</p>
                    <p>Political analyst</p>
                    <p>Non-governmental organization 'Committee of Voters of Ukraine'</p>
                    <ul>
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
            <div>
                <div className="info">
                    <i class="fa fa-language fa-2x"></i>
                    <p>Languages</p>
                </div>
                <div className="text">
                    <p>English: upper-intermediate</p>
                </div>
            </div>
        </div>
    )
}

export default Resume;