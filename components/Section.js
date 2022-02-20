import { Carousel } from '@trendyol-js/react-carousel';
import styled from 'styled-components';

import CarouselItem from './CarouselItem';

const Section = ({ props }) => {
    return (
        <>
        <SectionWrapper>
            <SectionTitleWrapper>
                <h2>{props.title}</h2>
                {props.description && <p>{props.description}</p>}
            </SectionTitleWrapper>

            <SectionContentWrapper type={props.type}>
                { props.sectionContent }                
            </SectionContentWrapper>
        </SectionWrapper>

        <CarouselWrapper type={props.type}>
            <Carousel show={1.5} slide={2} swiping={true} type={props.type}> 
                <CarouselItem type="1" title="Автотранспорт" />
                <CarouselItem type="2" title="Железнодорожный транспорт" />
            </Carousel>
        </CarouselWrapper>
    </>
    )
}

const CarouselWrapper = styled.div` 
    display: ${props => props.type === 'about' ? "none" : "block"};

    @media (min-width: 790px) {
        display: none;
    }
    min-height: 400px;
`

const SectionWrapper = styled.div`
    margin-top: 135px;
    text-align: justify;

    @media (max-width: 1240px) {
        margin-top: 70px;
    }
`

const SectionTitleWrapper = styled.div`
    margin-bottom: 125px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1240px) {
        margin-bottom: 70px;
        padding: 0 60px;
    }

    @media (max-width: 680px) {
        flex-direction: column;
    }

    h2 {
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 47px;
        line-height: 150%;
        color: #000000;

        @media (max-width: 680px) {
            font-size: 25px;
        }
    }

    p {
        max-width: 65%;
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 160%;
        color: #000000;

        @media (max-width: 680px) {
            max-width: 100%;
            margin-top: 30px;
            font-size: 16px;
        }
    }
`

const SectionContentWrapper = styled.div`
    display: flex;
    justify-content: flex-end;


    .first-section-content {
        display: flex;

        @media (max-width: 1100px) {
            flex-direction: column;
        }

        div {
             min-height: 600px;

            @media (max-width: 1100px) {
                min-height: 400px;
            }

            &:nth-child(1) {
                min-width: 50%;
                background-image: url(/pic1.png);
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            &:nth-child(2) {
                padding: 0 80px;

                @media (max-width: 1150px) {
                    padding: 10px 30px 0;
                }
            }
        }

        p {
            margin-bottom: 30px;
            font-family: Gilroy;
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            line-height: 180%;
            color: #101010;

            &:first-child {
                font-weight: 400;
            }
        }
    }


    .second-section-content {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-rows:  50% 50%; 
        grid-template-columns: 50% 50%;
        grid-template-areas: "image auto"    
                             "image railway";

            @media (max-width: 790px) {
                display: none; 
            }

        .image-container {
            grid-area: image;
            background-image: url(/pic2.png);
            background-repeat: no-repeat;
            background-size: contain;
        }

        div:nth-child(1),
        div:nth-child(2) {
            padding: 75px 80px 100px 80px;
            cursor: pointer; 
            &:hover {
                background-color: #F6F6F6;

                ~ .image-container {
                    transition: background-image 0.8s ease;
                }
            }
            @media (max-width: 1590px) {
                padding: 4vw;
            }
            @media (max-width: 800px) {
                margin: 0 30px;
                padding: 250px 0px 10px;
                min-height: 440px;
            }            
        }
        div:nth-child(1),
        div:nth-child(2) {
            @media (max-width: 800px) {
                background-size: contain;
                background-repeat: no-repeat;
            }  
            @media (max-width: 650px) {
                width: 70%;
                display: inline-block;
            }  
        }
        div:nth-child(1) {
            @media (max-width: 800px) {
                background-image: url(/pic2.png);
            }  
        }
        div:nth-child(2) {
            @media (max-width: 800px) {
                background-image: url(/pic3.png);
            } 
            
            @media (max-width: 650px) {
              right: -330px;
            } 
        }
        div:nth-child(2):hover ~ .image-container {
            background-image: url(/pic3.png);
        }        
        h3 {
            font-family: Gilroy;
            font-style: normal;
            font-weight: 300;
            font-size: 25px;
            line-height: 160%;
            color: #000000;
            margin-bottom: 20px;
            max-width: 230px;

            @media (max-width: 800px) {
                font-size: 16px;
            }
        }
        li {
            position: relative;
            margin-left: 20px;
            &::before {
                position: absolute;
                content: '—';
                left: -20px;
            }
            @media (max-width: 800px) {
                font-size: 14px;
            }
        }
    }
    
`

export default Section;