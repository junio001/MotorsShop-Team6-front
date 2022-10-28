import { FunctionComponent, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Container } from "./styles";

type Props = {
    trigger: JSX.Element;
    title: string;
    children?: JSX.Element;
};


export const Modal: FunctionComponent<Props> = ( { trigger, title, children } ) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
      if (show) {
        setShow(false);
      } else {
        setShow(true);
      }
      console.log(show);
    };
  

  return (
    <>
    <div className="trigger" onClick={handleToggle}>
        {trigger}
    </div>
    <Container show={show} onClick={handleToggle}>
        <div className="modal">
            <div className="title">
                {title} <IoMdClose onClick={handleToggle}/>
            </div> 
            <div className="body">
                {children}
            </div>
        </div>
    </Container>
    </>
  );
};
