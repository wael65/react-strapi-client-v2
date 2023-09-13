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

export const addProduct = (data) => {
  sessionStorage.setItem(
    "cart",
    JSON.stringify({
      id: data.id,
      title: data.title,
      discription: data.discription,
      price: data.price,
      rating: data.rating,
    })
  );
};
