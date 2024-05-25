import { Github_LINK, Linkedin_LINK, wave_img } from '../Utils/constants';
import profile from '../Utils/Photos/111.jpg';

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="left-section">
                <h1 className='h1'>Front-End React</h1>
                <h1 className='h2'>Developer <span><img src={wave_img} alt='hand-wave' /></span></h1>
                <p>Hi, I'm Akhilesh Yadav. A passionate Front-end React</p>
                <p>Developer based in Lucknow, India. 📍</p>
                <div className='social-links'>
                    <ul>
                        <li>
                            <a href={Linkedin_LINK} target="blank">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href={Github_LINK} target="blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <img src={profile} alt='profile' />
            </div>
        </div>
    )
}

export default Hero