var socket = io.connect('https://chatrealtimevn.herokuapp.com/');

socket.on('connect', function(date){
    socket.emit('join','A new join');
});


socket.on('thread', function(data){
    $('#thread').append('<li>' + data + '</li>');
	$("#thread").animate({ scrollTop: $(document).height() }, 1000);
});

$('form').submit(function(){
    var message = $('#message').val();
    socket.emit('message', message);
    this.reset();

    return false;
})

