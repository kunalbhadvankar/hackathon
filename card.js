var data2 = `<div class="card"><img class="card-img" src="b/1.png" alt="" style="width: 200px; height: 200px ;"><div class="card-img-overlay"><h5 class="card-title">Title</h5><p class="card-text">Content</p></div><div class='content'>Rating</div></div>`

var i, j;


document.addEventListener('DOMContentLoaded', () => {
    for (j = 0; j < 4; j++) {
        var row = document.createElement('div')
        row.className = 'row'
        document.querySelector('.container').append(row)
   
    
        for (i = 0; i < 4; i++) {
            var col = document.createElement('div')
            col.className = 'col-3'
            col.innerHTML = data2
            document.querySelector('.row').append(col)
        }
    }

    })
