export default async function getPost(postId) {
  const baseURL = "http://localhost:4000";
  const url = `/api/post/${postId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(baseURL + url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
