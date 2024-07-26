const Restaurant = ({name,cuisines,avgRatingString,cloudinaryImageId}) => {
    return (
        <div className="card">
            <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="Avatar"></img>
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>{cuisines.join(",")}</p>
                <p>{avgRatingString +" Stars"}</p>
            </div>
        </div>
    );
}

export default Restaurant;
