const FILLED = "filled";

interface ButtonProps {
  btnType: string;
  children?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const background = props.btnType === FILLED ? "bg-rose-600" : "bg-transparent";

  return (
    <button
      className={`${background} p-2 m-2 min-w-[130px] text-white text-lg border-2 border-rose-800 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-rose-500`}
    > 
      {props.children}
    </button>
  );
};

export default Button;
