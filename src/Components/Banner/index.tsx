import { Button } from "../Button";
import { Container } from "./styles";

export const Banner = () => {

  return (
    <Container>
      <h1>Velocidade e experiência em um lugar feito para você</h1>
      <h2>Um ambiente feito para você explorar o seu melhor</h2>
      <span>
        <Button className={""} design={"outlineLight"}>Leilão</Button>
        <Button className={""} design={"brand1"}>Carros</Button>
        <Button className={""} design={"brand1"}>Motos</Button>
      </span>
    </Container>
  );
};
