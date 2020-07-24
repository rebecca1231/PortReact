import React from 'react';

//import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
        </div>
    );

}

export default Card;

/*

            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }


import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info" style={style}>
            <p className="g-card-title">{props.title}</p>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );

}

export default CardInfo;
*/

/*
      <section id="projects">
        <h2>Projects</h2>
        
        <div id="projects-wrapper">
          <div class="project-tile"> 
            <p class="project-title"> FCC Technical</p>
            <a href="https://codepen.io/Rebecca07/full/BayXJpM"  target="_blank" class="project-link">
            <img class="project" src="https://drive.google.com/uc?export=view&id=1kjFTuMgy54s1uH8xa2SozCMtehegNBIX" alt="Example of a Technical Documentation Page"/></a></div>
    <hr>      
    <div id="project-tile" class="project-tile"> <p> FCC Survey</p>
      <a href="https://codepen.io/Rebecca07/full/vYEOyay"  target="_blank" class="project_link">
      <img class="project" src="https://drive.google.com/uc?export=view&id=1PEdx0nnoYwzvVxMH8IUC0n5eg56y-mqa" alt="Example of a Survey"/></a>
      </div>
      <hr>
    <div id="project-tile" class="project-tile">
    <p class="projects"> FCC Tribute</p>
      <a href="https://codepen.io/Rebecca07/full/MWYWWbj"  target="_blank" class="project_link" id="project-link">
      <img class="project" src="https://drive.google.com/uc?export=view&id=1W_ZYyIrFBkVxEYvDGbhBLdYwzOs2M4_R" alt="Example of a Tribute Page"/></a>  
      </div>
  </div>
</section>
*/