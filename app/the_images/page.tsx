import ImageDiv from "../imageDiv";
import sunsethome from "/public/images/sunsethome.png";
import filmme from "/public/images/filmme.png";
import andromeda from "/public/images/andromedalowres.png";
import contemplation from "/public/images/contemplation.png";
import totality from "/public/images/totality.png";
import startrail from "/public/images/startrail.png";
import cartrails from "/public/images/cartrails.png";
import freewayinfinity from "/public/images/freewayinfinity.png";
import grounded from "/public/images/grounded.png";
import rectrails from "/public/images/rectrails.png";
import filmend from "/public/images/filmend.png";

export default function theImages() {
  const images = [
    {
      src: sunsethome,
      title: "Red light",
      desc: "clouds",
    },
    {
      src: filmme,
      title: "Me in Film",
      desc: "I threw a rock",
    },
    {
      src: andromeda,
      title: "Andromeda",
      desc: "a kinda vague picture of the andromeda galaxy taken by me from my front yard",
    },
    {
      src: contemplation,
      title: "Contemplation",
      desc: "confusion and feeling seperated from the world",
    },
    {
      src: totality,
      title: "Totality",
      desc: "taken by me during the eclipse in April 2024",
    },
    {
      src: startrail,
      title: "Spin",
      desc: "the Earth rotates and looks really cool",
    },
    {
      src: cartrails,
      title: "Light Speed",
      desc: "a kinda long exposure picture taken while driving at night through an intersection",
    },
    {
      src: freewayinfinity,
      title: "Infiniway",
      desc: "freeway in Saint Louis",
    },
    {
      src: grounded,
      title: "Grounded",
      desc: "it's stabilized to the stars, so the earth's rotation is visible",
    },
    {
      src: rectrails,
      title: "Time passes",
      desc: "things will change",
    },
    {
      src: filmend,
      title: "The end",
      desc: "everthing ends eventaully",
    },
  ];

  return (
    <>
      {images.map((image) => (
        <ImageDiv
          key={image.src.src}
          src={image.src}
          title={image.title}
          desc={image.desc}
          alt={image.desc}
        />
      ))}
    </>
  );
}
