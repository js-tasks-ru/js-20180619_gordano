'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(string) {
  let floats = getFloatsFromString(string);

  let max = Math.max.apply(Math, floats);
  let min = Math.min.apply(Math, floats);

  return {min: min, max: max};
}

function getFloatsFromString(string) {
  let floatsArray = [];
  let tempFloat = '';
  let lettersArray = (string + ' ').split('');

  lettersArray.forEach(function(letter){
    if (isLetterPartOfFloat(letter, tempFloat)){
      tempFloat += letter;
    }
    else{
      if (tempFloat != ''){
        floatsArray.push(parseFloat(tempFloat));
        tempFloat = '';
      };
    };
  });

  return floatsArray;
};

function isLetterPartOfFloat(letter, tempFloat){
  if (letter == '-' && tempFloat.length == 0){ return true };
  if (letter == '.' && !tempFloat.includes('.')){ return true };
  return isNumber(letter);
}

let isNumber = (letter) => !isNaN(parseInt(letter));

