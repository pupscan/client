export default {
  isLogged: () => true,
  responseAuthentication (error) {
    console.log(error)
    return Promise.reject(error);
  }
}