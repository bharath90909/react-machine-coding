export function useLocalStorage() {
  function setLocalStorage(currentTheme) {
    localStorage.setItem("theme", JSON.stringify(currentTheme));
  }
  function getLocalStorage() {
    return JSON.parse(localStorage.getItem("theme"));
  }
  return {
    setLocalStorage,
    getLocalStorage,
  };
}
