const slotGames = [
  {
    img: "allImages/slots-img/1.png",
    provider: "images/pragmatic.svg",
    title: "Azlec Bonaanza",
  },
  {
    img: "allImages/slots-img/2.png",
    provider: "images/pragmatic.svg",
    title: "John Hunter and the Book of Tut",
  },
  {
    img: "allImages/slots-img/4.png",
    provider: "images/pragmatic.svg",
    title: "Dance party",
  },
  {
    img: "allImages/slots-img/5.png",
    provider: "images/pragmatic.webp",
    title: "Fruit party",
  },
  {
    img: "allImages/slots-img/6.png",
    provider: "images/pragmatic.svg",
    title: "Fruit Rainbow",
  },
  {
    img: "allImages/slots-img/8.png",
    provider: "images/pragmatic.svg",
    title: "Great Rhino Megaways",
  },
  {
    img: "allImages/slots-img/9.png",
    provider: "images/pragmatic.svg",
    title: "Hot To Burn",
  },
  {
    img: "allImages/slots-img/10.png",
    provider: "images/pragmatic.svg",
    title: "Lucky Dragon Ball",
  },
  {
    img: "allImages/slots-img/11.png",
    provider: "images/pragmatic.webp",
    title: "Master Joker",
  },
  {
    img: "allImages/slots-img/12.png",
    provider: "images/pragmatic.svg",
    title: "The Wild Machine",
  },
  {
    img: "allImages/slots-img/13.png",
    provider: "images/pragmatic.svg",
    title: "Three Star Fortune",
  },
  {
    img: "allImages/slots-img/14.png",
    provider: "images/pragmatic.svg",
    title: "Wild West Gold",
  },
  {
    img: "allImages/slots-img/15.png",
    provider: "images/pragmatic.svg",
    title: "Mysterious",
  },
  {
    img: "allImages/slots-img/16.png",
    provider: "images/pragmatic.svg",
    title: "Super 7s",
  },
  {
    img: "allImages/slots-img/17.png",
    provider: "images/pragmatic.svg",
    title: "Super Andar Bahar",
  },
  {
    img: "allImages/slots-img/18.png",
    provider: "images/pragmatic.svg",
    title: "Money House",
  },
  {
    img: "allImages/slots-img/19.png",
    provider: "images/pragmatic.svg",
    title: "Hercules and Pegasus",
  },
  {
    img: "allImages/slots-img/20.png",
    provider: "images/pragmatic.svg",
    title: "Aladdin and the sorcerer",
  },
  {
    img: "allImages/slots-img/21.png",
    provider: "images/pragmatic.svg",
    title: "Honey Honey Honey",
  },
  {
    img: "allImages/slots-img/22.png",
    provider: "images/pragmatic.svg",
    title: "Tree of Riches",
  },
  {
    img: "allImages/slots-img/23.png",
    provider: "images/pragmatic.svg",
    title: "John Hunter and the tomb of the Scrab Queen",
  },
  {
    img: "allImages/slots-img/24.png",
    provider: "images/pragmatic.svg",
    title: "5 Lions Gold",
  },
  {
    img: "allImages/slots-img/25.png",
    provider: "images/pragmatic.svg",
    title: "Super Joker",
  },
  {
    img: "allImages/slots-img/26.png",
    provider: "images/pragmatic.svg",
    title: "Money warrior",
  },
  {
    img: "allImages/slots-img/27.png",
    provider: "images/pragmatic.svg",
    title: "Treasure Horse",
  },
  {
    img: "allImages/slots-img/28.png",
    provider: "images/pragmatic.svg",
    title: "Pirate Gold",
  },
  {
    img: "allImages/slots-img/29.png",
    provider: "images/pragmatic.svg",
    title: "Gold Rush",
  },
  {
    img: "allImages/slots-img/30.png",
    provider: "images/pragmatic.svg",
    title: "Ancient Egypt Classic",
  },
  {
    img: "allImages/slots-img/31.png",
    provider: "images/pragmatic.svg",
    title: "The Dog House",
  },
  {
    img: "allImages/slots-img/32.png",
    provider: "images/pragmatic.svg",
    title: "John Hunter and the Secrets of Da Vincis Treasure",
  },
];

const imageGrid1 = document.getElementById("imageGrid1");

slotGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">PP</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid1.appendChild(item);
});

const habaneroGames = [
  { img: "allImages/habenero-img/1.png", provider: "images/habanero.svg", title: "Scopa" },
  { img: "allImages/habenero-img/2.png", provider: "images/habanero.svg", title: "Techno Tumble" },
  { img: "allImages/habenero-img/3.png", provider: "images/habanero.svg" , title: "Knockout Football Rush"},
  { img: "allImages/habenero-img/4.png", provider: "images/habanero.webp" , title: "Loony Blox"},
  { img: "allImages/habenero-img/5.png", provider: "images/habanero.svg" , title: "Fa Cai Shen Deluxe"},
  { img: "allImages/habenero-img/6.png", provider: "images/habanero.svg" , title: "Naughty Santa"},
  { img: "allImages/habenero-img/7.png", provider: "images/habanero.svg" , title: "Lucky Fortune Cat"},
  { img: "allImages/habenero-img/8.png", provider: "images/habanero.svg" , title: "Wizards Want War"},
  { img: "allImages/habenero-img/9.png", provider: "images/habanero.webp", title: "Hot Hot Halloween" },
  { img: "allImages/habenero-img/10.png", provider: "images/habanero.svg" , title: "Colossal Gems"},
  { img: "allImages/habenero-img/11.png", provider: "images/habanero.svg" , title: "Lucky Lucky"},
  { img: "allImages/habenero-img/12.png", provider: "images/habanero.svg", title: "Wild trucks" },
  { img: "allImages/habenero-img/13.png", provider: "images/habanero.svg" , title: "Mount Mazuma"},
  { img: "allImages/habenero-img/14.png", provider: "images/habanero.svg" , title: "5 lucky Lions"},
  { img: "allImages/habenero-img/15.png", provider: "images/habanero.svg" , title: "Hot Hot Fruit"},
  { img: "allImages/habenero-img/16.png", provider: "images/habanero.svg" , title: "Happiest christmas Tree"},
  { img: "allImages/habenero-img/17.png", provider: "images/habanero.svg" , title: "Pumpkin Patch"},
  { img: "allImages/habenero-img/18.png", provider: "images/habanero.svg" , title: "Jump!"},
  { img: "allImages/habenero-img/19.png", provider: "images/habanero.svg" , title: "Egyptian Dreams Deluxe"},
  { img: "allImages/habenero-img/20.png", provider: "images/habanero.svg" , title: "Knockout football"},
  { img: "allImages/habenero-img/21.png", provider: "images/habanero.svg" , title: "Fortune Dogs"},
  { img: "allImages/habenero-img/22.png", provider: "images/habanero.svg" , title: "Ways of Fortune"},
  { img: "allImages/habenero-img/23.png", provider: "images/habanero.svg" , title: "Prestol"},
  { img: "allImages/habenero-img/24.png", provider: "images/habanero.svg" , title: "Santas Village"},
  { img: "allImages/habenero-img/25.png", provider: "images/habanero.svg" , title: "Magic Oak"},
  { img: "allImages/habenero-img/26.png", provider: "images/habanero.svg" , title: "Rolling Roger"},
  { img: "allImages/habenero-img/27.png", provider: "images/habanero.svg" , title: "Four Divine Beasts"},
  { img: "allImages/habenero-img/28.png", provider: "images/habanero.svg" , title: "London Hunter"},
  { img: "allImages/habenero-img/29.png", provider: "images/habanero.svg" , title: "Cake Valley"},
  { img: "allImages/habenero-img/30.png", provider: "images/habanero.svg" , title: "5 Mariachis"},
  { img: "allImages/habenero-img/31.png", provider: "images/habanero.svg" , title: "Koi Gate"},
  { img: "allImages/habenero-img/32.png", provider: "images/habanero.svg" , title: "Nuwa"},
  { img: "allImages/habenero-img/33.png", provider: "images/habanero.svg" , title: "Scruffy Scallywags"},
  { img: "allImages/habenero-img/34.png", provider: "images/habanero.svg" , title: "Oceans Call"},
  { img: "allImages/habenero-img/35.png", provider: "images/habanero.svg" , title: "Panda Panda"},
  { img: "allImages/habenero-img/36.png", provider: "images/habanero.svg" , title: "The Dead Escape"},
  { img: "allImages/habenero-img/37.png", provider: "images/habanero.svg" , title: "Bird of thunder"},
  { img: "allImages/habenero-img/38.png", provider: "images/habanero.svg" , title: "Fenghuang"},
  { img: "allImages/habenero-img/39.png", provider: "images/habanero.svg" , title: "Fire Rooster"},
  { img: "allImages/habenero-img/40.png", provider: "images/habanero.svg" , title: "12 Zodiacs"},
];

const imageGrid2 = document.getElementById("imageGrid2");

habaneroGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Habanero</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid2.appendChild(item);
});

const elysiumGames = [
  { img: "allImages/habenero-img/466.png", provider: "images/elysium.png", title:"Supa Crew" },
  { img: "allImages/habenero-img/479.png", provider: "images/elysium.png", title:"Spirit Hunters"},
  { img: "allImages/habenero-img/480.png", provider: "images/elysium.png", title:"Fox Tale"},
  { img: "allImages/habenero-img/485.png", provider: "images/elysium.png", title:"Dragon Roulette" },
  { img: "allImages/habenero-img/486.png", provider: "images/elysium.png", title:"Wizardz World" },
  { img: "allImages/habenero-img/495.png", provider: "images/elysium.png", title:"Battle of Myths"},
  { img: "allImages/habenero-img/504.png", provider: "images/elysium.png", title:"Clash of Heroes"},
  { img: "allImages/habenero-img/515.png", provider: "images/elysium.png", title:"Sword King" },
  { img: "allImages/habenero-img/516.png", provider: "images/elysium.png", title:"Elysium VIP"},
  { img: "allImages/habenero-img/517.png", provider: "images/elysium.png", title:"Law of Gilgamesh" },
  { img: "allImages/habenero-img/526.png", provider: "images/elysium.png", title:"Tipsy Charms" },
  { img: "allImages/habenero-img/531.png", provider: "images/elysium.png", title:"Lolly Land" },

];

const imageGrid3 = document.getElementById("imageGrid3");

elysiumGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Elysium</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid3.appendChild(item);
});

const spadeGames = [
  { img: "allImages/spadeGaming-img/1.png", provider: "images/spadegaming.svg",title:"Mega 7" },
  { img: "allImages/spadeGaming-img/2.png", provider: "images/spadegaming.svg",title:"Jokers Treasure" },
  { img: "allImages/spadeGaming-img/3.png", provider: "images/spadegaming.svg" ,title:"Double Flame Blazing"},
  { img: "allImages/spadeGaming-img/4.png", provider: "images/spadegaming.svg" ,title:"Book of Myth"},
  { img: "allImages/spadeGaming-img/5.png", provider: "images/spadegaming.svg" ,title:"Money Mouse"},
  { img: "allImages/spadeGaming-img/7.png", provider: "images/spadegaming.svg" ,title:"888"},
  { img: "allImages/spadeGaming-img/8.png", provider: "images/spadegaming.svg" ,title:""},
  { img: "allImages/spadeGaming-img/9.png", provider: "images/spadegaming.svg" ,title:"Three Lucky Stars"},
  { img: "allImages/spadeGaming-img/10.png", provider: "images/spadegaming.svg" ,title:"Heroes"},
  { img: "allImages/spadeGaming-img/11.png", provider: "images/spadegaming.svg" ,title:"Sweet Bakery"},
  { img: "allImages/spadeGaming-img/12.png", provider: "images/spadegaming.svg" ,title:"Dancing Fever"},
  { img: "allImages/spadeGaming-img/13.png", provider: "images/spadegaming.svg" ,title:"Magical Lamp"},
  { img: "allImages/spadeGaming-img/14.png", provider: "images/spadegaming.svg",title:"Triple Panda" },
  { img: "allImages/spadeGaming-img/15.png", provider: "images/spadegaming.svg",title:"Gold Panther" },
  { img: "allImages/spadeGaming-img/17.png", provider: "images/spadegaming.svg",title:"Mr Chu Tycoon" },
  { img: "allImages/spadeGaming-img/18.png", provider: "images/spadegaming.svg",title:"Brothers Kingdom" },
  { img: "allImages/spadeGaming-img/19.png", provider: "images/spadegaming.svg",title:"Prosparity Gods" },
  { img: "allImages/spadeGaming-img/20.png", provider: "images/spadegaming.svg",title:"Wow prosperity" },
  { img: "allImages/spadeGaming-img/21.png", provider: "images/spadegaming.svg" ,title:"Golden fist"},
  { img: "allImages/spadeGaming-img/22.png", provider: "images/spadegaming.svg",title:"Candy Pop" },
  { img: "allImages/spadeGaming-img/23.png", provider: "images/spadegaming.svg",title:"FaFaFa2" },
  { img: "allImages/spadeGaming-img/25.png", provider: "images/spadegaming.svg",title:"Princess Wang" },
  { img: "allImages/spadeGaming-img/26.png", provider: "images/spadegaming.svg",title:"First Love" },
  { img: "allImages/spadeGaming-img/29.png", provider: "images/spadegaming.svg",title:"Golden Monkey" },
  { img: "allImages/spadeGaming-img/30.png", provider: "images/spadegaming.svg",title:"Jungle King" },
  { img: "allImages/spadeGaming-img/31.png", provider: "images/spadegaming.svg",title:"Fist of Gold" },
  { img: "allImages/spadeGaming-img/32.png", provider: "images/spadegaming.svg" ,title:"Tiger Warrier"},
  { img: "allImages/spadeGaming-img/33.png", provider: "images/spadegaming.svg" ,title:"Ho Yeah Monkey"},
  { img: "allImages/spadeGaming-img/34.png", provider: "images/spadegaming.svg" ,title:"Lucky Feng Shui"},
  { img: "allImages/spadeGaming-img/35.png", provider: "images/spadegaming.svg" ,title:"Sea Emperor"},
  { img: "allImages/spadeGaming-img/36.png", provider: "images/spadegaming.svg" ,title:"ZEUS"},
  { img: "allImages/spadeGaming-img/38.png", provider: "images/spadegaming.svg" ,title:"Golden Lotus SE"},
  { img: "allImages/spadeGaming-img/39.png", provider: "images/spadegaming.svg" ,title:"Golden Chiken"},
  { img: "allImages/spadeGaming-img/41.png", provider: "images/spadegaming.svg" ,title:"5 Fortune Dragons"},
  { img: "allImages/spadeGaming-img/42.png", provider: "images/spadegaming.svg",title:"Cai Shen 888" },
  { img: "allImages/spadeGaming-img/43.png", provider: "images/spadegaming.svg",title:"Iceland SA" },
  { img: "allImages/spadeGaming-img/44.png", provider: "images/spadegaming.svg",title:"Lucky Koi" },
];

