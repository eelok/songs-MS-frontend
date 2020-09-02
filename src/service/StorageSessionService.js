
class StorageSessionService{

    getToken() {
        return sessionStorage.getItem('userToken');
    }

    getUserId(){
        return sessionStorage.getItem('userId');
    }

    logout(){
        sessionStorage.removeItem('userToken');
    }
}
export default new StorageSessionService();