// Задание 11.6.3
// Реализовать и протестировать функцию (хотя бы 1 тест).

// Напишите функцию, которая принимает строку и возвращает перевернутую строку.

export function reverseString(str) {
    return str.split("").reverse().join("");
  }
  