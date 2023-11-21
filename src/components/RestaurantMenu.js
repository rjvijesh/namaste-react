import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);
    
    if(resInfo === null){
        return <Shimmer />
    }

    //console.log("resInfo", resInfo);
    const {name,cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    //console.log("=====",resInfo?.cards[0]?.card?.card?.info.name);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    
    return (
        <div className="Menu text-center">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories with accordian with header and body */}
            {categories.map((category, index)=>(
            <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=>{setShowIndex(index)}}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;

//mt-4 mb-4 max-w-[800px] min-h-[800px] 
//mt-4 mb-4 justify-center max-w-[450px] min-h-[800px]