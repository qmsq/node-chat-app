const expect = require('expect');

const {Users} = require('./users')

describe("Users class", () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jen',
            room: 'Node'
        }, 
        {
            id: '2',
            name: 'Jill',
            room: 'Angular'
        }, 
        {
            id: '3',
            name: 'Joe',
            room: 'Node'
        }];
    });


    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jan M V',
            room: 'Best of the wors'
        }
        var resUser = users.addUser(user.id, user.name, user.room)

        expect(users.users).toEqual([user]);
    });

    it('should return for Node', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Jen', 'Joe'])

    });

    it('should return for Angular', () => {
        var userList = users.getUserList('Angular');

        expect(userList).toEqual(['Jill']);
    })

    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Jen',
            room: 'Node'
        });
        expect(users.users.length).toBe(2);        
    });

    it('should not remove a user', () => {
        var user = users.removeUser('42');
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);   
    });

    it('should find user', () =>{
        var user = users.getUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Jen',
            room: 'Node'
        });
    });

    it('should not find user', () => {
        var user = users.getUser('45');
        expect(user).toNotExist();
    });
})