const imageGrid4 = document.getElementById("imageGrid4");

spadeGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Spade</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid4.appendChild(item);
});

const playGames = [
  { img: "allImages/play-img/1.png", provider: "images/playNgo.svg", title: "Three Hand Holdem"},
  { img: "allImages/play-img/2.png", provider: "images/playNgo.svg", title: "5x Magic"},
  { img: "allImages/play-img/3.png", provider: "images/playNgo.svg", title: "Seven Sins" },
  { img: "allImages/play-img/4.png", provider: "images/playNgo.svg", title: "Ace of Spades" },
  { img: "allImages/play-img/5.png", provider: "images/playNgo.svg", title: "Agent Destiny" },
  { img: "allImages/play-img/6.png", provider: "images/playNgo.svg", title: "Ankh of Anubis" },
  { img: "allImages/play-img/7.png", provider: "images/playNgo.svg", title: "Annihilator" },
  { img: "allImages/play-img/8.png", provider: "images/playNgo.svg", title: "Aztec Idols" },
  { img: "allImages/play-img/9.png", provider: "images/playNgo.svg", title: "Aztec Warrier Princess" },
  { img: "allImages/play-img/10.png", provider: "images/playNgo.svg", title: "Bakers Treat" },
  { img: "allImages/play-img/11.png", provider: "images/playNgo.svg", title: "Banana Rock" },
  { img: "allImages/play-img/12.png", provider: "images/playNgo.svg", title: "Battle Royal" },
  { img: "allImages/play-img/13.png", provider: "images/playNgo.svg", title: "Bell of Fortune" },
  { img: "allImages/play-img/14.png", provider: "images/playNgo.svg", title: "Big Win 777" },
  { img: "allImages/play-img/15.png", provider: "images/playNgo.svg", title: "Big Win Cat" },
  { img: "allImages/play-img/16.png", provider: "images/playNgo.svg", title: "Black Mamba" },
  { img: "allImages/play-img/17.png", provider: "images/playNgo.svg", title: "Blackjack MH" },
  { img: "allImages/play-img/18.png", provider: "images/playNgo.svg", title: "Blinged" },
  { img: "allImages/play-img/19.png", provider: "images/playNgo.svg", title: "Book of Dead" },
  { img: "allImages/play-img/21.png", provider: "images/playNgo.svg", title: "Cash Pump" },
  { img: "allImages/play-img/22.png", provider: "images/playNgo.svg", title: "cash Vandal" },
  { img: "allImages/play-img/24.png", provider: "images/playNgo.svg", title: "Casino Stud Poker" },
  { img: "allImages/play-img/25.png", provider: "images/playNgo.svg", title: "Cat Wlide and the Doom of Dead" },
  { img: "allImages/play-img/26.png", provider: "images/playNgo.svg", title: "Cats and Cash" },
  { img: "allImages/play-img/27.png", provider: "images/playNgo.svg", title: "charlie Chance in Hell to pay" },
  { img: "allImages/play-img/28.png", provider: "images/playNgo.svg", title: "Chinese New Year" },
  { img: "allImages/play-img/29.png", provider: "images/playNgo.svg", title: "Chronos Joker" },
  { img: "allImages/play-img/30.png", provider: "images/playNgo.svg", title: "Cloud Quest" },
  { img: "allImages/play-img/31.png", provider: "images/playNgo.svg", title: "Contact" },
  { img: "allImages/play-img/32.png", provider: "images/playNgo.svg", title: "Cops and Robbers" },
  { img: "allImages/play-img/33.png", provider: "images/playNgo.svg", title: "Coywolf Cash" },
  { img: "allImages/play-img/34.png", provider: "images/playNgo.svg", title: "Crazy Cows" },
  { img: "allImages/play-img/35.png", provider: "images/playNgo.svg", title: "Crystal Sun" },
  { img: "allImages/play-img/36.png", provider: "images/playNgo.svg", title: "Dawn of Egypt" },
  { img: "allImages/play-img/37.png", provider: "images/playNgo.svg", title: "Demon" },
  { img: "allImages/play-img/38.png", provider: "images/playNgo.svg", title: "Deuces Wild MH" },
  { img: "allImages/play-img/39.png", provider: "images/playNgo.svg", title: "Diamond Vortex" },
  { img: "allImages/play-img/40.png", provider: "images/playNgo.svg", title: "Divine Showdown" },
];

const imageGrid5 = document.getElementById("imageGrid5");

playGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Play'N Go</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid5.appendChild(item);
});

const worldMatch = [
  { img: "allImages/worldGames-img/1.png", provider: "images/A-WM_CasinoGameSuite.svg", title: "Goodluck Hot Pot" },
  { img: "allImages/worldGames-img/2.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Allen Domination"},
  { img: "allImages/worldGames-img/3.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Big Grizzly"},
  { img: "allImages/worldGames-img/4.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Sahara"},
  { img: "allImages/worldGames-img/5.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Songkran Holidays"},
  { img: "allImages/worldGames-img/6.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "King Neptun"},
  { img: "allImages/worldGames-img/7.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Space Blast"},
  { img: "allImages/worldGames-img/8.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Golden Pig"},
  { img: "allImages/worldGames-img/9.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Golden Tree"},
  { img: "allImages/worldGames-img/10.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "King's Valley"},
  { img: "allImages/worldGames-img/11.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Four God Beasts"},
  { img: "allImages/worldGames-img/13.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Fa Fa Spin"},
  { img: "allImages/worldGames-img/14.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Jolly Roger"},
  { img: "allImages/worldGames-img/16.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Wily Fox"},
  { img: "allImages/worldGames-img/17.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Dragon Queen"},
  { img: "allImages/worldGames-img/18.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Book of Pharaon"},
  { img: "allImages/worldGames-img/19.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Alchemist"},
  { img: "allImages/worldGames-img/20.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Land of Trolls"},
  { img: "allImages/worldGames-img/21.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Sultan"},
  { img: "allImages/worldGames-img/22.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "the Forbidden city HD"},
  { img: "allImages/worldGames-img/23.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "SugaRush"},
  { img: "allImages/worldGames-img/24.png", provider: "images/A-WM_CasinoGameSuite.svg", title: "Disco Baby" },
  { img: "allImages/worldGames-img/25.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Bandit's bounty"},
  { img: "allImages/worldGames-img/26.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Maximum"},
  { img: "allImages/worldGames-img/27.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Funny Monkey"},
  { img: "allImages/worldGames-img/28.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Tuan Yuan Panda"},
  { img: "allImages/worldGames-img/29.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Royal Key"},
  { img: "allImages/worldGames-img/30.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Archibald Maya"},
  { img: "allImages/worldGames-img/31.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Archibald Africa"},
  { img: "allImages/worldGames-img/32.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Archibald Orient"},
  { img: "allImages/worldGames-img/33.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Fruits Evolution"},
  { img: "allImages/worldGames-img/34.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Magic Frog"},
  { img: "allImages/worldGames-img/35.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Indian Spirit"},
  { img: "allImages/worldGames-img/36.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Atlantis"},
  { img: "allImages/worldGames-img/37.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Space Monster"},
  { img: "allImages/worldGames-img/38.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Monte Carlo Jewels"},
  { img: "allImages/worldGames-img/39.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Banana King"},
  { img: "allImages/worldGames-img/40.png", provider: "images/A-WM_CasinoGameSuite.svg" , title: "Dragon's Reels"},
];

const imageGrid6 = document.getElementById("imageGrid6");

worldMatch.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">World</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid6.appendChild(item);
});

const microGames = [
  { img: "allImages/microGames-img/31.png", provider: "images/microgaming.svg",title:"Fishin' Christmas Pots of Gold" },
  { img: "allImages/microGames-img/32.png", provider: "images/microgaming.svg",title:"Alchemy Fortunes" },
  { img: "allImages/microGames-img/33.png", provider: "images/microgaming.svg" ,title:"4 Diamond Blues Megaways"},
  { img: "allImages/microGames-img/34.png", provider: "images/microgaming.svg" ,title:"Almighty Zeus Wilds"},
  { img: "allImages/microGames-img/35.png", provider: "images/microgaming.svg" ,title:"Gold Collector"},
  { img: "allImages/microGames-img/36.png", provider: "images/microgaming.svg" ,title:"Thunderstruck Stormchaser"},
  { img: "allImages/microGames-img/37.png", provider: "images/microgaming.svg" ,title:"WWE Legends"},
  { img: "allImages/microGames-img/38.png", provider: "images/microgaming.svg" ,title:"Asian Beauty"},
  { img: "allImages/microGames-img/39.png", provider: "images/microgaming.svg" ,title:"777 Surge"},
  { img: "allImages/microGames-img/40.png", provider: "images/microgaming.svg" ,title:"Adventures of Doubloon Island"},
  { img: "allImages/microGames-img/41.png", provider: "images/microgaming.svg" ,title:"Kings of Crystals"},
  { img: "allImages/microGames-img/42.png", provider: "images/microgaming.svg" ,title:"Fishin' pots of Gold"},
  { img: "allImages/microGames-img/43.png", provider: "images/microgaming.svg" ,title:"Dr Watts Up"},
  { img: "allImages/microGames-img/44.png", provider: "images/microgaming.svg" ,title:"Mining pots of Gold"},
  { img: "allImages/microGames-img/45.png", provider: "images/microgaming.svg" ,title:"Crazy Rich Tigers"},
  { img: "allImages/microGames-img/46.png", provider: "images/microgaming.svg" ,title:"Dog Days"},
  { img: "allImages/microGames-img/47.png", provider: "images/microgaming.svg" ,title:"Gold Biltz extreme"},
  { img: "allImages/microGames-img/48.png", provider: "images/microgaming.svg" ,title:"Golds and Pyramids Power Combo"},
  { img: "allImages/microGames-img/49.png", provider: "images/microgaming.svg" ,title:"Dragon's Loot Link&Win 4Tune"},
  { img: "allImages/microGames-img/50.png", provider: "images/microgaming.svg" ,title:"Playboy"},
  { img: "allImages/microGames-img/51.png", provider: "images/microgaming.svg" ,title:"Playboy Fortunes"},
  { img: "allImages/microGames-img/52.png", provider: "images/microgaming.svg" ,title:"Beautiful Bones"},
  { img: "allImages/microGames-img/53.png", provider: "images/microgaming.svg" ,title:"777 Royal Wheel"},
  { img: "allImages/microGames-img/54.png", provider: "images/microgaming.svg" ,title:"9 Enchanted Beans"},
  { img: "allImages/microGames-img/55.png", provider: "images/microgaming.svg" ,title:"5 Reel Drive"},
  { img: "allImages/microGames-img/56.png", provider: "images/microgaming.svg" ,title:"Break away Max"},
  { img: "allImages/microGames-img/57.png", provider: "images/microgaming.svg" ,title:"9 Masks of Fire"},
  { img: "allImages/microGames-img/58.png", provider: "images/microgaming.svg" ,title:"Centre Court"},
  { img: "allImages/microGames-img/60.png", provider: "images/microgaming.svg" ,title:"treasure Palace"},
  { img: "allImages/microGames-img/61.png", provider: "images/microgaming.svg" ,title:"Tiger's Eye"},
  { img: "allImages/microGames-img/62.png", provider: "images/microgaming.svg" ,title:"Golden princess"},
  { img: "allImages/microGames-img/63.png", provider: "images/microgaming.svg" ,title:"High society"},
  { img: "allImages/microGames-img/65.png", provider: "images/microgaming.svg" ,title:"relic Seekers"},
  { img: "allImages/microGames-img/66.png", provider: "images/microgaming.svg" ,title:"Age of Discovery"},
  { img: "allImages/microGames-img/67.png", provider: "images/microgaming.svg" ,title:"Asgardian Fire"},
  { img: "allImages/microGames-img/68.png", provider: "images/microgaming.svg" ,title:"Queens of Ra"},
  { img: "allImages/microGames-img/69.png", provider: "images/microgaming.svg" ,title:"Tikl Tikl Boom"},
  { img: "allImages/microGames-img/70.png", provider: "images/microgaming.svg" ,title:"Unusual Suspects"},
];

const imageGrid7 = document.getElementById("imageGrid7");

microGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Micro Gaming</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid7.appendChild(item);
});

