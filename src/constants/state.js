 

function getState(state) {
  switch (state) {
    case 1:
      return {
        code: state,
        description: "CREATED",
      };
    case 2:
      return {
        code: state,
        description: "WON",
      }
    case 3:
      return {
        code: state,
        description: "LOST",
      }
    default:
      return {
        code: state,
        description: "UNKNOWN",
      }
  }
}

module.exports = {
    getState
}
