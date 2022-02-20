// import HeaderNavigation from "./HeaderNavigation";
import Header from './Header';
import { pageDescription } from '../data/data';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <Page>
            <Header pageDescription={pageDescription} />
            {children}
        </Page>
    )
}

const Page = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`

export default Layout;