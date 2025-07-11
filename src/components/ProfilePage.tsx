import React from "react";
import { useAuth } from "./AuthContext";

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="profile-card">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <img className="profile-photo" src={user.picture} alt="User profile" />
      <button
        onClick={logout}
        className="logout-button"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
