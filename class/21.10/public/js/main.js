const addBtn = document.getElementById('addBtn');
showLoader(loader);

addBtn.addEventListener('click', ({ target }) => {
    let num_1 = document.getElementById('num_1').value;
    let num_2 = document.getElementById('num_2').value;

    let result = document.getElementById('result');
    let url = `/add?num_1=${num_1}&num_2=${num_2}`;
    let loader = document.getElementById("loader");
    // loader.classList.add("loader--show");
    // loader.classList.remove("loader--hide");

    // fetch(url, { method: 'GET' })
    //     .then(res => res.text())
    //     .then(data => result.innerHTML = `Sum is ${data}`)
    //     .finally(() => {
    //         loader.classList.remove("loader--show")
    //         loader.classList.add("loader--hide")
    //     })
    //     .catch(err => console.error(err));




    //JQUERY way

    $.ajax({
        url: "/add",
        method: "GET",
        data: { num_1, num_2 }

    }).done(data => {
        result.innerHTML = `Sum is ${data}`;

    })
        .always(() => {
            hideLoader(loader);
        });

    // $.get("/add", {
    //     data: { num_1, num_2 }
    // }, function () {
    //     result.innerHtml = `Sum is ${data}`
    // })


});



// $.get(),  $.post, $getScript(), $.getJson()

function showLoader(loader) {
    loader.classList.add("loader--show");
    loader.classList.remove("loader--hide");
}
function hideLoader(loader) {
    loader.classList.remove("loader--show");
    loader.classList.add("loader--hide");
}
