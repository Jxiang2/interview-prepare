import { Observable, Observer } from "rxjs";
import { map, filter } from "rxjs/operators";
import { data10users, data9users, UserData } from "./data";

const observable = new Observable<UserData>((subscriber) => {
  data10users.then((data) => subscriber.next(data));
  data9users.then((data) => subscriber.next(data));
}).pipe(
  map((value) => value.data),
  filter((value) => value.length >= 10), // filter out data with length less than 10

  map((value) => value.filter((user) => user.status === "active")),
  map((value) => value.reduce((acc, user) => acc + user.age, 0) / value.length),
  map((value) => {
    if (value < 18) throw new Error("Too young");
    return value;
  }),
);

// when error is thrown, the observable is completed
const observer: Observer<number> = {
  next: (value) => console.log(value),
  error: (err: Error) => console.log(err.message),
  complete: () => console.log("complete"),
};

observable.subscribe(observer);
