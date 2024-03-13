const checkConfirm = require("./srvConfirm");
// const checkInit = require("./b2bInit");
const checkSelect = require("./srvSelect");
const checkOnInit = require("./srvOnInit");
// const checkOnConfirm = require("./b2bOnConfirm");
const checkOnSelect = require("./srvOnSelect");
const checkOnSearch = require("./srvOnSearch");
// const checkOnUpdate = require("./b2bOnUpdate");
// const checkUpdate = require("./b2bUpdate");
// const checkOnStatus = require("./b2bOnStatus");
const checkSearch = require("./srvSearch");
const _ = require("lodash");

const srvVal = (element, action, msgIdSet) => {
  const busnsErr = {};
  switch (action) {
    case "search":
      return checkSearch(element, msgIdSet);

    case "on_search":
      return checkOnSearch(element, msgIdSet);

    case "select":
      return checkSelect(element, msgIdSet);

    case "on_select":
      return checkOnSelect(element, msgIdSet);

    // case "init":
    //   return checkInit(element, msgIdSet);

    case "on_init":
      return checkOnInit(element, msgIdSet);

    case "confirm":
      return checkConfirm(element, msgIdSet);

    // case "on_confirm":
    //   return checkOnConfirm(element, msgIdSet);

    // case "update":
    //   return checkUpdate(element,msgIdSet);

    // case "on_update":
    //   return checkOnUpdate(element,msgIdSet)

    // case "on_status":
    //   return checkOnStatus(element,msgIdSet)
  }
  return busnsErr;
};
module.exports = { srvVal };