const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Oingo';
        var text = 'Boingo Brothers';
        var message = generateMessage( from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var latitude = 1;
        var longitude = 2;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`
        var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(url);
        expect(locationMessage.createdAt).toBeA('number');
    })
})