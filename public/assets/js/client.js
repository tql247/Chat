var socket = io.connect('https://chatrealtimevn.herokuapp.com/');

socket.on('connect', function(date){
    socket.emit('join','A new join');
});


socket.on('thread', function(data){
    $('#thread').append('<div class="message friends">' + data + '</div>');
	$("#thread").animate({ scrollTop: $(document).height() }, 1000);
});

socket.on('newMember', function(data){
    $('#thread').append('<div>A new member just join!</div>');
	$("#thread").animate({ scrollTop: $(document).height() }, 1000);
});

$('form').submit(function(){
    var message = $('#message').val();
    socket.emit('message', message);
    this.reset();

    
    $('#thread').append('<div class="message my">' + message + '</div>');
	$("#thread").animate({ scrollTop: $("#thread").height() + 1000}, 1000);

    return false;
})

