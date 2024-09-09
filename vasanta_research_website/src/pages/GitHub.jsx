import "./GitHub.css";
import GitHubLogo from '/src/assets/icons/GitHub_Logo_Text.png';

function GitHub() {
    return (
        <div className="githubPage">
            <div className="githubItem">
                <div className="projectTitle">Measures of Latency</div>
                <div className='projectDescription'>Analysis and comparison of internet latency datasets.</div>
                <p><a href='https://github.com/vasanta-chaganti/Measures-of-latency' target="_blank">
                    <img src={GitHubLogo} alt="GitHub Logo" />
                </a></p>
            </div>

            {/* Ask Vasanta for public DP GitHub */}
            <div className="githubItem">
                <div className="projectTitle">Differential Privacy</div>
                <div className='projectDescription'>Deploying and evaluating differential privacy for network data privacy.</div>
                <p><a href="https://github.swarthmore.edu/Differential-Privacy" target="_blank">
                    <img src={GitHubLogo} alt="GitHub Logo" />
                </a></p>
            </div>

        </div>
    );
}

export default GitHub;