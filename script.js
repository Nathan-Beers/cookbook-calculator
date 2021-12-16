let recipeBatch = document.getElementById('batch');
let ing1 = document.getElementById("ing-1-amount");
let ing2 = document.getElementById("ing-2-amount");
let ing3 = document.getElementById("ing-3-amount");
let ing4 = document.getElementById("ing-4-amount");
let ing5 = document.getElementById("ing-5-amount");
let ing6 = document.getElementById("ing-6-amount");
let ing7 = document.getElementById("ing-7-amount");
let ing8 = document.getElementById("ing-8-amount");
let ing9 = document.getElementById("ing-9-amount");
let ing10 = document.getElementById("ing-10-amount");
let ing11 = document.getElementById("ing-11-amount");
let ing12 = document.getElementById("ing-12-amount");


// Base recipes need to be placed in an array
// Then set to change the innerHTML 
// The batch size can be calculated using the array rather than HTML

let cheesecake = [0.54, 1, 0.075, 0.075, 0.619, 12, 0.5, 0.0375, 1, 0.657, 0.488, 0.825];
let baseCheesecake = cheesecake.map((ingredients) => {
    base = (ingredients / 30);
    return base;
})

let getBatchSize = () => {
    let value = recipeBatch.value;
    let batch = parseInt(value);
    let biscoff = baseCheesecake[0] * batch;
    let salt = baseCheesecake[1] * batch;
    let coconutOil = baseCheesecake[2] * batch;
    let kerrymaid = baseCheesecake[3] * batch;
    let soyaMilk = baseCheesecake[4] * batch;
    let agar = baseCheesecake[5] * batch;
    let nutmeg = baseCheesecake[6] * batch;
    let vanilla = baseCheesecake[7] * batch;
    let otherSalt = baseCheesecake[8] * batch;
    let vitalite = baseCheesecake[9] * batch;
    let violife = baseCheesecake[10] * batch;
    let tofu = baseCheesecake[11] * batch;
    ing1.innerHTML = `${biscoff.toFixed(2)} kg`;
    ing2.innerHTML = `${salt.toFixed(1)} g`;
    ing3.innerHTML = `${coconutOil.toFixed(2)} kg`;
    ing4.innerHTML = `${kerrymaid.toFixed(2)} kg`;
    ing5.innerHTML = `${soyaMilk.toFixed(2)} L`;
    ing6.innerHTML = `${agar.toFixed(1)} g`;
    ing7.innerHTML = `${nutmeg.toFixed(1)} g`;
    ing8.innerHTML = `${vanilla.toFixed(2)} L`;
    ing9.innerHTML = `${otherSalt.toFixed(1)} g`;
    ing10.innerHTML = `${vitalite.toFixed(2)} kg`;
    ing11.innerHTML = `${violife.toFixed(2)} kg`;
    ing12.innerHTML = `${tofu.toFixed(2)} kg`;
};
