type TileProps = {
  icon?: string;
  alt?: string;
  data?: string;
  width?: string;
  hasShadow?: boolean;
  hasHover?: boolean;
  isSquare?: boolean;
  children?: React.ReactNode;
}

const Tile = (props: TileProps) => {
  return(
    <div className={`${props.hasShadow && "w-1/3"} ${props.isSquare ? "pb-[20%] w-[20%] h-0" : "p-3 py-8" } m-4 rounded-lg bg-primary bg-[#212429] text-white`}>
      {
        props.icon && <img src={props.icon} alt=""/>
      }
      <h2 className="text-3xl text-center font-medium">{props.children}</h2>
      {
        props.data && <h3 className="text-3xl mt-3 text-center text-rose-600 font-medium">{props.data}</h3>
      }
    </div>
  )
}

export default Tile;