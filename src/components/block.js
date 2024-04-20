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
                <p><FontAwesomeIcon icon={faPhone} /><blank/>(574)378-5954</p>
                <p><FontAwesomeIcon icon={faEnvelope} /><blank> </blank><a href="mailto:lli27@nd.edu" className="links">lli27@nd.edu</a></p>
                <div className="p-10">
                    <a href="https://www.linkedin.com/in/leyang-li/" className="links p-5">
                        <FontAwesomeIcon icon={faLinkedin} href="https://www.linkedin.com/in/leyang-li/" className="p-2" />
                    </a>
                    <br></br>
                    <a href="https://github.com/Leoreoreo" className="links p-5">
                        <FontAwesomeIcon icon={faGithub} className="p-2" />
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Block;