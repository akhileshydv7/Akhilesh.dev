import projectOne from '../Utils/Photos/netflix.png';
import projectTwo from '../Utils/Photos/eatandbite.png';
import { NetflixGPT_Code, NetflixGPT_Live, EatAndBite_Code, EatAndBite_Live } from '../Utils/constants';


const Project = () => {
    return (
        <div id='project' className='project'>
            <div className="project-upper-part">
                <h3 className='project-header'>Portfolio</h3>
                <h3 className='project-line'>Each project is a unique peice of development🧩</h3>
            </div>
            <div className='project'>
                <div className='project-1'>
                    <img src={projectOne} alt='profile' />
                    <div className='project-1-text-part'>
                        <h4>NetflixGPT🎬</h4>
                        <p>
                            NetflixGPT website is an online platform
                            that allows users to watch your perfect movies.
                            It uses GPT api's which will recommend you
                            movies as of your taste.
                        </p>
                        <div className='project-1-tech'>
                            <span>React</span>
                            <span>Tailwind CSS</span>
                        </div>
                        <div className='project-1-code-demo'>
                            <a href={NetflixGPT_Code} target="blank">Code <i className="fab fa-github icon"></i></a>
                            <a href={NetflixGPT_Live} target="blank">Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div className='project-2'>
                    <div className='project-2-text-part'>
                        <h4>Eat&Bite🍔</h4>
                        <p>
                            Eat&Bite is a food ordering web-app
                            which helps people to order their favourite
                            food from their favourite Restraunts.
                            It uses swiggy data for a seamless experience.
                        </p>
                        <div className='project-2-tech'>
                            <span>React</span>
                            <span>Tailwind CSS</span>
                        </div>
                        <div className='project-2-code-demo'>
                            <a href={EatAndBite_Code} target="blank">Code <i className="fab fa-github icon"></i></a>
                            <a href={EatAndBite_Live} target="blank">Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a>

                        </div>
                    </div>
                    <img src={projectTwo} alt='profile' />
                </div>
            </div>
        </div>
    )
}

export default Project