function testcb(val, cb) {
  cb(val)
}

const test = (val) => {
  val = val ** 2
  console.log(`the processed value is ${val}`)
}

testcb(3, test)