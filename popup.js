
fetch('https://meme-api.herokuapp.com/gimme')
    .then(res => {
        return res.json();
    })
    .then(data => {
        var img = document.getElementById("meme");
        img.src = data.url;
        // var src = document.getElementById("x");
        // src.appendChild(img);
        var title = document.getElementById("heading");
        title.innerHTML = data.title;
        // console.log(data);
    })
    .catch(er => {
        console.log(er);
    });
