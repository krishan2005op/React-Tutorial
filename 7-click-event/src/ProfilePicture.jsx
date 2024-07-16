

function ProfilePicture(){

        // eslint-disable-next-line no-unused-vars
        const imageURL = "https://via.placeholder.com/150";

        // eslint-disable-next-line no-unused-vars
        const handleClick = () => console.log("OOUCH!!");

        return(
            <>
                <div onClick={handleClick}>
                 <img src={imageURL} ></img>
                </div>
            </>
            
        )
}

export default ProfilePicture