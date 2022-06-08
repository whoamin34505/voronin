document.querySelector('.btn1').onclick = myClick;

function myClick() {
    const fruits = document.querySelectorAll('input[name="name1"]')
    var num1 = 0
    for (const f of fruits) {
      if (f.checked) {
        var num1 = f.value
      }
    }
    const fruits1 = document.querySelectorAll('input[name="name2"]')
    for (const q of fruits1) {
      var num2 = 0
      if (q.checked) {
        var num2 = q.value
      }
    }
    const fruits3 = document.querySelectorAll('input[name="name3"]')
    var num3 = 0
    for (const w of fruits3) {
      if (w.checked) {
        var num3 = w.value
      }
    }
    const fruits4 = document.querySelectorAll('input[name="name4"]')
    var num4 = 0
    for (const e of fruits4) {
      if (e.checked) {
        var num4 = e.value
      }
    }
    const fruits5 = document.querySelectorAll('input[name="name5"]')
    var num5 = 0
    for (const r of fruits5) {
      if (r.checked) {
        var num5 = r.value
      }
    }
    const fruits6 = document.querySelectorAll('input[name="name6"]')
    var num6 = 0
    for (const t of fruits6) {
      if (t.checked) {
        var num6 = t.value
      }
    }
    const fruits7 = document.querySelectorAll('input[name="name7"]')
    var num7 = 0
    for (const y of fruits7) {
      if (y.checked) {
        var num7 = y.value
      }
    }
    const fruits8 = document.querySelectorAll('input[name="name8"]')
    var num8 = 0
    for (const u of fruits8) {
      if (u.checked) {
        var num8 = u.value
      }
    }
    const fruits9 = document.querySelectorAll('input[name="name9"]')
    var num9 = 0
    for (const i of fruits9) {
      if (i.checked) {
        var num9 = i.value
      }
    }
    const fruits10 = document.querySelectorAll('input[name="name10"]')
    var num10 = 0
    for (const o of fruits10) {
      if (o.checked) {
        var num10 = o.value
      }
    }
var sum = Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) + Number(num6) + Number(num7) + Number(num8) + Number(num9) + Number(num10)
var sum1 = Number(sum) * 10
var element = document.getElementById("out");
var newElement = '<img src="img/1.jpg" style="width: 200px; border: 1px solid #000; border-radius: 10px;box-shadow:5px 5px 10px #2B1015;">'
element.insertAdjacentHTML( 'afterend', newElement )
let out1 = `Вы Воронин на <b>${sum1}%</b>! Отлично, но Ворониным вам никогда не стать)))`
document.querySelector('.out1').innerHTML = out1;
console.log (sum1)
}
