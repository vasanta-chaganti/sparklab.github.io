import BioTemplate from "../../templates/biotemplate";
import Resume from "/src/assets/resumes/rajamani-r-cv-2024.pdf";

function Ritika_Rajamani() {
    const description = 'I am an undergraduate student pursuing a major in Computer Science and a minor in Chemistry. I am also hoping to purse a career in medicine. The intersection between health care and computer science deeply fascinates me. I hope to be able to employ my computer science background in cutting edge genomics research in the future. Currently, I am trying to expand my computer science and chemisty background through research in both disciplines. Outside of studies, I am a NCAA Division III Track & Field athlete. In my free time, I like to listen to music, hang out with friends, and work out.\n';


    return (
        <BioTemplate
            image=''
            name='Ritika Rajamani'
            role='Research Assistant'
            description={description}
            pdf={Resume}
            linkedin=''
            github=''
            email='rrajama1@swarthmore.edu'
        />
    )
}

export default Ritika_Rajamani;