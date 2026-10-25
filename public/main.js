const voteButtons = document.querySelectorAll('.fa-thumbs-up, .fa-thumbs-down');
const trash = document.getElementsByClassName("fa-trash");

Array.from(voteButtons).forEach(function(element) {
  element.addEventListener('click', function() {
    const message = this.closest('.message')
    const name = message.children[0].innerText
    const msg = message.children[1].innerText
    const direction = this.classList.contains('fa-thumbs-up') ? 'up' : 'down'

    fetch('/messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, msg: msg, direction: direction})
    })
    .then(response => {
      if (!response.ok) throw new Error('Could not update the message')
      return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload()
    })
    .catch(error => console.error(error))
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
