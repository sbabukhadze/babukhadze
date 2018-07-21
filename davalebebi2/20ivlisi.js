let body = document.body;
let childNodes = body.childNodes;


console.log(document.body.firstElementChild);   //div
let ol = document.body.firstElementChild.nextElementSibling; //ol
console.log(ol);
console.log(ol.children[1].textContent);  //item 2




//  childNodes.forEach((el) => {
//      if (el.children.length){
//          let firstOl = el.firstElementChild;
//         console.log( firstOl, firstOl.nextElementSibling)
//         for (let olElement of el.children){
//             console.log(document.node.nextSibling);
            
//         }
//      }
//  })






