// knowledge checkpoint: TS tuple, generics, Closure
const simpleState = <T>(initial: T): [() => T, (v: T) => void] => {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
};

const [strgetter, strsetter] = simpleState<string | null>(null);
const [numgetter, numsetter] = simpleState(1);
console.log(strgetter());
console.log(numgetter());
strsetter("goodbye");
console.log(strgetter());
console.log(numgetter());

// knowledge checkpoint: generics
interface ItemWithRank<T> {
  item: T;
  rank: number;
}

const ranker = <T>(items: T[], rankAlgo: (v: T) => number): T[] => {
  const itemsWithRank: Array<ItemWithRank<T>> = items.map((item) => ({
    item,
    rank: rankAlgo(item),
  }));

  itemsWithRank.sort((a, b) => a.rank - b.rank);

  return itemsWithRank.map((itemsWithRank) => itemsWithRank.item);
};

const strsToTest = ["XxxxxxxxxX", "hello", "world!", "xjy"];

const rankedItemList: Array<string> = ranker<string>(
  strsToTest,
  (str) => str.length,
);
console.log(rankedItemList);

//  knowledge checkpoint: TS generics, keyof
// 1
const pluck = <DataType, KeyType extends keyof DataType>(
  items: Array<DataType>,
  key: KeyType,
): Array<DataType[KeyType]> => {
  return items.map((item) => item[key]);
};

interface Dog {
  name: string;
  age: number;
}

const dogs: Array<Dog> = [
  { name: "Mimi", age: 12 },
  { name: "LG", age: 13 },
];

console.log(pluck<Dog, "age">(dogs, "age"));
console.log(pluck<Dog, "name">(dogs, "name"));

// 2
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

const sendEvent = <Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name],
): void => {
  console.log([name, data]);
};

sendEvent("addToCart", {
  time: 10,
  user: "xjy",
  quantity: 12,
  productID: "e32d2d2e23",
});

sendEvent("checkout", {
  time: 10,
  user: "xjy1",
});

// 3 generic function types vs generic types of function
interface Person {
  id: string; // unique identifier
  name: string;
  age: number;
}

const isInstanceOfPerson = (obj: unknown): obj is Person =>
  typeof (obj as Person).id === "string" &&
  typeof (obj as Person).name === "string" &&
  typeof (obj as Person).age === "number";

// 3.1 generic type of functions
type FC<Props> = (props: Props) => any; // declare

const myFunc: FC<Person> = ({ age, name }: Person) => {
  // implement (id, name) are destructed from passed person
  console.log(age.toLocaleString());
  console.log(name.toLocaleUpperCase());
};

myFunc({
  // use
  id: "1wec3212",
  name: "xjy",
  age: 22,
});

// 3.2 generic function types
type FC1 = <Props>(props: Props) => any; // declare

const myFunc1: FC1 = <Props>(props: Props) => {
  // implement
  if (isInstanceOfPerson(props)) {
    const { age, name } = props;
    console.log(age.toLocaleString());
    console.log(name.toLocaleUpperCase());
  } else {
    console.log("type check failed");
  }
};

myFunc1({
  // use
  id: "1wec3212",
  name: "xjy",
  age: 22,
});

myFunc1<Dog>({
  // use
  name: "dingding",
  age: 6,
});

export { myFunc, myFunc1, isInstanceOfPerson, rankedItemList, simpleState };
