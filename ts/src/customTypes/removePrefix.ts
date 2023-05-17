interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}

type RemovePrefixFromObj<T> = {
  [K in keyof T as RemovePrefix<K>]: T[K];
};

type RemovePrefix<T> = T extends `maps:${infer U}` ? U : T;

type DesiredShape = RemovePrefixFromObj<ApiData>;
