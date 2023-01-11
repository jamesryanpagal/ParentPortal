export const OnLogOut = () => {
  localStorage.clear();
  window.location.replace("/");
};
