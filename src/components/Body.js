import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { RESTAURANT_LIST_API_URL } from "../utils/constants.js";

const Body = ()=> {

    //State variable super powerful variable
    //const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    //can also be written as 
    const arr = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = arr;
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    //console.log("usestate",useState());

    //can also be written as 
    //const arr = useState(resList);
    //const listOfRestaurants = arr[0];
    //const setListOfRestaurants = arr[0];

    useEffect( ()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_API_URL);
        
        const json = await data.json();
        let listOfValidRes = json.data.cards.filter((value, index)=>{
            return value.card?.card?.gridElements?.infoWithStyle?.restaurants;
        });
        //optional chaining
        let resListAPIData = listOfValidRes[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(resListAPIData);
        setFilteredRestaurants(resListAPIData);
    };

    const onlineStaus = useOnlineStatus();
    if(onlineStaus === false){
        return <h1>Looks like you are offline!! Please check your internet connection</h1>
    }

    //console.log("body rendered");
    //conditional rendering 
    return listOfRestaurants.length === 0 ? 
    <Shimmer /> 
    : (
        <div className="body">
            <div className="filter flex">
                <div className="Search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}
                    ></input>
                    <button className="btn-search px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={()=>{
                        console.log(searchText);
                        const searchFilteredList = listOfRestaurants.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilteredRestaurants(searchFilteredList);
                    }}
                    >Search</button>
                </div>
                <div className="Search m-4 p-4 flex items-center">
                    <button className="filter-btn px-4 py-2 bg-gray-100  rounded-lg" 
                    onClick={()=>{
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                    >Top Rated Restaurants
                    </button>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
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