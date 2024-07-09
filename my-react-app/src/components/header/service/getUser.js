export const getUser = async () => {
  const user = await fetch('http://192.168.3.16:3000/api/v1/getAllUsers');
  const userData = await user.json();
  return userData;
};
