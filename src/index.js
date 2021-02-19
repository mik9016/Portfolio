import style from "./scss/index.scss";


const navigation = document.querySelector('#navigation');

const tl = new TimeLineMax();

tl.fromTo(navigation,1,{height: "0%"},{height:"80%"});