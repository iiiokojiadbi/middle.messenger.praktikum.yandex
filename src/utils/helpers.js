export const origin = window.location.origin;
export const pathname = window.location.pathname;
export const setPathname = (path) => {
  window.location.replace(origin + path);
};
