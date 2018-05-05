var recipes = {muffins: "Bananas and flour"}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = {}
  Object.assign (newObject, object, {[key]: value})
  return newObject
}
