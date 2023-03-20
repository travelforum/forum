export function loadUser() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
}

export function storeUser({ name, email }) {
  if (!name || !email) return null;

  const newUser = {
    name,
    email,
    photo: `https://api.dicebear.com/5.x/fun-emoji/svg?seed=${email}`,
  };

  localStorage.setItem("user", JSON.stringify(newUser));
  return newUser;
}

export function removeUser() {
  localStorage.removeItem("user");
}
