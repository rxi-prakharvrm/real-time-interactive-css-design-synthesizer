// Select elements 
const header = document.querySelector('.header');
const topMenu = document.querySelector('.top-menu');
const ddCtr = document.querySelectorAll(".dd-ctr");
const ddBtnCtr = document.querySelectorAll(".dd-btn-ctr");
const ddInnerBtn = document.querySelectorAll(".dd-inner-btn");
const ddMenu = document.querySelectorAll(".dd-menu");

const selectFont = document.querySelector('.select-font');
const selectFontBtnCtr = document.querySelector(".select-font-btn-ctr");
const selectFontBtn = document.querySelector('.select-font-btn');
const selectFontBtnIcon = document.querySelector('.select-font-btn-ctr i');
const selectFontLi = document.querySelectorAll('.select-font li');

const fontSize = document.querySelector('.font-size');
const fontSizeBtn = document.querySelector('.font-size-btn');
const fontSizeBtnCtr = document.querySelector(".font-size-btn-ctr");
const fontSizeBtnIcon = document.querySelector('.font-size-btn-ctr i');
const fontSizeLi = document.querySelectorAll('.font-size li');

const fontWeight = document.querySelector('.font-weight');
const fontWeightBtn = document.querySelector('.font-weight-btn');
const fontWeightBtnCtr = document.querySelector(".font-weight-btn-ctr");
const fontWeightBtnIcon = document.querySelector('.font-weight-btn-ctr i');
const fontWeightLi = document.querySelectorAll('.font-weight li');

const textColor = document.querySelector('.text-color');
const textColorBtn = document.querySelector('.text-color-btn');
const textColorBtnCtr = document.querySelector(".text-color-btn-ctr");
const textColorBtnIcon = document.querySelector('.text-color-btn-ctr i');
const textColorLi = document.querySelectorAll('.text-color li');
const textColorBox = document.querySelectorAll('.text-color-box');
const textColorBtnBox = document.querySelector('.text-color-btn-box');

const bgColor = document.querySelector('.bg-color');
const bgColorBtn = document.querySelector('.bg-color-btn');
const bgColorBtnCtr = document.querySelector(".bg-color-btn-ctr");
const bgColorBtnIcon = document.querySelector('.bg-color-btn-ctr i');
const bgColorLi = document.querySelectorAll('.bg-color li');
const bgColorBox = document.querySelectorAll('.bg-color-box');
const bgColorBtnBox = document.querySelector('.bg-color-btn-box');

const textBorderColor = document.querySelector('.text-border-color');
const textBorderColorBtn = document.querySelector('.text-border-color-btn');
const textBorderColorBtnCtr = document.querySelector(".text-border-color-btn-ctr");
const textBorderColorBtnIcon = document.querySelector('.text-border-color-btn-ctr i');
const textBorderColorLi = document.querySelectorAll('.text-border-color li');
const textBorderColorBox = document.querySelectorAll('.text-border-color-box');
const textBorderColorBtnBox = document.querySelector('.text-border-color-btn-box');

const btnUnderline = document.querySelector('.btn-underline');
const btnItalic = document.querySelector('.btn-italic');
const btnBold = document.querySelector('.btn-bold');
const btnIncreaseLetterSpacing = document.querySelector('.btn-increase-letter-spacing');
const btnDecreaseLetterSpacing = document.querySelector('.btn-decrease-letter-spacing');
const btnIncreaseLineHeight = document.querySelector('.btn-increase-line-height');
const btnDecreaseLineHeight = document.querySelector('.btn-decrease-line-height');

const textCases = document.querySelector('.text-cases');
const textCasesBtn = document.querySelector('.text-cases-btn');
const textCasesBtnCtr = document.querySelector(".text-cases-btn-ctr");
const textCasesBtnIcon = document.querySelector('.text-cases-btn-ctr i');
const textCasesLi = document.querySelectorAll('.text-cases li');

const textShadow = document.querySelector('.text-shadow');
const textShadowBtn = document.querySelector('.text-shadow-btn');
const textShadowBtnCtr = document.querySelector(".text-shadow-btn-ctr");
const textShadowBtnIcon = document.querySelector('.text-shadow-btn-ctr i');
const textShadowLi = document.querySelectorAll('.text-shadow li');

