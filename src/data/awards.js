// Award descriptions live in translations.js (keys: awards.items[i]).
const posters=[
  '/assets/images/sundarc-award1.jpeg',
  '/assets/images/construction&design-award2.jpeg',
  '/assets/images/Business-magnetaward3.jpeg',
  '/assets/images/best-infra-construction%20award4.jpeg',
  '/assets/images/building%20leader%20ship%20award5.jpeg',
  '/assets/images/Delhi%20ganesh%20award6.jpeg'
];
export const awards=posters.map((poster,index)=>({id:index+1,video:index===0?'/assets/videos/award-continer-1.mp4':index===3?'/assets/videos/award4.mp4':null,showPreview:index===0||index===3,poster}));
