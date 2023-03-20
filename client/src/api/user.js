export function loadUser() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
}

export function removeUser() {
  localStorage.removeItem("user");
}
