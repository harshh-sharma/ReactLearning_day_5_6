import { LOGO_URL,RestaurantImg } from "../../utils/constants"; 

const Card = (props) => {
    const {name,cuisines,maxDeliveryTime,avgRating,cloudinaryImageId} = props.restaurantData.data;
    return(
        <div id='cardContainer'>
            <div id='top-section'>
                <img src={RestaurantImg + cloudinaryImageId }/>
            </div>
            <div id='bottom-section'>
                <h3>{name}</h3>
                <p>{cuisines.map((data,index) => index < 3 ? data : '').join(',')}</p>
                <div className='inner-card-container'>
                    <span> {avgRating}</span>
                    <span>{maxDeliveryTime}</span>
                    <span>400 For Two</span>
                </div>
            </div>
        </div>
    );
}

export default Card ;