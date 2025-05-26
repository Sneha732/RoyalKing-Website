const slotGames = [
  { img: "live-img/1.webp", provider: "images/evolution.svg",title: "Super Andar Bahar" },
  { img: "live-img/2.webp", provider: "images/evolution.svg",title: "Bac Bo"  },
  { img: "live-img/3.webp", provider: "images/evolution.svg" ,title: "Emperor Bac Bo" },
  { img: "live-img/4.webp", provider: "images/evolution.svg" ,title: "Baccarat A" },
  { img: "live-img/5.webp", provider: "images/evolution.svg" ,title: "Baccarat B" },
  { img: "live-img/6.webp", provider: "images/evolution.svg" ,title: "Baccarat C" },
  { img: "live-img/7.webp", provider: "images/evolution.svg" ,title: "Baccarat Control Squeeze" },
  { img: "live-img/8.webp", provider: "images/evolution.svg" ,title: "Baccarat Squueze" },
  { img: "live-img/9.webp", provider: "images/evolution.svg" ,title: "Bonsal Speed Baccarat A" },
  { img: "live-img/10.webp", provider: "images/evolution.svg" ,title: "Bonsai Speed Baccarat B" },
  { img: "live-img/11.webp", provider: "images/evolution.svg" ,title: "Bonsai Speed Baccarat C" },
  { img: "live-img/12.webp", provider: "images/evolution.svg" ,title: "Emperor Speed Baccarat A" },
  { img: "live-img/13.webp", provider: "images/evolution.svg" ,title: "Emperor Speed Baccarat B" },
  { img: "live-img/14.webp", provider: "images/evolution.svg" ,title: "Emperor Speed Baccarat C" },
  { img: "live-img/15.webp", provider: "images/evolution.svg" ,title: "Emperor Speed Baccarat D" },
  { img: "live-img/16.webp", provider: "images/evolution.svg" ,title: "Golden Wealth Baccarat" },
  { img: "live-img/17.webp", provider: "images/evolution.svg" ,title: "Hindi Speed Baccarat A" },
  { img: "live-img/18.webp", provider: "images/evolution.svg" ,title: "Hindi Speed Baccarat B" },
  { img: "live-img/19.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed" },
  { img: "live-img/20.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed" },
  { img: "live-img/21.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed A" },
  { img: "live-img/22.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed B" },
  { img: "live-img/23.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed C" },
  { img: "live-img/25.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed D" },
  { img: "live-img/26.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed E" },
  { img: "live-img/27.webp", provider: "images/evolution.svg" ,title: "Korean Speaking Speed F" },
  { img: "live-img/28.webp", provider: "images/evolution.svg" ,title: "Lightning Baccarat" },
  { img: "live-img/29.webp", provider: "images/evolution.svg" ,title: "No Commision Baccarat" },
  { img: "live-img/30.webp", provider: "images/evolution.svg" ,title: "No Commision Speed" },
  { img: "live-img/273.webp", provider: "images/evolution.svg" ,title: "No Commision Speed" },
  { img: "live-img/306.webp", provider: "images/evolution.svg" ,title: "No Commision Speed" },
 
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
          <div class="text">Evolution</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid1.appendChild(item);
});



const BigGamingGames = [
  { img: "casinoAllImages/bigGames-img/1.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Baccarat" },
  { img: "casinoAllImages/bigGames-img/2.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Roulette"  },
  { img: "casinoAllImages/bigGames-img/3.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Sicbo"  },
  { img: "casinoAllImages/bigGames-img/4.webp", provider: "../images/bggamingsidebarimage.jpg",title: "DragonTiger"  },
  { img: "casinoAllImages/bigGames-img/5.webp", provider: "../images/bggamingsidebarimage.jpg",title: "SpeedBaccarat"  },
  { img: "casinoAllImages/bigGames-img/6.webp", provider: "../images/bggamingsidebarimage.jpg",title: "InsuranceBaccarat"  },
  { img: "casinoAllImages/bigGames-img/7.webp", provider: "../images/bggamingsidebarimage.jpg",title: "MiCard Baccarat"  },
  { img: "casinoAllImages/bigGames-img/8.webp", provider: "../images/bggamingsidebarimage.jpg",title: "FullColor Baccarat"  },
  { img: "casinoAllImages/bigGames-img/9.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Bull Bull"  },
  { img: "casinoAllImages/bigGames-img/10.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Win Three Cards"  },
  { img: "casinoAllImages/bigGames-img/11.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Red Black"  },
  { img: "casinoAllImages/bigGames-img/12.webp", provider: "../images/bggamingsidebarimage.jpg" ,title: "SeDie" },
  { img: "casinoAllImages/bigGames-img/13.webp", provider: "../images/bggamingsidebarimage.jpg" ,title: "Casino War" },
  { img: "casinoAllImages/bigGames-img/14.webp", provider: "../images/bggamingsidebarimage.jpg",title: "Speed Sicbo"  },
  
];

