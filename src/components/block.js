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
                <p>26' @<a href="https://www.nd.edu" className="links">Notre Dame</a></p>
                <br/>
                <p><a href="https://cse.nd.edu/undergraduate/" className="links">B.S. in CS</a></p>
                <br/>
                <p>Suppl. Major in <a href="https://acms.nd.edu/undergraduate/" className="links">ACMS</a></p>
                <br/>
                <br/>
                <a href="tel:(574)378-5954"><FontAwesomeIcon icon={faPhone} className='icon' size='lg'/></a> 
                <a href="mailto:lli27@nd.edu"><FontAwesomeIcon icon={faEnvelope} className='icon' size='lg'/></a> 
                <div className="divider"/>
                <a href="https://www.linkedin.com/in/leyang-li/"><FontAwesomeIcon icon={faLinkedin} className='icon' size='lg'/></a> 
                <a href="https://github.com/Leoreoreo"><FontAwesomeIcon icon={faGithub} className='icon' size='lg'/></a> 

            </div>
        </div>
    );
}
 
export default Block;