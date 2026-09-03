// ------ textContent -------

let input = document.querySelector('input');
let defaultEl = document.querySelector('#default');
let debounceEl = document.querySelector('#debounce');
let throttleEl = document.querySelector('#throttle');


// ------ textContent -------

let updateDebounceText = debounce((text)=>{
    debounceEl.textContent = text;
}, 300)
let updateThrottleText = throttle((text)=>{
    throttleEl.textContent = text;
}, 300)
input.addEventListener('input', e=>{
    defaultEl.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
});

function debounce(func, delay=1000){
    let timer;
    return(...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        }, delay)
    }
}

function throttle(func, delay){
    let lastCall = 0;
    let timer;
    return(...args)=>{
        let now = Date.now();
        if((now - lastCall) > delay){
            func(...args);
            lastCall = now;

        }else{
            clearTimeout(timer);
            timer = setTimeout(()=>{
                func(...args);
            }, delay)
        }
    }
}



// --------- Mouse move ---------


let movedefaultEl = document.querySelector('#movedefault');
let movedebounceEl = document.querySelector('#movedebounce');
let movethrottleEl = document.querySelector('#movethrottle');

let defaultCount = 0;
let debounceCount = 0;
let throttleCount = 0;

document.addEventListener('mousemove', e => {
    movedefaultEl.textContent = defaultCount += 1;
    updateDebounceCount();
    updateThrottleCount();
});

let updateDebounceCount = debounce( () => {
    movedebounceEl.textContent = debounceCount += 1;

}, 400);
let updateThrottleCount = throttle( () => {
    movethrottleEl.textContent = throttleCount += 1;

}, 400);