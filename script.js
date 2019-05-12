

function displaytip(val) {
    let bill = grabBill();
    console.log(document.getElementById('percent').value, "default percent");
    if(val){
    document.getElementById('percent').value = val;
    }
    else{
        val=document.getElementById('percent').value
    }
    console.log(bill, "bill");
    let scale = val / 1;
    console.log(scale, "scale")
    let percent = scale / 100;
    console.log(percent, "percent")
    let amount = bill * percent;
    console.log(amount, "amount")
    let num = grabNum();
    console.log(num, "num");
    let tip = (amount / num).toFixed(2);
    console.log(tip, "tip")
    $("#amount").text(tip);
    $("#percent").text(scale);


}

function grabNum() {
    return document.getElementById("split").value;
}

function grabBill() {
    return document.getElementById('bill').value;
    //console.log(bill, "bill")
}

