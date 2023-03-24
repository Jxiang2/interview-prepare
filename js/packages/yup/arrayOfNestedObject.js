const Yup = require("yup");
// only put the fields need to be tested into Yup!!!

const pauses = Yup.array()
  .of(
    Yup.object().shape({
      data: Yup.object()
        .shape({
          duration: Yup.number().required(),
        })
        .required(),
    }),
  )
  .required();

const roles = Yup.array().of(
  Yup.object()
    .shape({
      data: Yup.object().shape({
        id: Yup.string().nullable().required("id is missing"),
      }),
    })
    .required(),
);

const pausesResult = pauses.validate([]);

pausesResult
  .then((val) => console.log(val))
  .catch((error) => {
    if (error.name === "ValidationError") {
      console.log(error.name);
    }
  });

const rolesResult = roles.validate([
  {
    id: 1,
    data: {
      amount: 1,
      id: 1,
      name: "hi",
    },
  },
  {
    id: 1,
    data: {
      amount: 1,
      id: null,
      name: null,
    },
  },
]);
rolesResult
  .then((val) => console.log(val))
  .catch((error) => {
    if (error.name === "ValidationError") {
      console.log(error.errors);
    }
  });
