export const setUser = (data) => {
  sessionStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      password: data.user.password,
      email: data.user.email,
      jwt: data.jwt,
    })
  );
};

export const getUser = () => {
  const stringifiedUser = sessionStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || null);
};