const oneTouchGames = [
  { img: "allImages/oneTouch-img/1.png", provider: "images/onetouch.svg", title:"Forgotten Pharaoh" },
  { img: "allImages/oneTouch-img/2.png", provider: "images/onetouch.svg" , title:"MVP Hoops"},
  { img: "allImages/oneTouch-img/3.png", provider: "images/onetouch.svg", title:"Wild Wild West 2120" },
  { img: "allImages/oneTouch-img/4.png", provider: "images/onetouch.svg" , title:"Flexing Dragons"},
  { img: "allImages/oneTouch-img/5.png", provider: "images/onetouch.svg" , title:"Tili Terror"},
  { img: "allImages/oneTouch-img/6.png", provider: "images/onetouch.svg" , title:"neon 2077"},
  { img: "allImages/oneTouch-img/7.png", provider: "images/onetouch.svg" , title:"Queens of Glory"},
  { img: "allImages/oneTouch-img/8.png", provider: "images/onetouch.svg" , title:"Wild Sorcery"},
  { img: "allImages/oneTouch-img/9.png", provider: "images/onetouch.svg" , title:"Travelling Treasures Brazil"},
  { img: "allImages/oneTouch-img/10.png", provider: "images/onetouch.svg" , title:"Blackjack Supreme-Multi Hand- Perfect Pairs"},
  { img: "allImages/oneTouch-img/11.png", provider: "images/onetouch.svg" , title:"Blackjack Supreme - Single Hand-Perfect Pairs"},
  { img: "allImages/oneTouch-img/12.png", provider: "images/onetouch.svg" , title:"Travelling Treasures India"},
  { img: "allImages/oneTouch-img/13.png", provider: "images/onetouch.svg" , title:"Dragon Tiger"},
  { img: "allImages/oneTouch-img/14.png", provider: "images/onetouch.svg" , title:"Bubbles Bonanza"},
  { img: "allImages/oneTouch-img/15.png", provider: "images/onetouch.svg" , title:"baccarat Supreme - No Commision"},
  { img: "allImages/oneTouch-img/16.png", provider: "images/onetouch.svg" , title:"Wacky wildlife"},
  { img: "allImages/oneTouch-img/17.png", provider: "images/onetouch.svg" , title:"Steam vault"},
  { img: "allImages/oneTouch-img/18.png", provider: "images/onetouch.svg" , title:"Fortune Miner"},
  { img: "allImages/oneTouch-img/19.png", provider: "images/onetouch.svg" , title:"Baccarat Supreme"},
  { img: "allImages/oneTouch-img/20.png", provider: "images/onetouch.svg" , title:"Golden Stripe"},
  { img: "allImages/oneTouch-img/21.png", provider: "images/onetouch.svg" , title:"Watford FC Slot"},
  { img: "allImages/oneTouch-img/22.png", provider: "images/onetouch.svg" , title:"Lucky Lion"},
  { img: "allImages/oneTouch-img/23.png", provider: "images/onetouch.svg" , title:"High Hand Hold'rem Poker"},
  { img: "allImages/oneTouch-img/24.png", provider: "images/onetouch.svg" , title:"In Between Poker"},
  { img: "allImages/oneTouch-img/25.png", provider: "images/onetouch.svg" , title:"Sumo Showdown"},
  { img: "allImages/oneTouch-img/26.png", provider: "images/onetouch.svg" , title:"Andar Bahar"},
  { img: "allImages/oneTouch-img/27.png", provider: "images/onetouch.svg" , title:"Julcy 7"},
  { img: "allImages/oneTouch-img/28.png", provider: "images/onetouch.svg" , title:"Wheel of Fortune"},
  { img: "allImages/oneTouch-img/29.png", provider: "images/onetouch.svg" , title:"Roulette"},
  { img: "allImages/oneTouch-img/30.png", provider: "images/onetouch.svg" , title:"Blackjack Classic-perfect Pairs"},
  { img: "allImages/oneTouch-img/31.png", provider: "images/onetouch.svg" , title:"Baccarat- No Commision"},
  { img: "allImages/oneTouch-img/32.png", provider: "images/onetouch.svg" , title:"Russian Poker"},
  { img: "allImages/oneTouch-img/33.png", provider: "images/onetouch.svg" , title:"Blackjack Classic"},
  { img: "allImages/oneTouch-img/34.png", provider: "images/onetouch.svg" , title:"Baccarat"},
  { img: "allImages/oneTouch-img/35.png", provider: "images/onetouch.svg" , title:"Hold'em Poker"},
  { img: "allImages/oneTouch-img/36.png", provider: "images/onetouch.svg" , title:"Sic Bo"},
  { img: "allImages/oneTouch-img/37.png", provider: "images/onetouch.svg" , title:"GenBaruto Battle"},
  { img: "allImages/oneTouch-img/38.png", provider: "images/onetouch.svg" , title:"Loot or Boot"},
  { img: "allImages/oneTouch-img/40.png", provider: "images/onetouch.svg" , title:"Pip's Quest"},
];

const imageGrid8 = document.getElementById("imageGrid8");

oneTouchGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">OneTouch</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid8.appendChild(item);
});

const redTigerGames = [
  { img: "allImages/redTiger-img/57.png", provider: "images/red tiger.svg", title:"Dragon's Luck" },
  { img: "allImages/redTiger-img/58.png", provider: "images/red tiger.svg", title:"Dragon's Luck Power Reels" },
  { img: "allImages/redTiger-img/59.png", provider: "images/red tiger.svg" , title:"Fortune House"},
  { img: "allImages/redTiger-img/60.png", provider: "images/red tiger.svg" , title:"Dragon's Fire"},
  { img: "allImages/redTiger-img/61.png", provider: "images/red tiger.svg" , title:"Magic Gate"},
  { img: "allImages/redTiger-img/62.png", provider: "images/red tiger.svg" , title:"Lucky Fortune Cat"},
  { img: "allImages/redTiger-img/63.png", provider: "images/red tiger.svg" , title:"Pirates' Plenty Battle of Gold"},
  { img: "allImages/redTiger-img/64.png", provider: "images/red tiger.svg" , title:"Dragons Luck Deluxe"},
  { img: "allImages/redTiger-img/65.png", provider: "images/red tiger.svg" , title:"10,001 Nights"},
  { img: "allImages/redTiger-img/66.png", provider: "images/red tiger.svg" , title:"Epic Journey"},
  { img: "allImages/redTiger-img/67.png", provider: "images/red tiger.svg" , title:"Golden Temple"},
  { img: "allImages/redTiger-img/68.png", provider: "images/red tiger.svg" , title:"Phoenix  Fire Power Reels"},
  { img: "allImages/redTiger-img/69.png", provider: "images/red tiger.svg" , title:"Chinese Treasures"},
  { img: "allImages/redTiger-img/70.png", provider: "images/red tiger.svg" , title:"Pirates'plenty"},
  { img: "allImages/redTiger-img/71.png", provider: "images/red tiger.svg" , title:"Golden Offer"},
  { img: "allImages/redTiger-img/72.png", provider: "images/red tiger.svg" , title:"RA's legend"},
  { img: "allImages/redTiger-img/73.png", provider: "images/red tiger.svg" , title:"Genzo's Quest Megaways"},
  { img: "allImages/redTiger-img/74.png", provider: "images/red tiger.svg" , title:"Rainbow Jackpots"},
  { img: "allImages/redTiger-img/75.png", provider: "images/red tiger.svg" , title:"Mega Pyramid"},
  { img: "allImages/redTiger-img/76.png", provider: "images/red tiger.svg" , title:"God of Wealth"},
  { img: "allImages/redTiger-img/88.png", provider: "images/red tiger.svg" , title:"777 Strike"},
  { img: "allImages/redTiger-img/89.png", provider: "images/red tiger.svg" , title:"Ancients Blessing"},
  { img: "allImages/redTiger-img/90.png", provider: "images/red tiger.svg" , title:"Aurum Codex"},
  { img: "allImages/redTiger-img/91.png", provider: "images/red tiger.svg" , title:"Betty,Boris and Boo"},
  { img: "allImages/redTiger-img/92.png", provider: "images/red tiger.svg" , title:"Baunty Rald"},
  { img: "allImages/redTiger-img/93.png", provider: "images/red tiger.svg" , title:"Cash Ultimate"},
  { img: "allImages/redTiger-img/94.png", provider: "images/red tiger.svg" , title:"Cash Volt"},
  { img: "allImages/redTiger-img/95.png", provider: "images/red tiger.svg" , title:"Diamond Biltz"},
  { img: "allImages/redTiger-img/96.png", provider: "images/red tiger.svg" , title:"Dragons Fire Megaways"},
  { img: "allImages/redTiger-img/97.png", provider: "images/red tiger.svg" , title:"Dynamite Riches"},
  { img: "allImages/redTiger-img/98.png", provider: "images/red tiger.svg" , title:"Five Star"},
  { img: "allImages/redTiger-img/99.png", provider: "images/red tiger.svg" , title:"Jack in a Pot"},
  { img: "allImages/redTiger-img/100.png", provider: "images/red tiger.svg" , title:"Jingle Bells"},
  { img: "allImages/redTiger-img/101.png", provider: "images/red tiger.svg" , title:"Mystery Reels"},
  { img: "allImages/redTiger-img/102.png", provider: "images/red tiger.svg" , title:"Piggy Riches Megaways"},
  { img: "allImages/redTiger-img/103.png", provider: "images/red tiger.svg" , title:"Rainbow Jackpots Power Lines"},
  { img: "allImages/redTiger-img/104.png", provider: "images/red tiger.svg" , title:"Reel Keeper"},
  { img: "allImages/redTiger-img/105.png", provider: "images/red tiger.svg" , title:"Reel king Mega"},
];

const imageGrid9 = document.getElementById("imageGrid9");

redTigerGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Red Tiger</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid9.appendChild(item);
});

const netentGames = [
  { img: "allImages/netent-img/36.png", provider: "images/netent.svg", title:"Blood  Suckers" },
  { img: "allImages/netent-img/37.png", provider: "images/netent.svg", title:"Dazzle Me" },
  { img: "allImages/netent-img/38.png", provider: "images/netent.svg" , title:"Dead or Alive 2"},
  { img: "allImages/netent-img/39.png", provider: "images/netent.svg" , title:"Divine Fortune Megaways"},
  { img: "allImages/netent-img/40.png", provider: "images/netent.svg" , title:"Genzo's Quest"},
  { img: "allImages/netent-img/41.png", provider: "images/netent.svg" , title:"Finn and the Swirly Spin"},
  { img: "allImages/netent-img/42.png", provider: "images/netent.svg" , title:"Fruit Shop"},
  { img: "allImages/netent-img/43.png", provider: "images/netent.svg" , title:"Guns N'Roses Video Slots"},
  { img: "allImages/netent-img/44.png", provider: "images/netent.svg" , title:"Jack Hammer"},
  { img: "allImages/netent-img/45.png", provider: "images/netent.svg" , title:"Jimi Hendrix Online Slot"},
  { img: "allImages/netent-img/46.png", provider: "images/netent.svg" , title:"Jumanji"},
  { img: "allImages/netent-img/47.png", provider: "images/netent.svg", title:"Motorhead Video Slot" },
  { img: "allImages/netent-img/48.png", provider: "images/netent.svg", title:"Narcos" },
  { img: "allImages/netent-img/49.png", provider: "images/netent.svg", title:"Ozzy Osbourne Video Slots" },
  { img: "allImages/netent-img/50.png", provider: "images/netent.svg" , title:"Pyramid: Quest for Immortality"},
  { img: "allImages/netent-img/51.png", provider: "images/netent.svg" , title:"Reel Rush"},
  { img: "allImages/netent-img/52.png", provider: "images/netent.svg" , title:"Starburst"},
  { img: "allImages/netent-img/53.png", provider: "images/netent.svg" , title:"Street Fighter li"},
  { img: "allImages/netent-img/54.png", provider: "images/netent.svg" , title:"turn your Fortune"},
  { img: "allImages/netent-img/55.png", provider: "images/netent.svg" , title:"Twin Spin"},
  { img: "allImages/netent-img/56.png", provider: "images/netent.svg" , title:"Twin Spin Megaways"},
  { img: "allImages/netent-img/78.png", provider: "images/netent.svg" , title:"Wild Wild West:The Great Train"},
  { img: "allImages/netent-img/79.png", provider: "images/netent.svg" , title:"Steam Tower"},
  { img: "allImages/netent-img/80.png", provider: "images/netent.svg" , title:"Piggy Riches"},
  { img: "allImages/netent-img/81.png", provider: "images/netent.svg" , title:"Jingle Spin"},
  { img: "allImages/netent-img/82.png", provider: "images/netent.svg" , title:"Jack and the Beanstalk Ramastered"},
  { img: "allImages/netent-img/83.png", provider: "images/netent.svg" , title:"Gordon Ramsay Hell's Kitchen"},
  { img: "allImages/netent-img/84.png", provider: "images/netent.svg" , title:"Fruit Shop Megaways"},
  { img: "allImages/netent-img/85.png", provider: "images/netent.svg" , title:"Dead or Alive"},
  { img: "allImages/netent-img/86.png", provider: "images/netent.svg" , title:"Aloha! ClusterPays"},
  { img: "allImages/netent-img/87.png", provider: "images/netent.svg" , title:"Aloha! Christmas"},
  { img: "allImages/netent-img/231.png", provider: "images/netent.svg" , title:"Asgardian Stones"},
  { img: "allImages/netent-img/234.png", provider: "images/netent.svg" , title:"Blood Suckers 2"},
  { img: "allImages/netent-img/235.png", provider: "images/netent.svg" , title:"Butterfly Staxx"},
  { img: "allImages/netent-img/236.png", provider: "images/netent.svg" , title:"Butterfly Staxx 2"},
  { img: "allImages/netent-img/237.png", provider: "images/netent.svg" , title:"Codex of Fortune"},
];

