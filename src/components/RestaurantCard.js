import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

export const styleCard = {
    backgroundColor:"#f0f0f0"
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,costForTwo, avgRating, deliveryTime, cloudinaryImageId} = resData;
    
    const {loggedInUser} = useContext(UserContext);
    console.log("=UserContext",UserContext);
    console.log("=loggedInUser",loggedInUser);

    return (
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="res-logo rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} Minutes</h4>
            <h4>User:{loggedInUser}</h4>

        </div>
    )
}

//Higher Order Component
// Input  - Restaurant Card
// Ouput - Restaurant Card => Restaurant Card Promoted tag

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
                    Promoted
                </label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;