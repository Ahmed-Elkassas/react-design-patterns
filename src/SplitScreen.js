export const SplitScreen = ({ left: Left, right: Right }) => {
  return (
    <div>
      <Right />
      <div>
        <Left />
      </div>
    </div>
  );
};
