import './block.css';
import picofme from "./../img/Leyang Li.webp"

const Block = () => {
    return ( 
        <div className="block">
            <img src={picofme} alt="" className="round-image"/>
            <div className="info">
                <h2>Leyang Li</h2>
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
                <br/>
                <p>Phone:</p>
                <p>(574)378-5954</p>
                <br/>
                <p>Email:</p>
                <p><a href="mailto:lli27@nd.edu" className="links">lli27@nd.edu</a></p>
                <br/>
                <p><a href="https://www.linkedin.com/in/leyang-li/" className="links">Linkedin</a></p>
                <p><a href="https://github.com/Leoreoreo" className="links">Github</a></p>
            </div>
        </div>
    );
}
 
export default Block;