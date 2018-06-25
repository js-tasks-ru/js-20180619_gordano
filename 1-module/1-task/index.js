/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {

  let params = [m,n] = [parseInt(m), parseInt(n)]

  if ((isNaN(m)) || isNaN(n) ){
    return undefined
  }else{
    return (m === 0 || n === 0 ) ? 0 : (n != 1) ? m*pow(m, Math.abs(n) -1): m ;
  }
}