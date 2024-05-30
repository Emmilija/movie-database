export const getUser = (currUser) => {
  const storedUser = localStorage.getItem('user');
  const user = currUser || (storedUser ? JSON.parse(storedUser) : null);
  return user ? user : null;
};

export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return getUser(user);
};

export const removeUser = () => {
  localStorage.removeItem('user');
};
