const fetchData = (url: string): Promise<string> => Promise.resolve(`data from ${url}`);

fetchData("www.baidu.com")
  .then(data => console.log(data));

