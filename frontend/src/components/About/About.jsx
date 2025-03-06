// import React, { useState } from "react";
// import "./about.css";
// import ImageCard from '../ImageCard';
// import header from "../../img/header.png";

// function About() {
//   const CardData = [
//     {
//       id : 1,
//       imageSrc : "frontend/src/img/chatbot.png",
//       name: "SANTHOSH M",
//       role: "Project Developer",
//       linkedin : "https://www.linkedin.com/in/santhosh-m-a24117240/",
//       insta:"https://www.instagram.com/_s.m.a.r.t_s.w.a.g_/",
//       github:"https://github.com/SanthoshM45",
//     }
    
//   ];
//   return (
//     <>
//     <h1 id="img-h1">Our Team</h1>
//     <img id="one" src={header} alt="" />
//     <div className="images">
//       {CardData.map((card) => (
//         <ImageCard
//           key={card.id}
//           imageSrc={card.imageSrc}
//           name={card.name}
//           role={card.role}
//           linkedin={card.linkedin}
//           insta={card.insta}
//           github={card.github}
//         />
//       ))}
//     </div>
//     </>
//   );
// }
// export default About;

import React from "react";
import "./about.css";
import ImageCard from '../ImageCard';
import header from "../../img/header.png";
import santhoshImage from "../../img/santhosh.png";  // Import Image

function About() {
  const CardData = [
    {
      id: 1,
      imageSrc: santhoshImage, // Use Imported Image
      name: "SANTHOSH M",
      role: "Project Developer",
      linkedin: "https://www.linkedin.com/in/santhosh-m-a24117240/",
      insta: "https://www.instagram.com/_s.m.a.r.t_s.w.a.g_/",
      github: "https://github.com/SanthoshM45",
    }
  ];

  return (
    <>
      <h1 id="img-h1">Our Team</h1>
      <img id="one" src={header} alt="Header" />
      <div className="images">
        {CardData.map((card) => (
          <ImageCard
            key={card.id}
            imageSrc={card.imageSrc}
            name={card.name}
            role={card.role}
            linkedin={card.linkedin}
            insta={card.insta}
            github={card.github}
          />
        ))}
      </div>
    </>
  );
}

export default About;
