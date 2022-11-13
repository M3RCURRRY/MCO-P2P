import IUserData from "../../utils/userdata";

import wide from "./../../assets/5.jpg";

type CardProps = {
  width?: string;
  img?: string;
  alt?: string;
  userdata: IUserData;
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  return(
    <div className={`${props.width} rounded-xl shadow-[0_-9px_18px_0_rgba(255,255,255,0.1)] flex flex-col bg-[#212429] text-white transition ease-in-out hover:bg-[#18191d] hover:text-rose-600`}>
      {/*<img src={props.img} alt={props.alt} className="m-5 rounded-xl"/>*/}
      <div className={`bg-[${wide}] w-full`}></div>
      {
        props.userdata?.username + " " + props.userdata?.usertag
      }
      
    </div>
  )
}

export default Card;