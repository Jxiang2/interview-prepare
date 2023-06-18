// 4 js sleep
function sleep(n) {
  const a = new Promise((resolve) =>
    setTimeout(() => {
      console.log("hello");
      resolve();
    }, n),
  );
  return a;
}

async function main() {
  await sleep(2000);
  console.log("world");
}

main();
