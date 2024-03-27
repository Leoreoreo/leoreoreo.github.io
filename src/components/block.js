import './block.css';
import picofme from "./../img/Leyang Li.jpeg"

const Block = () => {
    return ( 
        <div className="block">
            <img src={picofme} alt="" className="round-image"/>
            <div className="info">
                <h2>Leyang Li</h2>
                <p>CS + ACMS(Suppl.) Undergraduate</p>
                <p><a href="https://www.nd.edu" className="links">Notre Dame</a></p>
                <br/>
                <p>Phone (US & CN):</p>
                <p>+1 (574)378-5954</p>
                <p>+86 189-1633-7853</p>
                <br/>
                <p>Email: <a href="mailto:lli27@nd.edu" className="links">lli27@nd.edu</a></p>
                <br/>
                <p><a href="https://www.linkedin.com/in/leyang-li/" className="links">Linkedin</a></p>
                <p><a href="https://github.com/Leoreoreo" className="links">Github</a></p>
            </div>
        </div>
    );
}
 
export default Block;