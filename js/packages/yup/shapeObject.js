const yup = require("yup");

const string = yup.string();
const number = yup.number().required();
const shape = (value) => yup.object().shape(value);
const arrayOf = (value) => yup.array().of(value);

const schema = {
  name: string,
  age: number,
  properties: shape({
    count: number,
    totalValue: number,
    items: arrayOf(shape({ value: number, location: string })),
  }),
};

schema.properties = schema.properties.concat(
  shape({ ownerships: arrayOf(shape({ name: string, age: number })) }),
);

// only a schema object can be validated
const res = shape(schema).validate({
  name: "xjy",
  age: 12,
  properties: {
    count: 5,
    totalValue: 5000000,
    ownerships: [{ name: "xjy", age: 12 }],
  },
});

res
  .then((val) => console.log(val))
  .catch((error) => {
    if (error.name === "ValidationError") {
      console.log(error.name);
    }
  });
