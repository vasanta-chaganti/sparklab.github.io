import './biotemplate.css';

function BioTemplate(props) {
    return (
        <div className='bio'>
            <div className='picture-links'>
                <img src={props.image} alt={`${props.name} profile picture`} />
                <div className='social-media-links'>
                    <p>CV</p>
                    <p>LinkedIn</p>
                    <p>GitHub</p>
                    <p>Email</p>
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

                <div className='papers'>
                    <h2>Papers</h2>
                    <ul>
                        {props.papers.map((paper, index) => (
                            <li key={index}>
                                <div>
                                    <a href={paper.link}>{paper.title}</a>
                                </div>
                                <div>
                                    {paper.authors.join(', ')}
                                </div>
                                <div>
                                    {paper.publication}
                                </div>
                                <div>
                                    {paper.date}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BioTemplate;