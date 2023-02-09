import * as React from 'react';
import { MealCategory } from './MealCategory';
import { RestaurantSelect } from './RestaurantSelect';
import { DishSelect } from './DishSelect';
import { OrderReview } from './OrderReview';
import { StepContainerBar } from './StepContainerBar';
import { NavBottomBar } from './NavBottomBar';


const allSteps=["MealCategory","RestaurantSelect","DishSelect","OrderReview"];

export interface IStepHandlerProps {
}

export interface IStepHandlerState {
  currentStepNum: number;
}

export default class StepHandler extends React.Component<IStepHandlerProps, IStepHandlerState> {
  constructor(props: IStepHandlerProps) {
    super(props);

    this.state = {
      currentStepNum: 0
    }
  }

  updateStepNumber=(stepNum:number)=>{
    var updatedStepNum:number=this.state.currentStepNum+stepNum;
    updatedStepNum<0?updatedStepNum=0:updatedStepNum>(allSteps.length-1)?updatedStepNum=(allSteps.length-1):updatedStepNum=updatedStepNum;
    console.log("updatedStepNum",updatedStepNum);
    this.setState({currentStepNum:updatedStepNum});
  }

  public render() {
    return(
      <div id="stepHandler">
        <StepContainerBar StepContainerBarButtonOnClick={(value:number)=>this.setState({currentStepNum:value})}/>

        {allSteps[this.state.currentStepNum] ==="MealCategory"?<MealCategory />:null}
        {allSteps[this.state.currentStepNum]==="RestaurantSelect"?<RestaurantSelect/>:null}
        {allSteps[this.state.currentStepNum]==="DishSelect"?<DishSelect/>:null}
        {allSteps[this.state.currentStepNum]==="OrderReview"?<OrderReview />:null}

        <NavBottomBar NavBottomBarButtonOnClick={(value:number)=>{this.updateStepNumber(value)}} />
      </div>
    )
  }
}
