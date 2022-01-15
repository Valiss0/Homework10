function dataUsers() {


    let fetchUsers = fetch('https://jsonplaceholder.typicode.com/users') // фетч запрос
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.forEach(function cl(el, i, event) {
                let ul = document.querySelector('ul'); //указатель на юл
                let li = document.createElement('li'); //создаем элемент ли
                li.textContent = el.name;
                li.dataset.userId = el.id;
                li.addEventListener('click', userData);
                ul.append(li);


            })
        })
}

function userData(e) {

    let numId = e.target.dataset.userId;

    let fetchUser = fetch('https://jsonplaceholder.typicode.com/users/' + numId)
        .then(response => {
            return response.json();
        })

    .then(data => {
        let div = document.querySelector('div');
        let user = `${data.name},<br> ${data.email},<br> ${data.phone},<br>${data.website}`;
        div.innerHTML = user;

    });


}

dataUsers();
