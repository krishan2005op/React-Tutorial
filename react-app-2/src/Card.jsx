// import profilePic from './assests/profile.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150"/*{profilePic}*/ alt="Profile Picture" />
            <h2 className="card-title">Krishan Malhotra</h2>
            <p className="card-text">I am a Programmer and like to play video games</p>
        </div>
    );
}

export default Card