import style from "./styles/Hero.module.css";

const Hero = () => {
  let words = ["Lorem", "Ipsium", "Dolor", "Sit", "Amet"];
  return (
    <div className={style.hero_banner}>
      <span className={style.hero_title}>Lorem ipsum.</span>
      <span className={style.variable_word}>
        {words.map((word, index) => {
          return (
            <span className={style.word} key={index}>
              {word}
            </span>
          );
        })}
      </span>
      <span className={style.small}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
        voluptatem.
      </span>
    </div>
  );
};

export default Hero;
