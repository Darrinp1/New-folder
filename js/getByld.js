let mybutton = document.getElementById('theBtn');
mybutton.addEventListener('click', addH1);

function addH1()
{
    let newH1 = document.createElement("h1");
    newH1.innerHTML = "New H1 Here";
    document.body.appendChild(newH1);
}