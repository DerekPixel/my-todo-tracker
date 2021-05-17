
export function returnClonedArrayOfObjects(array) {

  var arrayCopy = array.slice();

  var arrayClone = []

  for(var i = 0; i < arrayCopy.length; i++) {
    var objectClone = {...arrayCopy[i]};

    arrayClone.push(objectClone);
  }

  return arrayClone;

}



function pimp() {
  console.log('pimp');
  return 'pimp';
}

export default pimp