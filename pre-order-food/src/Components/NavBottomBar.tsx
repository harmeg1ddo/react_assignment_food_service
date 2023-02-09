import * as React from 'react';

export interface NavBottomBarProp {
  NavBottomBarButtonOnClick: (value:number) => void
}

export function NavBottomBar(props: NavBottomBarProp) {
  return (
    <div>
      <button onClick={()=>props.NavBottomBarButtonOnClick(-1)}>Previous</button>
      <button onClick={()=>props.NavBottomBarButtonOnClick(+1)}>Next</button>
    </div>
  );
}
