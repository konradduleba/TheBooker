const getLocalStorageData = (): string | null => localStorage.getItem('isLoggedIn');

export default getLocalStorageData
