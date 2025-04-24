export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter students based on city
    .map((student) => {
      const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
      return {
        ...student,
        grade: matchingGrade ? matchingGrade.grade : 'N/A',
      };
    });
}
