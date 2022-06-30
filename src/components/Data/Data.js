import { isDisabled } from "@testing-library/user-event/dist/utils";
import DATA from "../Members/data.json";
const DATAA = () => {
  let groupNames = DATA.reduce((result, item) => {
    result[item.group] = [];
    return result;
  }, {});

  Object.keys(groupNames).forEach((group) => {
    let findStudents = DATA.filter((student) => student.group == group);
    groupNames[group] = findStudents;
  });

  //console.log("answerTwo by Group Names", groupNames);
};

export default DATAA;
