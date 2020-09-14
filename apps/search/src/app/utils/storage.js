const STORAGE = 'ml-search';

export const getStorage = (key) => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE));
  } catch (e) {
    return JSON.parse(sessionStorage.getItem(STORAGE));
  }
};

export const setItem = (key, value) => {
  console.log(key, value);
  const storage = getStorage();
  sessionStorage.setItem(STORAGE, JSON.stringify({ ...storage, [key]: value }));
};

export const getItem = (key) => {
  const storage = getStorage();
  return storage[key];
};
