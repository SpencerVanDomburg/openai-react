export const getExampleContent = (exampleContent) => {
  let newArray = [];
  for (let i = 0; i< exampleContent.length; i++){
    newArray.push(exampleContent[i].split(','));
  }
  return newArray;
}
