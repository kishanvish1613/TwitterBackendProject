import UserService from '../../src/services/user-service.js';
import UserRepository from '../../src/repository/user-repository.js';

jest.mock('../../src/repository/user-repository.js');

describe('User service Signup test', () => {
    test('should successfully create a user', async () => {
        const data = {
            email: 'a@gmail.com',
            password: '123456',
        };

        (UserRepository.prototype.create).mockReturnValue(
            {...data, createdAt: '2024-2-1', updatedAt: '2024-2-1'}
        );
    
        const userService = new UserService();
    
        const response = await userService.signUp_Service(data)

        expect(response.email).toBe(data.email);
    });


    test('should not create a user', async () => {
        const data = {
            email: 'a@gmail.com',
            password: '123456',
        };

        (UserRepository.prototype.create).mockReturnValue(
            'something went wrong in signUp user-service'
        );
    
        const userService = new UserService();
    
        const response = await userService.signUp_Service(data).catch((err) => {
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe('something went wrong in signUp user-service')
        })
    })
})