const textInput = document.querySelector('.text-input');
const codeContainer = document.querySelector('.code-container');
const codeText = document.querySelector('#code p');
const codeFont = document.querySelector('.code-font');
const codeFontSize = document.querySelector('.code-font-size');
const codeColor = document.querySelector('.code-color');
const codeBackgroundColor = document.querySelector('.code-background-color');
const codeTextBorder = document.querySelector('.code-text-border');
const codeUnderline = document.querySelector('.code-underline');
const codeItalic = document.querySelector('.code-italic');
const codeBold = document.querySelector('.code-bold');
const codeLetterSpacing = document.querySelector('.code-letter-spacing');
const codeLineHeight = document.querySelector('.code-line-height');
const codeTextShadow = document.querySelector('.code-text-shadow');
const codeTextCase = document.querySelector('.code-text-case');
const copyCodeBtn = document.querySelector('.copy-code-btn');
const btnClear = document.querySelector('.btn-clear');
const btnChangeMode = document.querySelector('.btn-change-mode');
const codeFontWeight = document.querySelector('.code-font-weight');

const textColorInputCustom = document.querySelector('#text-color-input-custom');
const textColorTextCustom = document.querySelector('#text-color-text-custom');

const bgColorInputCustom = document.querySelector('#bg-color-input-custom');
const bgColorTextCustom = document.querySelector('#bg-color-text-custom');

const btn = document.querySelectorAll('.btn');

// Initial state of the css generator app (clear btn functionality)
const init = function () {
    textInput.value = "Please Stylize Me!"
    textInput.style.letterSpacing = "0px"
    textInput.style.lineHeight = "1"

    selectFontBtn.textContent = "Poppins";
    textInput.style.fontFamily = `"Poppins", sans-serif`;
    codeFont.textContent = `font-family: "Poppins";`

    fontSizeBtn.textContent = "50px";
    textInput.style.fontSize = "50px"
    codeFontSize.textContent = "font-size: 50px;"

    fontWeightBtn.textContent = "300";
    textInput.style.fontWeight = "300"
    codeFontWeight.textContent = "font-weight: 300;"

    textColorBtnBox.style.backgroundColor = "#000000"
    textInput.style.color = "#222"
    codeColor.textContent = "color: #000000;"
    textColorTextCustom.textContent = "#000000";
    textColorInputCustom.value = "#000000";
    
    bgColorBtnBox.style.backgroundColor = "#ffffff"
    textInput.style.backgroundColor = "transparent"
    codeBackgroundColor.textContent = "background-color: #ffffff;"    
    bgColorTextCustom.textContent = "#ffffff";
    bgColorInputCustom.value = "#ffffff";

    textBorderColorBtnBox.style.backgroundColor = "transparent"
    textInput.style.textShadow = "none"
    codeTextBorder.textContent = "none"

    textInput.style.textShadow = "none"
    codeTextBorder.textContent = "text-shadow: none;"

    textInput.classList.remove("underline-text")
    btnUnderline.classList.remove("active")
    codeUnderline.textContent = "text-decoration: none;"

    textInput.classList.remove("italicize-text")
    btnItalic.classList.remove("active")
    codeItalic.textContent = "font-style: none;"

    textInput.classList.remove("bold-text")
    btnBold.classList.remove("active")
    codeBold.textContent = "font-weight: normal;"

    textInput.style.letterSpacing = 0
    codeLetterSpacing.textContent = "letter-spacing: " + 0 + ";"

    textInput.style.lineHeight = 1
    codeLineHeight.textContent = "line-height: " + 1 + ";"

    textInput.style.textTransform = "capitalize"
    codeTextCase.textContent = `text-transform: capitalize;`

    shadowText = "none"
    textShadowBtn.textContent = "None"
    textInput.style.textShadow = shadowText
    codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
}

init();

// Clear all formating
btnClear.addEventListener("click", init)

