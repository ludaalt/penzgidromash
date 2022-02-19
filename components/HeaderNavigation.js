import Image from 'next/image';
import styled from 'styled-components';

const HeaderNavigation = () => {
    return (
        <Navigation>
            <div>
                <Image src="/logo.svg" alt="Main Logo" width={39} height={39} />
                <a hfref="#">ПензГидроМаш</a>
            </div>

            <nav>
                <ul>
                    <li><a hfref="#">Компания</a></li>
                    <li><a hfref="#">Продукты и услуги</a></li>
                    <li><a hfref="#">Проекты</a></li>
                    <li><a hfref="#">Новости</a></li>
                    <li><a hfref="#">Контакты</a></li>
                </ul>
            </nav>
        </Navigation>
    )    
}

const Navigation = styled.div`
    border: 3px solid blue;
    max-width: 1920px;
    margin: 0 auto;
    
    position: fixed;
    width: 100%;
    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 80px;

    text-transform: uppercase;

    div {
        display: flex;
        align-items: center;

        a {
            display: inline-block;
            margin-left: 20px;
        }
    }

    ul {
        display: flex;

        li:not(:last-child) {
            margin-right: 80px;
        }
    }
`

export default HeaderNavigation;