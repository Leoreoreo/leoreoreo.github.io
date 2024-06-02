import './block.css';
import picofme from "./../img/Leyang Li.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const Block = () => {
    return ( 
        <div className="block">
            <img src={picofme} alt="" className="round-image"/>
            <div className='info'>
                <h2>Leyang Li</h2>
                <br/>
                <p><a href="https://www.nd.edu" className="links">Notre Dame</a></p>
                <p>Undergraduate</p>
                <br/>
                <p>Major:</p>
                <p><a href="https://cse.nd.edu/undergraduate/" className="links">Computer Science</a></p>
                <br/>
                <p>Suppl. Major:</p>
                <p><a href="https://acms.nd.edu/undergraduate/" className="links">ACMS</a></p>
                <br/>
                <br/>
            </div>
            <div className="icon-container">
                <a href="tel:(574)378-5954">
                    <FontAwesomeIcon icon={faPhone} className='icon'/>
                </a> 
                <a href="mailto:lli27@nd.edu">
                    <FontAwesomeIcon icon={faEnvelope} className='icon'/>
                </a> 
                <a href="https://www.linkedin.com/in/leyang-li/">
                    <FontAwesomeIcon icon={faLinkedin} className='icon' href="https://www.linkedin.com/in/leyang-li/"/>
                </a>
                <a href="https://github.com/Leoreoreo">
                    <FontAwesomeIcon icon={faGithub} className='icon'/>
                </a>
            </div>
        </div>
    );
}
 
export default Block;