{
  let toggleTitle = false;
  let toggleMPN = false;
  let toggleGTN = false;

  const description = ({title,mpn,gtn,content,OB}) => {
   
    return `
        <style>
        h2.h2Lit {padding-block-start: 0.6rem;margin-block-end: 0.5rem;}
        .gText h2, .gText3 h2, .gText4 h2, .gText5 h2 {line-height:0.7;}
        h2.lh1 {line-height: 1;}
        h3.uLit {padding-top: 1rem; margin-bottom: -0.2rem;}
        span.h2Lit, .h1Lit {color: #ff6600; font-weight: bold;}
        .h1Lit {font-size: large;}
        span.h2Lit, p.mText, blockquote.descQ {font-size: medium;}
        blockquote.descQ footer {font-size: small; }
        blockquote.descQ {background-color: rgb(237, 237, 237); padding: 0.5rem; width: 80%;}
        blockquote.descQ p{padding: 0.5rem 0.5rem 0 0.5rem;}
        Ul.mpn {color: #888888;}
        span.ind{padding-left: 1rem;}
        table.descTable tr {vertical-align: top;}
        table.descTable th, table.descTable td {width: 50%; text-align: left; padding: 0 1rem 0 1rem;}
        table.descTable th {padding-top:1.5rem;}
        table.bTable {width: auto;}
        table.bTable th {text-align: left; padding-top:1rem; padding-bottom: 1rem; width: auto; font-size: 1vw;}
            .bDs {padding:0.5rem; box-shadow: 0rem 0.2rem 0.5rem  rgba(0,0,0,0.6); border-radius:0.5rem; border}
            @media only screen and (min-width:200px) and (max-width:1000px) {
                table.bTable th {font-size:3vw;}
            }
        .gText div, .gText3 div, .gText4 div, .gText5 div {padding:1rem;}
        .gText {display:grid; grid-template-columns: repeat(auto-fill,minmax(50%, 1fr));}
        .gText3 {display:grid; grid-template-columns: repeat(auto-fill,minmax(33.33%, 1fr));}
        .gText4 {display:grid; grid-template-columns: repeat(auto-fill,minmax(25%, 1fr));}
        .gText5 {display:grid; grid-template-columns: repeat(auto-fill,minmax(20%, 1fr));}
                @media only screen and (min-width:200px) and (max-width:1000px) {
                        .gText, .gText3, .gText4, .gText5 {display:grid; grid-template-columns: repeat(auto-fill,minmax(100%, 1fr));}
            }
        .bDs1 {width:fit-content; box-shadow: 0rem 0.2rem 0.5rem  rgba(0,0,0,0.6); border-radius:0.5rem; border}
        .iDs1 {padding: 0.7rem;}
        .l1div {border-bottom: 0.1rem solid #000;}
        .dBor {padding:1rem;border:0.1rem solid #000;}
            .dMobile {border-top: solid .3rem #000; border-radius: 1rem; box-shadow: #000 0.1rem 0.1rem 0.3rem;}
            .dMobi {padding-left: 1rem; padding-right: 1rem;}
            u.h1Lit {font-size: large;}
        .aquaList li {padding-top: 0.5rem;}
        .aquaList li::first-line {font-weight: bolder;}
    </style>
<p class="mText">The <strong class="h1Lit">${title}</strong> 
${content}
</p>

<h2 class="h2Lit">Key Features of the ${title}</h2>
<ul>
<li></li>
</ul>

<p></p>
<ul class="mpn">
<li>MPN - ${OB ? `${mpn}OB`:mpn }</li>
<li>GTN - ${gtn? gtn: 'TBA'}</li>
</ul>
        
        `;
  };

  const titleContainer = document.querySelector("#title-container");
  const barContainer = document.querySelector("#bar-container");
  // btns
  const descBtn = document.querySelector("#description-btn");
  const barBtn = document.querySelector("#bar-btn");
  const titleBtn = document.querySelector("#title-btn");
  const clr = document.querySelector("#clear-btn");
  const copy = document.querySelector("#copy-btn");

  // input field
  const inputTitle = document.querySelector("#title-input");
  const mpn = document.querySelector("#mpn-input");
  const gtn = document.querySelector("#gtn-input");

  // functions
  titleBtn.addEventListener("click", () => {
    if (!toggleTitle) {
      titleContainer.style.display = "grid";
      titleBtn.style.borderColor = "black";
      titleBtn.style.color = "black";
      toggleTitle = true;
    } else {
      titleContainer.style.display = "none";
      titleBtn.style.borderColor = " rgb(163, 163, 163)";
      titleBtn.style.color = " rgb(163, 163, 163)";
      toggleTitle = false;
    }
  });

  barBtn.addEventListener("click", () => {
    if (!toggleMPN) {
      barContainer.style.display = "grid";
      barBtn.style.borderColor = "black";
      barBtn.style.color = "black";
      toggleMPN = true;
    } else {
      barContainer.style.display = "none";
      barBtn.style.borderColor = " rgb(163, 163, 163)";
      barBtn.style.color = " rgb(163, 163, 163)";
      toggleMPN = false;
    }
  });
//   descBtn.addEventListener("click", () => {
//     if (!toggleGTN) {
//       gtnContainer.style.display = "grid";
//       descBtn.style.borderColor = "black";
//       descBtn.style.color = "black";
//       toggleGTN = true;
//     } else {
//       gtnContainer.style.display = "none";
//       descBtn.style.borderColor = " rgb(163, 163, 163)";
//       descBtn.style.color = " rgb(163, 163, 163)";
//       toggleGTN = false;
//     }
//   });
  clr.addEventListener("click", () => {
    inputTitle.value = "";
    mpn.value = "";
    gtn.value = "";
  });
  // save funtion
  copy.addEventListener("click", () => {
    titleContainer.style.display = "none";
    barContainer.style.display = "none";
    barContainer.style.display = "none";
    toggleTitle = false;
    toggleMPN = false;
    toggleGTN = false;
    titleBtn.style.borderColor = " rgb(163, 163, 163)";
    titleBtn.style.color = " rgb(163, 163, 163)";
    barBtn.style.borderColor = " rgb(163, 163, 163)";
    barBtn.style.color = " rgb(163, 163, 163)";

    navigator.clipboard.writeText(description(inputTitle.value,mpn.value,gtn.value,));
    inputTitle.value = "";
    mpn.value =""
    gtn.value="'"
    
    copy.textContent="copied!"
    const copiedText = setTimeout(()=>{
        copy.textContent = "copy"
    }, 4000)
    copiedText()
    clearTimeout(copiedText)

});
}
