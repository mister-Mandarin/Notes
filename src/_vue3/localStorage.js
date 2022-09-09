const checkLocalStore = localStorage.getItem('items');

// переводим в читаемые данные
export const transformLocalStorage = JSON.parse(checkLocalStore);

// проверяем пустой или нет
export const emptyLocalStore = transformLocalStorage == null || transformLocalStorage.length === 0;

// устанавливаем значение в localStorage
export function updateLocalStorage(currentListNote) {
	localStorage.setItem('items', JSON.stringify(currentListNote));
}