const RoundSelection = ({src, alt, name, cursor, gameFunc, onClick}) => {
    return(
        <img
        className={`choice-board__img ${cursor ? "choice-board__img--cursor" : ""}`}
        onClick={onClick ? () => gameFunc(name) : null}
        src={src}
        alt={alt}
      />
    )
};


export default RoundSelection;