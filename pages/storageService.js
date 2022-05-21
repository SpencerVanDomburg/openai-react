/**
 * It's possible the localStorage is undefined at client side when looking for a value
 * therefore in this service there is a check on that. In case it is defined it's still
 * possible there is no value so this logic is in a nested ternary in this service.
 * 
 * @param {the key value to search for in local storage} item 
 * @param {the wanted value if no value in storage is present} defaultValue 
 * @returns either the value from storage based on provided key or the provided default value
 */
export const getStringFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (localStorage.getItem(item))
  ? value = localStorage.getItem(item)
  : value
return value;
}

/**
 * See above, only difference is parsing the int from string because localStorage saves 
 * everything as a String.
 */
export const getIntFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (parseInt(localStorage.getItem(item)))
  ? value = parseInt(localStorage.getItem(item))
  : value
return value;
}

/**
 * See above, only difference is parsing the float from string because localStorage saves 
 * everything as a String.
 */
export const getFloatFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (parseFloat(localStorage.getItem(item)))
  ? value = parseFloat(localStorage.getItem(item))
  : value
return value;
}

export const getBooleanFromStorageOrDefault = (item, defaultValue) => {
  let value = defaultValue;

  typeof window === 'undefined'
  ? value
  : (localStorage.getItem(item))
  ? value = localStorage.getItem(item).toLowerCase()
  : value;

  // only in case the lowercased item from storage === true we return boolean true
  value === "true" ? value = true : value = false;
return value;

  
  
}