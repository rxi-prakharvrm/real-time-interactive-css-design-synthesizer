// Select elements 
const header = document.querySelector('.header');
const topMenu = document.querySelector('.top-menu');
const ddCtr = document.querySelectorAll(".dd-ctr");
const ddBtnCtr = document.querySelectorAll(".dd-btn-ctr");
const ddInnerBtn = document.querySelectorAll(".dd-inner-btn");
const ddMenu = document.querySelectorAll(".dd-menu");

const selectFont = document.querySelector('.select-font');
const selectFontDDCtr = document.querySelector('.select-font-dd-ctr');
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
    textInput.style.color = "#555"
    codeColor.textContent = "color: #000000;"
    textColorTextCustom.textContent = "#000000";
    textColorInputCustom.value = "#000000";
    
    bgColorBtnBox.style.backgroundColor = "#ffffff"
    textInput.style.backgroundColor = "transparent"
    codeBackgroundColor.textContent = "background-color: #ffffff;"    
    bgColorTextCustom.textContent = "#ffffff";
    bgColorInputCustom.value = "#ffffff";

    textInput.style.textShadow = "none"

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
    copyCodeBtn.src = "images/copy-light.png";

    for(let i = 0; i < ddCtr.length; i++) {
        ddBtnCtr[i].classList.toggle('dark-dd-btn-ctr');
        ddInnerBtn[i].classList.toggle('dark-dd-inner-btn');
        ddMenu[i].classList.toggle('dark-dd-menu');
    }

    for(let i = 0; i < btn.length; i++) {
        btn[i].classList.toggle('dark-btn');
    }
})

// hide all the dropdowns on clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dd-ctr')) {
        for (let i = 0; i < ddMenu.length; i++) {
            ddMenu[i].classList.add('hidden');
        }
    }

    if (!e.target.closest('.select-font-dd-ctr')) {
        selectFont.classList.add('hidden');
    }

    if (!e.target.closest('.font-size-btn-ctr')) {
        fontSize.classList.add('hidden');
    }

    if (!e.target.closest('.font-weight-btn-ctr')) {
        fontWeight.classList.add('hidden');
    }

    if (!e.target.closest('.text-color-btn-ctr')) {
        textColor.classList.add('hidden');
    }

    if (!e.target.closest('.bg-color-btn-ctr')) {
        bgColor.classList.add('hidden');
    }

    if (!e.target.closest('.text-cases-btn-ctr')) {
        textCases.classList.add('hidden');
    }

    if (!e.target.closest('.text-shadow-btn-ctr')) {
        textShadow.classList.add('hidden');
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
    selectFontBtnIcon.classList.toggle('fa-angle-down');
    selectFontBtnIcon.classList.toggle('fa-angle-up');
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
    fontSizeBtnIcon.classList.toggle('fa-angle-down');
    fontSizeBtnIcon.classList.toggle('fa-angle-up');
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
    fontWeightBtnIcon.classList.toggle('fa-angle-down');
    fontWeightBtnIcon.classList.toggle('fa-angle-up');
})


// Text Color
textColor.classList.add('hidden');

for (let i = 0; i < textColorLi.length; i++) {
    textColorBox[i].style.backgroundColor = `${textColorLi[i].textContent.toLowerCase()}`;

    textColorLi[i].addEventListener("mouseover", (e) => {
        console.log(e.target.textContent.toLowerCase());
        textInput.style.color = `${e.target.textContent.toLowerCase()}`;
        textColorBtnBox.style.backgroundColor = `${e.target.textContent.toLowerCase()}`;
    })

    textColorInputCustom.addEventListener("input", (e) => {
        textInput.style.color = `${e.target.value}`;
        textColorBtnBox.style.backgroundColor = `${e.target.value}`;
        textColorTextCustom.textContent = `${e.target.value}`;
    })

    textColorLi[i].addEventListener("click", () => {
        textColor.classList.toggle('hidden');
        codeColor.textContent = `color: ${textColorLi[i].textContent.toLowerCase()};`;
        textColorBtnIcon.classList.toggle('fa-angle-down');
        textColorBtnIcon.classList.toggle('fa-angle-up');
    })
}

