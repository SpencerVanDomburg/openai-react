/**
 * This function will loop through the content of the examples
 * and split them in a new array
 * 
 * @returns returning the array to be sent in the API call
 */
export const getExampleContent = (exampleContent) => {
  let newArray = [];
  for (let i = 0; i< exampleContent.length; i++){
    newArray.push(exampleContent[i].split(','));
  }
  return newArray;
}

export const getActiveButtonStyle = (currentForm, form) => {
  if(currentForm === form){
    return '#114236';
  }
  return '#10a37f';
}

export const preventNegativeNumber = (value) => {
  if (value < 0) {
    return 0;
  }
  return value;
}
