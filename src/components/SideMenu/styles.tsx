
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    border-right: 1px solid black;
`;

const ContentPartsTemplate = styled.div`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Header = styled(ContentPartsTemplate)`
    height: 18%;
`;

export const Main = styled(ContentPartsTemplate)`
    height: 68%;
`;

export const Footer = styled(ContentPartsTemplate)`
    height: 14%;
`;

export const List = styled.ul`
    width: 100%;
    height: 100%;
    padding: 4px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    list-style: none;
`;

interface NavItemContainerProps {
    isSelected: boolean;
}

export const NavItemContainer = styled.li<NavItemContainerProps>`
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 14px;

    font-size: 14px;
    font-family: sans-serif;

    div:nth-child(2) {
        font-weight: ${props => props.isSelected ? "bold" : "normal"};
    }
`;

export const NavItemTitle = styled.div`
    width: 100%;
    color: ${props => props.theme.foreground};
`;