/*2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
- `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a sütik neve a key és az értéke a value
(pl. { viewed: 5 })
- `toSessionStorage`: minden sütit egyenként elment a sessionStorage - ba az adott süti nevével és értékével
- `flush`: törli az összes sütit

A teszteléshez hozd létre a böngésződben az alábbi sütiket:
- `viewed`: 5
- `uid`: 354774631237
- `ssid`: Bx55OWbHJ0Vt_IGIF*/



const cookieHandler = {
    setCookie(name, value, expirationDays = 365, path = '/') {
        const now = new Date();
        now.setTime(now.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
        const expires = now.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=${path}`;
    },
    getAll(name) {
        const keyValuePairs = document.cookie
            .split('; ')
            .find(cookie => cookie.startsWith(`${name}=`))
        return keyValuePairs ? keyValuePairs.split('=')[1] : '';
    },
    checkCookie(name) {
        const exists = cookieHandler.getCookie(name);
        return exists ? true : false;
    },
    flush(name) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

cookieHandler.setCookie(`viewed`, '5');
cookieHandler.setCookie(`uid`, '354774631237');
cookieHandler.setCookie(`ssid`, 'Bx55OWbHJ0Vt_IGIF');


cookieHandler.getAll();
cookieHandler.flush();

export default cookieHandler
