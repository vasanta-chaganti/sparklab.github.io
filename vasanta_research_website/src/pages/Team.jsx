import { Link } from 'react-router-dom';
import './Team.css'

const teamMembers = [
    {
        name: 'Vasanta Chaganti',
        role: 'Principle Investigator',
        username: 'vasanta-chaganti',
        img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
        name: 'Phillip Dinh',
        role: 'Research Assistant',
        username: 'phillip-dinh',
        img: 'https://ih1.redbubble.net/image.1571289629.0372/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
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
        img: 'https://www.w3schools.com/howto/img_avatar.png'
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
            <h1 style={{ textAlign: 'center' }}>Meet the Team!</h1>

            <div className='teamContainer'>
                <ul>
                    {teamMembers.map((member, index) => (
                        <li key={index}>
                            <div className='teamMember'>
                                <Link to={`/team/${member.username}`} >
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
        </div>
    );
}

export default Team