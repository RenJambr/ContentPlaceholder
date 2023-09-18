let header = document.querySelector('#header');
let cardExcerpt = document.querySelector('#excerpt');
let cardExcerptSpans = document.querySelectorAll('#excerpt span')
let animatedBg = document.querySelectorAll('.animated-bg');
let animatedBgText = document.querySelectorAll('.animated-bg-text');

window.addEventListener('load', () => {

    cardExcerptSpans.forEach(span => {
        if(span.classList.contains('animated-bg')){
            cardExcerpt.style.color = "transparent";
        }
    })


    setTimeout(() => {
        animatedBg.forEach(el => {
            el.classList.remove('animated-bg');
        })
        animatedBgText.forEach(el => {
            el.classList.remove('animated-bg-text');
        })
        cardExcerpt.style.color = "#000";
        cardExcerptSpans.forEach(span => {
            span.innerHTML = '';
        })
    }, 2000)
})