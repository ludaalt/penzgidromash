import styled from "styled-components";

const Header = ({ title, pageDescription }) => {
    return (
        <HeaderWrapper>
            <TitleWrapper>
                <h1>{title}</h1>
                <p>{pageDescription}</p>
            </TitleWrapper>            
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background-image: url('./header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 300px;
    color: #fff;
`

const TitleWrapper = styled.div`
    border: 1px solid transparent;

    max-width: 50%;
    background: #5551F7;

    h1 {
        font-family: Gilroy;
        font-style: normal;
        font-weight: 500;
        font-size: 84px;
        line-height: 100%;
        color: #F6F6F6;

        margin: 230px 0 200px 80px;
    }

    p {
        padding: 50px 80px;
        border-top: 1px solid #D6D6D6;

        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 160%;
        color: #F6F6F6;
    }
`

export default Header