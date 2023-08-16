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
        { title: "", items: ["JavaScript", "TypeScript"] },
        { title: "JavaScript Frameworks", items: ["React", "Angular"] },
        { title: "State Managers", items: ["Redux", "Recoil", "NgRx"] },
        { title: "Server Side Rendering", items: ["Next.js"] },
        { title: "CSS Preprocessors", items: ["Sass"] },
        { title: "Modern CSS", items: ["CSS Modules", "Styled Components"] },
        { title: "Methodologies", items: ["BEM"] },
        { title: "Forms", items: ["Formik", "React-hook-form"] },
        { title: "Version Control Systems", items: ["Git", "GitHub"] },
        { title: "Package managers", items: ["npm"] },
        { title: "Formatters", items: ["Prettier"] },
        { title: "", items: ["Figma"] },
        { title: "", items: ["Responsive design"] },
        { title: "Design systems", items: ["Material Design", "Angular Material"] },
        { title: "Server Development", items: ["Node"] },
        { title: "Server-side frameworks", items: ["Express"] },
        { title: "Databases", items: ["MongoDB"] },
        { title: "HTTP", items: ["Rest API", "GraphQl"] },
        { title: "", items: ["WebSockets"] },
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
