import read from "../js/read";
import json from "../js/parser";

class GameSaving {
	constructor({ id, created, userInfo }) {
		this.id = id;
		this.created = created;
		this.userInfo = userInfo;
	}
}

export default class GameSavingLoader {
	static async load() {
		try {
			const data = await read(); // возвращается Promise!
			const parseData = await json(data); // возвращается Promise!
			const objectData = JSON.parse(parseData);
			return new GameSaving(objectData);
		} catch (error) {
			throw new Error(`Ошибка загрузки данных: ${error.message}`);
		}
	}
}
