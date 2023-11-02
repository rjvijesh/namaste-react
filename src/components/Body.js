import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = ()=> {

    //State variable super powerful variable
    //const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    //can also be written as 
    const arr = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = arr;

    //can also be written as 
    //const arr = useState(resList);
    //const listOfRestaurants = arr[0];
    //const setListOfRestaurants = arr[0];



    //Normal JS variable
    let listOfRestaurantsJS = [
        {
            data: {
                id: "334475",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "3.8",
            },
        },
        {
            data: {
                id: "3344756",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.5",
            },
        },
        {
            data: {
                id: "3344757",
                name: "MCD",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.1",
            },
        },
    ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                    console.log(filteredList);
                }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id}resData={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;