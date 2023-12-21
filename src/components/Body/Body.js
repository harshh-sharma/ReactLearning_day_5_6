import Card from "./Card";
import restaurantData from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurants,setListOfRestaurants]  = useState(restaurantData);
    const [searchValue,setSearchValue] = useState('');
    const [tempRestaurantData,setTempRestaurantData] = useState(restaurantData);
    const [featureButton,setFeatureButton] = useState('Top Rated Restaurant');

    const filterHandler = () => {
        if (featureButton === "Top Rated Restaurants") {
          listOfRestaurants = listOfRestaurants.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfRestaurants(listOfRestaurants);
          setFeatureButton("All Restaurants");
        } else {
          setListOfRestaurants(restaurantData);
          setFeatureButton("Top Rated Restaurants");
        }
      }



    return (
        <div id='container'>
            <div className="top-seection">
                <div id="top-section">
                    <div id="search-container">
                        <input placeholder="Search your restaurant..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button onClick={() => {
                            setListOfRestaurants(tempRestaurantData.filter(restaurant => restaurant.data.name.toLowerCase().includes(searchValue)));
                        }} >Search</button>
                    </div>
                    <button onClick={filterHandler}>{featureButton}</button>
                </div>
            </div>
            <div id='restaurant-container'>
                {
                  listOfRestaurants.map((restaurant) =>  <Card key = {restaurant.data.id} restaurantData = {restaurant} /> )
                }
            </div>
        </div>
    );
}

export default Body ;