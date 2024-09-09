import "./About.css";

function About() {
    return (
        <div className="aboutPage">
            <div id='title'>About</div>
            <div id='description'>Our lab website has been inspired from the <a href='https://theshahlab.org/' target='_blank'>Shah Lab</a> website. Their site was inspired by <a href='https://bedford.io/' target='_blank'>Trevor Bedford's</a> website. This site was created from scratch using React, CSS, and JavaScript.</div>
            <div id='description'>Our website's source code can be found <a href='https://github.com/vasanta-chaganti/sparklab.github.io' target='_blank'>here</a>.</div>
        </div>
    );
}

export default About;