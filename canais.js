const canais = [
{
    categoria: "REALITY SHOW",
    canais: [
        { name: "▶ BBB | ACOMPANHE A CASA 1", logo: "logos/bbb.png", op1: "http://cdn4k.vip//live/71717190/90717171/256345.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/256344.m3u8", op3: "URL_BBB_CASA1_OP3.m3u8" },
        { name: "▶ BBB | ACOMPANHE A CASA 2", logo: "logos/bbb.png", op1: "http://cdn4k.vip//live/71717190/90717171/256347.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/256346.m3u8", op3: "URL_BBB_CASA2_OP3.m3u8" },
        { name: "▶ BBB | MOSAICO", logo: "logos/bbb.png", op1: "http://cdn4k.vip//live/71717190/90717171/256349.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/256348.m3u8", op3: "URL_BBB_MOSAICO_OP3.m3u8" }
    ]
},
{
    categoria: "ESPORTES",
    canais: [
        { name: "▶ SPORTV 1", logo: "logos/sportv.png", op1: "http://cdn4k.vip//live/71717190/90717171/34875.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6882.m3u8", op3: "URL_SPORTV1_OP3.m3u8" },
        { name: "▶ SPORTV 2", logo: "logos/sportv.png", op1: "http://cdn4k.vip//live/71717190/90717171/6480.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6872.m3u8", op3: "URL_SPORTV2_OP3.m3u8" },
        { name: "▶ PREMIERE CLUBES", logo: "logos/premiere.png", op1: "http://cdn4k.vip//live/71717190/90717171/6900.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6513.m3u8", op3: "URL_PREMIERE_CLUBES_OP3.m3u8" },
        { name: "▶ PREMIERE 2", logo: "logos/premiere.png", op1: "http://cdn4k.vip//live/71717190/90717171/6512.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6514.m3u8", op3: "URL_PREMIERE2_OP3.m3u8" },
        { name: "▶ PREMIERE 3", logo: "logos/premiere.png", op1: "http://cdn4k.vip//live/71717190/90717171/6511.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6895.m3u8", op3: "URL_PREMIERE3_OP3.m3u8" },
        { name: "▶ ESPN", logo: "logos/espn.png", op1: "http://cdn4k.vip//live/71717190/90717171/6589.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6887.m3u8", op3: "URL_ESPN1_OP3.m3u8" },
        { name: "▶ ESPN 2", logo: "logos/espn2.png", op1: "http://cdn4k.vip//live/71717190/90717171/6587.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/6591.m3u8", op3: "URL_ESPN2_OP3.m3u8" },
        { name: "▶ ESPN 3", logo: "logos/espn3.png", op1: "http://cdn4k.vip//live/71717190/90717171/10824.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/26156.m3u8", op3: "URL_ESPN3_OP3.m3u8" },
        { name: "▶ ESPN 4", logo: "logos/espn4.png", op1: "http://cdn4k.vip//live/71717190/90717171/6577.m3u8", op2: "http://cdn4k.vip//live/71717190/90717171/10809.m3u8", op3: "URL_ESPN4_OP3.m3u8" }
    ]
},
{
    categoria: "ESPORTES PPV",
    canais: [
        { name: "▶ DISNEY+ 1", logo: "logos/disney.png", op1: "", op2: "URL_DISNEY1_OP2.m3u8", op3: "URL_DISNEY1_OP3.m3u8" },
        { name: "▶ DISNEY+ 2", logo: "logos/disney.png", op1: "URL_DISNEY2_OP1.m3u8", op2: "URL_DISNEY2_OP2.m3u8", op3: "URL_DISNEY2_OP3.m3u8" },
        { name: "▶ DISNEY+ 3", logo: "logos/disney.png", op1: "URL_DISNEY3_OP1.m3u8", op2: "URL_DISNEY3_OP2.m3u8", op3: "URL_DISNEY3_OP3.m3u8" },
        { name: "▶ DISNEY+ 4", logo: "logos/disney.png", op1: "URL_DISNEY4_OP1.m3u8", op2: "URL_DISNEY4_OP2.m3u8", op3: "URL_DISNEY4_OP3.m3u8" },
        { name: "▶ HBO MAX 1", logo: "logos/hbomax.png", op1: "URL_HBO1_OP1.m3u8", op2: "URL_HBO1_OP2.m3u8", op3: "URL_HBO1_OP3.m3u8" },
        { name: "▶ HBO MAX 2", logo: "logos/hbomax.png", op1: "URL_HBO2_OP1.m3u8", op2: "URL_HBO2_OP2.m3u8", op3: "URL_HBO2_OP3.m3u8" },
        { name: "▶ HBO MAX 3", logo: "logos/hbomax.png", op1: "URL_HBO3_OP1.m3u8", op2: "URL_HBO3_OP2.m3u8", op3: "URL_HBO3_OP3.m3u8" }
    ]
}
];

const container = document.getElementById("channels-container");

canais.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "category";

    catDiv.innerHTML = `<div class="category-title">${cat.categoria}</div>`;

    cat.canais.forEach(ch => {
        const chDiv = document.createElement("div");
        chDiv.className = "channel";
        chDiv.dataset.name = ch.name;
        chDiv.dataset.op1 = ch.op1;
        chDiv.dataset.op2 = ch.op2;
        chDiv.dataset.op3 = ch.op3;

        chDiv.innerHTML = `
            <img src="${ch.logo}" alt="${ch.name}" loading="lazy">
            <span class="channel-name">${ch.name}</span>
        `;

        catDiv.appendChild(chDiv);
    });

    container.appendChild(catDiv);
});