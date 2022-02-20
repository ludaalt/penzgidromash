import styled from "styled-components";
import { CarouseData } from '../data/data';

const CarouselItem = (props) => {
    return (
        <CarouselItemContainer>
            <ItemId>{`0${props.type}/02`}</ItemId>            
            <div>
                <CarouselItemImage type={props.type}></CarouselItemImage> 
                <div>
                    <ItemTitle>{props.title}</ItemTitle>
                    {props.type == 1 ? CarouseData.auto : CarouseData.railway}
                </div>
            </div>
        </CarouselItemContainer>
    )
}

const CarouselItemContainer = styled.div`
    min-width: 500px;
    margin: 30px; 

    @media (max-width: 320px) {
        margin: 15px; 
    }

`

const CarouselItemImage = styled.div`
    min-height: 160px;
    background: ${props => `url(/pic${Number(props.type) + 1}.png)`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`

const ItemId = styled.p`
    margin-bottom: 20px;
    font-family: Gilroy;
    font-size: 16px;
    line-height: 160%;
    color: #1C1C1C;
`

const ItemTitle = styled.h3`
    margin: 20px 0 10px;
    font-family: Gilroy;
    font-size: 16px;
    line-height: 160%;
    color: #1C1C1C;
`

export default CarouselItem;