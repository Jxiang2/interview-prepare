// generic mixin (generic functions that return classes)

function CreateSimpleMemoeryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, val: T) {
      this.db[id] = val;
    }

    get(id: string) {
      return this.db[id];
    }

    getObject(): Record<string, T> {
      return this.db;
    }

    hello() {
      console.log("hello");
    }
  };
}

const SimpleNumberDatabase = CreateSimpleMemoeryDatabase<number>();

type DBType<Item> = {
  set: (id: string, val: Item) => void;
  get: (id: string) => Item;
  getObject: () => Record<string, Item>;
};

type NumberDBConstructor<DB extends DBType<number>> = new (
  ...args: any[]
) => DB;
//  ****************  constructor(...)   => object

function CreateDumpableDatabase<T extends NumberDBConstructor<DBType<number>>>(
  Base: T,
) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableNumberDatabase = CreateDumpableDatabase(SimpleNumberDatabase);
const sdb2 = new DumpableNumberDatabase();
sdb2.set("a", 1);
sdb2.set("b", 2);
sdb2.set("c", 3);
sdb2.dump();

export { CreateDumpableDatabase, CreateSimpleMemoeryDatabase };
