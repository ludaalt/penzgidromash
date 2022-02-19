import HeaderNavigation from "./HeaderNavigation";
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
        <Page>
            <HeaderNavigation />
            {children}
        </Page>
    )
}

const Page = styled.div`
    max-width: 1920px;
    margin: 0 auto;
`

export default Layout;