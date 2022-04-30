(()=>{"use strict";var e={890:(e,t,o)=>{e.exports=o.p+"ced4e399a51c4183f125.png"},118:(e,t,o)=>{e.exports=o.p+"fadecb22388434dc910b.png"},864:(e,t,o)=>{e.exports=o.p+"e36eb69780f9ced90752.png"},83:(e,t,o)=>{e.exports=o.p+"ed5f000ebf808011f798.png"},343:(e,t,o)=>{e.exports=o.p+"642d228764da438f2cef.png"},506:(e,t,o)=>{e.exports=o.p+"4827f66b7085eb65087f.png"},638:(e,t,o)=>{e.exports=o.p+"f28b802b95a1fcf49f0d.png"},469:(e,t,o)=>{e.exports=o.p+"9926a26c4cb1dd4bf18c.png"}},t={};function o(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})(),(()=>{const e=(e,t,o)=>{document.documentElement.classList.remove("no-scroll"),e.classList.remove("active"),o.classList.remove("active"),t.classList.remove("visible")};var t=o(864),a=o(118),s=o(890),n=o(83),i=o(343),r=o(506),d=o(638);const l=[{id:0,name:"Jennifer",img:t,type:"Dog",breed:"Labrador",description:"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",age:"2 months",inoculations:["none"],diseases:["none"],parasites:["none"]},{id:1,name:"Sophia",img:r,type:"Dog",breed:"Shih tzu",description:"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",age:"1 month",inoculations:["parvovirus"],diseases:["none"],parasites:["none"]},{id:2,name:"Woody",img:o(469),type:"Dog",breed:"Golden Retriever",description:"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",age:"3 years 6 months",inoculations:["adenovirus","distemper"],diseases:["right back leg mobility reduced"],parasites:["none"]},{id:3,name:"Scarlett",img:i,type:"Dog",breed:"Jack Russell Terrier",description:"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",age:"3 months",inoculations:["parainfluenza"],diseases:["none"],parasites:["none"]},{id:4,name:"Katrine",img:n,type:"Cat",breed:"British Shorthair",description:"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",age:"6 months",inoculations:["panleukopenia"],diseases:["none"],parasites:["none"]},{id:5,name:"Timmy",img:d,type:"Cat",breed:"British Shorthair",description:"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",age:"2 years 3 months",inoculations:["calicivirus","viral rhinotracheitis"],diseases:["kidney stones"],parasites:["none"]},{id:6,name:"Freddie",img:a,type:"Cat",breed:"British Shorthair",description:"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",age:"2 months",inoculations:["rabies"],diseases:["none"],parasites:["none"]},{id:7,name:"Charly",img:s,type:"Dog",breed:"Jack Russell Terrier",description:"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",age:"8 years",inoculations:["bordetella bronchiseptica","leptospirosis"],diseases:["deafness","blindness"],parasites:["lice","fleas"]}],c=function(){const e=document.querySelector(".modal");((e,t)=>{const o=e.querySelector(".modal__photo"),a=e.querySelector(".modal__title"),s=e.querySelector(".modal__pet-type"),n=e.querySelector(".modal__breed"),i=e.querySelector(".modal__description"),r=e.querySelector(".modal__age"),d=e.querySelector(".modal__inoculations"),c=e.querySelector(".modal__diseases"),u=e.querySelector(".modal__parasites"),m=l.find((e=>e.id==t));o.src=m.img,a.textContent=m.name,s.textContent=m.type,n.textContent=m.breed,i.textContent=m.description,r.textContent=m.age,d.textContent=m.inoculations.join(", "),c.textContent=m.diseases.join(", "),u.textContent=m.parasites.join(", ")})(e,this.dataset.petId),(()=>{const e=document.documentElement.clientWidth;document.documentElement.classList.add("no-scroll");const t=document.documentElement.clientWidth-e;t&&(document.body.style.paddingRight=`${t}px`)})(),e.classList.add("visible")},u=(e,t,{idsToExclude:o=[],excludeFrom:a=0,excludeTo:s=e}={})=>{const n=[];for(;n.length<e;){const e=Math.floor(Math.random()*(t+1)),i=n.length>=a&&n.length<s;n.includes(e)||i&&(!i||o.includes(e))||n.push(e)}return n},m=(e,t)=>{let o=0;for(;o<e.length/t;){const a=e.slice(t*o,t*(o+1));if(new Set(a).size<t)return console.group(`Found repeats checking subarrays with size ${t}`),console.warn(`Repeat: ${a}, from: ${t*o}, to: ${t*(o+1)-1}`),console.groupEnd(),!0;o+=1}return console.info(`No repeats found in subarrays with size ${t}`),!1},h=(e,t,o,a)=>{e.innerHTML="",e.setAttribute("data-page",o);((e,t)=>{t.forEach((t=>{const o=(({img:e,name:t,id:o})=>{const a=document.createElement("div");a.classList.add("pet-card"),a.setAttribute("data-pet-id",o);const s=document.createElement("div");s.classList.add("pet-card__image-container");const n=new Image(270,270);n.alt="",n.src=e,n.classList.add("pet-card__image");const i=document.createElement("h4");i.classList.add("pet-card__title","title"),i.textContent=t;const r=document.createElement("button");return r.classList.add("pet-card__button","button","button--outlined"),r.textContent="Learn more",s.appendChild(n),a.append(s,i,r),a.addEventListener("click",c),a})(l[t]);e.append(o)}))})(e,((e,t,o)=>{const a=(t-1)*o,s=a+o-1;return e.slice(a,s+1)})(t,o,a))};document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("load",(()=>{document.body.classList.remove("stop-animation")})),(()=>{let e;window.addEventListener("resize",(()=>{document.body.classList.add("stop-animation"),clearTimeout(e),e=setTimeout((()=>{document.body.classList.remove("stop-animation")}),400)}))})(),(()=>{const t=document.querySelector(".header__nav"),o=document.querySelector(".nav-overlay"),a=document.querySelector(".header__burger");a.addEventListener("click",(()=>((t,o,a)=>{t.classList.contains("active")?e(t,o,a):(document.documentElement.classList.add("no-scroll"),t.classList.add("active"),a.classList.add("active"),o.classList.add("visible"))})(t,o,a))),t.addEventListener("click",(s=>((t,o,a,s)=>{(t.target.closest(".nav__link")||t.target.closest(".logo"))&&e(o,a,s)})(s,t,o,a))),o.addEventListener("click",(()=>((t,o,a)=>{e(t,o,a)})(t,o,a))),window.matchMedia("(min-width: 768px)").addEventListener("change",(s=>{s.matches&&e(t,o,a)}))})(),(()=>{const e=document.querySelector(".modal"),t=e.querySelector(".modal__close");e.addEventListener("click",(t=>((e,t)=>{e.target.closest(".modal__content")&&!e.target.closest(".modal__close")||(document.body.style.paddingRight=0,document.documentElement.classList.remove("no-scroll"),t.classList.remove("visible"))})(t,e))),e.addEventListener("mouseover",(e=>{e.target.closest(".modal__content")?t.classList.remove("button--hovered"):t.classList.add("button--hovered")})),e.addEventListener("mouseout",(()=>{t.classList.remove("button--hovered")}))})(),(()=>{const e=((e,t)=>{const o=[];for(let e=0;e<t;e+=1){const e=o.length%6,t=0!==e?o?.slice(-e):[],a=u(8,7,{idsToExclude:t,excludeFrom:0,excludeTo:6-e});o.push(...a)}return o})(0,Math.round(6));console.group("Pets' ids array:"),console.log(e),console.groupEnd(),m(e,8),m(e,6),m(e,3);const t=document.querySelector(".pets__cards-page"),o=document.querySelector(".pagination"),a={first:o.querySelector('[data-page-control="first"]'),last:o.querySelector('[data-page-control="last"]'),prev:o.querySelector('[data-page-control="prev"]'),next:o.querySelector('[data-page-control="next"]'),current:o.querySelector('[data-page-control="current"]')};let s;const n=window.matchMedia("(min-width: 1280px)"),i=window.matchMedia("(max-width: 1279px) and (min-width: 768px)"),r=window.matchMedia("(max-width: 767px)"),d=o=>{if(o.matches){s=8;const o=Number(t.dataset.page)||1;h(t,e,o,s)}},l=o=>{if(o.matches){s=6;const o=Number(t.dataset.page)||1;h(t,e,o,s)}},c=o=>{if(o.matches){s=3;const o=Number(t.dataset.page)||1;h(t,e,o,s)}};n.addEventListener("change",d),i.addEventListener("change",l),r.addEventListener("change",c),d(n),l(i),c(r),o.addEventListener("click",(o=>((e,t,o,a)=>{e.preventDefault();const n=e.target.closest("[data-page-control]");if(!n||n.classList.contains("button--disabled")||n.classList.contains("button--active"))return;const i=Number(a.dataset.page),r=Math.ceil(48/s),d=((e,t,o)=>{switch(e.dataset.pageControl){case"first":return 1;case"last":return o;case"prev":return t-1;case"next":return t+1;default:return t}})(n,i,r);h(a,t,d,s),((e,t,o)=>{const{current:a,prev:s,next:n,first:i,last:r}=e;a.textContent=t,t>1?(i.classList.remove("button--disabled"),s.classList.remove("button--disabled")):(i.classList.add("button--disabled"),s.classList.add("button--disabled")),t<o?(r.classList.remove("button--disabled"),n.classList.remove("button--disabled")):(r.classList.add("button--disabled"),n.classList.add("button--disabled"))})(o,d,r)})(o,e,a,t)))})()}))})()})();