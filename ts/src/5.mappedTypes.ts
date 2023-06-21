interface DogInfo {
  name: string;
  age: number;
}

type Listners<T extends object> = {
  [Property in keyof T as `on${Capitalize<string>}Change`]: (
    val: T[Property],
  ) => void;
};

function listenToObj<T extends object>(obj: T, listeners: Listners<T>): void {
  console.log(obj);
  console.log(listeners);
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

const dogListners: Listners<DogInfo> = {
  onNameChange: (val: string) => {
    console.log(val);
  },
  onAgeChange: (val: number) => {
    console.log(val);
  },
};

listenToObj<DogInfo>(lg, dogListners);

export { listenToObj };
