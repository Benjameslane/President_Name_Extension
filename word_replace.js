const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a');

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('Joe Biden')) {
        text[i].innerHTML = text[i].innerHTML.replace(/Joe Biden/g, 'Sleepy Joe');
    }
    if (text[i].innerHTML.includes('President Biden')) {
        text[i].innerHTML = text[i].innerHTML.replace(/President Biden/g, 'Sleepy Joe');
    }
    if (text[i].innerHTML.includes('Biden')) {
        text[i].innerHTML = text[i].innerHTML.replace(/Biden/g, 'Sleepy Joe');
    }
    if (text[i].innerHTML.includes('Trump')) {
        text[i].innerHTML = text[i].innerHTML.replace(/Trump/g, 'Dump');
    }
}
