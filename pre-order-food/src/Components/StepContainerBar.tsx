import * as React from 'react';

export interface StepContainerBarProp {
  StepContainerBarButtonOnClick: (value:string) => void
}

export function StepContainerBar(props: StepContainerBarProp) {
  return (
    <div>
      <button onClick={()=>props.StepContainerBarButtonOnClick("MealCategory")}>Step 1</button>
      <button onClick={()=>props.StepContainerBarButtonOnClick("RestaurantSelect")}>Step 2</button>
      <button onClick={()=>props.StepContainerBarButtonOnClick("DishSelect")}>Step 3</button>
      <button onClick={()=>props.StepContainerBarButtonOnClick("OrderReview")}>Step 4</button>
    </div>
  );
}
