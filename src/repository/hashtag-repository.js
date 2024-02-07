import Hashatag from '../models/hashtag.js';
import CrudRepository from './crud-repository.js';

class HashatagRepository extends CrudRepository{
    constructor() {
        super(Hashatag);
    }
    
    async bulkCreate(data){
        try {
            const hashtags = await Hashatag.insertMany(data);
            return hashtags;
        } catch (error) {
            console.log('something went wrong in hash-repo');
            throw error;
        }
    }

    async getHashtag(id){
        try {
            const response = await Hashatag.findById(id);
            return response;
        } catch (error) {
            console.log('something went wrong in hash-repo');
            throw error;
        }
    }

    async getHashtagByName(text){
        try {
            const response = await Hashatag.find({
                text: text
            })
            return response;
        } catch (error) {
            console.log('something went wrong in hash-repo');
            throw error;
        }
    }

    async deleteHashtag(id){
        try {
            const result = await Hashatag.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log('something went wrong in hash-repo');
            throw error;
        }   
    }
}

export default HashatagRepository;