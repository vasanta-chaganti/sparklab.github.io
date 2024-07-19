import BioTemplate from "../../templates/biotemplate";

function Phillip_Dinh() {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed non risus.\nSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\nCras elementum ultrices diam.\nMaecenas ligula massa, varius a, semper congue, euismod non, mi.\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.\nDuis semper.\n';
    const papers = [{
        title: 'Paper 1',
        authors: ['Phillip Dinh'],
        publication: 'Journal of Phillip',
        date: '2020-01-01',
        link: 'https://www.google.com'
    }, {
        title: 'Paper 2',
        authors: ['Phillip Dinh', 'John Doe'],
        publication: 'Journal of Phillip',
        date: '2020-01-01',
        link: 'https://www.google.com'
    }];


    return (
        <BioTemplate
            // image='https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg'
            image='https://media.licdn.com/dms/image/C5603AQGeg-kWPT0ADg/profile-displayphoto-shrink_800_800/0/1660916965414?e=1726704000&v=beta&t=s585ORsi9zxbMOrbT4mW9NbsvPatmsKcDBWTDafp3H0'
            name='Phillip Dinh'
            role='Research Assistant'
            description={description}
            papers={papers}
        />
    )
}

export default Phillip_Dinh;