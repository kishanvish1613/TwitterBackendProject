import Hashatag from '../models/hashtag.js';


class HashatagRepository {
    async create(data) {
        try {
            const hashtag = await Hashatag.create(data);
            return hashtag;
        } catch (error) {
            console.log('something went wrong in hash-repo');
            throw error;
        }
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