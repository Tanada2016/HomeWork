// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

//  XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>
// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }

//сам объект
let result = {
	list: []
};

//получение джейсона
const parser = new DOMParser();
const xmlEntity = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

//Парсинг
const xmlDOM = parser.parseFromString(xmlEntity, "text/xml");
const studentsNodes = xmlDOM.querySelectorAll("student");

studentsNodes.forEach((element) => {
	let student = new Object();
	const studentFirstName = element.querySelector("first");
	const studentSecondName = element.querySelector("second");
	const studentAge = element.querySelector("age");
	const studentProf = element.querySelector("prof");
	const nameNode = element.querySelector("name");
	const nameLang = nameNode.getAttribute("lang");
	student.name = studentFirstName.textContent + ' ' + studentSecondName.textContent;
	student.age = studentAge.textContent;
	student.prof = studentProf.textContent;
	student.lang = nameLang;
	result.list.push(student);
});

console.log(result);