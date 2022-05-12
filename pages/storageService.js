export const getFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (localStorage.getItem(item))
  ? value = localStorage.getItem(item)
  : value
return value;
}