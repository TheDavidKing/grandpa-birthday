let svg = document.querySelector("svg")
let image_a = document.querySelector(".a")
let image_b = document.querySelector(".b")
let image_c = document.querySelector(".c")
let image_d = document.querySelector(".d")
let image_e = document.querySelector(".e")
let step_xa = 1
let step_xb = 1
let step_xc = 1
let step_xd = 1
let step_xe = 1
function move(){
    let x_a = +image_a.getAttribute("x")
    let x_b = +image_b.getAttribute("x")
    let x_c = +image_c.getAttribute("x")
    let x_d = +image_d.getAttribute("x")
    let x_e = +image_e.getAttribute("x")
    x_a += step_xa
    x_b += step_xb
    x_c += step_xc
    x_d += step_xd
    x_e += step_xe
    if(x_a >= 1100){
        step_xa = - step_xa
    }
    if(x_a <= 0){
        step_xa = - step_xa
    }
    if(x_b >= 1100){
        step_xb = - step_xb
    }
    if(x_b <= 0){
        step_xb = - step_xb
    }
    if(x_c >= 1100){
        step_xc = - step_xc
    }
    if(x_c <= 0){
        step_xc = - step_xc
    }
    if(x_d >= 1100){
        step_xd = - step_xd
    }
    if(x_d <= 0){
        step_xd = - step_xd
    }
    if(x_e >= 1100){
        step_xe = - step_xe
    }
    if(x_e <= 0){
        step_xe = - step_xe
    }
    image_a.setAttribute("x", x_a)
    image_b.setAttribute("x", x_b)
    image_c.setAttribute("x", x_c)
    image_d.setAttribute("x", x_d)
    image_e.setAttribute("x", x_e)
}
setInterval(() => {
    move()
}, 10);