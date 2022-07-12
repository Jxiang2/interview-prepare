type obj = {
  name: string;
  value: number;
};

type keys = keyof obj;
const instance: keys = 'name' || 'value';
