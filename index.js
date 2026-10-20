


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
function combineUsers(...arrays) {
  const users = [].concat(...arrays);