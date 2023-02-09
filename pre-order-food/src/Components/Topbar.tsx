import * as React from 'react';

export interface Topbar {
  topbarButtonOnClick: (value:string) => void
}

export function Topbar(props: Topbar) {
  return (
    <div>
      <button onClick={()=>props.topbarButtonOnClick("MealCategory")}>Step 1</button>
      <button onClick={()=>props.topbarButtonOnClick("RestaurantSelect")}>Step 2</button>
      <button onClick={()=>props.topbarButtonOnClick("DishSelect")}>Step 3</button>
      <button onClick={()=>props.topbarButtonOnClick("OrderReview")}>Step 4</button>
    </div>
  );
}
