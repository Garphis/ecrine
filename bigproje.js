const kotuson = `<p style="text-align:center;">NE😭😭😭😭😭😭😥😥😥😥😥😥 </p><img style="width:700px;" src="üzgünemoji.png"> <p style="text-align:center;">ÇOK KÖTÜSÜN</p>`;
let fotonum = 1;

let foto = `
    <div class="foto" style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
        <div></div>
        <img src="${fotonum}.gif">
        <div></div>
    </div>
    <button onclick="sonraki()" class="evet">😍</button>`;


let hayırsayacı = 0;
let evetsayacı = 0;

function hayırcı()
{
    hayırsayacı++;
    if(evetsayacı == 0 && hayırsayacı == 1)
    {
        document.body.innerHTML = kotuson;
    }

    if(evetsayacı == 1 && hayırsayacı == 1)
    {
        document.body.innerHTML = kotuson;
    }

    if(evetsayacı == 2 && hayırsayacı == 1)
    {
        document.body.innerHTML = kotuson;
    }
    
    if(evetsayacı == 3 && hayırsayacı==1)
    {
        document.body.innerHTML = kotuson;
    }

    if(evetsayacı == 4 && hayırsayacı==1)
    {
        document.body.innerHTML= `<p style="text-align:center;">😍hayır diyeceğini biliyodum zaten yine de sormak istedim😍</p><p style="text-align:center;">nasıl olmuş bebeğim</p>`;
    }
    


}

function evetci()
{
    evetsayacı++;

    if(evetsayacı == 1)
    {
        const soru = document.querySelector(".soru");
        soru.innerHTML = "GERÇEKTEN Mİ?";
    }

    if(evetsayacı == 2)
    {
        const soru = document.querySelector(".soru");
        soru.innerHTML = "ÇOK MU?";
    }

    if(evetsayacı==3)
    {
        const soru = document.querySelector(".soru");
        soru.innerHTML = "ÇOOOOOOK MU?";
    }

    if(evetsayacı==4)
    {
        sonraki();
    }

    if(evetsayacı==5)
    {
        document.body.innerHTML= `<img src="mutlu.jpg">`;
    }

    
}

function sonraki()
{
    
    document.body.innerHTML = `<div class="foto" style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
        <div></div>
        <img src="${fotonum}.gif">
        <div></div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 110px 1fr;">
    <div></div>
    <button onclick="sonraki()" class="evet">😍</button>
    <div></div>
    </div>`;

    fotonum++;

    if(fotonum==13)
    {
        document.body.innerHTML = `<div class="foto" style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
        <div></div>
        <img style="width:500px" src="yatak.jpg">
        <div></div>
    </div>
    <p class="soru">ne dersin?</p>
    <div class="tuslar">
        <div></div>
        <button class="evet" onclick="evetci()">evet</button>
        <div></div>
        <button class="hayır" onclick="hayırcı()">hayır</button>
        <div></div>
    </div>`;
    }
    
}

