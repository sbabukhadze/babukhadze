"use strict";
window.onload = function () {
    const selectedColors = [];
    const btn = document.getElementsByTagName("button")[0];
    function boxesAreSelected(arr) {
        if (arr[0] != undefined && arr[1] != undefined && arr[2] != undefined) {
            btn.disabled = false;
        }
    }
    function handler(element, num) {
        if (selectedColors[num] != undefined) {
            document.getElementsByClassName(selectedColors[num])[0].style.border = "";
        }
        selectedColors[num] = element.classList[1];
        document.getElementsByClassName(selectedColors[num])[0].style.border = "2px solid red";
        boxesAreSelected(selectedColors);
    }
    for (let i = 1; i < 10; i++) {
        const element = document.getElementsByClassName(`color${i}`)[0];
        if (i > 0 && i < 4) {
            element.onclick = function () {
                handler(this, 0);
            };
        }
        else if (i > 3 && i < 7) {
            element.onclick = function () {
                handler(this, 1);
            };
        }
        else {
            element.onclick = function () {
                handler(this, 2);
            };
        }
    }
    btn.onclick = function () {
        const container = document.getElementsByClassName("container2")[0];
        for (let i = 0; i < container.children.length; i++) {
            const element = document.getElementsByClassName(selectedColors[i])[0];
            const styles = window.getComputedStyle(element, null);
            container.children[i].style.backgroundColor = styles.backgroundColor;
        }
    };
};
//# sourceMappingURL=app.js.map