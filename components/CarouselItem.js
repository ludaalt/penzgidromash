import styled from "styled-components";

import { CarouseData } from '../data/data';

const CarouselItem = ({ id, title, content=CarouseData }) => {
    return (
        <CarouselItemContainer>
            <ItemId>{`0${id}/02`}</ItemId>
            
            <div>
                <div className="image-container"></div> 
                <div>
                    <ItemTitle>{title}</ItemTitle>
                    {id == 1 ? CarouseData.auto : CarouseData.railway}
                </div>
            </div>
        </CarouselItemContainer>
    )
}

const CarouselItemContainer = styled.div`
    border: 3px solid purple;
    margin: 30px;

    .image-container {
        border: 5px solid black;
        min-height: 260px;
        background-image: ${props => props.id == 1 ? 'url(/pic2.png)' : 'url(/pic3.png)'};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
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