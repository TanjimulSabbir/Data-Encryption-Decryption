var number = 0
var ary = []
for (var i = 0; number <= 2559; i++) {
    number = number + 1
    ary.push((String.fromCharCode(number)))
    // console.log("ary", ary)
    var data = ary
}

function Inputdata() {
    InputArticle = document.getElementById("input");
    var InputField = InputArticle.value;
    var article = String(InputField)
    console.log("This is Article:", article, ", Length:", article.length, 'word Count', (article.split(' ')).length)
    return article;
}


function EncryptData() {
    var article = Inputdata();
    var LengthDiv = document.getElementById("length")
    var LengthDisplay = document.createElement('div')
    LengthDisplay.innerHTML = `<div class="lenDisPad">Character Number: ${article.length}
    </br> Word Nunber: ${(article.split(' ')).length} </div>`
    LengthDiv.textContent = '';
    LengthDiv.appendChild(LengthDisplay)
    console.log(article)
    var SpliteArticle = [];
    SpliteArticle = [...article]
    console.log("SpliteArticle", 'Article', SpliteArticle[0], "Char", data[0])

    const MatchingChar = SpliteArticle.filter(element => data.includes(element));
    console.log(MatchingChar, 'MatchingChar')

    var Ascii = []
    for (var x = 0; x <= MatchingChar.length; x++) {
        AsciiChar = MatchingChar[x]
        var CharToCode = String(AsciiChar).charCodeAt(0)
        CharCodeToBinary = CharToCode.toString(2)
        AddToAsciiArray = Ascii.push(CharCodeToBinary)
    }
    console.log(Ascii, 'Ascii Code')
    var CombinedIntoOne = Ascii.join('100')
    console.log(typeof (CombinedIntoOne))
    var MainDiv = document.getElementById('display')
    NewDiv = document.createElement('div')
    NewDiv.classList.add('EncryptDisplay')
    NewDiv.innerHTML = ` 
    <div onclick="myFunction()">${CombinedIntoOne}</div>`
    MainDiv.textContent = '';
    MainDiv.appendChild(NewDiv)
    return CombinedIntoOne;
}

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("display");
    var copyText = copyText.innerText;
    /* Select the text field */
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert("Copied the text: " + copyText);
}
function DataDecrypt() {
    var InputBinaryArticle = document.getElementById("inputBinary");
    var InputBinaryField = InputBinaryArticle.value;
    var BinaryArticle = String(InputBinaryField)
    var x = EncryptData();
    var y = Inputdata();
    console.log(x, y, 'X')

    if (x == BinaryArticle) {
        alert(x)
        var DecryptData = y.split(',')
    }
    var DecryptDiv = document.getElementById('decrypt')
    DecryptNewDiv = document.createElement('div')
    DecryptNewDiv.classList.add("DecryptDisplay")
    DecryptDiv.textContent = '';
    DecryptNewDiv.innerHTML = `<div>Character: ${DecryptData}</div>`
    DecryptDiv.appendChild(DecryptNewDiv)
}


// var time = prompt()
// var Cycle = [];
// for (var i = 0; i <= 10; i++) {
//     var timeCycle = Cycle.push(i);

// }
// // var Cycle = [...Cycle].toString(0)
// console.log(typeof (Cycle))
// for (var i = 0; i <= Cycle.length; i++) {
//     if ((`10.${Cycle[i]}AM` == time) == 'true') {
//         alert('Eligible')
//     }
// }

// // if (time == `10.0${Cycle}AM`) {
// //     alert('You will be Eligible For attendance')
// // }
// // else {
// //     alert("Your will be not eligible for attendance")
// // }