const imageGrid10 = document.getElementById("imageGrid10");

netentGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Evolution</div>
        </div>
      </div>
      <div class="subtext">Super Andar Bahar</div>
    `;
  imageGrid10.appendChild(item);
});

const drasilGames = [
  { img: "allImages/drasil-img/481.png", provider: "images/yggdrasil.svg", title:"Jokerizer"},
  { img: "allImages/drasil-img/482.png", provider: "images/yggdrasil.svg", title:"Fruitolds" },
  { img: "allImages/drasil-img/483.png", provider: "images/yggdrasil.svg" , title:"Dark Jocker Rizes"},
  { img: "allImages/drasil-img/484.png", provider: "images/yggdrasil.svg" , title:"Chibeasties"},
  { img: "allImages/drasil-img/485.png", provider: "images/yggdrasil.svg" , title:"Nirvana"},
  { img: "allImages/drasil-img/486.png", provider: "images/yggdrasil.svg" , title:"Incinerator"},
  { img: "allImages/drasil-img/487.png", provider: "images/yggdrasil.svg" , title:"Seasons"},
  { img: "allImages/drasil-img/488.png", provider: "images/yggdrasil.svg" , title:"Legend of the Golden Monkey"},
  { img: "allImages/drasil-img/489.png", provider: "images/yggdrasil.svg" , title:"Bicleta"},
  { img: "allImages/drasil-img/490.png", provider: "images/yggdrasil.svg" , title:"Big Blox"},
  { img: "allImages/drasil-img/491.png", provider: "images/yggdrasil.svg" , title:"Double Dragons"},
  { img: "allImages/drasil-img/492.png", provider: "images/yggdrasil.svg" , title:"Alchymedes"},
  { img: "allImages/drasil-img/493.png", provider: "images/yggdrasil.svg" , title:"Beauty and the Beast"},
  { img: "allImages/drasil-img/494.png", provider: "images/yggdrasil.svg" , title:"Jungle Books"},
  { img: "allImages/drasil-img/495.png", provider: "images/yggdrasil.svg" , title:"Lucha Maniacs"},
  { img: "allImages/drasil-img/496.png", provider: "images/yggdrasil.svg" , title:"TutsTwister"},
  { img: "allImages/drasil-img/497.png", provider: "images/yggdrasil.svg" , title:"Penguin City"},
  { img: "allImages/drasil-img/498.png", provider: "images/yggdrasil.svg" , title:"Wolf Hunters"},
  { img: "allImages/drasil-img/499.png", provider: "images/yggdrasil.svg" , title:"Dark Vortex"},
  { img: "allImages/drasil-img/500.png", provider: "images/yggdrasil.svg" , title:"Baron Samedi"},
  { img: "allImages/drasil-img/501.png", provider: "images/yggdrasil.svg" , title:"Time Travel Tigers"},
  { img: "allImages/drasil-img/502.png", provider: "images/yggdrasil.svg" , title:"Wilhelm Tell"},
  { img: "allImages/drasil-img/503.png", provider: "images/yggdrasil.svg" , title:"Age of Asgard"},
  { img: "allImages/drasil-img/504.png", provider: "images/yggdrasil.svg" , title:"Wild Robo Factory"},
  { img: "allImages/drasil-img/506.png", provider: "images/yggdrasil.svg" , title:"Yokozuna Clash"},
  { img: "allImages/drasil-img/507.png", provider: "images/yggdrasil.svg" , title:"Aldo's Journey"},
  { img: "allImages/drasil-img/508.png", provider: "images/yggdrasil.svg" , title:"temple Stacks: Splitz"},
  { img: "allImages/drasil-img/509.png", provider: "images/yggdrasil.svg" , title:"Brazil Bomba"},
  { img: "allImages/drasil-img/510.png", provider: "images/yggdrasil.svg" , title:"Neon Rush: Splitz"},
];

const imageGrid11 = document.getElementById("imageGrid11");

drasilGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">YGGDrasil</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid11.appendChild(item);
});

const bngGames = [
  { img: "allImages/bngo-img/35.png", provider: "images/bngcasino.svg", title:"Dragon Pearis"},
  { img: "allImages/bngo-img/41.png", provider: "images/bngcasino.svg", title:"Book of Sun Multichance" },
  { img: "allImages/bngo-img/49.png", provider: "images/bngcasino.svg" , title:"olympian Gods"},
  { img: "allImages/bngo-img/51.png", provider: "images/bngcasino.svg" , title:"Scarab Riches"},
  { img: "allImages/bngo-img/56.png", provider: "images/bngcasino.svg" , title:"Sun of Egypt"},
  { img: "allImages/bngo-img/58.png", provider: "images/bngcasino.svg" , title:"777 Gems ReSpin"},
  { img: "allImages/bngo-img/61.png", provider: "images/bngcasino.svg" , title:"Tiger's Gold"},
  { img: "allImages/bngo-img/64.png", provider: "images/bngcasino.svg" , title:"Great Panda"},
  { img: "allImages/bngo-img/66.png", provider: "images/bngcasino.svg" , title:"Moon Sisters"},
  { img: "allImages/bngo-img/67.png", provider: "images/bngcasino.svg" , title:"Book of Sun:Choice"},
  { img: "allImages/bngo-img/70.png", provider: "images/bngcasino.svg" , title:"Aztec Sun"},
  { img: "allImages/bngo-img/72.png", provider: "images/bngcasino.svg" , title:"Super Marble"},
  { img: "allImages/bngo-img/73.png", provider: "images/bngcasino.svg" , title:"Budha Fortune"},
  { img: "allImages/bngo-img/80.png", provider: "images/bngcasino.svg" , title:"15 Dragon Pearls"},
  { img: "allImages/bngo-img/83.png", provider: "images/bngcasino.svg" , title:"Thunder of Olympus"},
  { img: "allImages/bngo-img/84.png", provider: "images/bngcasino.svg" , title:"Scarab Temple"},
  { img: "allImages/bngo-img/85.png", provider: "images/bngcasino.svg" , title:"Sun of Egypt 2"},
  { img: "allImages/bngo-img/91.png", provider: "images/bngcasino.svg" , title:"Tiger Stone"},
  { img: "allImages/bngo-img/94.png", provider: "images/bngcasino.svg" , title:"3 Coins"},
  { img: "allImages/bngo-img/98.png", provider: "images/bngcasino.svg" , title:"Wolf Saga"},
  { img: "allImages/bngo-img/99.png", provider: "images/bngcasino.svg" , title:"Super Rich God:Hold and Win"},
  { img: "allImages/bngo-img/101.png", provider: "images/bngcasino.svg" , title:"Magic Apple"},
  { img: "allImages/bngo-img/110.png", provider: "images/bngcasino.svg" , title:"Hit the Gold"},
  { img: "allImages/bngo-img/113.png", provider: "images/bngcasino.svg" , title:"Scarab Boost"},
  { img: "allImages/bngo-img/115.png", provider: "images/bngcasino.svg" , title:"Wukong"},
  { img: "allImages/bngo-img/118.png", provider: "images/bngcasino.svg" , title:"3 Coins:Egypt"},
  { img: "allImages/bngo-img/119.png", provider: "images/bngcasino.svg" , title:"Wolf Night"},
  { img: "allImages/bngo-img/122.png", provider: "images/bngcasino.svg" , title:"Lord Fortune 2: Hold and Win"},
  { img: "allImages/bngo-img/123.png", provider: "images/bngcasino.svg" , title:"Tiger Jungle"},
  { img: "allImages/bngo-img/124.png", provider: "images/bngcasino.svg" , title:"Book of Wizard"},
];

const imageGrid12 = document.getElementById("imageGrid12");

bngGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">BNG</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid12.appendChild(item);
});

const playsonGames = [
  { img: "allImages/playSon-img/19.png", provider: "images/playson.svg", title:"Sevens & Fruits" },
  { img: "allImages/playSon-img/47.png", provider: "images/playson.svg", title:"Solar Queen"  },
  { img: "allImages/playSon-img/65.png", provider: "images/playson.svg" , title:"Solar Temple" },
  { img: "allImages/playSon-img/74.png", provider: "images/playson.svg" , title:"Buffalo Power:Hold and Win" },
  { img: "allImages/playSon-img/81.png", provider: "images/playson.svg" , title:"Diamond Wins: Hold and Win" },
  { img: "allImages/playSon-img/82.png", provider: "images/playson.svg" , title:"Book of Gold:Multichance" },
  { img: "allImages/playSon-img/90.png", provider: "images/playson.svg" , title:"5 Super Sevens & Fruits" },
  { img: "allImages/playSon-img/97.png", provider: "images/playson.svg" , title:"Divine Dragon:Hold and Win" },
  { img: "allImages/playSon-img/100.png", provider: "images/playson.svg" , title:"Wolf Power:Hold and Win" },
  { img: "allImages/playSon-img/117.png", provider: "images/playson.svg" , title:"Wagle Power:Hold and Win" },
  { img: "allImages/playSon-img/127.png", provider: "images/playson.svg" , title:"Buffalo Power: Christmas" },
  { img: "allImages/playSon-img/129.png", provider: "images/playson.svg" , title:"Royal Coins:Hold and Win" },
  { img: "allImages/playSon-img/139.png", provider: "images/playson.svg" , title:"Joker's Coins" },
  { img: "allImages/playSon-img/140.png", provider: "images/playson.svg" , title:"Diamond Fortunator" },
  { img: "allImages/playSon-img/143.png", provider: "images/playson.svg" , title:"Lion Gems:Hold and Win" },
  { img: "allImages/playSon-img/153.png", provider: "images/playson.svg" , title:"Luxor Gold" },
  { img: "allImages/playSon-img/154.png", provider: "images/playson.svg" , title:"Ruby Hit:Hold and Win" },
  { img: "allImages/playSon-img/160.png", provider: "images/playson.svg" , title:"Royal Coins 2:Hold and Win" },
  { img: "allImages/playSon-img/162.png", provider: "images/playson.svg" , title:"Treasures of Fire:Scatter Pays" },
  { img: "allImages/playSon-img/166.png", provider: "images/playson.svg" , title:"Mammoth Peak:Hold and Win" },
  { img: "allImages/playSon-img/168.png", provider: "images/playson.svg" , title:"Pirate Chest:Hold and Win" },
  { img: "allImages/playSon-img/174.png", provider: "images/playson.svg" , title:"Royal Joker:Hold and Win" },
  { img: "allImages/playSon-img/177.png", provider: "images/playson.svg" , title:"Coin Strike:Hold and Win" },
  { img: "allImages/playSon-img/180.png", provider: "images/playson.svg" , title:"Royal Fortunator:Hold and Win" },
  { img: "allImages/playSon-img/181.png", provider: "images/playson.svg" , title:"Buffalo Power 2:Hold and Win" },
  { img: "allImages/playSon-img/184.png", provider: "images/playson.svg" , title:"Empire Gold:Hold and Win" },
  { img: "allImages/playSon-img/186.png", provider: "images/playson.svg" , title:"3 Pots Riches:Hold and Win" },
  { img: "allImages/playSon-img/188.png", provider: "images/playson.svg" , title:"Wolf Land:Hold and Win" },
  { img: "allImages/playSon-img/190.png", provider: "images/playson.svg" , title:"Crown and Diamonds:Hold and Win" },
  { img: "allImages/playSon-img/193.png", provider: "images/playson.svg" , title:"Energy Coins:Hold and Win" },
];

const imageGrid13 = document.getElementById("imageGrid13");

playsonGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Playson</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid13.appendChild(item);
});

const playTechGames = [
  { img: "allImages/playTech-img/32.png", provider: "images/playtech.svg",title:"1000 Diamond Bet Roulette" },
  { img: "allImages/playTech-img/33.png", provider: "images/playtech.svg",title:"101 Roulette" },
  { img: "allImages/playTech-img/34.png", provider: "images/playtech.svg" ,title:"3 Card Brag"},
  { img: "allImages/playTech-img/35.png", provider: "images/playtech.svg",title:"7 e mezzo" },
  { img: "allImages/playTech-img/36.png", provider: "images/playtech.svg",title:"A Night Out" },
  { img: "allImages/playTech-img/39.png", provider: "images/playtech.svg" ,title:"Age of Egypt"},
  { img: "allImages/playTech-img/53.png", provider: "images/playtech.svg" ,title:"Amazon Wild"},
  { img: "allImages/playTech-img/54.png", provider: "images/playtech.svg" ,title:"Anaconda Wild"},
  { img: "allImages/playTech-img/55.png", provider: "images/playtech.svg" ,title:"Archer"},
  { img: "allImages/playTech-img/57.png", provider: "images/playtech.svg" ,title:"Asian Fantasy"},
  { img: "allImages/playTech-img/59.png", provider: "images/playtech.svg" ,title:"Atlantis Queen"},
  { img: "allImages/playTech-img/60.png", provider: "images/playtech.svg" ,title:"Baccarat"},
  { img: "allImages/playTech-img/61.png", provider: "images/playtech.svg" ,title:"Bal Shi"},
  { img: "allImages/playTech-img/64.png", provider: "images/playtech.svg" ,title:"Bermuda Triangle"},
  { img: "allImages/playTech-img/65.png", provider: "images/playtech.svg" ,title:"Berry berry Bonanza"},
  { img: "allImages/playTech-img/66.png", provider: "images/playtech.svg" ,title:"Big Shots"},
  { img: "allImages/playTech-img/67.png", provider: "images/playtech.svg" ,title:"Blackjack Surrender"},
  { img: "allImages/playTech-img/68.png", provider: "images/playtech.svg" ,title:"Bonus Bears"},
  { img: "allImages/playTech-img/70.png", provider: "images/playtech.svg" ,title:"Buckle Up"},

  { img: "allImages/playTech-img/72.png", provider: "images/playtech.svg" ,title:"Buffalo Bultz"},
  { img: "allImages/playTech-img/73.png", provider: "images/playtech.svg" ,title:"Buster Blackjack"},
  { img: "allImages/playTech-img/75.png", provider: "images/playtech.svg" ,title:"Captain Treasure"},
  { img: "allImages/playTech-img/76.png", provider: "images/playtech.svg" ,title:"cashback Blackjack"},
  { img: "allImages/playTech-img/78.png", provider: "images/playtech.svg" ,title:"Casino Hold'Em"},
  { img: "allImages/playTech-img/79.png", provider: "images/playtech.svg" ,title:"Cat Queen"},
  { img: "allImages/playTech-img/82.png", provider: "images/playtech.svg" ,title:"Chaoji 888"},
  { img: "allImages/playTech-img/84.png", provider: "images/playtech.svg" ,title:"Chinese Kitchen"},
  { img: "allImages/playTech-img/86.png", provider: "images/playtech.svg" ,title:"Classic Roulette"},
  { img: "allImages/playTech-img/87.png", provider: "images/playtech.svg" ,title:"Crazy 7"},
];

const imageGrid14 = document.getElementById("imageGrid14");

playTechGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Playtech</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid14.appendChild(item);
});

const cq9Games = [
  { img: "allImages/cq9-img/1.png", provider: "images/cq9.svg", title:"Jump High" },
  { img: "allImages/cq9-img/3.png", provider: "images/cq9.svg" , title:"Rave Jump"},
  { img: "allImages/cq9-img/4.png", provider: "images/cq9.svg" , title:"Jump High 2"},
  { img: "allImages/cq9-img/6.png", provider: "images/cq9.svg" , title:"Jumping Mobile"},
  { img: "allImages/cq9-img/7.png", provider: "images/cq9.svg" , title:"God of War"},
  { img: "allImages/cq9-img/8.png", provider: "images/cq9.svg" , title:"Good Fortune M"},
  { img: "allImages/cq9-img/9.png", provider: "images/cq9.svg" , title:"Fly Out"},
  { img: "allImages/cq9-img/10.png", provider: "images/cq9.svg" , title:"Lucky Bats"},
  { img: "allImages/cq9-img/11.png", provider: "images/cq9.svg" , title:"Zeus"},
  { img: "allImages/cq9-img/13.png", provider: "images/cq9.svg" , title:"Disco Night M"},
  { img: "allImages/cq9-img/14.png", provider: "images/cq9.svg" , title:"Fa Cal Shen2"},
  { img: "allImages/cq9-img/15.png", provider: "images/cq9.svg" , title:"Jump Higher"},
  { img: "allImages/cq9-img/16.png", provider: "images/cq9.svg" , title:"God of war M"},
  { img: "allImages/cq9-img/17.png", provider: "images/cq9.svg" , title:"Money Tree"},
  { img: "allImages/cq9-img/18.png", provider: "images/cq9.svg" , title:"Good Fortune"},
  { img: "allImages/cq9-img/19.png", provider: "images/cq9.svg" , title:"5 God Beasts"},
  { img: "allImages/cq9-img/20.png", provider: "images/cq9.svg" , title:"Rave Jump Mobile"},
  { img: "allImages/cq9-img/23.png", provider: "images/cq9.svg" , title:"Jump Higher Mobile"},
  { img: "allImages/cq9-img/24.png", provider: "images/cq9.svg" , title:"Cricket Fever"},
  { img: "allImages/cq9-img/25.png", provider: "images/cq9.svg" , title:"Treasure Pirate"},
  { img: "allImages/cq9-img/26.png", provider: "images/cq9.svg" , title:"Fa Cai Shen"},
  { img: "allImages/cq9-img/27.png", provider: "images/cq9.svg" , title:"Wonderland"},
  { img: "allImages/cq9-img/28.png", provider: "images/cq9.svg" , title:"Gu Gu Gu 3"},
  { img: "allImages/cq9-img/29.png", provider: "images/cq9.svg" , title:"Flying Cai Shen"},
  { img: "allImages/cq9-img/30.png", provider: "images/cq9.svg" , title:"Fire Chibi 2"},
  { img: "allImages/cq9-img/31.png", provider: "images/cq9.svg" , title:"THOR"},
  { img: "allImages/cq9-img/32.png", provider: "images/cq9.svg" , title:"Flower Fortunes"},
  { img: "allImages/cq9-img/33.png", provider: "images/cq9.svg" , title:"Lucky Bats M"},
  { img: "allImages/cq9-img/34.png", provider: "images/cq9.svg" , title:"Move n'Jump"},
  { img: "allImages/cq9-img/35.png", provider: "images/cq9.svg" , title:"Thor 2"},
  { img: "allImages/cq9-img/37.png", provider: "images/cq9.svg" , title:"De Hong Zhong"},
];

const imageGrid15 = document.getElementById("imageGrid15");

cq9Games.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">CQ9</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid15.appendChild(item);
});

const skywindGames = [
  { img: "allImages/skywind-img/25.png", provider: "images/skywind.svg",title:"2 powerful Dragons" },
  { img: "allImages/skywind-img/30.png", provider: "images/skywind.svg" ,title:"88 Shi Fu"},
  { img: "allImages/skywind-img/32.png", provider: "images/skywind.svg" ,title:"9 Sons 1 King"},
  { img: "allImages/skywind-img/33.png", provider: "images/skywind.svg" ,title:"Amazon Lady"},
  { img: "allImages/skywind-img/34.png", provider: "images/skywind.svg" ,title:"Aztec Reel"},
  { img: "allImages/skywind-img/37.png", provider: "images/skywind.svg" ,title:"Baccarat"},
  { img: "allImages/skywind-img/38.png", provider: "images/skywind.svg" ,title:"Big Buffalo"},
  { img: "allImages/skywind-img/39.png", provider: "images/skywind.svg" ,title:"Big Lion"},
  { img: "allImages/skywind-img/40.png", provider: "images/skywind.svg" ,title:"Blackjack"},
  { img: "allImages/skywind-img/44.png", provider: "images/skywind.svg" ,title:"Buffalo Lighening"},
  { img: "allImages/skywind-img/45.png", provider: "images/skywind.svg" ,title:"Butterfly Moon"},
  { img: "allImages/skywind-img/48.png", provider: "images/skywind.svg" ,title:"Cal Shen Ye"},
  { img: "allImages/skywind-img/52.png", provider: "images/skywind.svg" ,title:"Chilli Festival"},
  { img: "allImages/skywind-img/53.png", provider: "images/skywind.svg" ,title:"Choi's Travelling Show"},
  { img: "allImages/skywind-img/54.png", provider: "images/skywind.svg" ,title:"Da Hei Ci Fu"},
  { img: "allImages/skywind-img/55.png", provider: "images/skywind.svg" ,title:"Da Lan Deluxe"},
  { img: "allImages/skywind-img/56.png", provider: "images/skywind.svg" ,title:"Da Lan Deluxe Jackpot"},
  { img: "allImages/skywind-img/57.png", provider: "images/skywind.svg" ,title:"Da Mao Zhao Cai:Money Cat"},
  { img: "allImages/skywind-img/60.png", provider: "images/skywind.svg" ,title:"Double Bonus Slots"},
  { img: "allImages/skywind-img/62.png", provider: "images/skywind.svg" ,title:"Double Jungle"},
  { img: "allImages/skywind-img/63.png", provider: "images/skywind.svg" ,title:"Double Scatter 7's"},
  { img: "allImages/skywind-img/65.png", provider: "images/skywind.svg" ,title:"Dragon Riches"},
  { img: "allImages/skywind-img/66.png", provider: "images/skywind.svg" ,title:"Egypt Crash"},
  { img: "allImages/skywind-img/67.png", provider: "images/skywind.svg" ,title:"European Roulette"},
  { img: "allImages/skywind-img/68.png", provider: "images/skywind.svg" ,title:"Explosion"},
  { img: "allImages/skywind-img/72.png", provider: "images/skywind.svg" ,title:"Fire Festival"},
  { img: "allImages/skywind-img/74.png", provider: "images/skywind.svg" ,title:"Fire Reel"},
  { img: "allImages/skywind-img/80.png", provider: "images/skywind.svg" ,title:"Flaming Phoenix"},
  { img: "allImages/skywind-img/81.png", provider: "images/skywind.svg" ,title:"Fruity Girl"},
];

const imageGrid16 = document.getElementById("imageGrid16");

skywindGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Skywind</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid16.appendChild(item);
});

const wazdanGames = [
  { img: "allImages/wazdan-img/1.png", provider: "images/wazdancasino.png",title:"Turbo Play" },
  { img: "allImages/wazdan-img/2.png", provider: "images/wazdancasino.png" ,title:"Arcade"},
  { img: "allImages/wazdan-img/3.png", provider: "images/wazdancasino.png" ,title:"Vegas Reels li"},
  { img: "allImages/wazdan-img/4.png", provider: "images/wazdancasino.png" ,title:"Magic Hot"},
  { img: "allImages/wazdan-img/5.png", provider: "images/wazdancasino.png" ,title:"vegas Hot"},
  { img: "allImages/wazdan-img/6.png", provider: "images/wazdancasino.png" ,title:"Black Horse"},
  { img: "allImages/wazdan-img/7.png", provider: "images/wazdancasino.png" ,title:"Fire Bird"},
  { img: "allImages/wazdan-img/8.png", provider: "images/wazdancasino.png" ,title:"Captain Shark"},
  { img: "allImages/wazdan-img/9.png", provider: "images/wazdancasino.png" ,title:"lucky Queen"},
  { img: "allImages/wazdan-img/10.png", provider: "images/wazdancasino.png" ,title:"hot 777"},
  { img: "allImages/wazdan-img/11.png", provider: "images/wazdancasino.png" ,title:"Magic Fruits 27"},
  { img: "allImages/wazdan-img/12.png", provider: "images/wazdancasino.png" ,title:"Wild Jack 81"},
  { img: "allImages/wazdan-img/13.png", provider: "images/wazdancasino.png" ,title:"Mystery Jack"},
  { img: "allImages/wazdan-img/14.png", provider: "images/wazdancasino.png" ,title:"Magic Fruits 81"},
  { img: "allImages/wazdan-img/15.png", provider: "images/wazdancasino.png" ,title:"Cube Mania"},
  { img: "allImages/wazdan-img/17.png", provider: "images/wazdancasino.png" ,title:"Criss Cross 81"},
  { img: "allImages/wazdan-img/18.png", provider: "images/wazdancasino.png" ,title:"Highway to Hell"},
  { img: "allImages/wazdan-img/19.png", provider: "images/wazdancasino.png" ,title:"Corrida Romance"},
  { img: "allImages/wazdan-img/20.png", provider: "images/wazdancasino.png" ,title:"Wild Girls"},
  { img: "allImages/wazdan-img/21.png", provider: "images/wazdancasino.png" ,title:"Burning Stars"},
  { img: "allImages/wazdan-img/22.png", provider: "images/wazdancasino.png" ,title:"Jocker Explosion"},
  { img: "allImages/wazdan-img/23.png", provider: "images/wazdancasino.png" ,title:"Super Hot"},
  { img: "allImages/wazdan-img/24.png", provider: "images/wazdancasino.png" ,title:"Magic Stars"},
  { img: "allImages/wazdan-img/25.png", provider: "images/wazdancasino.png" ,title:"lost Treasure"},
  { img: "allImages/wazdan-img/26.png", provider: "images/wazdancasino.png" ,title:"Beach Party"},
  { img: "allImages/wazdan-img/27.png", provider: "images/wazdancasino.png" ,title:"Miami Beach"},
  { img: "allImages/wazdan-img/28.png", provider: "images/wazdancasino.png" ,title:"Lucky fortune"},
  { img: "allImages/wazdan-img/29.png", provider: "images/wazdancasino.png" ,title:"Golden Sphinx"},
  { img: "allImages/wazdan-img/30.png", provider: "images/wazdancasino.png" ,title:"triple Star"},
];

const imageGrid17 = document.getElementById("imageGrid17");

wazdanGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Wazdan</div>
        </div>
      </div>
      <div class="subtext" style="color :white;">${game.title}</div>
    `;
  imageGrid17.appendChild(item);
});

