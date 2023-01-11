// ? plugins
import uuid from "react-uuid";

// * subjects table columns
export const columns = [
  {
    title: "First Quarter",
    dataIndex: 1,
    key: 1,
  },
  {
    title: "Second Quarter",
    dataIndex: 2,
    key: 2,
  },
  {
    title: "Third Quarter",
    dataIndex: 3,
    key: 3,
  },
  {
    title: "Fourth Quarter",
    dataIndex: 4,
    key: 4,
  },
];

// * final grade value
export let finalGrade = 0;
// * final average value
export let finalAverageValue = 0;
// * final average arr
let finalAverageArr = [];

// * subject data source
export const DataSource = (array, subjects) => {
  let obj = {};
  array.map((a) => {
    let uid = uuid();
    obj[a.id] = a.grade;
    obj["key"] = uid;
    return a;
  });

  finalGrade = FinalGradeComputation(array);
  finalAverageArr.push(FinalGradeComputation(array));

  if (finalAverageArr.length === subjects.length) {
    const totalAverageSum = finalAverageArr.reduce(
      (total, currentValue, currentIndex, arr) =>
        total + parseFloat(currentValue) / subjects.length,
      0
    );

    finalAverageValue = totalAverageSum.toString().substring(
      0,
      totalAverageSum
        .toString()
        .split("")
        .findIndex((i) => i === ".") + 3
    );
  }

  return [obj];
};

// * final grade computation
const FinalGradeComputation = (array) => {
  const totalSubjectsSum = array
    .map((a) => (a = a.grade))
    .reduce((total, currentValue, currentIndex, arr) => total + currentValue);

  const totalSubjectSumIndex = totalSubjectsSum
    .split("")
    .findIndex((i) => i === ".");

  const finalGrade =
    parseFloat(totalSubjectsSum.substring(0, totalSubjectSumIndex + 3)) /
    array.length;

  const finalGradeIndex = finalGrade
    .toString()
    .split("")
    .findIndex((i) => i === ".");

  return finalGrade.toString().substring(0, finalGradeIndex + 3);
};
