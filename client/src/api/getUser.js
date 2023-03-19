export default function getUser() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);

  const newUser = {
    name: "Test User",
    email: "test@example.com",
    photo: "https://api.dicebear.com/5.x/fun-emoji/svg?seed=TestUser",
  };

  localStorage.setItem("user", JSON.stringify(newUser));
  return newUser;
}
