// export const auth = {
//     isLoggedIn: false,
//     isAuthenticated() {
//         return this.isLoggedIn
//     }
// }

// console.log(auth.isAuthenticated())
// console.log(auth.isLoggedIn)

// true if window is defined
export const isBrowser = () => typeof window !== "undefined" ;

export const getToken = () => {
//    return isBrowser() && window.localStorage.getItem("token") ? 
//     JSON.stringify(window.localStorage.getItem("token")) : {}
    if(isBrowser()) {
        return window.localStorage.getItem("token")
    }

    console.log('error')
}

export const setToken = (token) => {
    return window.localStorage.setItem("token", token)
}

export const isLoggedIn = () => {
    const token = getToken() ;
    return !!token
}
