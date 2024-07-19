import BioTemplate from "../../templates/biotemplate";
import Resume from "/src/assets/Phillip_D_Resume.pdf";

function Phillip_Dinh() {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed non risus.\nSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\nCras elementum ultrices diam.\nMaecenas ligula massa, varius a, semper congue, euismod non, mi.\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.\nDuis semper.\n';


    return (
        <BioTemplate
            image='https://media.licdn.com/dms/image/C5603AQGeg-kWPT0ADg/profile-displayphoto-shrink_800_800/0/1660916965414?e=1726704000&v=beta&t=s585ORsi9zxbMOrbT4mW9NbsvPatmsKcDBWTDafp3H0'
            name='Phillip Dinh'
            role='Research Assistant'
            description={description}
            type='Resume'
            pdf={Resume}
            linkedin='https://www.linkedin.com/in/phillipdinh1/'
            github='https://github.com/PDinh2004'
            email='pdinh1@swarthmore.edu'
        />
    )
}

export default Phillip_Dinh;