const cookieHandler = {

    getAll() {
        let cookiesObject = {};
        const cookies = document.cookie.split("; ");
        cookies.forEach((cookie) => {
            const uniCookie = cookie.split("=");
            cookiesObject[uniCookie[0]] = uniCookie[1];
        });

        return cookiesObject;
    },

    toSessionStorage() {
        const cookiesObject = this.getAll();
        Object.entries(cookiesObject).forEach(([key, value]) => {
            sessionStorage.setItem(key, value);
        });
    },

    flush() {
        const cookiesObject = this.getAll();
        Object.keys(cookiesObject).forEach((key) => {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });
    },
};


cookieHandler.getAll();
cookieHandler.flush();

export default cookieHandler;
