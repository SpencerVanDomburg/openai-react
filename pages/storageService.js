export const getFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (localStorage.getItem(item))
  ? value = localStorage.getItem(item)
  : value
return value;
}

export const getIntFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (parseInt(localStorage.getItem(item)))
  ? value = parseInt(localStorage.getItem(item))
  : value
return value;
}

export const getFloatFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (parseFloat(localStorage.getItem(item)))
  ? value = parseFloat(localStorage.getItem(item))
  : value
return value;
}