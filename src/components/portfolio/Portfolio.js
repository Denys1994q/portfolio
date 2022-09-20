import pets from '../../images/pets.png';
import arsenal from '../../images/arsenal.png';
import chat from '../../images/chat.png';
import converter from '../../images/converter.png';
import marvel from '../../images/marvel.png';
import movies from '../../images/movies.png';
import baloons from '../../images/baloons.png';
import employers from '../../images/employers.png';
import shop from '../../images/shop.png';
import heroes from '../../images/heroes.png';

const Portfolio = () => {

    const projects = [
        {name: 'Pets', description: '', img: pets, deploy: 'https://petsapi1994.herokuapp.com/', github: 'https://github.com/Denys1994q/test-task-CatsAPI', technologies: ['react', 'react-router-dom', 'node-sass', 'less', 'font-awesome', 'flex', 'grid', 'git', 'fetch', 'cat-api', 'heroku']},
        {name: 'Fc Arsenal', description: '', img: arsenal, deploy: '', github: 'https://github.com/Denys1994q/Arsenal-React', technologies: ['react', 'react-router-dom', 'sass', 'flex', 'grid', 'git', 'fetch', 'omdb-api', 'weather-api', 'marvel-api', 'heroku', 'react-image-magnify']},
        {name: 'Chat', description: '', img: chat, deploy: 'https://chat199.herokuapp.com/', github: 'https://github.com/Denys1994q/chat_React', technologies: ['react', 'node-sass', 'sass', 'flex', 'git', 'fetch', 'chuck-norris-jokes-api', 'react-google-login', 'gapi-script', 'heroku']},
        {name: 'Marvel', description: '', img: marvel, deploy: 'https://marvel-comics19.herokuapp.com/', github: 'https://github.com/Denys1994q/Project_React_marvelComics', technologies: ['react', 'node-sass', 'less', 'react-transition-group', 'flex', 'git', 'fetch', 'helmet', 'marvel-api', 'heroku']},
        {name: 'Movies API', description: '', img: movies, deploy: '', github: 'https://github.com/Denys1994q/React-Movies-API', technologies: ['react', 'materialize-css', 'flex', 'git', 'fetch', 'omdb-api']},
        {name: 'currency converter', description: '', img: converter, deploy: 'https://currency-converter111.herokuapp.com/', github: 'https://github.com/Denys1994q/currency_converter_REACT', technologies: ['react', 'flex', 'git', 'fetch', 'currencies-api', 'heroku']},
        {name: 'magic heroes', description: '', img: heroes, deploy: '', github: 'https://github.com/Denys1994q/heroes-redux', technologies: ['react', 'redux', 'git']},
        {name: 'react shop', description: '', img: shop, deploy: '', github: 'https://github.com/Denys1994q/React-Shop', technologies: ['react', 'flex', 'git', 'fetch', 'currencies-api', 'heroku']},
        {name: 'employers', description: '', img: employers, deploy: '', github: 'https://github.com/Denys1994q/Project_React_employers', technologies: ['react', 'git']},
        {name: 'Balloons', description: '', img: baloons, deploy: '', github: 'https://github.com/Denys1994q/HTML-CSS_Ballons', technologies: ['landing', 'html', 'sass', 'flex', 'git', 'git']},
    ]

    const showProjects = projects.map((item, i) => {
        return (
                <div className={`potrfolio-grid-item potrfolio-grid-item-${i+1}`}>
                    <div className='potrfolio-grid-item-title'>
                        {item.deploy !== '' ? <a className='potrfolio-grid-item-title-icon' href={item.deploy} target='_blank'><i class="fa fa-globe fa-2x"></i></a> : null}
                        <a className='potrfolio-grid-item-title-icon' href={item.github} target='_blank'><i className='fab fa-github fa-2x'></i></a>
                    </div>
                    <div className='potrfolio-grid-item-img'>
                        <img className='potrfolio-grid-item-img-show' src={item.img} alt="" />
                        <div className='potrfolio-grid-item-img-title'>
                            {item.deploy !== '' ? <a href={item.deploy} target='_blank'>
                                <span className='potrfolio-grid-item-img-title-span'>{item.name}</span>
                            </a> : <span className='potrfolio-grid-item-img-title-span'>{item.name}</span> }
                        </div>
                    </div>
                    <ul className='potrfolio-grid-item-tecnhs'>
                        {item.technologies.map(it => {
                            return <li className='potrfolio-grid-item-tecnhs-item'>{it}</li>
                        })}
                    </ul>
                </div>
        )
    })

    return (
        <div className='potrfolio-grid'>
            {showProjects}
        </div>
    )
}

export default Portfolio;