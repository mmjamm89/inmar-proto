
filterObj('all');

function filterObj(c){
    let x
    let i
    x = document.getElementsByClassName('tarj_producto');
    if (c == 'all') {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], 'show');
        if (x[i].className.indexOf(c) > -1) addClass(x[i], 'show')
    }
};

function addClass(element, name){
    let i;
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    let i;
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


