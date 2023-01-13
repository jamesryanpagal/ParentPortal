import localStorage from "redux-persist/es/storage";

export const OnLogOut = () => {
  localStorage.removeItem("persist:userAuth");
  window.location.replace("http://localhost:3000/login");
};