const imageGrid2 = document.getElementById("imageGrid2");

BigGamingGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Big</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid2.appendChild(item);
});


const asiaGames = [
  { img: "casinoAllImages/asiaGames-img/1.webp", provider: "images/evolution.svg",title: "Baccarat"  },
  { img: "casinoAllImages/asiaGames-img/2.webp", provider: "images/evolution.svg" ,title: "Dragon Tiger" },
  { img: "casinoAllImages/asiaGames-img/3.webp", provider: "images/evolution.svg" ,title: "Sicbo" },
  { img: "casinoAllImages/asiaGames-img/4.webp", provider: "images/evolution.svg" ,title: "Roulette" },
  { img: "casinoAllImages/asiaGames-img/5.webp", provider: "images/evolution.svg",title: "VIP Baccarat"  },
  { img: "casinoAllImages/asiaGames-img/6.webp", provider: "images/evolution.svg",title: "Bid Baccarat"  },
  { img: "casinoAllImages/asiaGames-img/7.webp", provider: "images/evolution.svg",title: "Bull Bull"  },
  { img: "casinoAllImages/asiaGames-img/8.webp", provider: "images/evolution.svg",title: "Win Three Cards"  },
  { img: "casinoAllImages/asiaGames-img/9.webp", provider: "images/evolution.svg",title: "Bull Fight"  },
  { img: "casinoAllImages/asiaGames-img/10.webp", provider: "images/evolution.svg",title: "Blackjack"  },
  { img: "casinoAllImages/asiaGames-img/11.webp", provider: "images/evolution.svg",title: "Three Face"  },
  { img: "casinoAllImages/asiaGames-img/12.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M51" },
  { img: "casinoAllImages/asiaGames-img/13.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M52" },
  { img: "casinoAllImages/asiaGames-img/14.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M53" },
  { img: "casinoAllImages/asiaGames-img/15.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M54" },
  { img: "casinoAllImages/asiaGames-img/16.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M555" },
  { img: "casinoAllImages/asiaGames-img/17.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M56" },
  { img: "casinoAllImages/asiaGames-img/18.webp", provider: "images/evolution.svg" ,title: "EMA Baccarat M57" },
  { img: "casinoAllImages/asiaGames-img/19.webp", provider: "images/evolution.svg",title: "EMA Baccarat M58"  },
  { img: "casinoAllImages/asiaGames-img/20.webp", provider: "images/evolution.svg",title: "EMA Baccarat M59"  },
  { img: "casinoAllImages/asiaGames-img/21.webp", provider: "images/evolution.svg",title: "EMA Baccarat M60"  },
  { img: "casinoAllImages/asiaGames-img/22.webp", provider: "images/evolution.svg",title: "EMA Blakjack D27"  },
  { img: "casinoAllImages/asiaGames-img/23.webp", provider: "images/evolution.svg",title: "EMA Blakjack D28"  },
  { img: "casinoAllImages/asiaGames-img/24.webp", provider: "images/evolution.svg",title: "EMA Blakjack D29"  },
  { img: "casinoAllImages/asiaGames-img/25.webp", provider: "images/evolution.svg",title: "EMA Blakjack D30"  },

 
  
];

const imageGrid3 = document.getElementById("imageGrid3");

asiaGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Asia</div>
        </div>
      </div>
      <div class="subtext">${game.title}</div>
    `;
  imageGrid3.appendChild(item);
});



const dreamGames = [
  { img: "casinoAllImages/dreamGames-img/1.webp", provider: "images/dream_gaming_casino_software_high_quality_live_entertainment_16607275423319_image_home.svg",title: "Baccarat"  },
  { img: "casinoAllImages/dreamGames-img/3.webp", provider: "images/dream_gaming_casino_software_high_quality_live_entertainment_16607275423319_image_home.svg" ,title: "Dragon Tiger" },
  { img: "casinoAllImages/dreamGames-img/4.webp", provider: "images/dream_gaming_casino_software_high_quality_live_entertainment_16607275423319_image_home.svg" ,title: "Roulette" },
  { img: "casinoAllImages/dreamGames-img/5.webp", provider: "images/dream_gaming_casino_software_high_quality_live_entertainment_16607275423319_image_home.svg" ,title: "Sicbo" },
  { img: "casinoAllImages/dreamGames-img/7.webp", provider: "images/dream_gaming_casino_software_high_quality_live_entertainment_16607275423319_image_home.svg" ,title: "FanTan" },
  { img: "casinoAllImages/dreamGames-img/8.webp", provider: "images/dream_gaming_casino_software_high_quality_live_entertainment_16607275423319_image_home.svg" ,title: "FightBull" },
 
  
];

const imageGrid4 = document.getElementById("imageGrid4");

dreamGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Dream</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid4.appendChild(item);
});




const sexyGames = [
  { img: "casinoAllImages/sexyGames-img/1.webp", provider: "images/Sexy-Gaming_logo.png.webp",title: "Baccarat Classic" },
  { img: "casinoAllImages/sexyGames-img/3.webp", provider: "images/Sexy-Gaming_logo.png.webp" ,title: "Dragon Tiger" },
  { img: "casinoAllImages/sexyGames-img/4.webp", provider: "images/Sexy-Gaming_logo.png.webp" ,title: "Sicbo" },
  { img: "casinoAllImages/sexyGames-img/5.webp", provider: "images/Sexy-Gaming_logo.png.webp" ,title: "Roulette" },
  { img: "casinoAllImages/sexyGames-img/7.webp", provider: "images/Sexy-Gaming_logo.png.webp",title: "Baccarat"  },
  { img: "casinoAllImages/sexyGames-img/8.webp", provider: "images/Sexy-Gaming_logo.png.webp" ,title: "Thai Hi Lo" },
  { img: "casinoAllImages/sexyGames-img/9.webp", provider: "images/Sexy-Gaming_logo.png.webp" ,title: "Thai Fish Prawn Crab" },
  { img: "casinoAllImages/sexyGames-img/10.webp", provider: "images/Sexy-Gaming_logo.png.webp",title: "Extra Andar Bahar"  },
  { img: "casinoAllImages/sexyGames-img/11.webp", provider: "images/Sexy-Gaming_logo.png.webp",title: "Extra Sicbo"  },
  { img: "casinoAllImages/sexyGames-img/12.webp", provider: "images/Sexy-Gaming_logo.png.webp",title: "Teen Patti 2020"  },
  { img: "casinoAllImages/sexyGames-img/13.webp", provider: "images/Sexy-Gaming_logo.png.webp" ,title: "sedle" },
  
  
];

const imageGrid5 = document.getElementById("imageGrid5");

sexyGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Sexy</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid5.appendChild(item);
});


const live88Games = [
  { img: "casinoAllImages/live88Games-img/41.webp", provider: "images/Live88_APIintegration_1.png",title:"Live Casino Lobby" },
  { img: "casinoAllImages/live88Games-img/42.webp", provider: "images/Live88_APIintegration_1.png",title:" Blackjack-Lobby" },
  { img: "casinoAllImages/live88Games-img/43.webp", provider: "images/Live88_APIintegration_1.png",title:"Roulette-Lobby" },
  { img: "casinoAllImages/live88Games-img/44.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat"},
  { img: "casinoAllImages/live88Games-img/45.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Roulette"},
  { img: "casinoAllImages/live88Games-img/46.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack"},
  { img: "casinoAllImages/live88Games-img/47.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 10"},
  { img: "casinoAllImages/live88Games-img/48.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 11"},
  { img: "casinoAllImages/live88Games-img/49.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 2 High Roller"},
  { img: "casinoAllImages/live88Games-img/50.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 3"},
  { img: "casinoAllImages/live88Games-img/51.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 5"},
  { img: "casinoAllImages/live88Games-img/52.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 6"},
  { img: "casinoAllImages/live88Games-img/53.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 8"},
  { img: "casinoAllImages/live88Games-img/54.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat 9"},
  { img: "casinoAllImages/live88Games-img/55.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Japanese Baccarat 1"},
  { img: "casinoAllImages/live88Games-img/56.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Speed Baccarat"},
  { img: "casinoAllImages/live88Games-img/57.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack 2 VIP"},
  { img: "casinoAllImages/live88Games-img/58.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack 3"},
  { img: "casinoAllImages/live88Games-img/59.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack 4 VIP"},
  { img: "casinoAllImages/live88Games-img/60.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack 5"},
  { img: "casinoAllImages/live88Games-img/61.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack 6 VIP"},
  { img: "casinoAllImages/live88Games-img/62.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Roulette 2"},
  { img: "casinoAllImages/live88Games-img/63.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Roulette 3"},
  { img: "casinoAllImages/live88Games-img/64.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Speed Baccarat 2"},
  { img: "casinoAllImages/live88Games-img/65.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat High Roller 1"},
  { img: "casinoAllImages/live88Games-img/66.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack 7"},
  { img: "casinoAllImages/live88Games-img/72.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Andar Bahar 1"},
  { img: "casinoAllImages/live88Games-img/73.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat A"},
  { img: "casinoAllImages/live88Games-img/74.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat B"},
  { img: "casinoAllImages/live88Games-img/75.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat C"},
  { img: "casinoAllImages/live88Games-img/76.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Baccarat D"},
  { img: "casinoAllImages/live88Games-img/77.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack A"},
  { img: "casinoAllImages/live88Games-img/78.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Blackjack B"},
  { img: "casinoAllImages/live88Games-img/90.webp", provider: "images/Live88_APIintegration_1.png" ,title:"Bollywood Stars"},

 
  
];

const imageGrid6 = document.getElementById("imageGrid6");

live88Games.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Live</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid6.appendChild(item);
});




const playTechGames = [
  { img: "casinoAllImages/playTechGames-img/1.webp", provider: "images/playtech.svg",title:"Playtech Games" },
  { img: "casinoAllImages/playTechGames-img/2.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/3.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/4.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/5.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/6.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/7.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/8.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/9.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/10.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/11.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/12.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/13.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
 
  { img: "casinoAllImages/playTechGames-img/15.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/17.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/21.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/23.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/24.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/25.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/26.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/27.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/28.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/29.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/30.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/381.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/388.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/411.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/412.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/413.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/449.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/456.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/457.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/464.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/465.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/467.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/476.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/477.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/482.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/490.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/495.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/499.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
  { img: "casinoAllImages/playTechGames-img/510.webp", provider: "images/playtech.svg" ,title:"Playtech Games"},
 

  
];

const imageGrid7 = document.getElementById("imageGrid7");

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
  imageGrid7.appendChild(item);
});




const ezugiGames = [
  { img: "casinoAllImages/ezugiGames-img/1.webp", provider: "images/ezugi.svg",title: "Ezugi Games" },
  { img: "casinoAllImages/ezugiGames-img/2.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  
  { img: "casinoAllImages/ezugiGames-img/7.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/12.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/13.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/14.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/15.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/16.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/17.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/19.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/20.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/21.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/24.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/25.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/27.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/29.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/38.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/39.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/43.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/45.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/46.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/48.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/50.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/52.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/53.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/54.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/55.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/56.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  { img: "casinoAllImages/ezugiGames-img/58.webp", provider: "images/ezugi.svg" ,title: "Ezugi Games"},
  
  
];

const imageGrid8 = document.getElementById("imageGrid8");

ezugiGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Ezugi</div>
        </div>
      </div>
      <div class="subtext" style="color :white;">${game.title}</div>
    `;
  imageGrid8.appendChild(item);
});






