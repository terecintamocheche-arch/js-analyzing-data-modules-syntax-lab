


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
function combineUsers(...arrays) {
  const users = [].concat(...arrays);

  return {
    users: users,
    date: new Date()
  };
}