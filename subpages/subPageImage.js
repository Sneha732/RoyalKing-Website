document.addEventListener("DOMContentLoaded", () => {
  const bigGames = [
    { img: "bigGames/1.webp", title: "Big Games" },
    { img: "bigGames/2.webp", title: "Big Games" },
    { img: "bigGames/3.webp", title: "Big Games" },
    { img: "bigGames/4.webp", title: "Big Games" },
    { img: "bigGames/5.webp", title: "Big Games" },
    { img: "bigGames/6.webp", title: "Big Games" },
    { img: "bigGames/7.webp", title: "Big Games" },
    { img: "bigGames/8.webp", title: "Big Games" },
    { img: "bigGames/9.webp", title: "Big Games" },
    { img: "bigGames/10.webp", title: "Big Games" },
    { img: "bigGames/11.webp", title: "Big Games" },
    { img: "bigGames/12.webp", title: "Big Games" },
    { img: "bigGames/13.webp", title: "Big Games" },
    { img: "bigGames/14.webp", title: "Big Games" },
  ];
  const evolutionGames = [
    { img: "evolutionGames/1.webp", title: "Evolution Games" },
    { img: "evolutionGames/2.webp", title: "Evolution Games" },
    { img: "evolutionGames/3.webp", title: "Evolution Games" },
    { img: "evolutionGames/4.webp", title: "Evolution Games" },
    { img: "evolutionGames/5.webp", title: "Evolution Games" },
    { img: "evolutionGames/6.webp", title: "Evolution Games" },
    { img: "evolutionGames/7.webp", title: "Evolution Games" },
    { img: "evolutionGames/8.webp", title: "Evolution Games" },
    { img: "evolutionGames/9.webp", title: "Evolution Games" },
    { img: "evolutionGames/10.webp", title: "Evolution Games" },
    { img: "evolutionGames/11.webp", title: "Evolution Games" },
    { img: "evolutionGames/12.webp", title: "Evolution Games" },
    { img: "evolutionGames/13.webp", title: "Evolution Games" },
    { img: "evolutionGames/14.webp", title: "Evolution Games" },
    { img: "evolutionGames/15.webp", title: "Evolution Games" },
    { img: "evolutionGames/16.webp", title: "Evolution Games" },
    { img: "evolutionGames/17.webp", title: "Evolution Games" },
    { img: "evolutionGames/18.webp", title: "Evolution Games" },
    { img: "evolutionGames/19.webp", title: "Evolution Games" },
    { img: "evolutionGames/20.webp", title: "Evolution Games" },
    { img: "evolutionGames/21.webp", title: "Evolution Games" },
    { img: "evolutionGames/22.webp", title: "Evolution Games" },
    { img: "evolutionGames/23.webp", title: "Evolution Games" },
    { img: "evolutionGames/25.webp", title: "Evolution Games" },
    { img: "evolutionGames/26.webp", title: "Evolution Games" },
    { img: "evolutionGames/26.webp", title: "Evolution Games" },
    { img: "evolutionGames/27.webp", title: "Evolution Games" },
    { img: "evolutionGames/28.webp", title: "Evolution Games" },
    { img: "evolutionGames/29.webp", title: "Evolution Games" },
    { img: "evolutionGames/30.webp" , title: "Evolution Games"},
    { img: "evolutionGames/31.webp" , title: "Evolution Games"},
    { img: "evolutionGames/32.webp", title: "Evolution Games" },
    { img: "evolutionGames/33.webp", title: "Evolution Games" },
    { img: "evolutionGames/34.webp", title: "Evolution Games" },
    { img: "evolutionGames/35.webp" , title: "Evolution Games"},
    { img: "evolutionGames/36.webp" , title: "Evolution Games"},
    { img: "evolutionGames/37.webp" , title: "Evolution Games"},
    { img: "evolutionGames/38.webp" , title: "Evolution Games"},
    { img: "evolutionGames/39.webp" , title: "Evolution Games" },
    { img: "evolutionGames/40.webp" , title: "Evolution Games"},
    { img: "evolutionGames/41.webp" , title: "Evolution Games"},
    { img: "evolutionGames/42.webp" , title: "Evolution Games"},
    { img: "evolutionGames/43.webp", title: "Evolution Games" },
    { img: "evolutionGames/44.webp", title: "Evolution Games" },
    { img: "evolutionGames/45.webp", title: "Evolution Games" },
    { img: "evolutionGames/46.webp", title: "Evolution Games" },
    { img: "evolutionGames/47.webp", title: "Evolution Games" },
    { img: "evolutionGames/48.webp", title: "Evolution Games" },
    { img: "evolutionGames/49.webp", title: "Evolution Games" },
    { img: "evolutionGames/50.webp", title: "Evolution Games" },
    { img: "evolutionGames/51.webp", title: "Evolution Games" },
    { img: "evolutionGames/52.webp", title: "Evolution Games" },
    { img: "evolutionGames/53.webp", title: "Evolution Games" },
    { img: "evolutionGames/54.webp", title: "Evolution Games" },
    { img: "evolutionGames/55.webp", title: "Evolution Games" },
    { img: "evolutionGames/56.webp", title: "Evolution Games" },
    { img: "evolutionGames/57.webp", title: "Evolution Games" },
    { img: "evolutionGames/58.webp", title: "Evolution Games" },
    { img: "evolutionGames/59.webp", title: "Evolution Games" },
    { img: "evolutionGames/60.webp", title: "Evolution Games" },
  ];
  const microGames = [
    { img: "microGames/1.webp", title: "Micro Games" },
    { img: "microGames/2.webp", title: "Micro Games" },
    { img: "microGames/3.webp", title: "Micro Games" },
    { img: "microGames/4.webp", title: "Micro Games" },
    { img: "microGames/5.webp", title: "Micro Games" },
    { img: "microGames/6.webp", title: "Micro Games" },
    { img: "microGames/7.webp", title: "Micro Games" },
    { img: "microGames/8.webp", title: "Micro Games" },
    { img: "microGames/9.webp", title: "Micro Games" },
    { img: "microGames/10.webp", title: "Micro Games" },
    { img: "microGames/11.webp", title: "Micro Games" },
    { img: "microGames/13.webp", title: "Micro Games" },
    { img: "microGames/14.webp", title: "Micro Games" },
    { img: "microGames/15.webp", title: "Micro Games" },
    { img: "microGames/16.webp", title: "Micro Games" },
    { img: "microGames/17.webp", title: "Micro Games" },
    { img: "microGames/18.webp", title: "Micro Games" },
    { img: "microGames/19.webp", title: "Micro Games" },
    { img: "microGames/20.webp", title: "Micro Games" },
    { img: "microGames/21.webp", title: "Micro Games" },
    { img: "microGames/22.webp", title: "Micro Games" },
    { img: "microGames/23.webp", title: "Micro Games" },
    { img: "microGames/24.webp", title: "Micro Games" },
    { img: "microGames/25.webp", title: "Micro Games" },
    { img: "microGames/26.webp", title: "Micro Games" },
    { img: "microGames/27.webp", title: "Micro Games" },
    { img: "microGames/28.webp", title: "Micro Games" },
    { img: "microGames/29.webp", title: "Micro Games" },
    { img: "microGames/30.webp", title: "Micro Games" },
    { img: "microGames/158.webp", title: "Micro Games" },
    { img: "microGames/159.webp", title: "Micro Games" },
    { img: "microGames/160.webp", title: "Micro Games" },
    { img: "microGames/161.webp", title: "Micro Games" },
    { img: "microGames/162.webp", title: "Micro Games" },
    { img: "microGames/163.webp", title: "Micro Games" },
    { img: "microGames/164.webp", title: "Micro Games" },
    { img: "microGames/165.webp", title: "Micro Games" },
    { img: "microGames/166.webp", title: "Micro Games" },
    { img: "microGames/167.webp", title: "Micro Games" },
    { img: "microGames/168.webp", title: "Micro Games" },
    { img: "microGames/170.webp", title: "Micro Games" },
    { img: "microGames/173.webp", title: "Micro Games" },
    { img: "microGames/178.webp", title: "Micro Games" },
    { img: "microGames/179.webp", title: "Micro Games" },
    { img: "microGames/180.webp", title: "Micro Games" },
    { img: "microGames/184.webp", title: "Micro Games" },
    { img: "microGames/185.webp", title: "Micro Games" },
    { img: "microGames/186.webp", title: "Micro Games" },
    { img: "microGames/187.webp", title: "Micro Games" },
    { img: "microGames/204.webp", title: "Micro Games" },
    { img: "microGames/205.webp", title: "Micro Games" },
    { img: "microGames/206.webp", title: "Micro Games" },
    { img: "microGames/207.webp", title: "Micro Games" },
    { img: "microGames/218.webp", title: "Micro Games" },
    { img: "microGames/219.webp", title: "Micro Games" },
  ];
  const asiaGames = [
    { img: "asiaGames/1.webp", title: "Asia Games" },
    { img: "asiaGames/2.webp", title: "Asia Games" },
    { img: "asiaGames/3.webp", title: "Asia Games" },
    { img: "asiaGames/4.webp", title: "Asia Games" },
    { img: "asiaGames/5.webp", title: "Asia Games" },
    { img: "asiaGames/6.webp", title: "Asia Games" },
    { img: "asiaGames/7.webp", title: "Asia Games" },
    { img: "asiaGames/8.webp", title: "Asia Games" },
    { img: "asiaGames/9.webp", title: "Asia Games" },
    { img: "asiaGames/10.webp", title: "Asia Games" },
    { img: "asiaGames/11.webp", title: "Asia Games" },
    { img: "asiaGames/12.webp", title: "Asia Games" },
    { img: "asiaGames/13.webp", title: "Asia Games" },
    { img: "asiaGames/14.webp", title: "Asia Games" },
    { img: "asiaGames/15.webp", title: "Asia Games" },
    { img: "asiaGames/16.webp", title: "Asia Games" },
    { img: "asiaGames/17.webp", title: "Asia Games" },
    { img: "asiaGames/18.webp", title: "Asia Games" },
    { img: "asiaGames/19.webp", title: "Asia Games" },
    { img: "asiaGames/20.webp", title: "Asia Games" },
    { img: "asiaGames/21.webp", title: "Asia Games" },
    { img: "asiaGames/22.webp", title: "Asia Games" },
    { img: "asiaGames/23.webp", title: "Asia Games" },
    { img: "asiaGames/24.webp", title: "Asia Games" },
    { img: "asiaGames/25.webp", title: "Asia Games" },
  ];

  const dreamGames = [
    { img: "bigGames/1.webp", title: "Dream Games" },
    { img: "bigGames/3.webp", title: "Dream Games" },
    { img: "bigGames/4.webp", title: "Dream Games" },
    { img: "bigGames/5.webp", title: "Dream Games" },
    { img: "bigGames/7.webp", title: "Dream Games" },
    { img: "bigGames/8.webp", title: "Dream Games" },
  ];

  const sexyGames = [
    { img: "sexyGames/1.webp", title: "Sexy Games" },
    { img: "sexyGames/3.webp", title: "Sexy Games" },
    { img: "sexyGames/4.webp", title: "Sexy Games" },
    { img: "sexyGames/5.webp", title: "Sexy Games" },
    { img: "sexyGames/7.webp", title: "Sexy Games" },
    { img: "sexyGames/8.webp", title: "Sexy Games" },
    { img: "sexyGames/9.webp", title: "Sexy Games" },
    { img: "sexyGames/10.webp", title: "Sexy Games" },
    { img: "sexyGames/11.webp", title: "Sexy Games" },
    { img: "sexyGames/12.webp", title: "Sexy Games" },
    { img: "sexyGames/13.webp", title: "Sexy Games" },
  ];

  const live88 = [
    { img: "live88Games/41.webp", title: "Live 88 Games" },
    { img: "live88Games/42.webp", title: "Live 88 Games" },
    { img: "live88Games/43.webp", title: "Live 88 Games" },
    { img: "live88Games/44.webp", title: "Live 88 Games" },
    { img: "live88Games/45.webp", title: "Live 88 Games" },
    { img: "live88Games/46.webp", title: "Live 88 Games" },
    { img: "live88Games/47.webp", title: "Live 88 Games" },
    { img: "live88Games/48.webp", title: "Live 88 Games" },
    { img: "live88Games/49.webp", title: "Live 88 Games" },
    { img: "live88Games/50.webp", title: "Live 88 Games" },
    { img: "live88Games/51.webp", title: "Live 88 Games" },
    { img: "live88Games/52.webp", title: "Live 88 Games" },
    { img: "live88Games/53.webp", title: "Live 88 Games" },
    { img: "live88Games/54.webp", title: "Live 88 Games" },
    { img: "live88Games/55.webp", title: "Live 88 Games" },
    { img: "live88Games/56.webp", title: "Live 88 Games" },
    { img: "live88Games/57.webp", title: "Live 88 Games" },
    { img: "live88Games/58.webp", title: "Live 88 Games" },
    { img: "live88Games/59.webp", title: "Live 88 Games" },
    { img: "live88Games/60.webp", title: "Live 88 Games" },
    { img: "live88Games/61.webp", title: "Live 88 Games" },
    { img: "live88Games/62.webp", title: "Live 88 Games" },
    { img: "live88Games/63.webp", title: "Live 88 Games" },
    { img: "live88Games/64.webp", title: "Live 88 Games" },
    { img: "live88Games/65.webp", title: "Live 88 Games" },
    { img: "live88Games/66.webp", title: "Live 88 Games" },
    { img: "live88Games/72.webp", title: "Live 88 Games" },
    { img: "live88Games/73.webp", title: "Live 88 Games" },
    { img: "live88Games/74.webp", title: "Live 88 Games" },
    { img: "live88Games/75.webp", title: "Live 88 Games" },
    { img: "live88Games/76.webp", title: "Live 88 Games" },
    { img: "live88Games/77.webp", title: "Live 88 Games" },
    { img: "live88Games/78.webp", title: "Live 88 Games" },
    { img: "live88Games/90.webp", title: "Live 88 Games" },
    { img: "live88Games/97.webp", title: "Live 88 Games" },
    { img: "live88Games/98.webp", title: "Live 88 Games" },
    { img: "live88Games/103.webp", title: "Live 88 Games" },
    { img: "live88Games/103.webp", title: "Live 88 Games" },
    { img: "live88Games/104.webp", title: "Live 88 Games" },
    { img: "live88Games/106.webp", title: "Live 88 Games" },
    { img: "live88Games/107.webp", title: "Live 88 Games" },
    { img: "live88Games/108.webp", title: "Live 88 Games" },
    { img: "live88Games/115.webp", title: "Live 88 Games" },
    { img: "live88Games/125.webp", title: "Live 88 Games" },
    { img: "live88Games/126.webp", title: "Live 88 Games" },
    { img: "live88Games/130.webp", title: "Live 88 Games" },
    { img: "live88Games/131.webp", title: "Live 88 Games" },
    { img: "live88Games/132.webp", title: "Live 88 Games" },
    { img: "live88Games/133.webp", title: "Live 88 Games" },
    { img: "live88Games/134.webp", title: "Live 88 Games" },
    { img: "live88Games/135.webp", title: "Live 88 Games" },
    { img: "live88Games/136.webp", title: "Live 88 Games" },
    { img: "live88Games/137.webp", title: "Live 88 Games" },
    { img: "live88Games/138.webp", title: "Live 88 Games" },
  ];
  const playtechGames = [
    { img: "playTechGames/1.webp", title: "Playtech Games" },
    { img: "playTechGames/2.webp", title: "Playtech Games" },
    { img: "playTechGames/3.webp", title: "Playtech Games" },
    { img: "playTechGames/4.webp", title: "Playtech Games" },
    { img: "playTechGames/5.webp", title: "Playtech Games" },
    { img: "playTechGames/6.webp", title: "Playtech Games" },
    { img: "playTechGames/7.webp", title: "Playtech Games" },
    { img: "playTechGames/8.webp", title: "Playtech Games" },
    { img: "playTechGames/9.webp", title: "Playtech Games" },
    { img: "playTechGames/10.webp", title: "Playtech Games" },
    { img: "playTechGames/11.webp", title: "Playtech Games" },
    { img: "playTechGames/12.webp", title: "Playtech Games" },
    { img: "playTechGames/13.webp", title: "Playtech Games" },
    { img: "playTechGames/15.webp", title: "Playtech Games" },
    { img: "playTechGames/17.webp", title: "Playtech Games" },
    { img: "playTechGames/21.webp", title: "Playtech Games" },
    { img: "playTechGames/23.webp", title: "Playtech Games" },
    { img: "playTechGames/24.webp", title: "Playtech Games" },
    { img: "playTechGames/25.webp", title: "Playtech Games" },
    { img: "playTechGames/26.webp", title: "Playtech Games" },
    { img: "playTechGames/27.webp", title: "Playtech Games" },
    { img: "playTechGames/28.webp", title: "Playtech Games" },
    { img: "playTechGames/29.webp", title: "Playtech Games" },
    { img: "playTechGames/30.webp", title: "Playtech Games" },
    { img: "playTechGames/381.webp", title: "Playtech Games" },
    { img: "playTechGames/388.webp", title: "Playtech Games" },
    { img: "playTechGames/411.webp", title: "Playtech Games" },
    { img: "playTechGames/412.webp", title: "Playtech Games" },
    { img: "playTechGames/413.webp", title: "Playtech Games" },
    { img: "playTechGames/449.webp", title: "Playtech Games" },
    { img: "playTechGames/456.webp", title: "Playtech Games" },
    { img: "playTechGames/457.webp", title: "Playtech Games" },
    { img: "playTechGames/464.webp", title: "Playtech Games" },
    { img: "playTechGames/465.webp", title: "Playtech Games" },
    { img: "playTechGames/467.webp", title: "Playtech Games" },
    { img: "playTechGames/476.webp", title: "Playtech Games" },
    { img: "playTechGames/477.webp", title: "Playtech Games" },
    { img: "playTechGames/482.webp", title: "Playtech Games" },
    { img: "playTechGames/490.webp", title: "Playtech Games" },
    { img: "playTechGames/499.webp", title: "Playtech Games" },
    { img: "playTechGames/510.webp", title: "Playtech Games" },
  ];
  const ezugiGames = [
    { img: "ezugiGames/1.webp", title: "Ezugi games" },
    { img: "ezugiGames/2.webp", title: "Ezugi games" },
    { img: "ezugiGames/7.webp", title: "Ezugi games" },
    { img: "ezugiGames/12.webp", title: "Ezugi games" },
    { img: "ezugiGames/13.webp", title: "Ezugi games" },
    { img: "ezugiGames/14.webp", title: "Ezugi games" },
    { img: "ezugiGames/15.webp", title: "Ezugi games" },
    { img: "ezugiGames/16.webp", title: "Ezugi games" },
    { img: "ezugiGames/17.webp", title: "Ezugi games" },
    { img: "ezugiGames/19.webp", title: "Ezugi games" },
    { img: "ezugiGames/20.webp", title: "Ezugi games" },
    { img: "ezugiGames/21.webp", title: "Ezugi games" },
    { img: "ezugiGames/24.webp", title: "Ezugi games" },
    { img: "ezugiGames/25.webp", title: "Ezugi games" },
    { img: "ezugiGames/27.webp", title: "Ezugi games" },
    { img: "ezugiGames/29.webp", title: "Ezugi games" },
    { img: "ezugiGames/38.webp", title: "Ezugi games" },
    { img: "ezugiGames/39.webp", title: "Ezugi games" },
    { img: "ezugiGames/43.webp", title: "Ezugi games" },
    { img: "ezugiGames/46.webp", title: "Ezugi games" },
    { img: "ezugiGames/48.webp", title: "Ezugi games" },
    { img: "ezugiGames/50.webp", title: "Ezugi games" },
    { img: "ezugiGames/52.webp", title: "Ezugi games" },
    { img: "ezugiGames/53.webp", title: "Ezugi games" },
    { img: "ezugiGames/54.webp", title: "Ezugi games" },
    { img: "ezugiGames/55.webp", title: "Ezugi games" },
    { img: "ezugiGames/56.webp", title: "Ezugi games" },
    { img: "ezugiGames/58.webp", title: "Ezugi games" },
    { img: "ezugiGames/59.webp", title: "Ezugi games" },
    { img: "ezugiGames/60.webp", title: "Ezugi games" },
    { img: "ezugiGames/62.webp", title: "Ezugi games" },
    { img: "ezugiGames/63.webp", title: "Ezugi games" },
    { img: "ezugiGames/64.webp", title: "Ezugi games" },
    { img: "ezugiGames/65.webp", title: "Ezugi games" },
    { img: "ezugiGames/66.webp", title: "Ezugi games" },
    { img: "ezugiGames/67.webp", title: "Ezugi games" },
    { img: "ezugiGames/68.webp", title: "Ezugi games" },
    { img: "ezugiGames/69.webp", title: "Ezugi games" },
    { img: "ezugiGames/70.webp", title: "Ezugi games" },
    { img: "ezugiGames/71.webp", title: "Ezugi games" },
    { img: "ezugiGames/72.webp", title: "Ezugi games" },
    { img: "ezugiGames/73.webp", title: "Ezugi games" },
    { img: "ezugiGames/78.webp", title: "Ezugi games" },
    { img: "ezugiGames/79.webp", title: "Ezugi games" },
    { img: "ezugiGames/80.webp", title: "Ezugi games" },
    { img: "ezugiGames/81.webp", title: "Ezugi games" },
    { img: "ezugiGames/82.webp", title: "Ezugi games" },
  ];
  const skywindGames = [
    { img: "skywindGames/1.webp", title: "Skywind Games" },
    { img: "skywindGames/2.webp", title: "Skywind Games" },
    { img: "skywindGames/3.webp", title: "Skywind Games" },
    { img: "skywindGames/4.webp", title: "Skywind Games" },
    { img: "skywindGames/5.webp", title: "Skywind Games" },
    { img: "skywindGames/6.webp", title: "Skywind Games" },
    { img: "skywindGames/7.webp", title: "Skywind Games" },
    { img: "skywindGames/8.webp", title: "Skywind Games" },
    { img: "skywindGames/9.webp", title: "Skywind Games" },
    { img: "skywindGames/10.webp", title: "Skywind Games" },
    { img: "skywindGames/11.webp", title: "Skywind Games" },
    { img: "skywindGames/12.webp", title: "Skywind Games" },
    { img: "skywindGames/13.webp", title: "Skywind Games" },
    { img: "skywindGames/14.webp", title: "Skywind Games" },
    { img: "skywindGames/15.webp", title: "Skywind Games" },
    { img: "skywindGames/15.webp", title: "Skywind Games" },
    { img: "skywindGames/15.webp", title: "Skywind Games" },
    { img: "skywindGames/16.webp", title: "Skywind Games" },
    { img: "skywindGames/18.webp", title: "Skywind Games" },
    { img: "skywindGames/357.webp", title: "Skywind Games" },
    { img: "skywindGames/388.webp", title: "Skywind Games" },
    { img: "skywindGames/438.webp", title: "Skywind Games" },
    { img: "skywindGames/439.webp" },
    { img: "skywindGames/440.webp" },
    { img: "skywindGames/441.webp" },
    { img: "skywindGames/442.webp" },
    { img: "skywindGames/443.webp" },
    { img: "skywindGames/444.webp" },
    { img: "skywindGames/445.webp" },
    { img: "skywindGames/446.webp" },
    { img: "skywindGames/484.webp" },
    { img: "skywindGames/488.webp" },
    { img: "skywindGames/489.webp", title: "Skywind Games" },
    { img: "skywindGames/490.webp", title: "Skywind Games" },
  ];
  const pragmaticPlay = [
    { img: "pragmaticGames/131.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/132.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/133.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/134.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/154.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/155.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/157.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/158.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/159.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/160.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/161.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/162.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/163.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/164.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/165.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/166.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/167.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/195.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/196.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/197.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/202.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/203.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/204.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/205.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/206.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/207.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/208.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/220.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/235.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/236.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/242.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/243.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/250.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/277.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/278.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/287.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/289.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/291.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/292.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/293.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/294.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/295.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/296.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/297.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/298.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/319.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/320.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/322.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/323.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/324.webp", title: "Pragmatic Play Games" },
    { img: "pragmaticGames/325.webp", title: "Pragmatic Play Games" },
  ];
  const betGames = [
    { img: "betGames/1.webp", title: "Bet Games" },
    { img: "betGames/2.webp", title: "Bet Games" },
    { img: "betGames/3.webp", title: "Bet Games" },
    { img: "betGames/4.webp", title: "Bet Games" },
    { img: "betGames/5.webp", title: "Bet Games" },
    { img: "betGames/6.webp", title: "Bet Games" },
    { img: "betGames/7.webp", title: "Bet Games" },
    { img: "betGames/8.webp", title: "Bet Games" },
    { img: "betGames/9.webp", title: "Bet Games" },
    { img: "betGames/10.webp", title: "Bet Games" },
    { img: "betGames/11.webp", title: "Bet Games" },
    { img: "betGames/12.webp", title: "Bet Games" },
    { img: "betGames/13.webp", title: "Bet Games" },
    { img: "betGames/14.webp", title: "Bet Games" },
    { img: "betGames/15.webp", title: "Bet Games" },
    { img: "betGames/16.webp", title: "Bet Games" },
    { img: "betGames/17.webp", title: "Bet Games" },
    { img: "betGames/18.webp", title: "Bet Games" },
    { img: "betGames/19.webp", title: "Bet Games" },
    { img: "betGames/20.webp", title: "Bet Games" },
  ];
  const jiliGames = [
    { img: "slotGames/1.png", title: "Jili Games" },
    { img: "slotGames/2.png", title: "Jili Games" },
    { img: "slotGames/4.png", title: "Jili Games" },
    { img: "slotGames/5.png", title: "Jili Games" },
    { img: "slotGames/6.png", title: "Jili Games" },
    { img: "slotGames/8.png", title: "Jili Games" },
    { img: "slotGames/9.png", title: "Jili Games" },
    { img: "slotGames/10.png", title: "Jili Games" },
    { img: "slotGames/11.png", title: "Jili Games" },
    { img: "slotGames/12.png", title: "Jili Games" },
    { img: "slotGames/13.png", title: "Jili Games" },
    { img: "slotGames/14.png", title: "Jili Games" },
    { img: "slotGames/15.png", title: "Jili Games" },
    { img: "slotGames/16.png", title: "Jili Games" },
    { img: "slotGames/17.png", title: "Jili Games" },
    { img: "slotGames/18.png", title: "Jili Games" },
    { img: "slotGames/19.png", title: "Jili Games" },
    { img: "slotGames/20.png", title: "Jili Games" },
    { img: "slotGames/21.png", title: "Jili Games" },
    { img: "slotGames/22.png", title: "Jili Games" },
    { img: "slotGames/23.png", title: "Jili Games" },
    { img: "slotGames/24.png", title: "Jili Games" },
    { img: "slotGames/25.png", title: "Jili Games" },
    { img: "slotGames/26.png", title: "Jili Games" },
    { img: "slotGames/27.png", title: "Jili Games" },
    { img: "slotGames/28.png", title: "Jili Games" },
    { img: "slotGames/29.png", title: "Jili Games" },
    { img: "slotGames/30.png", title: "Jili Games" },
    { img: "slotGames/31.png", title: "Jili Games" },
    { img: "slotGames/32.png", title: "Jili Games" },
    { img: "slotGames/33.png", title: "Jili Games" },
    { img: "slotGames/34.png", title: "Jili Games" },
    { img: "slotGames/35.png", title: "Jili Games" },
    { img: "slotGames/36.png", title: "Jili Games" },
    { img: "slotGames/37.png", title: "Jili Games" },
    { img: "slotGames/38.png", title: "Jili Games" },
    { img: "slotGames/39.png", title: "Jili Games" },
    { img: "slotGames/40.png", title: "Jili Games" },
    { img: "slotGames/41.png", title: "Jili Games" },
    { img: "slotGames/42.png", title: "Jili Games" },
    { img: "slotGames/43.png", title: "Jili Games" },
    { img: "slotGames/44.png", title: "Jili Games" },
    { img: "slotGames/45.png", title: "Jili Games" },
    { img: "slotGames/47.png", title: "Jili Games" },
    { img: "slotGames/48.png", title: "Jili Games" },
    { img: "slotGames/49.png", title: "Jili Games" },
    { img: "slotGames/50.png", title: "Jili Games" },
  ];
  const habanero = [
    { img: "habaneroGames/1.webp", title: "Habanero Games" },
    { img: "habaneroGames/2.webp", title: "Habanero Games" },
    { img: "habaneroGames/3.webp", title: "Habanero Games" },
    { img: "habaneroGames/4.webp", title: "Habanero Games" },
    { img: "habaneroGames/5.webp", title: "Habanero Games" },
    { img: "habaneroGames/6.webp", title: "Habanero Games" },
    { img: "habaneroGames/7.webp", title: "Habanero Games" },
    { img: "habaneroGames/8.webp", title: "Habanero Games" },
    { img: "habaneroGames/9.webp", title: "Habanero Games" },
    { img: "habaneroGames/10.webp", title: "Habanero Games" },
    { img: "habaneroGames/11.webp", title: "Habanero Games" },
    { img: "habaneroGames/12.webp", title: "Habanero Games" },
    { img: "habaneroGames/13.webp", title: "Habanero Games" },
    { img: "habaneroGames/14.webp", title: "Habanero Games" },
    { img: "habaneroGames/15.webp", title: "Habanero Games" },
    { img: "habaneroGames/16.webp", title: "Habanero Games" },
    { img: "habaneroGames/17.webp", title: "Habanero Games" },
    { img: "habaneroGames/18.webp", title: "Habanero Games" },
    { img: "habaneroGames/19.webp", title: "Habanero Games" },
    { img: "habaneroGames/20.webp", title: "Habanero Games" },
    { img: "habaneroGames/21.webp", title: "Habanero Games" },
    { img: "habaneroGames/22.webp", title: "Habanero Games" },
    { img: "habaneroGames/23.webp", title: "Habanero Games" },
    { img: "habaneroGames/24.webp", title: "Habanero Games" },
    { img: "habaneroGames/25.webp", title: "Habanero Games" },
    { img: "habaneroGames/26.webp", title: "Habanero Games" },
    { img: "habaneroGames/27.webp", title: "Habanero Games" },
    { img: "habaneroGames/28.webp", title: "Habanero Games" },
    { img: "habaneroGames/29.webp", title: "Habanero Games" },
    { img: "habaneroGames/30.webp", title: "Habanero Games" },
    { img: "habaneroGames/31.webp", title: "Habanero Games" },
    { img: "habaneroGames/32.webp", title: "Habanero Games" },
    { img: "habaneroGames/33.webp", title: "Habanero Games" },
    { img: "habaneroGames/34.webp", title: "Habanero Games" },
    { img: "habaneroGames/35.webp", title: "Habanero Games" },
    { img: "habaneroGames/36.webp", title: "Habanero Games" },
    { img: "habaneroGames/37.webp", title: "Habanero Games" },
    { img: "habaneroGames/38.webp", title: "Habanero Games" },
    { img: "habaneroGames/39.webp", title: "Habanero Games" },
    { img: "habaneroGames/40.webp", title: "Habanero Games" },
    { img: "habaneroGames/41.webp", title: "Habanero Games" },
    { img: "habaneroGames/42.webp", title: "Habanero Games" },
    { img: "habaneroGames/43.webp", title: "Habanero Games" },
    { img: "habaneroGames/44.webp", title: "Habanero Games" },
    { img: "habaneroGames/45.webp", title: "Habanero Games" },
    { img: "habaneroGames/46.webp", title: "Habanero Games" },
    { img: "habaneroGames/47.webp", title: "Habanero Games" },
    { img: "habaneroGames/48.webp", title: "Habanero Games" },
    { img: "habaneroGames/49.webp", title: "Habanero Games" },
    { img: "habaneroGames/50.webp", title: "Habanero Games" },
  ];
  const elysium = [
    { img: "elysium/466.webp", title: "Elysium Games" },
    { img: "elysium/479.webp", title: "Elysium Games" },
    { img: "elysium/480.webp", title: "Elysium Games" },
    { img: "elysium/485.webp", title: "Elysium Games" },
    { img: "elysium/486.webp", title: "Elysium Games" },
    { img: "elysium/495.webp", title: "Elysium Games" },
    { img: "elysium/504.webp", title: "Elysium Games" },
    { img: "elysium/515.webp", title: "Elysium Games" },
    { img: "elysium/516.webp", title: "Elysium Games" },
    { img: "elysium/517.webp", title: "Elysium Games" },
    { img: "elysium/526.webp", title: "Elysium Games" },
    { img: "elysium/531.webp", title: "Elysium Games" },
  ];
  const spadeGaming = [
    { img: "spadeGaming/1.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/2.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/3.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/4.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/5.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/7.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/8.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/9.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/10.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/11.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/12.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/13.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/14.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/15.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/17.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/18.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/19.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/20.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/21.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/22.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/23.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/25.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/26.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/29.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/30.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/31.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/32.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/33.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/34.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/35.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/36.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/37.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/38.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/39.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/41.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/42.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/43.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/44.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/48.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/49.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/50.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/53.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/56.webp", title: "SpadeGaming Games" },
    { img: "spadeGaming/58.webp", title: "SpadeGaming Games" },
  ];
  const playngo = [
    { img: "playngoGames/1.png", title: "Play'N Go Games" },
    { img: "playngoGames/2.png", title: "Play'N Go Games" },
    { img: "playngoGames/3.png", title: "Play'N Go Games" },
    { img: "playngoGames/4.png", title: "Play'N Go Games" },
    { img: "playngoGames/5.png", title: "Play'N Go Games" },
    { img: "playngoGames/6.png", title: "Play'N Go Games" },
    { img: "playngoGames/7.png", title: "Play'N Go Games" },
    { img: "playngoGames/8.png", title: "Play'N Go Games" },
    { img: "playngoGames/9.png", title: "Play'N Go Games" },
    { img: "playngoGames/10.png", title: "Play'N Go Games" },
    { img: "playngoGames/11.png", title: "Play'N Go Games" },
    { img: "playngoGames/12.png", title: "Play'N Go Games" },
    { img: "playngoGames/13.png", title: "Play'N Go Games" },
    { img: "playngoGames/14.png", title: "Play'N Go Games" },
    { img: "playngoGames/15.png", title: "Play'N Go Games" },
    { img: "playngoGames/16.png", title: "Play'N Go Games" },
    { img: "playngoGames/17.png", title: "Play'N Go Games" },
    { img: "playngoGames/18.png", title: "Play'N Go Games" },
    { img: "playngoGames/19.png", title: "Play'N Go Games" },
    { img: "playngoGames/21.png", title: "Play'N Go Games" },
    { img: "playngoGames/22.png", title: "Play'N Go Games" },
    { img: "playngoGames/24.png", title: "Play'N Go Games" },
    { img: "playngoGames/25.png", title: "Play'N Go Games" },
    { img: "playngoGames/26.png", title: "Play'N Go Games" },
    { img: "playngoGames/27.png", title: "Play'N Go Games" },
    { img: "playngoGames/28.png", title: "Play'N Go Games" },
    { img: "playngoGames/29.png", title: "Play'N Go Games" },
    { img: "playngoGames/30.png", title: "Play'N Go Games" },
    { img: "playngoGames/31.png", title: "Play'N Go Games" },
    { img: "playngoGames/32.png", title: "Play'N Go Games" },
    { img: "playngoGames/33.png", title: "Play'N Go Games" },
    { img: "playngoGames/34.png", title: "Play'N Go Games" },
    { img: "playngoGames/35.png", title: "Play'N Go Games" },
    { img: "playngoGames/36.png", title: "Play'N Go Games" },
    { img: "playngoGames/37.png", title: "Play'N Go Games" },
    { img: "playngoGames/38.png", title: "Play'N Go Games" },
    { img: "playngoGames/39.png", title: "Play'N Go Games" },
    { img: "playngoGames/40.png", title: "Play'N Go Games" },
    { img: "playngoGames/41.png", title: "Play'N Go Games" },
    { img: "playngoGames/42.png", title: "Play'N Go Games" },
    { img: "playngoGames/43.png", title: "Play'N Go Games" },
    { img: "playngoGames/44.png", title: "Play'N Go Games" },
    { img: "playngoGames/45.png", title: "Play'N Go Games" },
    { img: "playngoGames/46.png", title: "Play'N Go Games" },
    { img: "playngoGames/47.png", title: "Play'N Go Games" },
    { img: "playngoGames/48.png", title: "Play'N Go Games" },
    { img: "playngoGames/49.png", title: "Play'N Go Games" },
    { img: "playngoGames/50.png", title: "Play'N Go Games" },
  ];
  const worldMatch = [
    { img: "worldGames/1.png", title: "World Match " },
    { img: "worldGames/2.png", title: "World Match " },
    { img: "worldGames/3.png", title: "World Match " },
    { img: "worldGames/4.png", title: "World Match " },
    { img: "worldGames/5.png", title: "World Match " },
    { img: "worldGames/6.png", title: "World Match " },
    { img: "worldGames/7.png", title: "World Match " },
    { img: "worldGames/8.png", title: "World Match " },
    { img: "worldGames/9.png", title: "World Match " },
    { img: "worldGames/10.png", title: "World Match " },
    { img: "worldGames/11.png", title: "World Match " },
    { img: "worldGames/12.png", title: "World Match " },
    { img: "worldGames/13.png", title: "World Match " },
    { img: "worldGames/14.png", title: "World Match " },
    { img: "worldGames/16.png", title: "World Match " },
    { img: "worldGames/17.png", title: "World Match " },
    { img: "worldGames/18.png", title: "World Match " },
    { img: "worldGames/19.png", title: "World Match " },
    { img: "worldGames/20.png", title: "World Match " },
    { img: "worldGames/21.png", title: "World Match " },
    { img: "worldGames/22.png", title: "World Match " },
    { img: "worldGames/23.png", title: "World Match " },
    { img: "worldGames/24.png", title: "World Match " },
    { img: "worldGames/25.png", title: "World Match " },
    { img: "worldGames/26.png", title: "World Match " },
    { img: "worldGames/27.png", title: "World Match " },
    { img: "worldGames/28.png", title: "World Match " },
    { img: "worldGames/29.png", title: "World Match " },
    { img: "worldGames/30.png", title: "World Match " },
    { img: "worldGames/31.png", title: "World Match " },
    { img: "worldGames/32.png", title: "World Match " },
    { img: "worldGames/33.png", title: "World Match " },
    { img: "worldGames/34.png", title: "World Match " },
    { img: "worldGames/35.png", title: "World Match " },
    { img: "worldGames/36.png", title: "World Match " },
    { img: "worldGames/37.png", title: "World Match " },
    { img: "worldGames/38.png", title: "World Match " },
    { img: "worldGames/39.png", title: "World Match " },
    { img: "worldGames/40.png", title: "World Match " },
    { img: "worldGames/41.png", title: "World Match " },
    { img: "worldGames/42.png", title: "World Match " },
    { img: "worldGames/43.png", title: "World Match " },
    { img: "worldGames/44.png", title: "World Match " },
    { img: "worldGames/45.png", title: "World Match " },
    { img: "worldGames/46.png", title: "World Match " },
    { img: "worldGames/47.png", title: "World Match " },
    { img: "worldGames/48.png", title: "World Match " },
    { img: "worldGames/50.png", title: "World Match " },
    { img: "worldGames/51.png", title: "World Match " },
  ];

  const oneTouchGames = [
    { img: "oneTouchGames/1.png", title: "OneTouch Games" },
    { img: "oneTouchGames/2.png", title: "OneTouch Games" },
    { img: "oneTouchGames/3.png", title: "OneTouch Games" },
    { img: "oneTouchGames/4.png", title: "OneTouch Games" },
    { img: "oneTouchGames/5.png", title: "OneTouch Games" },
    { img: "oneTouchGames/6.png", title: "OneTouch Games" },
    { img: "oneTouchGames/7.png", title: "OneTouch Games" },
    { img: "oneTouchGames/8.png", title: "OneTouch Games" },
    { img: "oneTouchGames/9.png", title: "OneTouch Games" },
    { img: "oneTouchGames/10.png", title: "OneTouch Games" },
    { img: "oneTouchGames/11.png", title: "OneTouch Games" },
    { img: "oneTouchGames/12.png", title: "OneTouch Games" },
    { img: "oneTouchGames/13.png", title: "OneTouch Games" },
    { img: "oneTouchGames/14.png", title: "OneTouch Games" },
    { img: "oneTouchGames/15.png", title: "OneTouch Games" },
    { img: "oneTouchGames/16.png", title: "OneTouch Games" },
    { img: "oneTouchGames/17.png", title: "OneTouch Games" },
    { img: "oneTouchGames/18.png", title: "OneTouch Games" },
    { img: "oneTouchGames/19.png", title: "OneTouch Games" },
    { img: "oneTouchGames/20.png", title: "OneTouch Games" },
    { img: "oneTouchGames/21.png", title: "OneTouch Games" },
    { img: "oneTouchGames/22.png", title: "OneTouch Games" },
    { img: "oneTouchGames/23.png", title: "OneTouch Games" },
    { img: "oneTouchGames/24.png", title: "OneTouch Games" },
    { img: "oneTouchGames/25.png", title: "OneTouch Games" },
    { img: "oneTouchGames/26.png", title: "OneTouch Games" },
    { img: "oneTouchGames/27.png", title: "OneTouch Games" },
    { img: "oneTouchGames/28.png", title: "OneTouch Games" },
    { img: "oneTouchGames/29.png", title: "OneTouch Games" },
    { img: "oneTouchGames/30.png", title: "OneTouch Games" },
    { img: "oneTouchGames/31.png", title: "OneTouch Games" },
    { img: "oneTouchGames/32.png", title: "OneTouch Games" },
    { img: "oneTouchGames/33.png", title: "OneTouch Games" },
    { img: "oneTouchGames/34.png", title: "OneTouch Games" },
    { img: "oneTouchGames/35.png", title: "OneTouch Games" },
    { img: "oneTouchGames/36.png", title: "OneTouch Games" },
    { img: "oneTouchGames/37.png", title: "OneTouch Games" },
    { img: "oneTouchGames/38.png", title: "OneTouch Games" },
    { img: "oneTouchGames/40.png", title: "OneTouch Games" },
    { img: "oneTouchGames/67.png", title: "OneTouch Games" },
    { img: "oneTouchGames/68.png", title: "OneTouch Games" },
    { img: "oneTouchGames/70.png", title: "OneTouch Games" },
    { img: "oneTouchGames/71.png", title: "OneTouch Games" },
    { img: "oneTouchGames/80.png", title: "OneTouch Games" },
    { img: "oneTouchGames/81.png", title: "OneTouch Games" },
    { img: "oneTouchGames/82.png", title: "OneTouch Games" },
    { img: "oneTouchGames/83.png", title: "OneTouch Games" },
    { img: "oneTouchGames/84.png", title: "OneTouch Games" },
    { img: "oneTouchGames/85.png", title: "OneTouch Games" },
    { img: "oneTouchGames/86.png", title: "OneTouch Games" },
    { img: "oneTouchGames/87.png", title: "OneTouch Games" },
    { img: "oneTouchGames/88.png", title: "OneTouch Games" },
    { img: "oneTouchGames/89.png", title: "OneTouch Games" },
    { img: "oneTouchGames/91.png", title: "OneTouch Games" },
    { img: "oneTouchGames/92.png", title: "OneTouch Games" },
    { img: "oneTouchGames/94.png", title: "OneTouch Games" },
    { img: "oneTouchGames/95.png", title: "OneTouch Games" },
    { img: "oneTouchGames/96.png", title: "OneTouch Games" },
  ];

  const redTigerGames = [
    { img: "redTigerGames/57.png", title: "Red Tiger Games" },
    { img: "redTigerGames/58.png", title: "Red Tiger Games" },
    { img: "redTigerGames/59.png", title: "Red Tiger Games" },
    { img: "redTigerGames/60.png", title: "Red Tiger Games" },
    { img: "redTigerGames/61.png", title: "Red Tiger Games" },
    { img: "redTigerGames/62.png", title: "Red Tiger Games" },
    { img: "redTigerGames/63.png", title: "Red Tiger Games" },
    { img: "redTigerGames/64.png", title: "Red Tiger Games" },
    { img: "redTigerGames/65.png", title: "Red Tiger Games" },
    { img: "redTigerGames/66.png", title: "Red Tiger Games" },
    { img: "redTigerGames/67.png", title: "Red Tiger Games" },
    { img: "redTigerGames/68.png", title: "Red Tiger Games" },
    { img: "redTigerGames/69.png", title: "Red Tiger Games" },
    { img: "redTigerGames/70.png", title: "Red Tiger Games" },
    { img: "redTigerGames/71.png", title: "Red Tiger Games" },
    { img: "redTigerGames/72.png", title: "Red Tiger Games" },
    { img: "redTigerGames/73.png", title: "Red Tiger Games" },
    { img: "redTigerGames/74.png", title: "Red Tiger Games" },
    { img: "redTigerGames/75.png", title: "Red Tiger Games" },
    { img: "redTigerGames/76.png", title: "Red Tiger Games" },
    { img: "redTigerGames/88.png", title: "Red Tiger Games" },
    { img: "redTigerGames/89png", title: "Red Tiger Games" },
    { img: "redTigerGames/90.png", title: "Red Tiger Games" },
    { img: "redTigerGames/91.png", title: "Red Tiger Games" },
    { img: "redTigerGames/92.png", title: "Red Tiger Games" },
    { img: "redTigerGames/93.png", title: "Red Tiger Games" },
    { img: "redTigerGames/94.png", title: "Red Tiger Games" },
    { img: "redTigerGames/95.png", title: "Red Tiger Games" },
    { img: "redTigerGames/96.png", title: "Red Tiger Games" },
    { img: "redTigerGames/97.png", title: "Red Tiger Games" },
    { img: "redTigerGames/98.png", title: "Red Tiger Games" },
    { img: "redTigerGames/99.png", title: "Red Tiger Games" },
    { img: "redTigerGames/100.png", title: "Red Tiger Games" },
    { img: "redTigerGames/101.png", title: "Red Tiger Games" },
    { img: "redTigerGames/102.png", title: "Red Tiger Games" },
    { img: "redTigerGames/103.png", title: "Red Tiger Games" },
    { img: "redTigerGames/104.png", title: "Red Tiger Games" },
    { img: "redTigerGames/105.png", title: "Red Tiger Games" },
    { img: "redTigerGames/106.png", title: "Red Tiger Games" },
    { img: "redTigerGames/107.png", title: "Red Tiger Games" },
    { img: "redTigerGames/108.png", title: "Red Tiger Games" },
    { img: "redTigerGames/109.png", title: "Red Tiger Games" },
    { img: "redTigerGames/110.png", title: "Red Tiger Games" },
    { img: "redTigerGames/111.png", title: "Red Tiger Games" },
    { img: "redTigerGames/112.png", title: "Red Tiger Games" },
    { img: "redTigerGames/113.png", title: "Red Tiger Games" },
    { img: "redTigerGames/114.png", title: "Red Tiger Games" },
    { img: "redTigerGames/115.png", title: "Red Tiger Games" },
    { img: "redTigerGames/116.png", title: "Red Tiger Games" },
    { img: "redTigerGames/117.png", title: "Red Tiger Games" },
    { img: "redTigerGames/118.png", title: "Red Tiger Games" },
    { img: "redTigerGames/119.png", title: "Red Tiger Games" },
    { img: "redTigerGames/120.png", title: "Red Tiger Games" },
    { img: "redTigerGames/121.png", title: "Red Tiger Games" },
    { img: "redTigerGames/122.png", title: "Red Tiger Games" },
    { img: "redTigerGames/123.png", title: "Red Tiger Games" },
    { img: "redTigerGames/124.png", title: "Red Tiger Games" },
    { img: "redTigerGames/125.png", title: "Red Tiger Games" },
  ];

  const netentGames = [
    { img: "netentGames/36.png", title: "Netent Games" },
    { img: "netentGames/37.png", title: "Netent Games" },
    { img: "netentGames/38.png", title: "Netent Games" },
    { img: "netentGames/39.png", title: "Netent Games" },
    { img: "netentGames/40.png", title: "Netent Games" },
    { img: "netentGames/41.png", title: "Netent Games" },
    { img: "netentGames/42.png", title: "Netent Games" },
    { img: "netentGames/43.png", title: "Netent Games" },
    { img: "netentGames/44.png", title: "Netent Games" },
    { img: "netentGames/45.png", title: "Netent Games" },
    { img: "netentGames/46.png", title: "Netent Games" },
    { img: "netentGames/47.png", title: "Netent Games" },
    { img: "netentGames/48.png", title: "Netent Games" },
    { img: "netentGames/49.png", title: "Netent Games" },
    { img: "netentGames/50.png", title: "Netent Games" },
    { img: "netentGames/51.png", title: "Netent Games" },
    { img: "netentGames/52.png", title: "Netent Games" },
    { img: "netentGames/53.png", title: "Netent Games" },
    { img: "netentGames/54.png", title: "Netent Games" },
    { img: "netentGames/55.png", title: "Netent Games" },
    { img: "netentGames/56.png", title: "Netent Games" },
    { img: "netentGames/78.png", title: "Netent Games" },
    { img: "netentGames/79.png", title: "Netent Games" },
    { img: "netentGames/80.png", title: "Netent Games" },
    { img: "netentGames/81.png", title: "Netent Games" },
    { img: "netentGames/82.png", title: "Netent Games" },
    { img: "netentGames/83.png", title: "Netent Games" },
    { img: "netentGames/84.png", title: "Netent Games" },
    { img: "netentGames/85.png", title: "Netent Games" },
    { img: "netentGames/86.png", title: "Netent Games" },
    { img: "netentGames/87.png", title: "Netent Games" },
    { img: "netentGames/231.png", title: "Netent Games" },
    { img: "netentGames/234.png", title: "Netent Games" },
    { img: "netentGames/235.png", title: "Netent Games" },
    { img: "netentGames/236.png", title: "Netent Games" },
    { img: "netentGames/237.png", title: "Netent Games" },
    { img: "netentGames/238.png", title: "Netent Games" },
    { img: "netentGames/239.png", title: "Netent Games" },
    { img: "netentGames/240.png", title: "Netent Games" },
    { img: "netentGames/241.png", title: "Netent Games" },
    { img: "netentGames/242.png", title: "Netent Games" },
    { img: "netentGames/243.png", title: "Netent Games" },
    { img: "netentGames/245.png", title: "Netent Games" },
    { img: "netentGames/246.png", title: "Netent Games" },
    { img: "netentGames/247.png", title: "Netent Games" },
    { img: "netentGames/249.png", title: "Netent Games" },
    { img: "netentGames/250.png", title: "Netent Games" },
    { img: "netentGames/251.png", title: "Netent Games" },
    { img: "netentGames/252.png", title: "Netent Games" },
    { img: "netentGames/253.png", title: "Netent Games" },
    { img: "netentGames/254.png", title: "Netent Games" },
    { img: "netentGames/255.png", title: "Netent Games" },
    { img: "netentGames/256.png", title: "Netent Games" },
    { img: "netentGames/257.png", title: "Netent Games" },
    { img: "netentGames/259.png", title: "Netent Games" },
    { img: "netentGames/260.png", title: "Netent Games" },
  ];

  const drasilGames = [
    { img: "drasilgames/481.png", title: "YGGDrasil Games" },
    { img: "drasilgames/482.png", title: "YGGDrasil Games" },
    { img: "drasilgames/483.png", title: "YGGDrasil Games" },
    { img: "drasilgames/484.png", title: "YGGDrasil Games" },
    { img: "drasilgames/485.png", title: "YGGDrasil Games" },
    { img: "drasilgames/486.png", title: "YGGDrasil Games" },
    { img: "drasilgames/487.png", title: "YGGDrasil Games" },
    { img: "drasilgames/488.png", title: "YGGDrasil Games" },
    { img: "drasilgames/489.png", title: "YGGDrasil Games" },
    { img: "drasilgames/490.png", title: "YGGDrasil Games" },
    { img: "drasilgames/491.png", title: "YGGDrasil Games" },
    { img: "drasilgames/492.png", title: "YGGDrasil Games" },
    { img: "drasilgames/493.png", title: "YGGDrasil Games" },
    { img: "drasilgames/494.png", title: "YGGDrasil Games" },
    { img: "drasilgames/495.png", title: "YGGDrasil Games" },
    { img: "drasilgames/496.png", title: "YGGDrasil Games" },
    { img: "drasilgames/497.png", title: "YGGDrasil Games" },
    { img: "drasilgames/498.png", title: "YGGDrasil Games" },
    { img: "drasilgames/499.png", title: "YGGDrasil Games" },
    { img: "drasilgames/500.png", title: "YGGDrasil Games" },
    { img: "drasilgames/501.png", title: "YGGDrasil Games" },
    { img: "drasilgames/502.png", title: "YGGDrasil Games" },
    { img: "drasilgames/503.png", title: "YGGDrasil Games" },
    { img: "drasilgames/504.png", title: "YGGDrasil Games" },
    { img: "drasilgames/505.png", title: "YGGDrasil Games" },
    { img: "drasilgames/506.png", title: "YGGDrasil Games" },
    { img: "drasilgames/507.png", title: "YGGDrasil Games" },
    { img: "drasilgames/508.png", title: "YGGDrasil Games" },
    { img: "drasilgames/509.png", title: "YGGDrasil Games" },
    { img: "drasilgames/510.png", title: "YGGDrasil Games" },
    { img: "drasilgames/511.png", title: "YGGDrasil Games" },
    { img: "drasilgames/512.png", title: "YGGDrasil Games" },
    { img: "drasilgames/513.png", title: "YGGDrasil Games" },
    { img: "drasilgames/514.png", title: "YGGDrasil Games" },
    { img: "drasilgames/515.png", title: "YGGDrasil Games" },
    { img: "drasilgames/516.png", title: "YGGDrasil Games" },
    { img: "drasilgames/517.png", title: "YGGDrasil Games" },
    { img: "drasilgames/518.png", title: "YGGDrasil Games" },
    { img: "drasilgames/519.png", title: "YGGDrasil Games" },
    { img: "drasilgames/520.png", title: "YGGDrasil Games" },
    { img: "drasilgames/521.png", title: "YGGDrasil Games" },
    { img: "drasilgames/522.png", title: "YGGDrasil Games" },
    { img: "drasilgames/523.png", title: "YGGDrasil Games" },
    { img: "drasilgames/524.png", title: "YGGDrasil Games" },
    { img: "drasilgames/525.png", title: "YGGDrasil Games" },
    { img: "drasilgames/526.png", title: "YGGDrasil Games" },
    { img: "drasilgames/527.png", title: "YGGDrasil Games" },
    { img: "drasilgames/528.png", title: "YGGDrasil Games" },
    { img: "drasilgames/529.png", title: "YGGDrasil Games" },
    { img: "drasilgames/530.png", title: "YGGDrasil Games" },
  ];
  const playSonGames = [
    { img: "playSonGames/19.png", title: "Playson Games" },
    { img: "playSonGames/47.png", title: "Playson Games" },
    { img: "playSonGames/65.png", title: "Playson Games" },
    { img: "playSonGames/74.png", title: "Playson Games" },
    { img: "playSonGames/81.png", title: "Playson Games" },
    { img: "playSonGames/82.png", title: "Playson Games" },
    { img: "playSonGames/90.png", title: "Playson Games" },
    { img: "playSonGames/97.png", title: "Playson Games" },
    { img: "playSonGames/100.png", title: "Playson Games" },
    { img: "playSonGames/117.png", title: "Playson Games" },
    { img: "playSonGames/127.png", title: "Playson Games" },
    { img: "playSonGames/139.png", title: "Playson Games" },
    { img: "playSonGames/140.png", title: "Playson Games" },
    { img: "playSonGames/143.png", title: "Playson Games" },
    { img: "playSonGames/153.png", title: "Playson Games" },
    { img: "playSonGames/154.png", title: "Playson Games" },
    { img: "playSonGames/160.png", title: "Playson Games" },
    { img: "playSonGames/162.png", title: "Playson Games" },
    { img: "playSonGames/166.png", title: "Playson Games" },
    { img: "playSonGames/168.png", title: "Playson Games" },
    { img: "playSonGames/174.png", title: "Playson Games" },
    { img: "playSonGames/180.png", title: "Playson Games" },
    { img: "playSonGames/181.png", title: "Playson Games" },
    { img: "playSonGames/184.png", title: "Playson Games" },
    { img: "playSonGames/186.png", title: "Playson Games" },
    { img: "playSonGames/188.png", title: "Playson Games" },
    { img: "playSonGames/190.png", title: "Playson Games" },
    { img: "playSonGames/193.png", title: "Playson Games" },
    { img: "playSonGames/195.png", title: "Playson Games" },
    { img: "playSonGames/196.png", title: "Playson Games" },
    { img: "playSonGames/200.png", title: "Playson Games" },
    { img: "playSonGames/203.png", title: "Playson Games" },
    { img: "playSonGames/205.png", title: "Playson Games" },
    { img: "playSonGames/208.png", title: "Playson Games" },
    { img: "playSonGames/213.png", title: "Playson Games" },
    { img: "playSonGames/214.png", title: "Playson Games" },
    { img: "playSonGames/217.png", title: "Playson Games" },
    { img: "playSonGames/219.png", title: "Playson Games" },
    { img: "playSonGames/221.png", title: "Playson Games" },
    { img: "playSonGames/222.png", title: "Playson Games" },
    { img: "playSonGames/223.png", title: "Playson Games" },
    { img: "playSonGames/224.png", title: "Playson Games" },
    { img: "playSonGames/227.png", title: "Playson Games" },
    { img: "playSonGames/229.png", title: "Playson Games" },
    { img: "playSonGames/231.png", title: "Playson Games" },
    { img: "playSonGames/241.png", title: "Playson Games" },
    { img: "playSonGames/242.png", title: "Playson Games" },
    { img: "playSonGames/243.png", title: "Playson Games" },
  ];

  const cq9Games = [
    { img: "cq9Games/1.png", title: "CQ9 Games" },
    { img: "cq9Games/3.png", title: "CQ9 Games" },
    { img: "cq9Games/4.png", title: "CQ9 Games" },
    { img: "cq9Games/6.png", title: "CQ9 Games" },
    { img: "cq9Games/7.png", title: "CQ9 Games" },
    { img: "cq9Games/8.png", title: "CQ9 Games" },
    { img: "cq9Games/9.png", title: "CQ9 Games" },
    { img: "cq9Games/10.png", title: "CQ9 Games" },
    { img: "cq9Games/11.png", title: "CQ9 Games" },
    { img: "cq9Games/13.png", title: "CQ9 Games" },
    { img: "cq9Games/14.png", title: "CQ9 Games" },
    { img: "cq9Games/15.png", title: "CQ9 Games" },
    { img: "cq9Games/16.png", title: "CQ9 Games" },
    { img: "cq9Games/17.png", title: "CQ9 Games" },
    { img: "cq9Games/18.png", title: "CQ9 Games" },
    { img: "cq9Games/19.png", title: "CQ9 Games" },
    { img: "cq9Games/20.png", title: "CQ9 Games" },
    { img: "cq9Games/23.png", title: "CQ9 Games" },
    { img: "cq9Games/24.png", title: "CQ9 Games" },
    { img: "cq9Games/25.png", title: "CQ9 Games" },
    { img: "cq9Games/26.png", title: "CQ9 Games" },
    { img: "cq9Games/27.png", title: "CQ9 Games" },
    { img: "cq9Games/28.png", title: "CQ9 Games" },
    { img: "cq9Games/29.png", title: "CQ9 Games" },
    { img: "cq9Games/30.png", title: "CQ9 Games" },
    { img: "cq9Games/31.png", title: "CQ9 Games" },
    { img: "cq9Games/32.png", title: "CQ9 Games" },
    { img: "cq9Games/33.png", title: "CQ9 Games" },
    { img: "cq9Games/34.png", title: "CQ9 Games" },
    { img: "cq9Games/35.png", title: "CQ9 Games" },
    { img: "cq9Games/37.png", title: "CQ9 Games" },
    { img: "cq9Games/40.png", title: "CQ9 Games" },
    { img: "cq9Games/41.png", title: "CQ9 Games" },
    { img: "cq9Games/44.png", title: "CQ9 Games" },
    { img: "cq9Games/45.png", title: "CQ9 Games" },
    { img: "cq9Games/46.png", title: "CQ9 Games" },
    { img: "cq9Games/47.png", title: "CQ9 Games" },
    { img: "cq9Games/48.png", title: "CQ9 Games" },
    { img: "cq9Games/49.png", title: "CQ9 Games" },
    { img: "cq9Games/50.png", title: "CQ9 Games" },
    { img: "cq9Games/51.png", title: "CQ9 Games" },
    { img: "cq9Games/53.png", title: "CQ9 Games" },
    { img: "cq9Games/54.png", title: "CQ9 Games" },
    { img: "cq9Games/55.png", title: "CQ9 Games" },
    { img: "cq9Games/56.png", title: "CQ9 Games" },
    { img: "cq9Games/57png", title: "CQ9 Games" },
    { img: "cq9Games/58.png", title: "CQ9 Games" },
    { img: "cq9Games/59.png", title: "CQ9 Games" },
    { img: "cq9Games/60.png", title: "CQ9 Games" },
  ];
  const wazdanGames = [
    { img: "wazdanGames/1.png", title: "Wazdan Games" },
    { img: "wazdanGames/2.png", title: "Wazdan Games" },
    { img: "wazdanGames/3.png", title: "Wazdan Games" },
    { img: "wazdanGames/4.png", title: "Wazdan Games" },
    { img: "wazdanGames/5.png", title: "Wazdan Games" },
    { img: "wazdanGames/6.png", title: "Wazdan Games" },
    { img: "wazdanGames/7.png", title: "Wazdan Games" },
    { img: "wazdanGames/8.png", title: "Wazdan Games" },
    { img: "wazdanGames/9.png", title: "Wazdan Games" },
    { img: "wazdanGames/10.png", title: "Wazdan Games" },
    { img: "wazdanGames/11.png", title: "Wazdan Games" },
    { img: "wazdanGames/12.png" },
    { img: "wazdanGames/13.png" },
    { img: "wazdanGames/14.png" },
    { img: "wazdanGames/15.png" },
    { img: "wazdanGames/17.png" },
    { img: "wazdanGames/18.png" },
    { img: "wazdanGames/19.png" },
    { img: "wazdanGames/20.png" },
    { img: "wazdanGames/21.png" },
    { img: "wazdanGames/22.png" },
    { img: "wazdanGames/23.png" },
    { img: "wazdanGames/24.png" },
    { img: "wazdanGames/25.png" },
    { img: "wazdanGames/26.png" },
    { img: "wazdanGames/27.png" },
    { img: "wazdanGames/28.png" },
    { img: "wazdanGames/29.png" },
    { img: "wazdanGames/30.png" },
    { img: "wazdanGames/31.png" },
    { img: "wazdanGames/32.png" },
    { img: "wazdanGames/33.png" },
    { img: "wazdanGames/34.png" },
    { img: "wazdanGames/35.png", title: "Wazdan Games" },
    { img: "wazdanGames/36.png", title: "Wazdan Games" },
    { img: "wazdanGames/37.png", title: "Wazdan Games" },
    { img: "wazdanGames/38.png", title: "Wazdan Games" },
    { img: "wazdanGames/39.png", title: "Wazdan Games" },
    { img: "wazdanGames/40.png", title: "Wazdan Games" },
    { img: "wazdanGames/41.png", title: "Wazdan Games" },
    { img: "wazdanGames/42.png", title: "Wazdan Games" },
    { img: "wazdanGames/43.png", title: "Wazdan Games" },
    { img: "wazdanGames/44.png", title: "Wazdan Games" },
    { img: "wazdanGames/45.png", title: "Wazdan Games" },
    { img: "wazdanGames/46.png", title: "Wazdan Games" },
    { img: "wazdanGames/47.png", title: "Wazdan Games" },
    { img: "wazdanGames/48.png", title: "Wazdan Games" },
    { img: "wazdanGames/49.png", title: "Wazdan Games" },
    { img: "wazdanGames/50.png", title: "Wazdan Games" },
  ];

  const pgsoftGames = [
    { img: "pgSoftGames/1.png", title: "PG Soft Games" },
    { img: "pgSoftGames/2.png", title: "PG Soft Games" },
    { img: "pgSoftGames/3.png", title: "PG Soft Games" },
    { img: "pgSoftGames/4.png", title: "PG Soft Games" },
    { img: "pgSoftGames/5.png", title: "PG Soft Games" },
    { img: "pgSoftGames/7.png", title: "PG Soft Games" },
    { img: "pgSoftGames/8.png", title: "PG Soft Games" },
    { img: "pgSoftGames/9.png", title: "PG Soft Games" },
    { img: "pgSoftGames/10.png", title: "PG Soft Games" },
    { img: "pgSoftGames/11.png", title: "PG Soft Games" },
    { img: "pgSoftGames/12.png", title: "PG Soft Games" },
    { img: "pgSoftGames/13.png", title: "PG Soft Games" },
    { img: "pgSoftGames/15.png", title: "PG Soft Games" },
    { img: "pgSoftGames/16.png", title: "PG Soft Games" },
    { img: "pgSoftGames/17.png", title: "PG Soft Games" },
    { img: "pgSoftGames/18.png", title: "PG Soft Games" },
    { img: "pgSoftGames/19.png", title: "PG Soft Games" },
    { img: "pgSoftGames/20.png", title: "PG Soft Games" },
    { img: "pgSoftGames/21.png", title: "PG Soft Games" },
    { img: "pgSoftGames/22.png", title: "PG Soft Games" },
    { img: "pgSoftGames/23.png", title: "PG Soft Games" },
    { img: "pgSoftGames/24.png", title: "PG Soft Games" },
    { img: "pgSoftGames/25.png", title: "PG Soft Games" },
    { img: "pgSoftGames/27.png", title: "PG Soft Games" },
    { img: "pgSoftGames/28.png", title: "PG Soft Games" },
    { img: "pgSoftGames/29.png", title: "PG Soft Games" },
    { img: "pgSoftGames/32.png", title: "PG Soft Games" },
    { img: "pgSoftGames/33.png", title: "PG Soft Games" },
    { img: "pgSoftGames/34.png", title: "PG Soft Games" },
    { img: "pgSoftGames/35.png", title: "PG Soft Games" },
    { img: "pgSoftGames/36.png", title: "PG Soft Games" },
    { img: "pgSoftGames/37.png", title: "PG Soft Games" },
    { img: "pgSoftGames/38.png", title: "PG Soft Games" },
    { img: "pgSoftGames/39.png", title: "PG Soft Games" },
    { img: "pgSoftGames/40.png", title: "PG Soft Games" },
    { img: "pgSoftGames/41.png", title: "PG Soft Games" },
    { img: "pgSoftGames/42.png", title: "PG Soft Games" },
    { img: "pgSoftGames/43.png", title: "PG Soft Games" },
    { img: "pgSoftGames/44.png", title: "PG Soft Games" },
    { img: "pgSoftGames/45.png", title: "PG Soft Games" },
  ];

  const BigTimeGaming = [
    { img: "bigGames-img/390.png", title: "Big Time Gaming" },
    { img: "bigGames-img/391.png", title: "Big Time Gaming" },
    { img: "bigGames-img/392.png", title: "Big Time Gaming" },
    { img: "bigGames-img/413.png", title: "Big Time Gaming" },
    { img: "bigGames-img/412.png", title: "Big Time Gaming" },
    { img: "bigGames-img/426.png", title: "Big Time Gaming" },
    { img: "bigGames-img/501.png", title: "Big Time Gaming" },
    { img: "bigGames-img/527.png", title: "Big Time Gaming" },
    { img: "bigGames-img/534.png", title: "Big Time Gaming" },
    { img: "bigGames-img/571.png", title: "Big Time Gaming" },
    { img: "bigGames-img/572.png", title: "Big Time Gaming" },
    { img: "bigGames-img/573.png", title: "Big Time Gaming" },
    { img: "bigGames-img/574.png", title: "Big Time Gaming" },
    { img: "bigGames-img/580.png", title: "Big Time Gaming" },
    { img: "bigGames-img/581.png", title: "Big Time Gaming" },
    { img: "bigGames-img/603.png", title: "Big Time Gaming" },
    { img: "bigGames-img/603.png", title: "Big Time Gaming" },
    { img: "bigGames-img/604.png", title: "Big Time Gaming" },
    { img: "bigGames-img/614.png", title: "Big Time Gaming" },
    { img: "bigGames-img/615.png", title: "Big Time Gaming" },
    { img: "bigGames-img/616.png", title: "Big Time Gaming" },
    { img: "bigGames-img/620.png", title: "Big Time Gaming" },
    { img: "bigGames-img/621.png", title: "Big Time Gaming" },
    { img: "bigGames-img/625.png", title: "Big Time Gaming" },
    { img: "bigGames-img/640.png", title: "Big Time Gaming" },
    { img: "bigGames-img/641.png", title: "Big Time Gaming" },
    { img: "bigGames-img/642.png", title: "Big Time Gaming" },
    { img: "bigGames-img/643.png", title: "Big Time Gaming" },
    { img: "bigGames-img/657.png", title: "Big Time Gaming" },
    { img: "bigGames-img/659.png", title: "Big Time Gaming" },
    { img: "bigGames-img/664.png", title: "Big Time Gaming" },
    { img: "bigGames-img/665.png", title: "Big Time Gaming" },
    { img: "bigGames-img/679.png", title: "Big Time Gaming" },
    { img: "bigGames-img/680.png", title: "Big Time Gaming" },
    { img: "bigGames-img/684.png", title: "Big Time Gaming" },
    { img: "bigGames-img/686.png", title: "Big Time Gaming" },
    { img: "bigGames-img/687.png", title: "Big Time Gaming" },
    { img: "bigGames-img/697.png", title: "Big Time Gaming" },
    { img: "bigGames-img/713.png", title: "Big Time Gaming" },
    { img: "bigGames-img/718.png", title: "Big Time Gaming" },
    { img: "bigGames-img/731.png", title: "Big Time Gaming" },
  ];
  const noLimitCityGames = [
    { img: "noLimitGames/428.png", title: "No Limit City Games" },
    { img: "noLimitGames/429.png", title: "No Limit City Games" },
    { img: "noLimitGames/430.png", title: "No Limit City Games" },
    { img: "noLimitGames/431.png", title: "No Limit City Games" },
    { img: "noLimitGames/432.png", title: "No Limit City Games" },
    { img: "noLimitGames/433.png", title: "No Limit City Games" },
    { img: "noLimitGames/434.png", title: "No Limit City Games" },
    { img: "noLimitGames/435.png", title: "No Limit City Games" },
    { img: "noLimitGames/436.png", title: "No Limit City Games" },
    { img: "noLimitGames/437.png", title: "No Limit City Games" },
    { img: "noLimitGames/438.png", title: "No Limit City Games" },
    { img: "noLimitGames/439.png", title: "No Limit City Games" },
    { img: "noLimitGames/440.png", title: "No Limit City Games" },
    { img: "noLimitGames/441.png", title: "No Limit City Games" },
    { img: "noLimitGames/442.png", title: "No Limit City Games" },
    { img: "noLimitGames/443.png", title: "No Limit City Games" },
    { img: "noLimitGames/444.png", title: "No Limit City Games" },
    { img: "noLimitGames/445.png", title: "No Limit City Games" },
    { img: "noLimitGames/446.png", title: "No Limit City Games" },
    { img: "noLimitGames/447.png", title: "No Limit City Games" },
    { img: "noLimitGames/448.png", title: "No Limit City Games" },
    { img: "noLimitGames/449.png", title: "No Limit City Games" },
    { img: "noLimitGames/450.png", title: "No Limit City Games" },
    { img: "noLimitGames/451.png", title: "No Limit City Games" },
    { img: "noLimitGames/452.png", title: "No Limit City Games" },
    { img: "noLimitGames/453.png", title: "No Limit City Games" },
    { img: "noLimitGames/456.png", title: "No Limit City Games" },
    { img: "noLimitGames/457.png", title: "No Limit City Games" },
    { img: "noLimitGames/458.png", title: "No Limit City Games" },
    { img: "noLimitGames/459.png", title: "No Limit City Games" },
    { img: "noLimitGames/460.png", title: "No Limit City Games" },
    { img: "noLimitGames/461.png", title: "No Limit City Games" },
    { img: "noLimitGames/462.png", title: "No Limit City Games" },
    { img: "noLimitGames/463.png", title: "No Limit City Games" },
    { img: "noLimitGames/465.png", title: "No Limit City Games" },
    { img: "noLimitGames/466.png", title: "No Limit City Games" },
    { img: "noLimitGames/467.png", title: "No Limit City Games" },
    { img: "noLimitGames/468.png", title: "No Limit City Games" },
    { img: "noLimitGames/469.png", title: "No Limit City Games" },
    { img: "noLimitGames/470.png", title: "No Limit City Games" },
    { img: "noLimitGames/471.png", title: "No Limit City Games" },
  ];
  const relaxGames = [
    { img: "relaxGames/1.png", title: "Relax Games" },
    { img: "relaxGames/2.png", title: "Relax Games" },
    { img: "relaxGames/3.png", title: "Relax Games" },
    { img: "relaxGames/6.png", title: "Relax Games" },
    { img: "relaxGames/7.png", title: "Relax Games" },
    { img: "relaxGames/8.png", title: "Relax Games" },
    { img: "relaxGames/9.png", title: "Relax Games" },
    { img: "relaxGames/10.png", title: "Relax Games" },
    { img: "relaxGames/11.png", title: "Relax Games" },
    { img: "relaxGames/12.png", title: "Relax Games" },
    { img: "relaxGames/13.png", title: "Relax Games" },
    { img: "relaxGames/14.png", title: "Relax Games" },
    { img: "relaxGames/15.png", title: "Relax Games" },
    { img: "relaxGames/16.png", title: "Relax Games" },
    { img: "relaxGames/17.png", title: "Relax Games" },
    { img: "relaxGames/18.png", title: "Relax Games" },
    { img: "relaxGames/19.png", title: "Relax Games" },
    { img: "relaxGames/20.png", title: "Relax Games" },
    { img: "relaxGames/21.png", title: "Relax Games" },
    { img: "relaxGames/22.png", title: "Relax Games" },
    { img: "relaxGames/23.png", title: "Relax Games" },
    { img: "relaxGames/24.png", title: "Relax Games" },
    { img: "relaxGames/25.png", title: "Relax Games" },
    { img: "relaxGames/26.png", title: "Relax Games" },
    { img: "relaxGames/27.png", title: "Relax Games" },
    { img: "relaxGames/28.png", title: "Relax Games" },
    { img: "relaxGames/29.png", title: "Relax Games" },
    { img: "relaxGames/30.png", title: "Relax Games" },
    { img: "relaxGames/31.png", title: "Relax Games" },
    { img: "relaxGames/32.png", title: "Relax Games" },
    { img: "relaxGames/33.png", title: "Relax Games" },
    { img: "relaxGames/36.png", title: "Relax Games" },
    { img: "relaxGames/38.png", title: "Relax Games" },
    { img: "relaxGames/87.png", title: "Relax Games" },
  ];

  const nextSpinGames = [
    { img: "nextSpinGames/2.png", title: "NextSpin Games" },
    { img: "nextSpinGames/3.png", title: "NextSpin Games" },
    { img: "nextSpinGames/4.png", title: "NextSpin Games" },
    { img: "nextSpinGames/5.png", title: "NextSpin Games" },
    { img: "nextSpinGames/6.png", title: "NextSpin Games" },
    { img: "nextSpinGames/7.png", title: "NextSpin Games" },
    { img: "nextSpinGames/8.png", title: "NextSpin Games" },
    { img: "nextSpinGames/9.png", title: "NextSpin Games" },
    { img: "nextSpinGames/10.png", title: "NextSpin Games" },
    { img: "nextSpinGames/11.png", title: "NextSpin Games" },
    { img: "nextSpinGames/12.png", title: "NextSpin Games" },
    { img: "nextSpinGames/13.png", title: "NextSpin Games" },
    { img: "nextSpinGames/14.png", title: "NextSpin Games" },
    { img: "nextSpinGames/15.png", title: "NextSpin Games" },
    { img: "nextSpinGames/16.png", title: "NextSpin Games" },
    { img: "nextSpinGames/17.png", title: "NextSpin Games" },
    { img: "nextSpinGames/18.png", title: "NextSpin Games" },
    { img: "nextSpinGames/19.png", title: "NextSpin Games" },
    { img: "nextSpinGames/20.png", title: "NextSpin Games" },
    { img: "nextSpinGames/21.png", title: "NextSpin Games" },
    { img: "nextSpinGames/22.png", title: "NextSpin Games" },
    { img: "nextSpinGames/23.png", title: "NextSpin Games" },
    { img: "nextSpinGames/24.png", title: "NextSpin Games" },
    { img: "nextSpinGames/25.png", title: "NextSpin Games" },
    { img: "nextSpinGames/26.png", title: "NextSpin Games" },
    { img: "nextSpinGames/27.png", title: "NextSpin Games" },
    { img: "nextSpinGames/28.png", title: "NextSpin Games" },
    { img: "nextSpinGames/29.png", title: "NextSpin Games" },
    { img: "nextSpinGames/30.png", title: "NextSpin Games" },
    { img: "nextSpinGames/31.png", title: "NextSpin Games" },
    { img: "nextSpinGames/32.png", title: "NextSpin Games" },
  ];
  const spinixGames = [
    { img: "spinixGames/4.png", title: "Spinix Games" },
    { img: "spinixGames/6.png", title: "Spinix Games" },
    { img: "spinixGames/10.png", title: "Spinix Games" },
    { img: "spinixGames/11.png", title: "Spinix Games" },
    { img: "spinixGames/13.png", title: "Spinix Games" },
    { img: "spinixGames/23.png", title: "Spinix Games" },
    { img: "spinixGames/24.png", title: "Spinix Games" },
    { img: "spinixGames/26.png", title: "Spinix Games" },
    { img: "spinixGames/27.png", title: "Spinix Games" },
    { img: "spinixGames/28.png", title: "Spinix Games" },
    { img: "spinixGames/29.png", title: "Spinix Games" },
    { img: "spinixGames/32.png", title: "Spinix Games" },
    { img: "spinixGames/34.png", title: "Spinix Games" },
    { img: "spinixGames/35.png", title: "Spinix Games" },
    { img: "spinixGames/36.png", title: "Spinix Games" },
    { img: "spinixGames/37.png", title: "Spinix Games" },
    { img: "spinixGames/38.png", title: "Spinix Games" },
    { img: "spinixGames/39.png", title: "Spinix Games" },
    { img: "spinixGames/40.png", title: "Spinix Games" },
    { img: "spinixGames/42.png", title: "Spinix Games" },
    { img: "spinixGames/43.png", title: "Spinix Games" },
    { img: "spinixGames/45.png", title: "Spinix Games" },
    { img: "spinixGames/47.png", title: "Spinix Games" },
    { img: "spinixGames/48.png", title: "Spinix Games" },
    { img: "spinixGames/49.png", title: "Spinix Games" },
    { img: "spinixGames/50.png", title: "Spinix Games" },
    { img: "spinixGames/51.png", title: "Spinix Games" },
    { img: "spinixGames/52.png", title: "Spinix Games" },
    { img: "spinixGames/53.png", title: "Spinix Games" },
  ];

  const nagaGames = [
    { img: "nagaGames/1.png", title: "Naga Games" },
    { img: "nagaGames/2.png", title: "Naga Games" },
    { img: "nagaGames/3.png", title: "Naga Games" },
    { img: "nagaGames/4.png", title: "Naga Games" },
    { img: "nagaGames/5.png", title: "Naga Games" },
    { img: "nagaGames/6.png", title: "Naga Games" },
    { img: "nagaGames/7.png", title: "Naga Games" },
    { img: "nagaGames/8.png", title: "Naga Games" },
    { img: "nagaGames/9.png", title: "Naga Games" },
    { img: "nagaGames/10.png", title: "Naga Games" },
    { img: "nagaGames/11.png", title: "Naga Games" },
    { img: "nagaGames/12.png", title: "Naga Games" },
    { img: "nagaGames/13.png", title: "Naga Games" },
    { img: "nagaGames/14.png", title: "Naga Games" },
    { img: "nagaGames/15.png", title: "Naga Games" },
    { img: "nagaGames/16.png", title: "Naga Games" },
    { img: "nagaGames/17.png", title: "Naga Games" },
    { img: "nagaGames/18.png", title: "Naga Games" },
    { img: "nagaGames/19.png", title: "Naga Games" },
    { img: "nagaGames/20.png", title: "Naga Games" },
    { img: "nagaGames/22.png", title: "Naga Games" },
    { img: "nagaGames/23.png", title: "Naga Games" },
    { img: "nagaGames/24.png", title: "Naga Games" },
    { img: "nagaGames/25.png", title: "Naga Games" },
    { img: "nagaGames/26.png", title: "Naga Games" },
    { img: "nagaGames/27.png", title: "Naga Games" },
    { img: "nagaGames/28.png", title: "Naga Games" },
    { img: "nagaGames/29.png", title: "Naga Games" },
    { img: "nagaGames/30.png", title: "Naga Games" },
    { img: "nagaGames/31.png", title: "Naga Games" },
  ];
  const hacksawGames = [
    { img: "hacksawGames/29.png", title: "Hacksaw Games" },
    { img: "hacksawGames/34.png", title: "Hacksaw Games" },
    { img: "hacksawGames/35.png", title: "Hacksaw Games" },
    { img: "hacksawGames/36.png", title: "Hacksaw Games" },
    { img: "hacksawGames/39.png", title: "Hacksaw Games" },
    { img: "hacksawGames/40.png", title: "Hacksaw Games" },
    { img: "hacksawGames/41.png", title: "Hacksaw Games" },
    { img: "hacksawGames/42.png", title: "Hacksaw Games" },
    { img: "hacksawGames/43.png", title: "Hacksaw Games" },
    { img: "hacksawGames/44.png", title: "Hacksaw Games" },
    { img: "hacksawGames/45.png", title: "Hacksaw Games" },
    { img: "hacksawGames/46.png", title: "Hacksaw Games" },
    { img: "hacksawGames/47.png", title: "Hacksaw Games" },
    { img: "hacksawGames/48.png", title: "Hacksaw Games" },
    { img: "hacksawGames/49.png", title: "Hacksaw Games" },
    { img: "hacksawGames/50.png", title: "Hacksaw Games" },
    { img: "hacksawGames/51.png", title: "Hacksaw Games" },
    { img: "hacksawGames/52.png", title: "Hacksaw Games" },
    { img: "hacksawGames/53.png", title: "Hacksaw Games" },
    { img: "hacksawGames/54.png", title: "Hacksaw Games" },
    { img: "hacksawGames/55.png", title: "Hacksaw Games" },
    { img: "hacksawGames/56.png", title: "Hacksaw Games" },
    { img: "hacksawGames/57.png", title: "Hacksaw Games" },
    { img: "hacksawGames/58.png", title: "Hacksaw Games" },
    { img: "hacksawGames/59.png", title: "Hacksaw Games" },
    { img: "hacksawGames/60.png", title: "Hacksaw Games" },
    { img: "hacksawGames/61.png", title: "Hacksaw Games" },
    { img: "hacksawGames/62.png", title: "Hacksaw Games" },
    { img: "hacksawGames/63.png", title: "Hacksaw Games" },
  ];

  const boomingGames = [
    { img: "boomingGames/1.png", title: "Booming Games" },
    { img: "boomingGames/2.png", title: "Booming Games" },
    { img: "boomingGames/3.png", title: "Booming Games" },
    { img: "boomingGames/4.png", title: "Booming Games" },
    { img: "boomingGames/5.png", title: "Booming Games" },
    { img: "boomingGames/6.png", title: "Booming Games" },
    { img: "boomingGames/7.png", title: "Booming Games" },
    { img: "boomingGames/8.png", title: "Booming Games" },
    { img: "boomingGames/9.png", title: "Booming Games" },
    { img: "boomingGames/10.png", title: "Booming Games" },
    { img: "boomingGames/11.png", title: "Booming Games" },
    { img: "boomingGames/12.png", title: "Booming Games" },
    { img: "boomingGames/13.png", title: "Booming Games" },
    { img: "boomingGames/14.png", title: "Booming Games" },
    { img: "boomingGames/15.png", title: "Booming Games" },
    { img: "boomingGames/16.png", title: "Booming Games" },
    { img: "boomingGames/17.png", title: "Booming Games" },
    { img: "boomingGames/18.png", title: "Booming Games" },
    { img: "boomingGames/19.png", title: "Booming Games" },
    { img: "boomingGames/20.png", title: "Booming Games" },
    { img: "boomingGames/21.png", title: "Booming Games" },
    { img: "boomingGames/22.png", title: "Booming Games" },
    { img: "boomingGames/23.png", title: "Booming Games" },
    { img: "boomingGames/24.png", title: "Booming Games" },
    { img: "boomingGames/25.png", title: "Booming Games" },
    { img: "boomingGames/26.png", title: "Booming Games" },
    { img: "boomingGames/27.png", title: "Booming Games" },
    { img: "boomingGames/28.png", title: "Booming Games" },
    { img: "boomingGames/29.png", title: "Booming Games" },
    { img: "boomingGames/30.png", title: "Booming Games" },
  ];

  const alizeGames = [
    { img: "alizeGames/1.png", title: "Alize Games" },
    { img: "alizeGames/2.png", title: "Alize Games" },
    { img: "alizeGames/3.png", title: "Alize Games" },
    { img: "alizeGames/4.png", title: "Alize Games" },
    { img: "alizeGames/5.png", title: "Alize Games" },
    { img: "alizeGames/6.png", title: "Alize Games" },
    { img: "alizeGames/7.png", title: "Alize Games" },
    { img: "alizeGames/8.png", title: "Alize Games" },
    { img: "alizeGames/9.png", title: "Alize Games" },
    { img: "alizeGames/10.png", title: "Alize Games" },
    { img: "alizeGames/11.png", title: "Alize Games" },
    { img: "alizeGames/12.png", title: "Alize Games" },
    { img: "alizeGames/13.png", title: "Alize Games" },
    { img: "alizeGames/15.png", title: "Alize Games" },
    { img: "alizeGames/16.png", title: "Alize Games" },
    { img: "alizeGames/18.png", title: "Alize Games" },
    { img: "alizeGames/19.png", title: "Alize Games" },
    { img: "alizeGames/20.png", title: "Alize Games" },
    { img: "alizeGames/98.png", title: "Alize Games" },
    { img: "alizeGames/99.png", title: "Alize Games" },
    { img: "alizeGames/341.png", title: "Alize Games" },
  ];
  const fastGames = [
    { img: "fastGames/1.png", title: "Fast Games" },
    { img: "fastGames/2.png", title: "Fast Games" },
    { img: "fastGames/3.png", title: "Fast Games" },
  ];
  const avaitrixGames = [
    { img: "avaitrixGames/1.png", title: "Avaitrix Games" },
  ];

  const imageGrid2 = document.getElementById("imageGrid2");
  bigGames.forEach((game) => {
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
    imageGrid2?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid1 = document.getElementById("imageGrid1");
  evolutionGames.forEach((game) => {
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
    imageGrid1?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid3 = document.getElementById("imageGrid3");
  microGames.forEach((game) => {
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
    imageGrid3?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid4 = document.getElementById("imageGrid4");
  asiaGames.forEach((game) => {
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
    imageGrid4?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid5 = document.getElementById("imageGrid5");
  dreamGames.forEach((game) => {
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
    imageGrid5?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid6 = document.getElementById("imageGrid6");
  sexyGames.forEach((game) => {
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
    imageGrid6?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid7 = document.getElementById("imageGrid7");
  live88.forEach((game) => {
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
    imageGrid7?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid8 = document.getElementById("imageGrid8");
  playtechGames.forEach((game) => {
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
    imageGrid8?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid9 = document.getElementById("imageGrid9");
  ezugiGames.forEach((game) => {
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
    imageGrid9?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid10 = document.getElementById("imageGrid10");
  skywindGames.forEach((game) => {
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
    imageGrid10?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid11 = document.getElementById("imageGrid11");
  pragmaticPlay.forEach((game) => {
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
    imageGrid11?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid12 = document.getElementById("imageGrid12");
  betGames.forEach((game) => {
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
    imageGrid12?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid13 = document.getElementById("imageGrid13");
  jiliGames.forEach((game) => {
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
      <div class="subtext">{game.title}</div>
    `;
    imageGrid13?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid14 = document.getElementById("imageGrid14");
  habanero.forEach((game) => {
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
    imageGrid14?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid15 = document.getElementById("imageGrid15");
  elysium.forEach((game) => {
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
    imageGrid15?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid16 = document.getElementById("imageGrid16");
  spadeGaming.forEach((game) => {
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
    imageGrid16?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid17 = document.getElementById("imageGrid17");
  playngo.forEach((game) => {
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
    imageGrid17?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid18 = document.getElementById("imageGrid18");
  worldMatch.forEach((game) => {
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
    imageGrid18?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid19 = document.getElementById("imageGrid19");
  oneTouchGames.forEach((game) => {
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
    imageGrid19?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid20 = document.getElementById("imageGrid20");
  redTigerGames.forEach((game) => {
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
    imageGrid20?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid21 = document.getElementById("imageGrid21");
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
    imageGrid21?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid22 = document.getElementById("imageGrid22");
  drasilGames.forEach((game) => {
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
    imageGrid22?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid23 = document.getElementById("imageGrid23");
  playSonGames.forEach((game) => {
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
    imageGrid23?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid24 = document.getElementById("imageGrid24");
  cq9Games.forEach((game) => {
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
    imageGrid24?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid25 = document.getElementById("imageGrid25");
  wazdanGames.forEach((game) => {
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
    imageGrid25?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid26 = document.getElementById("imageGrid26");
  pgsoftGames.forEach((game) => {
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
    imageGrid26?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid27 = document.getElementById("imageGrid27");
  bigTimeGames.forEach((game) => {
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
    imageGrid27?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid28 = document.getElementById("imageGrid28");
  noLimitCityGames.forEach((game) => {
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
    imageGrid28?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid29 = document.getElementById("imageGrid29");
  relaxGames.forEach((game) => {
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
    imageGrid29?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid30 = document.getElementById("imageGrid30");
  nextSpinGames.forEach((game) => {
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
    imageGrid30?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid31 = document.getElementById("imageGrid31");
  spinixGames.forEach((game) => {
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
    imageGrid31?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid32 = document.getElementById("imageGrid32");
  nagaGames.forEach((game) => {
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
    imageGrid32?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid33 = document.getElementById("imageGrid33");
  hacksawGames.forEach((game) => {
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
    imageGrid33?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid34 = document.getElementById("imageGrid34");
  boomingGames.forEach((game) => {
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
    imageGrid34?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid35 = document.getElementById("imageGrid35");
  alizeGames.forEach((game) => {
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
    imageGrid35?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid36 = document.getElementById("imageGrid36");
  avaitrixGames.forEach((game) => {
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
      <div class="subtext">Avaitrix Games</div>
    `;
    imageGrid36?.appendChild(item); // optional chaining to be safe
  });

  const imageGrid37 = document.getElementById("imageGrid37");
  fastGames.forEach((game) => {
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
      <div class="subtext">Fast Games</div>
    `;
    imageGrid37?.appendChild(item); // optional chaining to be safe
  });
});