const skywindGames = [
  { img: "casinoAllImages/skywindGames-img/1.webp", provider: "images/skywind.svg", title: "Skywind Games" },
  { img: "casinoAllImages/skywindGames-img/2.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/3.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/4.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/5.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/6.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/7.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/8.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/9.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/10.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/11.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/12.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/13.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/14.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/15.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/16.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/18.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/367.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/388.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/438.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/439.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/440.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/441.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/442.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/443.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/444.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/445.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/446.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/484.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/488.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/489.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  { img: "casinoAllImages/skywindGames-img/490.webp", provider: "images/skywind.svg" , title: "Skywind Games"},
  
  
  
  
];

const imageGrid9 = document.getElementById("imageGrid9");

BigGamingGames.forEach((game) => {
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
      <div class="subtext" style="color :white;">${game.title}</div>
    `;
  imageGrid9.appendChild(item);
});





const pragmaticGames = [
  { img: "casinoAllImages/pragmaticGames-img/131.webp", provider: "images/pragmatic.svg",title: "Pragmatic Games"  },
  { img: "casinoAllImages/pragmaticGames-img/132.webp", provider: "images/pragmatic.svg", title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/133.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/134.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/154.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/155.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/157.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/158.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/159.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/160.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/161.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/162.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/163.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/164.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/165.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/166.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/167.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/195.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/196.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/197.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/202.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/203.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/204.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/205.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/206.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/207.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/208.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/220.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/235.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  { img: "casinoAllImages/pragmaticGames-img/236.webp", provider: "images/pragmatic.svg" ,title: "Pragmatic Games"},
  
];

const imageGrid10 = document.getElementById("imageGrid10");

BigGamingGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">PragmaticPlay</div>
        </div>
      </div>
      <div class="subtext" style="color: white;">${game.title}</div>
    `;
  imageGrid10.appendChild(item);
});




const betGames = [
  { img: "casinoAllImages/betGames-img/1.webp", provider: "images/betgames.svg",title: "Lucky 7" },
  { img: "casinoAllImages/betGames-img/2.webp", provider: "images/betgames.svg" ,title: "Lucky 5" },
  { img: "casinoAllImages/betGames-img/3.webp", provider: "images/betgames.svg" ,title: "Bet on Poker" },
  { img: "casinoAllImages/betGames-img/4.webp", provider: "images/betgames.svg",title: "Bet on Baccarat"  },
  { img: "casinoAllImages/betGames-img/5.webp", provider: "images/betgames.svg" ,title: "wheel of Fortune" },
  { img: "casinoAllImages/betGames-img/6.webp", provider: "images/betgames.svg" ,title: "War of Bets" },
  { img: "casinoAllImages/betGames-img/7.webp", provider: "images/betgames.svg" ,title: "Lucky 6" },
  { img: "casinoAllImages/betGames-img/8.webp", provider: "images/betgames.svg" ,title: "Dice Duel" },
  { img: "casinoAllImages/betGames-img/9.webp", provider: "images/betgames.svg" ,title: "6+ Poker" },
  { img: "casinoAllImages/betGames-img/10.webp", provider: "images/betgames.svg",title: "Classic Wheel"  },
  { img: "casinoAllImages/betGames-img/11.webp", provider: "images/betgames.svg" ,title: "Football Grid" },
  { img: "casinoAllImages/betGames-img/12.webp", provider: "images/betgames.svg" ,title: "Instant Lucky 7" },
  { img: "casinoAllImages/betGames-img/13.webp", provider: "images/betgames.svg" ,title: "Skyward" },
  { img: "casinoAllImages/betGames-img/14.webp", provider: "images/betgames.svg",title: "Classic Roulette"  },
  { img: "casinoAllImages/betGames-img/15.webp", provider: "images/betgames.svg",title: "Live Roulette"  },
  { img: "casinoAllImages/betGames-img/16.webp", provider: "images/betgames.svg",title: "Lucky Kicks"  },
  { img: "casinoAllImages/betGames-img/17.webp", provider: "images/betgames.svg",title: "T-Basket 24/7"  },
  { img: "casinoAllImages/betGames-img/18.webp", provider: "images/betgames.svg",title: "T-Kick 24/7"  },
  { img: "casinoAllImages/betGames-img/19.webp", provider: "images/betgames.svg" ,title: "Starzle" },
  { img: "casinoAllImages/betGames-img/20.webp", provider: "images/betgames.svg" ,title: "Crypt of Giza" },
  
  
];

const imageGrid11 = document.getElementById("imageGrid11");

BigGamingGames.forEach((game) => {
  const item = document.createElement("div");
  item.className = "game-item";
  item.innerHTML = `
      <img src="${game.img}" class="game-img" loading="lazy" />
      <div class="d-flex justify-content-between mt-1 align-items-center img-section">
        <div class="d-flex gap-1">
          <img src="${game.provider}" loading="lazy" />
          <div class="text">Bet</div>
        </div>
      </div>
      <div class="subtext" style="color: white">${game.title}</div>
    `;
  imageGrid11.appendChild(item);
});