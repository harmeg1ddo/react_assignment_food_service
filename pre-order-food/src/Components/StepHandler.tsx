import * as React from 'react';
import { MealCategory } from './MealCategory';
import { RestaurantSelect } from './RestaurantSelect';
import { DishSelect } from './DishSelect';
import { OrderReview } from './OrderReview';
import { StepContainerBar } from './StepContainerBar';

export interface IStepHandlerProps {
}

export interface IStepHandlerState {
  currentStep: string;
}

export default class StepHandler extends React.Component<IStepHandlerProps, IStepHandlerState> {
  constructor(props: IStepHandlerProps) {
    super(props);

    this.state = {
      currentStep: "OrderReview"
    }
  }

  currentStepUpdater = (stepName: string) => {
    console.log("CurrentStep:::", stepName);
    this.setState({
      currentStep: stepName
    });
  }

  public render() {
    return(
      <div id="stepHandler">
        <StepContainerBar StepContainerBarButtonOnClick={(value:string)=>this.setState({currentStep:value})}/>

        {this.state.currentStep==="MealCategory"?<MealCategory />:null}
        {this.state.currentStep==="RestaurantSelect"?<RestaurantSelect/>:null}
        {this.state.currentStep==="DishSelect"?<DishSelect/>:null}
        {this.state.currentStep==="OrderReview"?<OrderReview />:null}
      </div>
    )
  }
}
