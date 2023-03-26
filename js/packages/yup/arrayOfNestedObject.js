const Yup = require("yup");
// only put the fields need to be tested into Yup!!!

const pauses = Yup.array()
  .of(
    Yup.object().shape({
      data: Yup.object()
        .shape({
          duration: Yup.number().nullable().required("duration is missing"),
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

async function checkPauses() {
  try {
    const pausesResult = await pauses.validate([
      {
        id: 1,
        data: {
          duration: null,
          another: "hi",
        },
      },
    ]);
    console.log("checking pauses -- ", pausesResult);
  } catch (error) {
    console.log("checking pauses -- ", error.errors);
  }
}

async function checkRoles() {
  try {
    const rolesResult = await roles.validate([
      {
        id: 1,
        data: {
          amount: 1,
          id: 1,
        },
      },
      {
        id: 1,
        data: {
          amount: 1,
          id: null,
        },
      },
    ]);
    console.log("checking roles -- ", rolesResult);
  } catch (error) {
    console.log("checking roles -- ", error.errors);
  }
}

checkPauses();
checkRoles();
