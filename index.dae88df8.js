document.querySelector(".tree").querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=document.createElement("span");n.textContent=e.firstChild.textContent,e.firstChild.replaceWith(n),n.addEventListener("click",function(){t.hidden=!t.hidden})}});
//# sourceMappingURL=index.dae88df8.js.map
