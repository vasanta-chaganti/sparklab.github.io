import BioTemplate from "../../templates/biotemplate";

function XiTeng_Tay() {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed non risus.\nSuspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.\nCras elementum ultrices diam.\nMaecenas ligula massa, varius a, semper congue, euismod non, mi.\nProin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.\nDuis semper.\n';
    const papers = [{
        title: 'Paper 1',
        authors: ['Xi Teng Tay'],
        publication: 'Journal of XT',
        date: '2020-01-01',
        link: 'https://www.google.com'
    }];


    return (
        <BioTemplate
            image='https://cdn.mos.cms.futurecdn.net/39CUYMP8vJqHAYGVzUghBX-1200-80.jpg'
            // image= {image}
            name='Xi Teng Tay'
            role='Undergraduate Research Assistant'
            description='I am an undergraduate student at Swarthmore College, pursuing a double major in Computer Science and Political Science. In my free time, I like exploring new cities, trying new coffee spots and going to the gym.'
            papers={papers}
        />
    )
}

export default XiTeng_Tay;