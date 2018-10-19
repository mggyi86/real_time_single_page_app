import Token from './Token';
import AppStorage from './AppStorage';

class User{
  login(data) {
   axios.post('/api/auth/login', data)
     .then(res => this.responseAfterLogin(res))
     .catch(error => console.log(error.response.data));
  }

  responseAfterLogin(res) {
    const access_token = res.data.access_token;
    const username = res.data.user;
    if(Token.isValid(access_token)) {
      AppStorage.store(username, access_token);
    }
  }
}

export default new User();
