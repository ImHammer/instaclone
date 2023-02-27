
import SideMenu from "../../components/SideMenu";
import { Container, Section } from "./styles"

export default function Home() {
    return (
        <Container>
            <Section>
                <SideMenu />
            </Section>
            <Section></Section>
            <Section></Section>
        </Container>
    );
}