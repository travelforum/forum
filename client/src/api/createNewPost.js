import { loadUser } from "./user";

export default function createNewPost({ title, content, image }) {
  const baseURL = "http://localhost:4000";
  const url = "/api/post";
  const user = loadUser();
  const data = { title, content, image, user };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(baseURL + url, options)
    .then((res) => res.json())
    .then((data) => {
      window.location.reload();
    })
    .catch((err) => console.log(err));
}
