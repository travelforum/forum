export default async function getPosts() {
  const baseURL = "http://localhost:4000";
  const url = "/api/post";
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(baseURL + url, options)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}
