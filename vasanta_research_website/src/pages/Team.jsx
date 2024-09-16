import { Link } from 'react-router-dom';
import './Team.css'

// Team Photos
import Vasanta_C from "/src/assets/team_photos/Vasanta_Chaganti.jpg";
import Phillip_D from "/src/assets/team_photos/Phillip_Dinh.jpeg";

const baseUrl = '/sparklab.github.io/vasanta_research_website';

const teamMembers = [
    {
        name: 'Vasanta Chaganti',
        role: 'Principle Investigator',
        username: 'vasanta-chaganti',
        img: Vasanta_C
    },
    {
        name: 'Phillip Dinh',
        role: 'Research Assistant',
        username: 'phillip-dinh',
        img: Phillip_D
    },
    {
        name: 'Jake Bohman',
        role: 'Research Assistant',
        username: 'jake-bohman',
        img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'Michael Melnikov',
        role: 'Research Assistant',
        username: 'michael-melnikov',
        img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'Benjamin Goldstein',
        role: 'Research Assistant',
        username: 'benjamin-goldstein',
        img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'Benjamin Gottlieb',
        role: 'Research Assistant',
        username: 'benjamin-gottlieb',
        img: 'https://miro.medium.com/v2/resize:fit:310/0*ZYDCn6eN0BkmY8V-.'
    },
    {
        name: 'Xi Teng Tay',
        role: 'Research Assistant',
        username: 'xi-teng-tay',
        img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'Ritika Rajamani',
        role: 'Research Assistant',
        username: 'ritika-rajamani',
        img: 'https://www.w3schools.com/howto/img_avatar.png'
    }
]

function Team() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 id='teamIntro'>Meet the Team!</h1>

            <div className='teamContainer'>
                <ul>
                    {teamMembers.map((member, index) => (
                        <li key={index}>
                            <div className='teamMember'>
                                <Link to={`${baseUrl}/team/${member.username}`} >
                                    <img src={member.img} alt='Profile picture' />
                                </Link>
                                <div className='teamMember-info'>
                                    <div id='name'>{member.name}</div>
                                    <div id='role'>{member.role}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default Team