const pgsoftGames = [
  { img: "allImages/pgSoft-img/1.png", provider: "images/pg soft.svg",title:"Honey Trap of Diao Chan" },
  { img: "allImages/pgSoft-img/2.png", provider: "images/pg soft.svg" ,title:"gem Saviour" },
  { img: "allImages/pgSoft-img/3.png", provider: "images/pg soft.svg" ,title:"Fortune Gods" },
  { img: "allImages/pgSoft-img/4.png", provider: "images/pg soft.svg",title:"Medusa li"  },
  { img: "allImages/pgSoft-img/5.png", provider: "images/pg soft.svg" ,title:"Medusa" },

  { img: "allImages/pgSoft-img/7.png", provider: "images/pg soft.svg" ,title:"Hood vs wolf" },
  { img: "allImages/pgSoft-img/8.png", provider: "images/pg soft.svg" ,title:"Reel Love" },
  { img: "allImages/pgSoft-img/9.png", provider: "images/pg soft.svg" ,title:"Win Win Won" },
  { img: "allImages/pgSoft-img/10.png", provider: "images/pg soft.svg" ,title:"Plushle Flenzy" },
  { img: "allImages/pgSoft-img/11.png", provider: "images/pg soft.svg" ,title:"Tree of Fortune" },
  { img: "allImages/pgSoft-img/12.png", provider: "images/pg soft.svg",title:"Hotspot"  },
  { img: "allImages/pgSoft-img/13.png", provider: "images/pg soft.svg" ,title:"Dragon Legend" },
  { img: "allImages/pgSoft-img/15.png", provider: "images/pg soft.svg" ,title:"Hip Hop Panda" },
  { img: "allImages/pgSoft-img/16.png", provider: "images/pg soft.svg" ,title:"Legend of Hou Yi" },
  { img: "allImages/pgSoft-img/17.png", provider: "images/pg soft.svg" ,title:"Mr. Hallow-Win" },
  { img: "allImages/pgSoft-img/18.png", provider: "images/pg soft.svg" ,title:"Prosparity Lion" },
  { img: "allImages/pgSoft-img/19.png", provider: "images/pg soft.svg" ,title:"Santa's Gift Rush" },
  { img: "allImages/pgSoft-img/20.png", provider: "images/pg soft.svg" ,title:"Gem Saviour Sword" },
  { img: "allImages/pgSoft-img/23.png", provider: "images/pg soft.svg" ,title:"Piggy Gold" },
  { img: "allImages/pgSoft-img/24.png", provider: "images/pg soft.svg" ,title:"Jungle Delight" },
  { img: "allImages/pgSoft-img/26.png", provider: "images/pg soft.svg" ,title:"Symbols of Egypt" },
  { img: "allImages/pgSoft-img/27.png", provider: "images/pg soft.svg" ,title:"Ganesha Gold" },
  { img: "allImages/pgSoft-img/28.png", provider: "images/pg soft.svg" ,title:"Emperor's Gold" },

  { img: "allImages/pgSoft-img/29.png", provider: "images/pg soft.svg",title:"Double Fortune" },
  { img: "allImages/pgSoft-img/32.png", provider: "images/pg soft.svg",title:"journey to the Wealth"  },
  { img: "allImages/pgSoft-img/33.png", provider: "images/pg soft.svg",title:"the Great Icescape"  },
  { img: "allImages/pgSoft-img/34.png", provider: "images/pg soft.svg" ,title:"captain's Bounty" },
  { img: "allImages/pgSoft-img/35.png", provider: "images/pg soft.svg" ,title:"Dragon Hatch" },
];

