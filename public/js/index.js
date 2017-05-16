          var socket = io();

          socket.on('connect', function () {
              console.log("Connected to server");

              socket.emit('createMessage', {
                  to: 'Tim',
                  text: 'Let us fuck'
              })
          });

          socket.on('newMessage', function (newMessage) {
              console.log("New message ", newMessage);
          });

          socket.on('disconnect', function () {
              console.log('Disconnected from server')
          });
