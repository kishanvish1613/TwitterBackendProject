import User from '../models/user.js';
import CrudRepository from '../repository/crud-repository.js'
 
class UserRepository extends CrudRepository{
    constructor() {
        super(User)
    }

    async findByEmail (data) {
        try {
            const response = await User.findOne(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in user-repo");
            throw error;
        }
    }

}

export default UserRepository;