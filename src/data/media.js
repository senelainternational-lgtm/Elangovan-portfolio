// Media descriptions live in translations.js (keys: media.items[i]).
const images=[
  '/assets/images/Media1.jpeg',
  '/assets/images/Media2.jpeg',
  '/assets/images/Media3.jpeg',
  '/assets/images/Media4.jpeg',
  '/assets/images/media5.png',
  '/assets/images/Media6.png',
  '/assets/images/Media7.png',
  '/assets/images/media8.png'
];
export const media=images.map((image,index)=>{const id=index+1;return {id,image,link:id===8?'https://youtu.be/8yXPXuo-EBU':'#',type:id===8?'video':id%3===0?'video':'article',watchVideo:id===8}});
