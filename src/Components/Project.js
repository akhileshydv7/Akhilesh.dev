import profile from '../Utils/Photos/profile-pic.jpg';

const Project = () => {
    return (
        <div id='project' className='project'>
            <h4 className='project-header'>Portfolio</h4>
            <h3 className='project-line'>Each project is a unique peice of development🧩</h3>
            <div className='project'>
                <div className='project-1'>
                    <img src={profile} alt='profile' />
                    <div className='project-1-text-part'>
                        <h4>NetflixGPT🎬</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ex aut molestiae sequi
                            commodi consequuntur. Iste, accusamus prov
                            ident sit, magnam quod velit eum consequun
                            tempora laudantium fugiat aut.
                        </p>
                        <div>
                            <span>React</span>
                            <span>React</span>
                        </div>
                        <div>
                            <span>React</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
                <div className='project-1'>
                    <img src={profile} alt='profile' />
                    <div className='project-1-text-part'>
                        <h4>NetflixGPT🎬</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Ex aut molestiae sequi
                            commodi consequuntur. Iste, accusamus prov
                            ident sit, magnam quod velit eum consequun
                            tempora laudantium fugiat aut.
                        </p>
                        <div>
                            <span>React</span>
                            <span>React</span>
                        </div>
                        <div>
                            <span>React</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project