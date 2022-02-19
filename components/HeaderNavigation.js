import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderNavigation = () => {
    return (
        <Navigation>
            <div>
                <Image src="/logo.svg" alt="Main Logo" width={39} height={39} />
                <Link href="/"><a>ПензГидроМаш</a></Link>
            </div>

            <input type="checkbox" />
            <span className="menu-toggler first"></span>
            <span className="menu-toggler second"></span>

            <nav>
                <ul>
                    <li>
                        <Link href="/"><a>Компания</a></Link>
                    </li>
                    <li>
                        <Link href="/products"><a>Продукты и услуги</a></Link>
                    </li>
                    <li>
                        <Link href="/projects"><a>Проекты</a></Link>
                    </li>
                    <li>
                        <Link href="/news"><a>Новости</a></Link>
                    </li>
                    <li>
                        <Link href="/contacts"><a>Контакты</a></Link>
                    </li>
                </ul>
            </nav>
        </Navigation>
    )    
}

const Navigation = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    
    position: fixed;
    width: 100%;
    color: #fff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    padding: 33px 80px;

    @media (max-width: 700px) {
        padding: 30px;
    }

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

        @media (max-width: 960px) {
            flex-direction: column;
        }

        li:not(:last-child) {
            margin-right: 80px;

            @media (max-width: 1270px) {
                margin-right: 20px;
            }

            @media (max-width: 960px) {
                margin: 0 0 10px;
            }
        }
    }

    input {
        display: block;
        width: 50px;
        height: 50px;
        top: 30px;
        right: 20px;
        position: absolute;
        z-index: 2000;
        cursor: pointer;
        opacity: 0;
    }

    .menu-toggler {
        opacity: 0;
        display: inline-block;
        position: absolute;
        z-index: 1000;
        right: 30px;
        z-index: 1000;
        background: #F6F6F6;
        width: 30px;
        height: 2px;

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;

        @media (max-width: 700px) {
            opacity: 1;
        }
    }
 
    .first {
        top: 40px;
    }

    .second {
        top: 50px;
    }
    

    input:checked ~ .first {
        transform: rotate(-45deg) translate(-7px,7px);
    }

    input:checked ~ .second {
        transform: rotate(45deg);
    }

    nav {
        @media (max-width: 700px) {
            z-index: 900;
            opacity: 0.95;
            position: absolute;
            width: 100%;
            margin: -500px 0 0 0;
            top: 0;
            padding: 30px;
            background: gray;
            transform-origin: 0% 0%;
            transform: translate(-200%, 0);
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
        }
    }

    input:checked ~ nav {
        @media (max-width: 700px) {
            transform: none;
            margin: 0;
        }               
    }
}
`

export default HeaderNavigation;