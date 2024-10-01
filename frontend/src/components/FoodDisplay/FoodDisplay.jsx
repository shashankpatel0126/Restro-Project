
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => { // Correctly destructure category
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className='food-display-list'>
        {food_list.map((item, index) => {
          console.log(category, item.category);
          // Filter by category or show all if "All" is selected
          if (category === 'All' || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id} // Use _id instead of id
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

