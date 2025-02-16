import GameSavingLoader from "../js/GameSavingLoader";

// Задание 1
// GameSavingLoader.load()
// 	.then(saving => {
// 		console.log("Данные загружены:", saving);
// 	})
// 	.catch(error => {
// 		console.error("Ошибка:", error);
// 	});

// Задание 2
(async () => {
	try {
		const saving = await GameSavingLoader.load();
		console.log("Данные загружены:", saving);
	} catch (error) {
		console.error("Ошибка:", error);
	}
})();
