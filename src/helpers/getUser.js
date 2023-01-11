export const getAuthToken = (persistName) => {
  const storage = JSON.parse(localStorage.getItem(persistName));
  return storage?.userInfo ? JSON.parse(storage.token) : null;
};
