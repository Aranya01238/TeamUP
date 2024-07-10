import React, { useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="profile-page">
      <div className="profile-display">
        <h2>Profile Information</h2>
        {/* Display Profile Information */}
      </div>
      <button onClick={() => setIsEditing(!isEditing)}>Edit Profile</button>
      {isEditing && (
        <div className="profile-edit">
          {/* Profile Editing Form */}
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
