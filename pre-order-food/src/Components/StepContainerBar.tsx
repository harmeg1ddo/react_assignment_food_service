import * as React from 'react';

export interface StepContainerBarProp {
  StepContainerBarButtonOnClick: (value:number) => void
}

export function StepContainerBar(props: StepContainerBarProp) {
  return (
    <div>
      <button onClick={()=>props.StepContainerBarButtonOnClick(0)}>Step 1</button>
      <button onClick={()=>props.StepContainerBarButtonOnClick(1)}>Step 2</button>
      <button onClick={()=>props.StepContainerBarButtonOnClick(2)}>Step 3</button>
      <button onClick={()=>props.StepContainerBarButtonOnClick(3)}>Step 4</button>
    </div>
  );
}
