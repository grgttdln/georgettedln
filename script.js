
// dark mode function
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


// transition per section
const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
        // console.log(item);
        if (item.isIntersecting) {
            item.target.classList.add('show');
        } else {
            item.target.classList.remove('show');
        }
    });
});

const hiddenElem = document.querySelectorAll('.hidden');
hiddenElem.forEach((elem) => observer.observe(elem));

// transition toolkit per tool
const observer_tool = new IntersectionObserver((items) => {
    items.forEach((item) => {
        // console.log(item);
        if (item.isIntersecting) {
            item.target.classList.add('showTool');
        } else {
            item.target.classList.remove('showTool');
        }
    });
});

const hiddenTool = document.querySelectorAll('.hiddenTool');
hiddenTool.forEach((elem) => observer_tool.observe(elem));