import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const user = {
    name: 'James Bond',
    avatar: 'https://i.pravatar.cc/150?img=32',
    bio: 'Software Engineer at MI6',
    location: 'London, UK',
    followers: 1234,
    following: 567,
  };

  return (
    <div className="profile-card">
      <div className="profile-header"></div>
      <div className="profile-content">
        <div className="profile-avatar">
          <img src={user.avatar} alt={`${user.name}'s avatar`} />
        </div>
        <div className="profile-body">
          <h1 className="profile-name">{user.name}</h1>
          <p className="profile-bio">{user.bio}</p>
          <p className="profile-location">{user.location}</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <strong>{user.followers}</strong>
          <span>Followers</span>
        </div>
        <div className="stat">
          <strong>{user.following}</strong>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
