import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null){
        return <Shimmer />
    }

    const {name,cuisines, cloudinaryImageId, costForTwoMessage,avgRating} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("=====",itemCards);

    return (
        <div className="Menu mt-4 mb-4 justify-center max-w-[450px] min-h-[800px]">
            <h1 className="font-bold">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            
            <h2 className="font-bold">Menu</h2>
            <ul>
                {itemCards.map((item)=><li  className="border border-solid border-black" key={item.card.info.id}>{item.card.info.name} - Rs-{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;

//mt-4 mb-4 max-w-[800px] min-h-[800px] 