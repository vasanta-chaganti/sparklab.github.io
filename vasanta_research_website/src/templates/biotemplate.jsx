import './biotemplate.css';
import DocumentImage from '/src/assets/document.png';
import LinkedInImage from '/src/assets/linkedin.png';
import GitHubImage from '/src/assets/github.png';
import InboxIcon from '/src/assets/inbox.png';

function BioTemplate(props) {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='bio'>
                <div className='picture-links'>
                    <img src={props.image} alt={`${props.name} profile picture`} />
                    <div className='social-media-links'>
                        {props.type ? (
                            <div className='social-media'>
                                <p>{props.type}</p>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '1rem' }}>
                                    <img src={DocumentImage} alt={props.type} />
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
                                    <img src={LinkedInImage} alt={props.type} />
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
                                    <img src={GitHubImage} alt={props.type} />
                                    <a style={{ paddingLeft: '5px', color: '#5b5b5b' }} href={props.github} target='_blank'>
                                        {props.github.split('/').slice(-1)[0]}
                                    </a>
                                </div>
                            </div>
                        ) : null}


                        {props.email ? (
                            <div className='social-media'>
                                <p>GitHub</p>
                                <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: '1rem' }}>
                                    <img src={InboxIcon} alt={props.type} />
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