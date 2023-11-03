export async function getName(url: string): Promise<string> {
  const data = await (await fetch(url)).json();
  const name = data.words[0];
  return name;
}
export function getPassword() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 24; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}
export function deleteCookie() {
  const expiredDate = new Date();
  expiredDate.setTime(expiredDate.getTime() - 1);
  document.cookie = `token=;expires=${expiredDate.toUTCString()};path=/`;
}
export function setTokenCookie(token: string) {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);
  document.cookie = `token=${encodeURIComponent(
    token
  )};expires=${expires.toUTCString()}; path=/`;
}

export function findTokenString(cookie: string) {
  const index = cookie.indexOf("token");
  let token;
  if (index !== -1) {
    token = cookie.substring(index + 6);
  }
  console.log("findTOKEN STRING");
  return token;
}
export function decodeURIToken(encodeToken: string | undefined) {
  const token = decodeURIComponent(encodeToken ? encodeToken : "");
  return token;
}
