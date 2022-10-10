interface Database<T, K> {
  get(id: T): K;

  set(id: T, value: K): void;
}

interface Persistable {
  saveToString(): string;

  restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase<T extends DBKeyType, K> implements Database<T, K> {
  protected db = {} as Record<T, K>;

  constructor(db?: Record<T, K>) {
    // allow paramterized constructor
    if (db) this.db = db;
  }

  get(id: T): K {
    return this.db[id];
  }

  set(id: T, value: K): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDB<T extends DBKeyType, K>
  extends InMemoryDatabase<T, K>
  implements Persistable
{
  constructor(db?: Record<T, K>) {
    db && super(db); // call parent constructor, to access parent FIELDS
  }

  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

// tests
const myDB = new PersistentMemoryDB<string, number>({
  x: 10,
  y: 20,
});

myDB.set("foo", 22);
console.log(myDB.get("foo"));

const saved = myDB.saveToString();
console.log(saved);

myDB.set("foo", 23);
console.log(myDB.get("foo"));

const myDB2 = new PersistentMemoryDB<string, number>();

myDB2.restoreFromString(saved);
console.log(myDB2);

console.log(myDB2.get("foo"));

export { PersistentMemoryDB };
