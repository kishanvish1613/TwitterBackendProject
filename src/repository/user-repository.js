import User from '../models/user.js';
import CrudRepository from '../repository/crud-repository.js'
 
class UserRepository extends CrudRepository{
    constructor() {
        super(User)
    }

}

export default UserRepository;