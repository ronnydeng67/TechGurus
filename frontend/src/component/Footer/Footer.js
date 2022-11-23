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
                    <a href="" target="_blank">
                        <LinkedInIcon id="linkedin-icon"/>
                    </a>
                    <a href="">LinkedIn</a> 
                </div>
                <div className="footer-personal-site">
                    <a href="">
                        <PermIdentityIcon id="linkedin-icon"/>
                    </a>
                    <a href="">My Personal Site</a>
                </div>
                <div className="footer-github">
                    <a href="">
                        <GitHubIcon id="linkedin-icon"/>
                    </a>
                    <a href="">GitHub</a> 
                </div>
                <div className="footer-angelist">
                    <a href="">
                        <img src={angelist} alt="" id="angelist"/>
                    </a>
                    <a href="">Angelist</a> 
                </div>
            </div>
        </div>
    );
}
 
export default Footer;