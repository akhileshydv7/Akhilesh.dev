import { wave_img } from '../Utils/constants';
import profile from '../Utils/Photos/profile-pic.jpg';

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
                            <a href="https://www.linkedin.com/in/akhileshyadav26/">
                                <i class="fab fa-linkedin-in icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/akhileshydv7">
                                <i class="fab fa-github icon"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <img src={profile} alt='profile' />
                <img src={profile} alt='profile' />
                <img src={profile} alt='profile' />
                {/* <img src={profile} alt='profile' /> */}
            </div>
        </div>
    )
}

export default Hero