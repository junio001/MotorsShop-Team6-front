import { Banner } from '../../Components/Banner'
import { Button } from '../../Components/Button'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { Modal } from '../../Components/Modal'
import { ProductCard } from '../../Components/ProductCard'
import { ProductCardAuction } from '../../Components/ProductCardAuction'
import { Container } from './styles'
export const Test = () => {
  return (
    <Container>
        <Header name="Teste"/>
        <Banner/>
        <p>&nbsp;</p>
        <ProductCard data={ {
            status: "Ativo",
            titulo: "Título",
            ano: "2020",
            quilometragem: "0km",
            valor: "R$ 00.000,00",
            descricao: "Descrição",
            veiculo: "carro",
            capa: require("./carro.png"),
            usuario: "Anunciante"
        } }/>
        <p>&nbsp;</p>
        <ProductCardAuction data={ {
            prazo: "01:01:01",
            titulo: "Título",
            ano: "2020",
            quilometragem: "0km",
            valor: "R$ 00.000,00",
            descricao: "Descrição",
            veiculo: "carro",
            capa: require("./carro.png"),
            usuario: "Anunciante"
        } }/>
        <p>&nbsp;</p>


        <Modal trigger={<Button className={""} design={"outlineLight"}>Abrir Modal</Button>} title={"Título da Modal"}>
            <>Teste</>
        </Modal>
        
        <p>&nbsp;</p>

        <Footer/>
    </Container>
  )
}