// Change color mode
btnChangeMode.addEventListener("click", () => {
    document.body.classList.toggle('dark-body');
    header.classList.toggle('dark-header');
    topMenu.classList.toggle('dark-top-menu');
    textInput.classList.toggle('dark-text-input');
    codeContainer.classList.toggle('dark-code-ctr');
    for(let i = 0; i < ddCtr.length; i++) {
        ddBtnCtr[i].classList.toggle('dark-dd-btn-ctr');
        ddInnerBtn[i].classList.toggle('dark-dd-inner-btn');
        ddMenu[i].classList.toggle('dark-dd-menu');
    }
    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.toggle('dark-btn');
    }
})

// Font Family / font type / font
selectFont.classList.add('hidden');

for (let i = 0; i < selectFontLi.length; i++) {
    selectFontLi[i].addEventListener("mouseover", (e) => {
        textInput.style.fontFamily = `'${e.target.textContent}'`;
        selectFontBtn.textContent = `${e.target.textContent}`;
    })

    selectFontLi[i].addEventListener("click", () => {
        selectFont.classList.toggle('hidden');
        codeFont.textContent = `font-family: '${selectFontLi[i].textContent}', sans-serif;`;
        selectFontBtnIcon.classList.toggle('fa-angle-down');
        selectFontBtnIcon.classList.toggle('fa-angle-up');
    })
}

selectFontBtnCtr.addEventListener("click", () => {
    selectFont.classList.toggle('hidden');
    if(selectFontBtnIcon.classList.contains('fa-angle-down')) {
        selectFontBtnIcon.classList.remove('fa-angle-down');
        selectFontBtnIcon.classList.add('fa-angle-up');
    } else {
        selectFontBtnIcon.classList.add('fa-angle-down');
        selectFontBtnIcon.classList.remove('fa-angle-up');
    }
})

// Font Size
fontSize.classList.add('hidden');

for (let i = 0; i < fontSizeLi.length; i++) {
    fontSizeLi[i].addEventListener("mouseover", (e) => {
        textInput.style.fontSize = `${e.target.textContent}px`;
        fontSizeBtn.textContent = `${e.target.textContent}px`;
    })

    fontSizeLi[i].addEventListener("click", () => {
        fontSize.classList.toggle('hidden');
        codeFontSize.textContent = `font-size: ${fontSizeLi[i].textContent}px;`;
        fontSizeBtnIcon.classList.toggle('fa-angle-down');
        fontSizeBtnIcon.classList.toggle('fa-angle-up');
    })
}

fontSizeBtnCtr.addEventListener("click", () => {
    fontSize.classList.toggle('hidden');
    if(fontSizeBtnIcon.classList.contains('fa-angle-down')) {
        fontSizeBtnIcon.classList.remove('fa-angle-down');
        fontSizeBtnIcon.classList.add('fa-angle-up');
    } else {
        fontSizeBtnIcon.classList.add('fa-angle-down');
        fontSizeBtnIcon.classList.remove('fa-angle-up');
    }
})

// Font Weight
fontWeight.classList.add('hidden');

for (let i = 0; i < fontWeightLi.length; i++) {
    fontWeightLi[i].addEventListener("mouseover", (e) => {
        textInput.style.fontWeight = `${e.target.textContent}`;
        fontWeightBtn.textContent = `${e.target.textContent}`;
    })

    fontWeightLi[i].addEventListener("click", () => {
        fontWeight.classList.toggle('hidden');
        codeFontWeight.textContent = `font-weight: ${fontWeightLi[i].textContent};`;
        fontWeightBtnIcon.classList.toggle('fa-angle-down');
        fontWeightBtnIcon.classList.toggle('fa-angle-up');

        if(fontWeightBtn.textContent != "500") {
            btnBold.classList.remove("active");
        }
    })
}

fontWeightBtnCtr.addEventListener("click", () => {
    fontWeight.classList.toggle('hidden');
    if(fontWeightBtnIcon.classList.contains('fa-angle-down')) {
        fontWeightBtnIcon.classList.remove('fa-angle-down');
        fontWeightBtnIcon.classList.add('fa-angle-up');
    } else {
        fontWeightBtnIcon.classList.add('fa-angle-down');
        fontWeightBtnIcon.classList.remove('fa-angle-up');
    }
})