const imageGrid18 = document.getElementById("imageGrid18");

pgsoftGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">PG</div>
        </div>
      </div>
      <div class="subtext" style="color : white;">${game.title}</div>
    `;
  imageGrid18.appendChild(item);
});

const bigTimeGames = [
  { img: "allImages/bigGames-img/390.png", provider: "images/bigtimeasaia.svg",title:"Bonanza Megaways"  },
  { img: "allImages/bigGames-img/391.png", provider: "images/bigtimeasaia.svg" ,title:"extra Chlli Megaways" },
  { img: "allImages/bigGames-img/392.png", provider: "images/bigtimeasaia.svg" ,title:"white Rabbit Megaways" },
  { img: "allImages/bigGames-img/413.png", provider: "images/bigtimeasaia.svg" ,title:"Golden Catch" },
  { img: "allImages/bigGames-img/414.png", provider: "images/bigtimeasaia.svg",title:"Millionaire"  },
  { img: "allImages/bigGames-img/426.png", provider: "images/bigtimeasaia.svg" ,title:"Christmas Bonanza" },
  { img: "allImages/bigGames-img/501.png", provider: "images/bigtimeasaia.svg" ,title:"Danger High Voltage" },
  { img: "allImages/bigGames-img/527.png", provider: "images/bigtimeasaia.svg" ,title:"The Race" },
  { img: "allImages/bigGames-img/534.png", provider: "images/bigtimeasaia.svg" ,title:"Over the Moon" },
  { img: "allImages/bigGames-img/571.png", provider: "images/bigtimeasaia.svg" ,title:"Vegas Rush" },
  { img: "allImages/bigGames-img/572.png", provider: "images/bigtimeasaia.svg" ,title:"Castle of Terror" },
  { img: "allImages/bigGames-img/573.png", provider: "images/bigtimeasaia.svg" ,title:"Rasputin Megaways" },
  { img: "allImages/bigGames-img/574.png", provider: "images/bigtimeasaia.svg" ,title:"Apollo Pays" },
  { img: "allImages/bigGames-img/580.png", provider: "images/bigtimeasaia.svg" ,title:"Beef Lightning" },
  { img: "allImages/bigGames-img/581.png", provider: "images/bigtimeasaia.svg" ,title:"Gold Megaways" },
  { img: "allImages/bigGames-img/603.png", provider: "images/bigtimeasaia.svg" ,title:"Millionaire Rush" },
  { img: "allImages/bigGames-img/604.png", provider: "images/bigtimeasaia.svg" ,title:"Big Bad Bison" },
  { img: "allImages/bigGames-img/614.png", provider: "images/bigtimeasaia.svg" ,title:"Outlaw" },
  { img: "allImages/bigGames-img/615.png", provider: "images/bigtimeasaia.svg" ,title:"Vegas Megaways" },
  { img: "allImages/bigGames-img/616.png", provider: "images/bigtimeasaia.svg" ,title:"Max Megaways"},
  { img: "allImages/bigGames-img/620.png", provider: "images/bigtimeasaia.svg" ,title:"Wild Portals" },
  { img: "allImages/bigGames-img/621.png", provider: "images/bigtimeasaia.svg" ,title:"Star Crustal" },
  { img: "allImages/bigGames-img/625.png", provider: "images/bigtimeasaia.svg" ,title:"Max Megaways 2" },
  { img: "allImages/bigGames-img/640.png", provider: "images/bigtimeasaia.svg" ,title:"Slot Vegas Fully Loaded" },
  { img: "allImages/bigGames-img/641.png", provider: "images/bigtimeasaia.svg" ,title:"Pirate Pays" },
  { img: "allImages/bigGames-img/642.png", provider: "images/bigtimeasaia.svg" ,title:"Wild Flowers" },
  { img: "allImages/bigGames-img/643.png", provider: "images/bigtimeasaia.svg" ,title:"Pop" },
  { img: "allImages/bigGames-img/657.png", provider: "images/bigtimeasaia.svg" ,title:"wild Unicorns" },
  { img: "allImages/bigGames-img/659.png", provider: "images/bigtimeasaia.svg" ,title:"More Turkey" },
  { img: "allImages/bigGames-img/664.png", provider: "images/bigtimeasaia.svg" ,title:"Diamond Fruits" },
];

const imageGrid19 = document.getElementById("imageGrid19");

bigTimeGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Big Time Gaming</div>
        </div>
      </div>
      <div class="subtext">${game.title}</div>
    `;
  imageGrid19.appendChild(item);
});

const pragmaticGames = [
  { img: "slots-img/1.png", provider: "images/pragmatic.svg",title:"Aztec Bonanza"  },
  { img: "slots-img/2.png", provider: "images/pragmatic.svg" ,title:"John Hunter and the Book of _" },
  { img: "slots-img/4.png", provider: "images/pragmatic.svg" ,title:"Dance Party" },
  { img: "slots-img/5.png", provider: "images/pragmatic.svg" ,title:"Fruit Party" },
  { img: "slots-img/6.png", provider: "images/pragmatic.svg" ,title:"Fruit Rainbow" },
  { img: "slots-img/8.png", provider: "images/pragmatic.svg" ,title:"Great Rhino Megaways" },
  { img: "slots-img/9.png", provider: "images/pragmatic.svg" ,title:"Hot to Burn" },
  { img: "slots-img/10.png", provider: "images/pragmatic.svg" ,title:"Lucky Dragon Ball" },
  { img: "slots-img/11.png", provider: "images/pragmatic.svg" ,title:"Master Joker" },
  { img: "slots-img/12.png", provider: "images/pragmatic.svg" ,title:"The Wild Machine" },
  { img: "slots-img/13.png", provider: "images/pragmatic.svg" ,title:"Three Star Fortune" },
  { img: "slots-img/14.png", provider: "images/pragmatic.svg" ,title:"Wild West Gold " },
  { img: "slots-img/15.png", provider: "images/pragmatic.svg" ,title:"Mysterious  " },
  { img: "slots-img/16.png", provider: "images/pragmatic.svg" ,title:"Super 7s" },
  { img: "slots-img/17.png", provider: "images/pragmatic.svg" ,title:"Money House" },
  { img: "slots-img/18.png", provider: "images/pragmatic.svg" ,title:"hercules and Pegasus" },
  { img: "slots-img/19.png", provider: "images/pragmatic.svg" ,title:"Aladdin and the Sorcerer" },
  { img: "slots-img/20.png", provider: "images/pragmatic.svg" ,title:"Honey Honey Honey" },
  { img: "slots-img/21.png", provider: "images/pragmatic.svg" ,title:"Tree of Riches" },
  { img: "slots-img/22.png", provider: "images/pragmatic.svg" ,title:"John hunter and the Tomb of the Scarab Queen" },
  { img: "slots-img/23.png", provider: "images/pragmatic.svg" ,title:"5 Lions Gold" },
  { img: "slots-img/24.png", provider: "images/pragmatic.svg" ,title:"Super Joker" },
  { img: "slots-img/25.png", provider: "images/pragmatic.svg" ,title:"Money Warrier" },
  { img: "slots-img/26.png", provider: "images/pragmatic.svg" ,title:"treasure House" },
  { img: "slots-img/27.png", provider: "images/pragmatic.svg" ,title:"Pirate Gold" },
  { img: "slots-img/28.png", provider: "images/pragmatic.svg" ,title:"Gold Rush" },
  { img: "slots-img/29.png", provider: "images/pragmatic.svg" ,title:"Ancient Egypt Classic" },
  { img: "slots-img/30.png", provider: "images/pragmatic.svg" ,title:"The Dog House" },
  { img: "slots-img/31.png", provider: "images/pragmatic.svg" ,title:"John Hunter and the Secrets of Da Vincis Treasure" },
  { img: "slots-img/32.png", provider: "images/pragmatic.svg" ,title:"John Hunter and the Aztec Treasure" },
];

const imageGrid20 = document.getElementById("imageGrid20");

pragmaticGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Pragmatic Play</div>
        </div>
      </div>
      <div class="subtext">${game.title}</div>
    `;
  imageGrid20.appendChild(item);
});

const noLimitCityGames = [
  { img: "allImages/noLimit-img/428.png", provider: "images/nolimit city.svg",title:"Barbarian Fury"  },
  { img: "allImages/noLimit-img/429.png", provider: "images/nolimit city.svg" ,title:"Bonus Bunies" },
  { img: "allImages/noLimit-img/430.png", provider: "images/nolimit city.svg" ,title:"Book of Shadows" },
  { img: "allImages/noLimit-img/431.png", provider: "images/nolimit city.svg" ,title:"Buffalo Hunter" },
  { img: "allImages/noLimit-img/432.png", provider: "images/nolimit city.svg" ,title:"Bushido Ways xNudge" },
  { img: "allImages/noLimit-img/433.png", provider: "images/nolimit city.svg" ,title:"Casino Win Spin" },
  { img: "allImages/noLimit-img/434.png", provider: "images/nolimit city.svg" ,title:"Coins of Fortune" },
  { img: "allImages/noLimit-img/435.png", provider: "images/nolimit city.svg" ,title:"Das xBoot" },
  { img: "allImages/noLimit-img/436.png", provider: "images/nolimit city.svg" ,title:"Deadwood xNudg" },
  { img: "allImages/noLimit-img/437.png", provider: "images/nolimit city.svg" ,title:"Dragon Tribe" },
  { img: "allImages/noLimit-img/438.png", provider: "images/nolimit city.svg" ,title:"Duengeon Quest" },
  { img: "allImages/noLimit-img/439.png", provider: "images/nolimit city.svg" ,title:"East Coast vs West Coast" },
  { img: "allImages/noLimit-img/440.png", provider: "images/nolimit city.svg" ,title:"El Paso Gun Fight xNudge" },
  { img: "allImages/noLimit-img/441.png", provider: "images/nolimit city.svg" ,title:"Evil Goblins xBomb" },
  { img: "allImages/noLimit-img/442.png", provider: "images/nolimit city.svg" ,title:"Fire in the hole xBomb" },
  { img: "allImages/noLimit-img/444.png", provider: "images/nolimit city.svg" ,title:"Folsom Prison" },
  { img: "allImages/noLimit-img/445.png", provider: "images/nolimit city.svg" ,title:"Fruits" },
  { img: "allImages/noLimit-img/446.png", provider: "images/nolimit city.svg" ,title:"Gaelic Gold" },
  { img: "allImages/noLimit-img/447.png", provider: "images/nolimit city.svg" ,title:"Gold Genie & the Walking Wilds" },
  { img: "allImages/noLimit-img/448.png", provider: "images/nolimit city.svg" ,title:"Harlequin Carnival" },
  { img: "allImages/noLimit-img/449.png", provider: "images/nolimit city.svg" ,title:"Hot 4 Cash" },
  { img: "allImages/noLimit-img/450.png", provider: "images/nolimit city.svg" ,title:"Hot Nudge" },
  { img: "allImages/noLimit-img/451.png", provider: "images/nolimit city.svg" ,title:"Ice Ice Yeti" },
  { img: "allImages/noLimit-img/452.png", provider: "images/nolimit city.svg" ,title:"Immortal Fruits" },
  { img: "allImages/noLimit-img/453.png", provider: "images/nolimit city.svg" ,title:"Infectious 5 xWays" },

  { img: "allImages/noLimit-img/456.png", provider: "images/nolimit city.svg" ,title:"Karen Maneater" },
  { img: "allImages/noLimit-img/457.png", provider: "images/nolimit city.svg" ,title:"Legion X" },
  { img: "allImages/noLimit-img/458.png", provider: "images/nolimit city.svg" ,title:"Little Bighorn" },
  { img: "allImages/noLimit-img/459.png", provider: "images/nolimit city.svg" ,title:"Manhattan Goes Wild" },
];

const imageGrid21 = document.getElementById("imageGrid21");

noLimitCityGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">No Limit City</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid21.appendChild(item);
});

const relaxGames = [
  { img: "allImages/relaxGames-img/1.png", provider: "images/relax.svg", title:"Attila The Hun" },
  { img: "allImages/relaxGames-img/2.png", provider: "images/relax.svg" , title:"Banana Town"},
  { img: "allImages/relaxGames-img/3.png", provider: "images/relax.svg" , title:"Beast Mode"},
  { img: "allImages/relaxGames-img/6.png", provider: "images/relax.svg" , title:"Blender Biltz"},
  { img: "allImages/relaxGames-img/7.png", provider: "images/relax.svg", title:"Book of 99" },
  { img: "allImages/relaxGames-img/8.png", provider: "images/relax.svg" , title:"Caveman Bob"},
  { img: "allImages/relaxGames-img/9.png", provider: "images/relax.svg" , title:"Chip Spin "},
  { img: "allImages/relaxGames-img/10.png", provider: "images/relax.svg" , title:"Cluster Tumble"},
  { img: "allImages/relaxGames-img/11.png", provider: "images/relax.svg" , title:"dead Man's Trail"},
  { img: "allImages/relaxGames-img/12.png", provider: "images/relax.svg" , title:"Deep Descent"},
  { img: "allImages/relaxGames-img/13.png", provider: "images/relax.svg" , title:"Dragons Awakening"},
  { img: "allImages/relaxGames-img/14.png", provider: "images/relax.svg" , title:"Emerald's infinity Reels"},
  { img: "allImages/relaxGames-img/15.png", provider: "images/relax.svg" , title:"Epic Joker"},
  { img: "allImages/relaxGames-img/16.png", provider: "images/relax.svg" , title:"Erik the Red"},
  { img: "allImages/relaxGames-img/17.png", provider: "images/relax.svg" , title:"Frequent Flyer"},
  { img: "allImages/relaxGames-img/18.png", provider: "images/relax.svg" , title:"Hazakura Ways"},
  { img: "allImages/relaxGames-img/19.png", provider: "images/relax.svg" , title:"Hellos Fury"},
  { img: "allImages/relaxGames-img/20.png", provider: "images/relax.svg" , title:"Hellcatraz"},
  { img: "allImages/relaxGames-img/21.png", provider: "images/relax.svg" , title:"Heroe's Gathering"},
  { img: "allImages/relaxGames-img/22.png", provider: "images/relax.svg" , title:"HEX"},
  { img: "allImages/relaxGames-img/23.png", provider: "images/relax.svg" , title:"Ignite The Night"},
  { img: "allImages/relaxGames-img/24.png", provider: "images/relax.svg" , title:"Iron Bank"},
  { img: "allImages/relaxGames-img/25.png", provider: "images/relax.svg" , title:"Its's Time"},
  { img: "allImages/relaxGames-img/26.png", provider: "images/relax.svg" , title:"Jurrasic Party"},
  { img: "allImages/relaxGames-img/27.png", provider: "images/relax.svg" , title:"King of Kings"},
  { img: "allImages/relaxGames-img/28.png", provider: "images/relax.svg" , title:"Kluster Krystals Megaclusters"},
  { img: "allImages/relaxGames-img/29.png", provider: "images/relax.svg" , title:"Le Flesta"},
  { img: "allImages/relaxGames-img/30.png", provider: "images/relax.svg" , title:"Let's get ready to Rumble"},
  { img: "allImages/relaxGames-img/31.png", provider: "images/relax.svg" , title:"Marching Legions"},
  { img: "allImages/relaxGames-img/32.png", provider: "images/relax.svg" , title:"Mega Flip"},
  { img: "allImages/relaxGames-img/38.png", provider: "images/relax.svg" , title:"Mega Masks"},
  { img: "allImages/relaxGames-img/87.png", provider: "images/relax.svg" , title:"Mega Mine"},
];

const imageGrid22 = document.getElementById("imageGrid22");

redTigerGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Relax</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid22.appendChild(item);
});

const nextSpinGames = [
  { img: "allImages/nextSpin-img/2.png", provider: "images/nextspin.svg", title:"Crazy Monkey" },
  { img: "allImages/nextSpin-img/3.png", provider: "images/nextspin.svg", title:"Diamond 7" },
  { img: "allImages/nextSpin-img/4.png", provider: "images/nextspin.svg" , title:"Highway Bee"},
  { img: "allImages/nextSpin-img/5.png", provider: "images/nextspin.svg" , title:"Classic Fruits 7"},
  { img: "allImages/nextSpin-img/6.png", provider: "images/nextspin.svg" , title:"Shake Boom Boom"},
  { img: "allImages/nextSpin-img/7.png", provider: "images/nextspin.svg" , title:"Holy Goat"},
  { img: "allImages/nextSpin-img/8.png", provider: "images/nextspin.svg" , title:"Double Monkey"},
  { img: "allImages/nextSpin-img/9.png", provider: "images/nextspin.svg" , title:"Joker King"},
  { img: "allImages/nextSpin-img/10.png", provider: "images/nextspin.svg" , title:"Triple Kung Fu Monkey"},
  { img: "allImages/nextSpin-img/11.png", provider: "images/nextspin.svg" , title:"Mr. Hippo"},
  { img: "allImages/nextSpin-img/12.png", provider: "images/nextspin.svg" , title:"Maya Quest"},
  { img: "allImages/nextSpin-img/13.png", provider: "images/nextspin.svg" , title:"Dragon Biltz"},
  { img: "allImages/nextSpin-img/14.png", provider: "images/nextspin.svg" , title:"Crazy Monkey Deluxe"},
  { img: "allImages/nextSpin-img/15.png", provider: "images/nextspin.svg" , title:"Lucky Gems"},
  { img: "allImages/nextSpin-img/16.png", provider: "images/nextspin.svg" , title:"Triple Monkey"},
  { img: "allImages/nextSpin-img/17.png", provider: "images/nextspin.svg" , title:"Super Fortune"},
  { img: "allImages/nextSpin-img/18.png", provider: "images/nextspin.svg" , title:"7 Dragons"},
  { img: "allImages/nextSpin-img/19.png", provider: "images/nextspin.svg" , title:"Telga 88"},
  { img: "allImages/nextSpin-img/21.png", provider: "images/nextspin.svg" ,title:"Shake Thai Thai"},
  { img: "allImages/nextSpin-img/22.png", provider: "images/nextspin.svg" ,title:"Honey 888"},
  { img: "allImages/nextSpin-img/23.png", provider: "images/nextspin.svg" ,title:"5 Fortune Stars"},
  { img: "allImages/nextSpin-img/24.png", provider: "images/nextspin.svg" ,title:"Buffalo King"},
  { img: "allImages/nextSpin-img/25.png", provider: "images/nextspin.svg" ,title:"Lightning Woman"},
  { img: "allImages/nextSpin-img/26.png", provider: "images/nextspin.svg" ,title:"Hot Smash"},
  { img: "allImages/nextSpin-img/27.png", provider: "images/nextspin.svg" ,title:"Eternal Fire"},
  { img: "allImages/nextSpin-img/28.png", provider: "images/nextspin.svg" ,title:"Twinkle Ice"},
  { img: "allImages/nextSpin-img/29.png", provider: "images/nextspin.svg" ,title:"Princess of Crime"},
  { img: "allImages/nextSpin-img/30.png", provider: "images/nextspin.svg" ,title:"Dolphin Dive"},
  { img: "allImages/nextSpin-img/31.png", provider: "images/nextspin.svg" ,title:"Forest Secret"},
  { img: "allImages/nextSpin-img/32.png", provider: "images/nextspin.svg" ,title:"Golden West"},
];

const imageGrid23 = document.getElementById("imageGrid23");

nextSpinGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">NextSpin</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid23.appendChild(item);
});

const spinixGames = [
  { img: "allImages/spinix-img/4.png", provider: "images/spinixcasino.svg",title:"Outlaw Rich"},
  { img: "allImages/spinix-img/6.png", provider: "images/spinixcasino.svg" ,title:"Lucky God"},
  { img: "allImages/spinix-img/10.png", provider: "images/spinixcasino.svg" ,title:"Lucky Carnival"},
  { img: "allImages/spinix-img/11.png", provider: "images/spinixcasino.svg" ,title:"God of Egypt"},
  { img: "allImages/spinix-img/13.png", provider: "images/spinixcasino.svg" ,title:"Genie's Wish"},
  { img: "allImages/spinix-img/23.png", provider: "images/spinixcasino.svg" ,title:"Wet'n Wild"},
  { img: "allImages/spinix-img/24.png", provider: "images/spinixcasino.svg" ,title:"Dragons Fury"},
  { img: "allImages/spinix-img/26.png", provider: "images/spinixcasino.svg" ,title:"Opera Night"},
  { img: "allImages/spinix-img/27.png", provider: "images/spinixcasino.svg" ,title:"Plunder Pirate"},
  { img: "allImages/spinix-img/28.png", provider: "images/spinixcasino.svg" ,title:"Yakuza Fight"},
  { img: "allImages/spinix-img/29.png", provider: "images/spinixcasino.svg" ,title:"Blooming Princess"},
  { img: "allImages/spinix-img/32.png", provider: "images/spinixcasino.svg" ,title:"Spirit Spread"},
  { img: "allImages/spinix-img/34.png", provider: "images/spinixcasino.svg" ,title:"Viking Invasion"},
  { img: "allImages/spinix-img/35.png", provider: "images/spinixcasino.svg" ,title:"Shiba's Cafe"},
  { img: "allImages/spinix-img/36.png", provider: "images/spinixcasino.svg" ,title:"Savage Samurai"},
  { img: "allImages/spinix-img/37.png", provider: "images/spinixcasino.svg",title:"Secret Song"  },
  { img: "allImages/spinix-img/38.png", provider: "images/spinixcasino.svg" ,title:"Yummy Money" },
  { img: "allImages/spinix-img/39.png", provider: "images/spinixcasino.svg" ,title:"Dangerous District" },
  { img: "allImages/spinix-img/40.png", provider: "images/spinixcasino.svg" ,title:"Checkmate" },
  { img: "allImages/spinix-img/42.png", provider: "images/spinixcasino.svg" ,title:"Cyber Rush" },
  { img: "allImages/spinix-img/43.png", provider: "images/spinixcasino.svg" ,title:"Wealthy Monster" },
  { img: "allImages/spinix-img/44.png", provider: "images/spinixcasino.svg" ,title:"Divine Diamiond" },
  { img: "allImages/spinix-img/45.png", provider: "images/spinixcasino.svg" ,title:"Vault of Devil" },
  { img: "allImages/spinix-img/47.png", provider: "images/spinixcasino.svg" ,title:"Wandering Witch" },
  { img: "allImages/spinix-img/48.png", provider: "images/spinixcasino.svg" ,title:"Hall of Gods" },
  { img: "allImages/spinix-img/49.png", provider: "images/spinixcasino.svg" ,title:"Chunky Shark" },
  { img: "allImages/spinix-img/50.png", provider: "images/spinixcasino.svg" ,title:"Kingdom of Sky" },
  { img: "allImages/spinix-img/51.png", provider: "images/spinixcasino.svg" ,title:"Cat&Dog" },
  { img: "allImages/spinix-img/52.png", provider: "images/spinixcasino.svg" ,title:"Lucky Gachapon" },
  { img: "allImages/spinix-img/53.png", provider: "images/spinixcasino.svg" ,title:"Golden Scarab" },
];

const imageGrid24 = document.getElementById("imageGrid24");

spinixGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Spinix</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid24.appendChild(item);
});

const nagaGames = [
  { img: "allImages/naga-img/1.png", provider: "images/naga.svg",title:"Aphrodite-Goddess of Love"  },
  { img: "allImages/naga-img/2.png", provider: "images/naga.svg" ,title:"Amazing Circus" },
  { img: "allImages/naga-img/3.png", provider: "images/naga.svg" ,title:"Spring Harvest" },
  { img: "allImages/naga-img/4.png", provider: "images/naga.svg" ,title:"Bikini Babes" },
  { img: "allImages/naga-img/5.png", provider: "images/naga.svg" ,title:"Sexy Christmas Sirens" },
  { img: "allImages/naga-img/6.png", provider: "images/naga.svg" ,title:"Legendary El Toro" },
  { img: "allImages/naga-img/7.png", provider: "images/naga.svg" ,title:"Kawali Neko" },
  { img: "allImages/naga-img/8.png", provider: "images/naga.svg" ,title:"Steampunk Reloaded" },
  { img: "allImages/naga-img/9.png", provider: "images/naga.svg" ,title:"Longavity Dragon" },
  { img: "allImages/naga-img/10.png", provider: "images/naga.svg" ,title:"Mermaid's Treasure" },
  { img: "allImages/naga-img/11.png", provider: "images/naga.svg" ,title:"Sanguo- The Brotherhood" },
  { img: "allImages/naga-img/12.png", provider: "images/naga.svg" ,title:"Gates of Kulnun" },
  { img: "allImages/naga-img/13.png", provider: "images/naga.svg" ,title:"Stallion Princess" },
  { img: "allImages/naga-img/14.png", provider: "images/naga.svg" ,title:"Queen of Aztec" },
  { img: "allImages/naga-img/15.png", provider: "images/naga.svg" ,title:"Mahjong Fortune" },
  { img: "allImages/naga-img/16.png", provider: "images/naga.svg" ,title:"Persian Gems" },
  { img: "allImages/naga-img/17.png", provider: "images/naga.svg" ,title:"Wild West Saloon" },
  { img: "allImages/naga-img/18.png", provider: "images/naga.svg" ,title:"Sugary Bonanza" },
  { img: "allImages/naga-img/19.png", provider: "images/naga.svg" ,title:"Sakura Neko" },
  { img: "allImages/naga-img/20.png", provider: "images/naga.svg" ,title:"God of Fortune" },
  { img: "allImages/naga-img/22.png", provider: "images/naga.svg" ,title:"Super Phoenix" },
  { img: "allImages/naga-img/23.png", provider: "images/naga.svg" ,title:"Temple of Gods" },
  { img: "allImages/naga-img/24.png", provider: "images/naga.svg" ,title:"Mochi Mochi" },
  { img: "allImages/naga-img/25.png", provider: "images/naga.svg" ,title:"Wrath of Zeus" },
  { img: "allImages/naga-img/26.png", provider: "images/naga.svg" ,title:"Empress of the Black Seas" },
  { img: "allImages/naga-img/27.png", provider: "images/naga.svg" ,title:"Super Phoenix" },
  { img: "allImages/naga-img/28.png", provider: "images/naga.svg" ,title:"Temple of Gods" },
  { img: "allImages/naga-img/29.png", provider: "images/naga.svg" ,title:"Mochi Mochi" },
  { img: "allImages/naga-img/30.png", provider: "images/naga.svg" ,title:"Wrath of Zeus" },
  { img: "allImages/naga-img/31.png", provider: "images/naga.svg" ,title:"Empress of the Black Seas" },
];

const imageGrid25 = document.getElementById("imageGrid25");

nagaGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Naga</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid25.appendChild(item);
});

const hacksawGames = [
  { img: "allImages/hacksaw-img/29.png", provider: "images/hacksawgaming.svg",title:"Wanted Dead or a Wild"},
  { img: "allImages/hacksaw-img/34.png", provider: "images/hacksawgaming.svg" ,title:"Outlaws Inc." },
  { img: "allImages/hacksaw-img/35.png", provider: "images/hacksawgaming.svg" ,title:"Stack'em" },
  { img: "allImages/hacksaw-img/36.png", provider: "images/hacksawgaming.svg" ,title:"Toshi Video Club" },
  { img: "allImages/hacksaw-img/39.png", provider: "images/hacksawgaming.svg" ,title:"Tasty Treats" },
  { img: "allImages/hacksaw-img/40.png", provider: "images/hacksawgaming.svg" ,title:"Cash Quest" },
  { img: "allImages/hacksaw-img/41.png", provider: "images/hacksawgaming.svg" ,title:"Rocket Reels" },
  { img: "allImages/hacksaw-img/42.png", provider: "images/hacksawgaming.svg" ,title:"Joker Bombs" },
  { img: "allImages/hacksaw-img/43.png", provider: "images/hacksawgaming.svg" ,title:"King Carrot" },
  { img: "allImages/hacksaw-img/44.png", provider: "images/hacksawgaming.svg" ,title:"Warrier Ways" },
  { img: "allImages/hacksaw-img/45.png", provider: "images/hacksawgaming.svg" ,title:"The Bowery Boys" },
  { img: "allImages/hacksaw-img/46.png", provider: "images/hacksawgaming.svg" ,title:"Double Rainbow" },
  { img: "allImages/hacksaw-img/47.png", provider: "images/hacksawgaming.svg" ,title:"Gladiator Legends" },
  { img: "allImages/hacksaw-img/48.png", provider: "images/hacksawgaming.svg" ,title:"Hand of Anubis" },
  { img: "allImages/hacksaw-img/49.png", provider: "images/hacksawgaming.svg" ,title:"ITERO" },
  { img: "allImages/hacksaw-img/50.png", provider: "images/hacksawgaming.svg" ,title:"Dork Unit" },
  { img: "allImages/hacksaw-img/51.png", provider: "images/hacksawgaming.svg" ,title:"Buffalo Stack'n'Sync" },
  { img: "allImages/hacksaw-img/52.png", provider: "images/hacksawgaming.svg" ,title:"Time Snippers" },
  { img: "allImages/hacksaw-img/53.png", provider: "images/hacksawgaming.svg" ,title:"Forest Fortune" },
  { img: "allImages/hacksaw-img/54.png", provider: "images/hacksawgaming.svg" ,title:"Born Wild" },
  { img: "allImages/hacksaw-img/55.png", provider: "images/hacksawgaming.svg" ,title:"Undead Fortune" },
  { img: "allImages/hacksaw-img/56.png", provider: "images/hacksawgaming.svg" ,title:"Fruit Duel" },
  { img: "allImages/hacksaw-img/57.png", provider: "images/hacksawgaming.svg" ,title:"Alpha Eagle" },
  { img: "allImages/hacksaw-img/58.png", provider: "images/hacksawgaming.svg" ,title:"Break Bones" },
  { img: "allImages/hacksaw-img/59.png", provider: "images/hacksawgaming.svg" ,title:"Rotten" },
  { img: "allImages/hacksaw-img/60.png", provider: "images/hacksawgaming.svg" ,title:"Book of Time" },
  { img: "allImages/hacksaw-img/61.png", provider: "images/hacksawgaming.svg" ,title:"Pug Life" },
  { img: "allImages/hacksaw-img/62.png", provider: "images/hacksawgaming.svg" ,title:"Gronk's Gems" },
  { img: "allImages/hacksaw-img/63.png", provider: "images/hacksawgaming.svg" ,title:"Frank's Farm" },
];

const imageGrid26 = document.getElementById("imageGrid26");

hacksawGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Hacksaw</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid26.appendChild(item);
});

const jilliGames = [
  { img: "allImages/jilli-img/103.png", provider: "images/jilli.svg",title:"Chin Shi Haung"},
  { img: "allImages/jilli-img/116.png", provider: "images/jilli.svg",title:"God of Martial" },
  { img: "allImages/jilli-img/117.png", provider: "images/jilli.svg" ,title:"Hot chilli" },
  { img: "allImages/jilli-img/118.png", provider: "images/jilli.svg",title:"Fortune Tree" },
  { img: "allImages/jilli-img/119.png", provider: "images/jilli.svg" ,title:"War of Dragons" },
  { img: "allImages/jilli-img/120.png", provider: "images/jilli.svg" ,title:"Gem Party" },
  { img: "allImages/jilli-img/121.png", provider: "images/jilli.svg" ,title:"Lucky Ball" },
  { img: "allImages/jilli-img/123.png", provider: "images/jilli.svg" ,title:"Hyper Burst" },
  { img: "allImages/jilli-img/124.png", provider: "images/jilli.svg" ,title:"Shanghai Beauty" },
  { img: "allImages/jilli-img/125.png", provider: "images/jilli.svg" ,title:"Fa Fa Fa" },
  { img: "allImages/jilli-img/127.png", provider: "images/jilli.svg" ,title:"Hawali Beauty" },
  { img: "allImages/jilli-img/129.png", provider: "images/jilli.svg",title:"Bubble Beauty"},
  { img: "allImages/jilli-img/131.png", provider: "images/jilli.svg" ,title:"Crazy777"},
  { img: "allImages/jilli-img/132.png", provider: "images/jilli.svg" ,title:"Bao Boon Chin" },
  { img: "allImages/jilli-img/133.png", provider: "images/jilli.svg" ,title:"Night City" },
  { img: "allImages/jilli-img/134.png", provider: "images/jilli.svg" ,title:"Fengshen" },
  { img: "allImages/jilli-img/135.png", provider: "images/jilli.svg" ,title:"Crazy FaFaFa" },
  { img: "allImages/jilli-img/136.png", provider: "images/jilli.svg" ,title:"XiYangYang" },
  { img: "allImages/jilli-img/137.png", provider: "images/jilli.svg" ,title:"DiamondParty" },
  { img: "allImages/jilli-img/138.png", provider: "images/jilli.svg" ,title:"Golden Bank" },
  { img: "allImages/jilli-img/139.png", provider: "images/jilli.svg" ,title:"Dragon Treasure" },
  { img: "allImages/jilli-img/140.png", provider: "images/jilli.svg" ,title:"Charge Buffalo" },
  { img: "allImages/jilli-img/142.png", provider: "images/jilli.svg" ,title:"Super Ace" },
  { img: "allImages/jilli-img/143.png", provider: "images/jilli.svg" ,title:"Money Coming" },
  { img: "allImages/jilli-img/144.png", provider: "images/jilli.svg" ,title:"Golden Queen" },
  { img: "allImages/jilli-img/145.png", provider: "images/jilli.svg" ,title:"Jungle King" },
  { img: "allImages/jilli-img/146.png", provider: "images/jilli.svg" ,title:"Monkey Party" },
  { img: "allImages/jilli-img/147.png", provider: "images/jilli.svg" ,title:"Boxing King" },
  { img: "allImages/jilli-img/148.png", provider: "images/jilli.svg" ,title:"Secret Treasure" },
  { img: "allImages/jilli-img/149.png", provider: "images/jilli.svg" ,title:"Pharaoh Treasure" },
];

const imageGrid27 = document.getElementById("imageGrid27");

nextSpinGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">JiLi</div>
        </div>
      </div>
      <div class="subtext"style="color: white;">${game.title}</div>
    `;
  imageGrid27.appendChild(item);
});

