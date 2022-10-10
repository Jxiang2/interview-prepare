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
  };
}

const SimpleStringDatabase = CreateSimpleMemoeryDatabase<string>();

type Constructor<T> = new (...args: any[]) => T;
//  ****************  constructor(...)   => object

function CreateDumpableDatabase<
  T extends Constructor<{
    getObject(): Record<string, any>;
  }>,
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase =
  CreateDumpableDatabase<typeof SimpleStringDatabase>(SimpleStringDatabase);
const sdb2 = new DumpableStringDatabase();
sdb2.set("a", "1");
sdb2.set("b", "2");
sdb2.set("c", "3");
sdb2.dump();