// Text Color
textColor.classList.add('hidden');

for (let i = 0; i < textColorLi.length; i++) {
    textColorLi[i].addEventListener("mouseover", (e) => {
        textInput.style.color = `${e.target.textContent.toLowerCase()}`;
        textColorBtnBox.style.backgroundColor = `${e.target.textContent.toLowerCase()}`;
    })

    textColorLi[i].addEventListener("click", () => {
        textColor.classList.toggle('hidden');
        codeColor.textContent = `color: ${textColorLi[i].textContent.toLowerCase()};`;
        textColorBtnIcon.classList.toggle('fa-angle-down');
        textColorBtnIcon.classList.toggle('fa-angle-up');
    })

    textColorBox[i].style.backgroundColor = `${textColorLi[i].textContent.toLowerCase()}`;
}

textColorBtnCtr.addEventListener("click", () => {
    textColor.classList.toggle('hidden');
    if(textColorBtnIcon.classList.contains('fa-angle-down')) {
        textColorBtnIcon.classList.remove('fa-angle-down');
        textColorBtnIcon.classList.add('fa-angle-up');
    } else {
        textColorBtnIcon.classList.add('fa-angle-down');
        textColorBtnIcon.classList.remove('fa-angle-up');
    }
})

textColorInputCustom.addEventListener("change", () => {
    textInput.style.color = textColorInputCustom.value;
    textColorTextCustom.textContent = textColorInputCustom.value;
    textColorBtnBox.style.backgroundColor = textColorInputCustom.value;
    codeColor.textContent = `color: ${textColorTextCustom.textContent};`;
})

// Background-color
bgColor.classList.add('hidden');

for (let i = 0; i < bgColorLi.length; i++) {
    bgColorLi[i].addEventListener("mouseover", (e) => {
        textInput.style.backgroundColor = `${e.target.textContent.toLowerCase()}`;
        bgColorBtnBox.style.backgroundColor = `${e.target.textContent.toLowerCase()}`;
    })

    bgColorLi[i].addEventListener("click", () => {
        bgColor.classList.toggle('hidden');
        codeBackgroundColor.textContent = `background-color: ${textColorLi[i].textContent.toLowerCase()};`;
        bgColorBtnIcon.classList.toggle('fa-angle-down');
        bgColorBtnIcon.classList.toggle('fa-angle-up');
    })

    bgColorBox[i].style.backgroundColor = `${bgColorLi[i].textContent.toLowerCase()}`;
}

bgColorBtnCtr.addEventListener("click", () => {
    bgColor.classList.toggle('hidden');
    if(bgColorBtnIcon.classList.contains('fa-angle-down')) {
        bgColorBtnIcon.classList.remove('fa-angle-down');
        bgColorBtnIcon.classList.add('fa-angle-up');
    } else {
        bgColorBtnIcon.classList.add('fa-angle-down');
        bgColorBtnIcon.classList.remove('fa-angle-up');
    }
})

bgColorInputCustom.addEventListener("change", () => {
    textInput.style.backgroundColor = bgColorInputCustom.value;
    bgColorTextCustom.textContent = bgColorInputCustom.value;
    bgColorBtnBox.style.backgroundColor = bgColorInputCustom.value;
    codeBackgroundColor.textContent = `background-color: ${bgColorTextCustom.textContent};`;
})

// Text Border
textBorderColor.classList.add('hidden');

for (let i = 0; i < textBorderColorLi.length; i++) {
    textBorderColorLi[i].addEventListener("mouseover", (e) => {
        let clr = textBorderColorLi[i].textContent.toLowerCase();
        textInput.style.textShadow = "1px 1px 0 " + clr + ", -1px -1px 0 " + clr + ", 1px -1px 0 " + clr + ", -1px 1px 0 " + clr;
        codeTextBorder.textContent = "text-shadow: " + "1px 1px 0 " + clr + ", -1px -1px 0 " + clr + ", 1px -1px 0 " + clr + ", -1px 1px 0 " + clr + ";"
        textBorderColorBtnBox.style.backgroundColor = `${textBorderColorLi[i].textContent.toLowerCase()}`;
    })

    textBorderColorLi[i].addEventListener("click", () => {
        textBorderColor.classList.toggle('hidden');
        textBorderColorBtnIcon.classList.toggle('fa-angle-up');
        textBorderColorBtnIcon.classList.toggle('fa-angle-down');
        codeTextBorder.textContent = "1px 1px 0 " + clr + ", -1px -1px 0 " + clr + ", 1px -1px 0 " + clr + ", -1px 1px 0 " + clr;
    })

    textBorderColorBox[i].style.backgroundColor = `${textBorderColorLi[i].textContent.toLowerCase()}`;
}