const boomingGames = [
  { img: "allImages/boomingGames-img/1.png", provider: "images/booming.svg",title:"Clasico"  },
  { img: "allImages/boomingGames-img/2.png", provider: "images/booming.svg" ,title:"Wild Pride" },
  { img: "allImages/boomingGames-img/3.png", provider: "images/booming.svg" ,title:"VIP Fifthy Riches" },
  { img: "allImages/boomingGames-img/4.png", provider: "images/booming.svg" ,title:"Bang Bang" },
  { img: "allImages/boomingGames-img/5.png", provider: "images/booming.svg" ,title:"Royal Wins" },
  { img: "allImages/boomingGames-img/6.png", provider: "images/booming.svg" ,title:"Butterfly Charms" },
  { img: "allImages/boomingGames-img/7.png", provider: "images/booming.svg" ,title:"The Rodfather Megaways" },
  { img: "allImages/boomingGames-img/8.png", provider: "images/booming.svg" ,title:"Book of Tombs" },
  { img: "allImages/boomingGames-img/9.png", provider: "images/booming.svg" ,title:"Rhino Hold and Win" },
  {
    img: "allImages/boomingGames-img/10.png",
    provider: "images/booming.svg",
    title:"Money Inc" 
  },
  {
    img: "allImages/boomingGames-img/11.png",
    provider: "images/booming.svg",
    title:"King Cobra" 
  },
  {
    img: "allImages/boomingGames-img/12.png",
    provider: "images/booming.svg"
    ,title:"Pinata Wildz" 

  },
  {
    img: "allImages/boomingGames-img/13.png",
    provider: "images/booming.svg"
    ,title:"Crack the Bank Hold and Win" 
  },
  {
    img: "allImages/boomingGames-img/14.png",
    provider: "images/booming.svg"
    ,title:"Blockchain Megaways" 
  },
  {
    img: "allImages/boomingGames-img/15.png",
    provider: "images/booming.svg"
    ,title:"Vegas Wins" 
  },
  {
    img: "allImages/boomingGames-img/16.png",
    provider: "images/booming.svg",
  },
  {
    img: "allImages/boomingGames-img/17.png",
    provider: "images/booming.svg"
    ,title:"Burning Classics go Wild" 
  },
  {
    img: "allImages/boomingGames-img/18.png",
    provider: "images/booming.svg"
    ,title:"Paris Nights" 
  },
  {
    img: "allImages/boomingGames-img/19.png",
    provider: "images/booming.svg"
    ,title:"Super Duper" 
  },
  {
    img: "allImages/boomingGames-img/20.png",
    provider: "images/booming.svg"
    ,title:"Wild Wild Vegas" 
  },
  {
    img: "allImages/boomingGames-img/21.png",
    provider: "images/booming.svg"
    ,title:"Greek Legends" 
  },
  {
    img: "allImages/boomingGames-img/22.png",
    provider: "images/booming.svg"
    ,title:"Roll the Dice" 
  },
  {
    img: "allImages/boomingGames-img/23.png",
    provider: "images/booming.svg"
    ,title:"Howling Wolves Megaways" 
  },
  {
    img: "allImages/boomingGames-img/24.png",
    provider: "images/booming.svg"
    ,title:"Gamblelicious Hold and Win" 
  },
  {
    img: "allImages/boomingGames-img/25.png",
    provider: "images/booming.svg"
    ,title:"Power of the Vikings" 
  },
  {
    img: "allImages/boomingGames-img/26.png",
    provider: "images/booming.svg"
    ,title:"Diamonds Riches" 
  },
  {
    img: "allImages/boomingGames-img/27.png",
    provider: "images/booming.svg"
    ,title:"Treasure Vault" 
  },
  {
    img: "allImages/boomingGames-img/28.png",
    provider: "images/booming.svg"
    ,title:"Space Cows to the Moo'n" 
  },
  {
    img: "allImages/boomingGames-img/29.png",
    provider: "images/booming.svg"
    ,title:"the Mighty Toro" 
  },
  {
    img: "allImages/boomingGames-img/30.png",
    provider: "images/booming.svg"
    ,title:"Mammoth Tundra" 
  },
];

const imageGrid28 = document.getElementById("imageGrid28");

nextSpinGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Booming</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid28.appendChild(item);
});
