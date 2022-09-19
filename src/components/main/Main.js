import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import sass from '../../images/sass.png';
import less from '../../images/less.png';
import gitT from '../../images/gitT.png';
import redux from '../../images/redux.png';
import npm from '../../images/npm.png';
import rest from '../../images/Rest.png';
import grid from '../../images/grid.png';
import flexbox from '../../images/flexbox.png';
import figma from '../../images/figma.png';

export const createSpanLetters = (string) => {
    let all = [];
     for (let i = 0; i < string.length; i++) {
        all.push(string[i])
     }
     return all.map(item => {
        return <span>{item}</span>
     })
}

const Main = () => {
    const aboutSpans = createSpanLetters('About Me')

    return (
        <div className='about'>
            <h2 className='about-title'>{aboutSpans}</h2>
            <p className='about-subtitle'>During last 1.3 years I have been studying web-development technologies to become a front-end developer. Now I am searching for a professional team where I could develop my HTML, CSS, Javascript, React, Redux skills to achieve team results. Ready to compensate the lack of experience with a big desire to study.</p>
            <h3 className='about-subtitle-skills'>Skills:</h3>
            <ul className="portfolio-wrapper-right-skills">
                <li>
                    <div>
                        <img src={html} alt="" />
                    </div>
                </li>
                <li>
                    <div>
                        <img src={css} alt="" />
                    </div>
                </li>
                <li>
                    <div>
                        <img src={js} alt="" />
                    </div>
                </li>
                    <li>
                        <div>
                            <img src={react} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={redux} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={sass} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={less} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={gitT} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={npm} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={rest} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={grid} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={flexbox} alt="" />
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={figma} alt="" />
                        </div>
                    </li>
                </ul>
        </div>
    )
}

export default Main;