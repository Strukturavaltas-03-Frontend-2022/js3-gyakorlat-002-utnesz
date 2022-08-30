/*1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
egy `token` nevű sütiben, ami 15 perc után lejár!*/


   const setCookie = (name, string, expirationDays = 15, path = '/') => {
        const now = new Date();
        now.setTime(now.getTime() + (expirationDays * 24 * 60 * 60 * 1000)),
        const expires = now.toUTCString();
        document.cookie = `${name}=${string};expires=${expires};path=${path}`;
    };

document.setCookie('token');


export default setCookie;
