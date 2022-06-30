import Student from "../Student/Student";
import style from "./Members.module.scss";
import DATA from "./data.json";
import Assistant from "../Assistant/Assistant";
import DATAA from "../Data/Data";
const Members = () => {
  let groupNames = DATA.reduce((result, item) => {
    result[item.group] = [];
    return result;
  }, {});

  Object.keys(groupNames).forEach((group) => {
    let findStudents = DATA.filter((student) => student.group == group);
    groupNames[group] = findStudents;
  });
  

  const student = DATA.map(
    (member) =>
      !member.assistant && (
        <Student
          key={member.id}
          name={member.name}
          group={member.group}
          assistant={member.assistant}
        />
      )
  );
  const assistant = DATA.map(
    (member) =>
      member.assistant && (
        <Assistant
          key={member.id}
          name={member.name}
          group={member.group}
          assistant={member.assistant}
        />
      )
  );

  return (
    <div className={style.members}>
      <h1>OGRENCILER</h1>
      {student} <h1>ASISTANTLAR</h1> {assistant}
    </div>
  );
};

export default Members;
