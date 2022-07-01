import { logTimings, timing } from "./indexDecorators";

const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, time)
  );

@logTimings
class Users {
  @timing()
  async getUsers() {
    return await delay(1000, []);
  }

  @timing()
  async getUser(id: number, name: string) {
    return await delay(50, {
      id: `user:${id}`,
    });
  }
}

async function test() {
  const users = new Users();

  const user = await users.getUser(22, "xjy");
  console.log(`Got ${JSON.stringify(user)}`);

  await users.getUser(42, "xjy");

  await users.getUsers();

  // @ts-ignore
  users.printTimings();
};

test();