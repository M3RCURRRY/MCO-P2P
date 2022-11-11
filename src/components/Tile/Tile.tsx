type TileProps = {
  icon?: string;
  alt?: string;
  data?: string;
  width?: string;
  hasShadow?: boolean;
  hasHover?: boolean;
  isSquare?: boolean;
  children?: React.ReactNode;
};

const Tile = (props: TileProps) => {
  return (
    <div
      className={`${
        props.hasShadow && "shadow-[0_-9px_18px_0_rgba(255,255,255,0.1)]"
      } ${props.width} ${
        props.isSquare ? "pb-[20%] w-[20%] h-0" : "p-3 py-8"
      } m-4 rounded-lg bg-primary bg-[#212429] text-white
      ${props.hasHover && "transition ease-in-out hover:bg-[#18191d] hover:-translate-y-1 hover:scale-105"}`}
    >
      {props.icon && <img src={props.icon} alt="" className="mx-auto my-4 w-1/2"/>}
      <h2 className="text-3xl text-center font-medium">{props.children}</h2>
      {props.data && (
        <h3 className="text-3xl mt-3 text-center text-rose-600 font-medium">
          {props.data}
        </h3>
      )}
    </div>
  );
};

export default Tile;
