/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
  tmp_object = clone(obj);
  path_chains = [];

  while (null != (path = findPath( obj, value ))){
    path_chains.push(path);
  }
  return chainsParser(path_chains);
}

function chainsParser(path_chains){
  if(path_chains.length == 0 ) {return null};
  if(path_chains.length == 1 ) {return path_chains[0]};
  return path_chains;
}

function clone(object){
  let new_object = JSON.parse(stringifyObject(object));

  return new_object;

  function stringifyObject(object){
    let tmp_object = JSON.stringify(object);
    return tmp_object;
  }
}

function findPath(obj, value) {

  for (var prop in obj) {
    if (obj[prop] === value) {
      obj[prop] = undefined;
      return prop;
    } else if (typeof obj[prop] === "object") {
      var result = findPath(obj[prop], value);
      if (result) {
        return prop + '.' + result;
      }
    }
  }
  return null;    // Not strictly needed, but good style
}