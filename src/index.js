module.exports = function check(str, bracketsConfig) {
	const config = Object.fromEntries(bracketsConfig); // сейчас тут так ( : )
	// console.log("config :", config);
	const brackets = {};
	Object.entries(config).forEach(([key, value]) => {
		// меняем местами ключ и значение
		brackets[value] = key; // в бреккетс теперь находиться      ):(      <=   теперь вот так
	});
	// console.log("brackets :", brackets);
	let stack = []; // создаём стэк (first in last out)
	for (let i = 0; i < str.length; i++) {
		const current = str[i]; // каррент это элемент строки
		// console.log("current :", current);
		if (
			Object.keys(brackets).includes(current) &&
			stack[stack.length - 1] == brackets[current]
		) {
			// Object.keys(brackets) - это массив с ключами(закрывающиеся скобки). И мы проверяем равен ли current одному из ключей
			// если равен то мы делаем 2ую проверку: равен ли последний элемент стэка згачению ключа brackets[current] (противоположная скобка, открывающая скобка)
			stack.pop();
		} else {
			stack.push(current);//пушим сюда открывающиеся скобки и несовпадающиеся!
		}
		// console.log("stack :", stack);
	}
	return stack.length === 0;
};
