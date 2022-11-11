import IUserData from "../../utils/userdata";

type CardProps = {
  width?: string;
  img?: string;
  userdata?: IUserData;
}

const Card = (props: CardProps) => {
  return(
    <div className={`${props.width} `}>
      
    </div>
  )
}

export default Card;