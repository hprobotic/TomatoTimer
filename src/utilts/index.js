export const isLoggedIn = (): boolean =>
  localStorage.getItem('session') !== null
