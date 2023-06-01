export const BreakLine = (str: string) => {
  const arr = str.split("!");
  return arr.map((item, index) => {
    return (
      <span key={index}>
        {item}
        {index !== arr.length - 1 && " !"}
        {index !== arr.length - 1 && <br />}
      </span>
    );
  });
};