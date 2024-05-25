import htmlLogo from "../Utils/Photos/Logo/html5-logo-png-transparent.png";
import cssLogo from "../Utils/Photos/Logo/css3-logo-png-transparent.png";
import javascriptLogo from "../Utils/Photos/Logo/javascript-logo-png-transparent.png";
import saasLogo from "../Utils/Photos/Logo/sass-1-logo-png-transparent.png";
import reactLogo from "../Utils/Photos/Logo/react-1-logo-png-transparent.png";
import reduxLogo from "../Utils/Photos/Logo/redux-logo-png-transparent.png";
import nodejs from "../Utils/Photos/Logo/nodejs.png"
import mongodb from "../Utils/Photos/Logo/mongodb.png"

const Tech = () => {
    return (
        <div className="tech">
            <p>Tech Stack</p>
            <ul>
                <li ><img className="html" src={htmlLogo} alt='html-logo' /></li>
                <li ><img className="css" src={cssLogo} alt='css-logo' /></li>
                <li ><img className="js" src={javascriptLogo} alt='javascript-logo' /></li>
                <li ><img className="react" src={reactLogo} alt='react-logo' /></li>
                <li ><img className="redux" src={reduxLogo} alt='redux-logo' /></li>
                <li ><img className="nodejs" src={nodejs} alt='nodejs-logo' /></li>
                <li ><img className="mongodb" src={mongodb} alt='mongodb-logo' /></li>
                <li ><img className="saas" src={saasLogo} alt='saas-logo' /></li>
            </ul>
        </div>
    )
}

export default Tech;