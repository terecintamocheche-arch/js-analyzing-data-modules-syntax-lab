


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
function combineUsers(...arrays) {
  const users = [].concat(...arrays);

  const today = new Date();
  const merge_date = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;



  return {
    users: users,
    merge_date: merge_date
  };
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};