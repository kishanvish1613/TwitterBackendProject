import UserRepository from '../repository/user-repository.js';
import User from '../models/user.js';

class UserService{
    constructor () {
        this.userRepository = new UserRepository();
    }

    async signUp_Service(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("something went wrong in signUp user-service");
            throw error;
        }
    }

    async signIn_Service(data){
        try {
            const email = data.email;
            const currentPassword = data.password;
            const user = await this.userRepository.findByEmail({email});
            if(!user){
                throw{
                    message: 'No user found'
                }
            }
            if(!user.comparePassword(currentPassword)){
                throw{
                    message: 'Incorrect password'
                }
            }
            console.log("User succefully signed in")
            const token = user.genJWT();
            return token;
            
        } catch (error) {
            //console.log("something went wrong in signIn user-service");
            throw error;
        }

    }

}

export default UserService;