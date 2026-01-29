import Avatar from "./Avatar";

function UserProfile({ username }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>User: {username}</h2>
      <Avatar />
    </div>
  );
}

export default UserProfile;