textBorderColorBtnCtr.addEventListener("click", () => {
    textBorderColor.classList.toggle('hidden');
    if(textBorderColorBtnIcon.classList.contains('fa-angle-down')) {
        textBorderColorBtnIcon.classList.remove('fa-angle-down');
        textBorderColorBtnIcon.classList.add('fa-angle-up');
    } else {
        textBorderColorBtnIcon.classList.add('fa-angle-down');
        textBorderColorBtnIcon.classList.remove('fa-angle-up');
    }
})

// Button Underline
btnUnderline.addEventListener("click", () => {
    textInput.classList.toggle("underline-text")
    btnUnderline.classList.toggle("active")

    if (btnUnderline.classList.contains("active")) {
        codeUnderline.textContent = "text-decoration: underline;"
    } else {
        codeUnderline.textContent = "text-decoration: none;"
    }
})

// Button Italic
btnItalic.addEventListener("click", () => {
    textInput.classList.toggle("italic-text")
    btnItalic.classList.toggle("active")

    if (btnItalic.classList.contains("active")) {
        codeItalic.textContent = "font-style: italic;"
    } else {
        codeItalic.textContent = "font-style: none;"
    }
})

//Button Bold
btnBold.addEventListener("click", () => {
    btnBold.classList.toggle("active")
    
    if (btnBold.classList.contains("active")) {
        codeBold.textContent = "font-weight: bold;"
        textInput.style.fontWeight = "500";
        fontWeightBtn.textContent = "500";
    } else {
        codeBold.textContent = "font-weight: normal;"
        textInput.style.fontWeight = "300";
        fontWeightBtn.textContent = "300";
    }
})

// Letter Spacing buttons
btnIncreaseLetterSpacing.addEventListener("click", () => {
    let textLetterSpacing = textInput.style.letterSpacing
    let newTextLetterSpacing = textLetterSpacing.substr(0, 2)
    let add = parseInt(newTextLetterSpacing) + 2;
    add += "px"
    textInput.style.letterSpacing = add

    codeLetterSpacing.textContent = "letter-spacing: " + textInput.style.letterSpacing + ";"
})

btnDecreaseLetterSpacing.addEventListener("click", () => {
    let textLetterSpacing = textInput.style.letterSpacing
    let newTextLetterSpacing = textLetterSpacing.substr(0, 2)
    let del = parseInt(newTextLetterSpacing) - 1;
    del += "px"
    textInput.style.letterSpacing = del

    codeLetterSpacing.textContent = "letter-spacing: " + textInput.style.letterSpacing + ";"
})

// Line Height buttons
btnIncreaseLineHeight.addEventListener("click", () => {
    let textLineHeight = textInput.style.lineHeight
    let newTextLineHeight = textLineHeight.substr(0, 2)
    let add = parseInt(newTextLineHeight) + 1
    textInput.style.lineHeight = add

    codeLineHeight.textContent = "line-height: " + textInput.style.lineHeight + ";"
})

btnDecreaseLineHeight.addEventListener("click", () => {
    let textLineHeight = textInput.style.lineHeight
    let newTextLineHeight = textLineHeight.substr(0, 2)
    let del = parseInt(newTextLineHeight) - 1
    textInput.style.lineHeight = del

    codeLineHeight.textContent = "line-height: " + textInput.style.lineHeight + ";"
})

// Text cases
textCases.classList.add('hidden');