textColorBtnCtr.addEventListener("click", () => {
    textColor.classList.toggle('hidden');
    textColorBtnIcon.classList.toggle('fa-angle-down');
    textColorBtnIcon.classList.toggle('fa-angle-up');
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
    bgColorBox[i].style.backgroundColor = `${bgColorLi[i].textContent.toLowerCase()}`;

    bgColorLi[i].addEventListener("mouseover", (e) => {
        textInput.style.backgroundColor = `${e.target.textContent.toLowerCase()}`;
        bgColorBtnBox.style.backgroundColor = `${e.target.textContent.toLowerCase()}`;
    })

    bgColorInputCustom.addEventListener("input", (e) => {
        textInput.style.backgroundColor = `${e.target.value}`;
        bgColorBtnBox.style.backgroundColor = `${e.target.value}`;
        bgColorTextCustom.textContent = e.target.value;
    })

    bgColorLi[i].addEventListener("click", () => {
        bgColor.classList.toggle('hidden');
        codeBackgroundColor.textContent = `background-color: ${textColorLi[i].textContent.toLowerCase()};`;
        bgColorBtnIcon.classList.toggle('fa-angle-down');
        bgColorBtnIcon.classList.toggle('fa-angle-up');
    })
}

bgColorBtnCtr.addEventListener("click", () => {
    bgColor.classList.toggle('hidden');
    bgColorBtnIcon.classList.toggle('fa-angle-down');
    bgColorBtnIcon.classList.toggle('fa-angle-up');
})

bgColorInputCustom.addEventListener("change", () => {
    textInput.style.backgroundColor = bgColorInputCustom.value;
    bgColorTextCustom.textContent = bgColorInputCustom.value;
    bgColorBtnBox.style.backgroundColor = bgColorInputCustom.value;
    codeBackgroundColor.textContent = `background-color: ${bgColorTextCustom.textContent};`;
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
    textCasesBtnIcon.classList.toggle('fa-angle-down');
    textCasesBtnIcon.classList.toggle('fa-angle-up');
})

// Text shadow
textShadow.classList.toggle("hidden");
const shadows = [
    'none',
    '1px 3px 2px rgba(150, 150, 150, 0.8)',
    '4px 2px 5px rgba(150, 150, 150, 0.6)',
    '2px 5px 3px rgba(150, 150, 150, 0.7)',
    '3px 1px 4px rgba(150, 150, 150, 0.5)',
    '6px 4px 2px rgba(150, 150, 150, 0.9)',
    '2px 7px 6px rgba(150, 150, 150, 0.4)',
    '5px 3px 4px rgba(150, 150, 150, 0.75)',
    '8px 1px 3px rgba(150, 150, 150, 0.65)',
    '3px 6px 5px rgba(150, 150, 150, 0.55)',
    '7px 2px 4px rgba(150, 150, 150, 0.85)'
  ];

for(let i = 0; i < textShadowLi.length; i++) {
    textShadowLi[i].addEventListener("mouseover", (e) => {
        textShadowBtn.textContent = `${e.target.textContent}`;
        textInput.style.textShadow = `${shadows[i]}`;
        codeTextShadow.textContent = `text-shadow: ${shadows[i]};`;
    })

    textShadowLi[i].addEventListener("click", (e) => {
        textShadow.classList.toggle('hidden');
        textShadowBtnIcon.classList.toggle('fa-angle-up');
        textShadowBtnIcon.classList.toggle('fa-angle-down');        
        textInput.style.textShadow = `${shadows[i]}`;
        codeTextShadow.textContent = `text-shadow: ${shadows[i]};`;
    })
}

textShadowBtnCtr.addEventListener("click", () => {
    textShadow.classList.toggle('hidden');
    textShadowBtnIcon.classList.toggle('fa-angle-down');
    textShadowBtnIcon.classList.toggle('fa-angle-up');
})

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
