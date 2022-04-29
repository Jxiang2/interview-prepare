// declare method-relative types
type SetStringStateFunction = (state: string) => void;

type StringUseStateTransaction =
  (state: string, setState: SetStringStateFunction) => [state: string, setState: SetStringStateFunction];


// declare & implement method
let stringUseState: StringUseStateTransaction;
stringUseState = (state: string, setState: SetStringStateFunction) => {
  return [state, setState];
};


// consume method
const myState = "hello";
const mySetState: SetStringStateFunction = (myState) => console.log(myState);

const [state, setState] = stringUseState(myState, mySetState);
console.log(state, setState);








