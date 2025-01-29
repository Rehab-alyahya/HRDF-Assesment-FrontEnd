import { jwtDecode } from "jwt-decode";

export const TokenDecode = (token) => {
  if (!token) {
    console.error("No token provided.");
    return null;
  }

  try {
    const decoded = jwtDecode(token);
    console.log("token:", decoded);
    return decoded;
  } catch (error) {
    console.error("invalid token:", error);
    return null;
  }
}