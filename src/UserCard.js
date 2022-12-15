import "./UserCard.css";

const UserCard = ({ userData }) => {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_image">
          <img src={userData.picture.medium} />
        </div>
        <div className="card_data">
          <div className="card_name">
            {userData.name.first} {userData.name.last}
          </div>
          <div className="card_body">
            <div className="location">
              <p>
                {userData.location.street.number}{" "}
                {userData.location.street.name}
              </p>
              <p>
                {userData.location.city}, {userData.location.state}{" "}
                {userData.location.postcode}
              </p>
              <p>{userData.location.country}</p>
            </div>
            <p>✉️ {userData.email}</p>
            <p>📞 {userData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
