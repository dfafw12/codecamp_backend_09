import axios from "axios";

// 1. 비동기방식
function fetchPostAsync() {
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log("비동기 : ", result);
}

fetchPostAsync();

// 2. 동기방식
async function fetchPostSync() {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log("동기 : ", result.data);
}

fetchPostSync();
