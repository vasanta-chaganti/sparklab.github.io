import BioTemplate from "../../templates/biotemplate";
import Resume from "/src/assets/resumes/YOUR_RESUME_NAME.pdf";
import YOUR_IMAGE from "/src/assets/team_photos/YOUR_IMAGE_NAME.jpeg";

function YOUR_NAME() {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed non risus.\nSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\nCras elementum ultrices diam.\nMaecenas ligula massa, varius a, semper congue, euismod non, mi.\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.\nDuis semper.\n';

    return (
        <BioTemplate
            image={YOUR_IMAGE}
            name='YOUR_NAME'
            role='Research Assistant'
            description={description}
            type='Resume'
            pdf={Resume}
            linkedin='YOUR LINKEDIN'
            github='YOUR GITHUB'
            email='YOUR EMAIL'
        />
    )
}

export default YOUR_NAME;