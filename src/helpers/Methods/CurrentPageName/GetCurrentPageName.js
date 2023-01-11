export const setCurrentPageName = (setCurrentPage) => {
  let pageName = window.location.pathname.replace("/", "");
  if (pageName !== "") {
    setCurrentPage(pageName[0].toUpperCase() + pageName.substring(1));
  } else {
    setCurrentPage("/dashboard");
  }
};

export const getCurrentPageLink = () => {
  return window.location.pathname;
};

export const getCurrentPageName = () => {
  let pageName = window.location.pathname
    .split("/")
    .join(" ")
    .trim()
    .split(" ")[0];
  return pageName !== "" && pageName[0].toUpperCase() + pageName.substring(1);
};

export const getHighLightPageLink = () => {
  return `/${
    window.location.pathname.split("/").join(" ").trim().split(" ")[0]
  }`;
};
