import BioTemplate from "../../templates/biotemplate";
import Resume from "/src/assets/resumes/Phillip_D_Resume.pdf";
import Phillip_D from "/src/assets/team_photos/Phillip_Dinh.jpeg";

function Phillip_Dinh() {
    const description = 'I am a rising junior at Swarthmore College who is double majoring in Computer Science and Mathematics. I am interested in all areas of computer science and am curious about how technology can be used to solve real-world problems. In my free time I like to play video games, volleyball, and watch tech-review videos.';

    return (
        <BioTemplate
            image={Phillip_D}
            name='Phillip Dinh'
            role='Research Assistant'
            description={description}
            pdf={Resume}
            linkedin='https://www.linkedin.com/in/phillipdinh1/'
            github='https://github.com/PDinh2004'
            email='pdinh1@swarthmore.edu'
        />
    )
}

export default Phillip_Dinh;