import styled from "styled-components";

const StyledCardWithCols = styled.div`
    display:flex;
    justify-content: ${props=> props.justifyContent || 'space-around'};
    align-items: center;
    height: ${props => props.height || '100px'};
    padding: ${props => props.padding || '0px'};

    .FS40{
        font-size: 40px;
    }
    .FS30{
        font-size: 30px;
    }
    .FS24{
        font-size: 24px;
    }
    .FS20{
        font-size: 20px;
    }
`

StyledCardWithCols.shouldForwardProp = prop => prop !== 'justifyContent' && prop !== 'height' && prop !== 'padding';

export { StyledCardWithCols };