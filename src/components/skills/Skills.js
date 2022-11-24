import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import next from "../../images/next.png";
import sass from "../../images/sass.png";
import gitT from "../../images/gitT.png";
import redux from "../../images/redux.png";
import npm from "../../images/npm.png";
import rest from "../../images/Rest.png";
import grid from "../../images/grid.png";
import flexbox from "../../images/flexbox.png";
import figma from "../../images/figma.png";

export const createSpanLetters = string => {
    let all = [];
    for (let i = 0; i < string.length; i++) {
        all.push(string[i]);
    }
    return all.map((item, index) => {
        return <span key={index}>{item}</span>;
    });
};

const Skills = () => {
    const aboutSpans = createSpanLetters("Skills");

    const skills = [html, css, js, react, next, redux, sass, gitT, npm, rest, grid, flexbox, figma];

    const showSkills = skills.map((item, index) => {
        return (
            <li key={index}>
                <img src={item} alt={item} />
            </li>
        );
    });

    return (
        <div className='skills'>
            <h2 className='skills__title'>{aboutSpans}</h2>
            <ul className='skills__list'>{showSkills}</ul>
        </div>
    );
};

export default Skills;
