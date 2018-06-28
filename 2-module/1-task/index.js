/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {

  let new_object = JSON.parse(stringifyObject(obj));

  return new_object;

}

function stringifyObject(obj){

  let tmp_object = JSON.stringify(obj);

  return tmp_object;
}