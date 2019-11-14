let socket=io.connect("http://localhost3000")


let message=document.getElementById('message')
    handle=document.get('handle')
    btn=document.getElementById('sent')
    output=document.getElementById('output')
    feedback=document.getElementById('feedback')

    btn.addEventListener('click',() => {
        socket.emit('chat',{
            message: message.value, 
            handle: handle.value

        })
    })
    message.addEventListener('keypress',() => {
        socket.emit('typing', handle.value)
    })


    socket.on('chat', data => output.innerHTML+='<p> <strong> ' +data.handle+ '</strong>'+ data.message+'</p>')


    socket.on('typiing',data => {
        feedback.innerHTML = '<p><em>'
    })