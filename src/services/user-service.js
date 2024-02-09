import UserRepository from '../repository/user-repository.js'

class UserService{
    constructor () {
        this.userRepository = new UserRepository();
    }

    async signUp_Service(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in user-service");
            throw error;
        }
    }

    async signIn_Service (data){
        try {
            // get the email first
            const email = data.email;
            const currentPassword = data.password;
            const result = await this.userRepository.findByEmail({email});
            if(!result){
                throw{
                    message: 'No User Found'
                }
            }

            // compare password
            if(!result.comparePassword(currentPassword)){
                throw {
                    message: 'Incorrect Password'
                }
            }
             
        } catch (error) {
            console.log("something went wrong in user-service");
            throw error;
        }
    }

}

export default UserService;