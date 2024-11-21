import { useRecoilValue } from 'recoil'
import { profileatom } from './atoms/profileatom';


function Profile (){
    const personProfile = useRecoilValue(profileatom);
    return (
        <div className='profile-container'>
            <div className='profile-image'>
                <img src={personProfile.img} alt={personProfile.name} />
            </div>

            <div className='profile-details'>
                <h2>{personProfile.name} <span style={{ color: '#757575', fontWeight: 'normal', fontSize: '14px' }}>{personProfile.age}</span></h2>
                <h3>{personProfile.location}</h3>
            </div>

            <div className='profile-stats'>
                <p>{personProfile.followers > 999 ? `${(personProfile.followers / 1000).toFixed(1)}K` : personProfile.followers} <br /><span style={{ color: '#757575' }}>Followers</span></p>
                <p>{personProfile.Likes > 999 ? `${(personProfile.Likes / 1000).toFixed(1)}K` : personProfile.Likes} <br /><span style={{ color: '#757575' }}>Likes</span></p>
                <p>{personProfile.Photos > 999 ? `${(personProfile.Photos / 1000).toFixed(1)}K` : personProfile.Photos} <br /><span style={{ color: '#757575' }}>Photos</span></p>
            </div>
        </div>
    )
}

export default Profile;