var fs = require('fs')
var TestMessage = require('./message').TestMessage

var message = TestMessage.fromObject({
    data: fs.readFileSync('image-10.png')
})

fs.writeFileSync('image-10.pb', Buffer.from(TestMessage.encode(message).finish().buffer))

message = TestMessage.fromObject({
    data: fs.readFileSync('image-512.png')
})

fs.writeFileSync('image-512.pb', Buffer.from(TestMessage.encode(message).finish().buffer))

