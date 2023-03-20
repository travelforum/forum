import { useEffect } from "react";
import { removeUser } from "../api/user";
export default function Logout() {
  useEffect(() => {
    removeUser();
    window.location.href = "/";
  });
  return null;
}
