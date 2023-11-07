import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = ()=> {

    //State variable super powerful variable
    //const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    //can also be written as 
    const arr = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = arr;
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //can also be written as 
    //const arr = useState(resList);
    //const listOfRestaurants = arr[0];
    //const setListOfRestaurants = arr[0];

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        let listOfValidRes = json.data.cards.filter((value, index)=>{
            return value.card?.card?.gridElements?.infoWithStyle?.restaurants;
        });
        //optional chaining
        let resListAPIData = listOfValidRes[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(resListAPIData);
        setFilteredRestaurants(resListAPIData);
    };

    //console.log("body rendered");
    //conditional rendering 
    return listOfRestaurants.length === 0 ? 
    <Shimmer /> 
    : (
        <div className="body">
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    ></input>
                    <button className="btn-search" 
                    onClick={()=>{
                        console.log(searchText);
                        const searchFilteredList = listOfRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRestaurants(searchFilteredList);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4
                    );
                    setListOfRestaurants(filteredList);
                }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant => 
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                        <RestaurantCard  resData={restaurant.info} 
                        />
                    </Link>)
                }
            </div>
        </div>
    )
}

export default Body;