for (let i = 0; i < textCasesLi.length; i++) {
    textCasesLi[i].addEventListener("mouseover", (e) => {
        textInput.style.textTransform = `${e.target.textContent.toLowerCase()}`;
        textCasesBtn.textContent = `${e.target.textContent}`;
    })

    textCasesLi[i].addEventListener("click", () => {
        textCases.classList.toggle('hidden');
        codeTextCase.textContent = `text-transform: ${textCasesLi[i].textContent.toLowerCase()};`;
        textCasesBtnIcon.classList.toggle('fa-angle-down');
        textCasesBtnIcon.classList.toggle('fa-angle-up');
    })
}

textCasesBtnCtr.addEventListener("click", () => {
    textCases.classList.toggle('hidden');
    if(textCasesBtnIcon.classList.contains('fa-angle-down')) {
        textCasesBtnIcon.classList.remove('fa-angle-down');
        textCasesBtnIcon.classList.add('fa-angle-up');
    } else {
        textCasesBtnIcon.classList.add('fa-angle-down');
        textCasesBtnIcon.classList.remove('fa-angle-up');
    }
})

// Text shadow
textShadow.classList.toggle("hidden");

for(let i = 0; i < textShadowLi.length; i++) {
    textShadowLi[i].addEventListener("mouseover", (e) => {
        textShadowBtn.textContent = `${e.target.textContent}`;
        
        let shadowText = textInput.style.textShadow;
        if (e.target.textContent === "None") {
            shadowText = "none"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-1") {
            shadowText = "2px 2px 5px gray"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-2") {
            shadowText = "4px 4px 10px gray"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-3") {
            shadowText = "0 4px 10px gray"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-4") {
            shadowText = "4px 4px 2px rgba(150, 150, 150, 1)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-5") {
            shadowText = "6px 3px 5px rgba(150, 150, 150, 1)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-6") {
            shadowText = "2px 1px 13px rgba(150, 150, 150, 1)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-7") {
            shadowText = "8px 5px 5px rgba(150, 150, 150, 0.7)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (textShadow.textContent === "Shadow-8") {
            shadowText = "-5px -3px 3px rgba(150, 150, 150, 0.7)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        }
    })

    textShadowLi[i].addEventListener("click", (e) => {
        textShadow.classList.toggle('hidden');
        textShadowBtnIcon.classList.toggle('fa-angle-up');
        textShadowBtnIcon.classList.toggle('fa-angle-down');

        let shadowText = textInput.style.textShadow;
        if (e.target.textContent === "None") {
            shadowText = "none"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-1") {
            shadowText = "2px 2px 5px gray"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-2") {
            shadowText = "4px 4px 10px gray"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-3") {
            shadowText = "0 4px 10px gray"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-4") {
            shadowText = "4px 4px 2px rgba(150, 150, 150, 1)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-5") {
            shadowText = "6px 3px 5px rgba(150, 150, 150, 1)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-6") {
            shadowText = "2px 1px 13px rgba(150, 150, 150, 1)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (e.target.textContent === "Shadow-7") {
            shadowText = "8px 5px 5px rgba(150, 150, 150, 0.7)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        } else if (textShadow.textContent === "Shadow-8") {
            shadowText = "-5px -3px 3px rgba(150, 150, 150, 0.7)"
            textInput.style.textShadow = shadowText
            codeTextShadow.textContent = "text-shadow: " + shadowText + ";"
        }
    })
}

textShadowBtnCtr.addEventListener("click", () => {
    textShadow.classList.toggle('hidden');
    if(textShadowBtnIcon.classList.contains('fa-angle-down')) {
        textShadowBtnIcon.classList.remove('fa-angle-down');
        textShadowBtnIcon.classList.add('fa-angle-up');
    } else {
        textShadowBtnIcon.classList.add('fa-angle-down');
        textShadowBtnIcon.classList.remove('fa-angle-up');
    }
})


// Copy generated code
// copyCodeBtn.addEventListener("click", (element) => {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//     alert("Code copied successfully!");
// })

copyCodeBtn.addEventListener("click", function() {
    var textToCopy = document.getElementById("code").textContent;
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = textToCopy;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Code copied successfully!");
});
