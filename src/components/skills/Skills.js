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

    const skills = [
        { title: "", items: ["HTML"] },
        { title: "", items: ["CSS"] },
        { title: "", items: ["JavaScript"] },
        { title: "", items: ["TypeScript"] },
        { title: "JavaScript Frameworks", items: ["React"] },
        { title: "State Managers", items: ["Redux"] },
        { title: "Server Side Rendering", items: ["Next.js"] },
        { title: "CSS Preprocessors", items: ["Sass"] },
        { title: "Modern CSS", items: ["CSS Modules"] },
        { title: "Methodologies", items: ["BEM"] },
        { title: "Version Control Systems", items: ["Git", "GitHub"] },
        { title: "Package managers", items: ["npm"] },
        { title: "Formatters", items: ["Prettier"] },
        { title: "", items: ["Rest API"] },
        { title: "", items: ["Figma"] },
        { title: "", items: ["Responsive design"] },
    ];

    const showSkills = skills.map((skill, index) => {
        return (
            <div>
                {skill.title ? <p className='skills__title'>{skill.title}</p> : null}
                <ul>
                    {skill.items.map(item => {
                        return (
                            <li key={index} className='skills__item'>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    });

    return (
        <div className='skills'>
            <h2 className='skills__mainTitle'>{aboutSpans}</h2>
            <ul className='skills__list'>{showSkills}</ul>
        </div>
    );
};

export default Skills;
