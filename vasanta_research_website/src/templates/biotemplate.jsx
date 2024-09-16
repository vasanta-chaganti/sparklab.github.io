import './biotemplate.css';
import DocumentImage from '/src/assets/icons/document.png';
import LinkedInImage from '/src/assets/icons/linkedin.png';
import GitHubImage from '/src/assets/icons/github.png';
import InboxIcon from '/src/assets/icons/inbox.png';
import GenericProfilePic from '/src/assets/icons/Generic-Profile-Image.png';

function BioTemplate(props) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='bio'>
                <div className='picture-links'>
                    <img src={props.image ? props.image : GenericProfilePic} alt={`${props.name} profile picture`} />
                    <div className='social-media-links'>
                        {props.pdf ? (
                            <div className='social-media'>
                                <p>Resume</p>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '1rem' }}>
                                    <img src={DocumentImage} alt='Resume icon' />
                                    <a style={{ color: '#5b5b5b' }} href={props.pdf} target='_blank'>
                                        pdf
                                    </a>
                                </div>
                            </div>
                        ) : null}


                        {props.linkedin ? (
                            <div className='social-media'>
                                <p>LinkedIn</p>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '1rem' }}>
                                    <img src={LinkedInImage} alt='LinkedIn icon' />
                                    <a style={{ paddingLeft: '5px', color: '#5b5b5b' }} href={props.linkedin} target='_blank'>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        ) : null}

                        {props.github ? (
                            <div className='social-media'>
                                <p>GitHub</p>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '1rem' }}>
                                    <img src={GitHubImage} alt='GitHub icon' />
                                    <a style={{ paddingLeft: '5px', color: '#5b5b5b' }} href={props.github} target='_blank'>
                                        {props.github.split('/').slice(-1)[0]}
                                    </a>
                                </div>
                            </div>
                        ) : null}


                        {props.email ? (
                            <div className='social-media'>
                                <p>Email</p>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '1rem' }}>
                                    <img src={InboxIcon} alt='Email icon' />
                                    <a style={{ paddingLeft: '5px', color: '#5b5b5b' }} href={'mailto: ' + props.email} target='_blank'>
                                        {props.email}
                                    </a>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className='bio-description'>
                    <div className='description'>
                        <div id='name'>{props.name}</div>
                        <div id='role'>{props.role}</div>

                        <p style={{ 'whiteSpace': 'pre-wrap' }}>
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BioTemplate;