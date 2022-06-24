interface DogInfo {
  name: string;
  age: number;
}

type Listners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (val: T[Property]) => void
};

function listenToObj<T>(obj: T, listeners: Listners<T>): void {
  throw "To Be Implemented";
}

type DogInfoListeners = Listners<DogInfo>;

const lg: DogInfo = {
  name: "LG",
  age: 13
};

listenToObj<DogInfo>(lg, {
  onNameChange: (val: string) => { },
  onAgeChange: (val: number) => { }
});