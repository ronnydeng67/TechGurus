import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import GitHubIcon from '@mui/icons-material/GitHub';
import angelist from './angellist-512.webp';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-list">
                <div className="footer-linkedin">
                    <a href="https://www.linkedin.com/in/ronny-deng/" target="_blank">
                        <LinkedInIcon id="linkedin-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/ronny-deng/" target="_blank">LinkedIn</a> 
                </div>
                <div className="footer-personal-site">
                    <a href="https://ronnydeng67.github.io/ronnydeng/" target="_blank">
                        <PermIdentityIcon id="linkedin-icon"/>
                    </a>
                    <a href="https://ronnydeng67.github.io/ronnydeng/" target="_blank">My Personal Site</a>
                </div>
                <div className="footer-github">
                    <a href="https://github.com/ronnydeng67" target="_blank">
                        <GitHubIcon id="linkedin-icon"/>
                    </a>
                    <a href="https://github.com/ronnydeng67" target="_blank">GitHub</a> 
                </div>
                <div className="footer-angelist">
                    <a href="https://angel.co/u/jinjun-ronny-deng" target="_blank">
                        <img src={angelist} alt="" id="angelist"/>
                    </a>
                    <a href="https://angel.co/u/jinjun-ronny-deng" target="_blank">Angelist</a> 
                </div>
            </div>
        </div>
    );
}
 
export default Footer;