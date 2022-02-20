import { useRouter } from 'next/router';
import HeaderNavigation from "./HeaderNavigation";
import { navigation } from '../data/navigation';
import styled from "styled-components";

const Header = ({ pageDescription }) => {
    const { pathname } = useRouter();
    const currentTitle = navigation.filter(item => item.path === pathname)[0].title;

    return ( 
        <HeaderWrapper>
            <HeaderNavigation />
            <TitleWrapper>
                <div>
                    <h1>{currentTitle}</h1>
                    <ul>
                        <li>Главная</li>
                        <li>{currentTitle}</li>
                    </ul>
                </div>
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

    @media (max-width: 580px) {
        background-color: #5551F7;;
        min-height: 670px;
        background-position: bottom;
        background-size: contain;
    }
`

const TitleWrapper = styled.div`
    border: 1px solid transparent;
    max-width: 50%;
    background: #5551F7;

    @media (max-width: 580px) {
        max-width: 100%;
    }

    div {
        margin: 230px 0 200px 80px;
        display: flex;
        flex-direction: column;

        @media (max-width: 1120px) {
            margin: 150px 0 30px 30px;
        }
    }

    h1 {
        order: 2;
        position: relative;
        font-family: Gilroy;
        font-style: normal;
        font-weight: 500;
        font-size: 84px;
        line-height: 100%;
        color: #F6F6F6;

        @media (max-width: 580px) {
            font-weight: 300;
            font-size: 40px;
        }
    }

    ul {
        display: flex;

        li {
            font-family: Gilroy;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 160%;
            color: #F6F6F6;
            opacity: 0.5;

            &:not(:last-child) {
                position: relative; 
                margin-right: 28px;

                ::after {
                    position: absolute;
                    content: url('/arrow.svg');
                    top: 2px;
                    right: -40px;

                    height: 30px;
                    width: 30px;
                }
            }          
        }
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

        @media (max-width: 1120px) {
            padding: 30px;
            font-size: 16px;
        }

        @media (max-width: 580px) {
            border: none;
        }
    }
`

export default Header;