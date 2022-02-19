import Image from 'next/image';
import styled from 'styled-components';

const Section = ({ props }) => {
    return (
        <SectionWrapper>
            <SectionTitleWrapper>
                <h2>{props.title}</h2>
                {props.description && <p>{props.description}</p>}
            </SectionTitleWrapper>

            <SectionContentWrapper type={props.type}>
                { props.sectionContent }
            </SectionContentWrapper>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    margin-top: 135px;
    text-align: justify;
`

const SectionTitleWrapper = styled.div`
    margin-bottom: 125px;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;

    h2 {
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 47px;
        line-height: 150%;
        color: #000000;
    }

    p {
        max-width: 65%;
        font-family: Gilroy;
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        line-height: 160%;
        color: #000000;
    }
`

const SectionContentWrapper = styled.div`
    border: 5px solid red;
    display: flex;
    justify-content: flex-end;

    .first-section-content {
        display: flex;

        div {
            border: 3px solid yellow;
            width: 50%;
            min-height: 600px;

            &:nth-child(1) {
                background-image: url(/pic1.png);
                background-repeat: no-repeat;
                background-size: contain;
            }

            &:nth-child(2) {
                padding: 0 80px;
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
        width: 100%;
        display: grid;
        grid-template-rows:  50% 50%; 
        grid-template-columns: 50% 50%;
        grid-template-areas: "image auto"    
                             "image railway";

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
                background-color: gray;

                ~ .image-container {
                    transition: background-image 0.8s ease;
                }
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
        }

        li {
            position: relative;
            margin-left: 20px;

            &::before {
                position: absolute;
                content: '—';
                left: -20px;
            }
        }

    }

    
`

export default Section;