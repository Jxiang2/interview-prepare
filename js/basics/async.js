async function a() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("step 1");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("step 2");

  return "done";
}

async function b() {
  const c = await a();
  return c;
}

b().then((c) => console.log(c));
