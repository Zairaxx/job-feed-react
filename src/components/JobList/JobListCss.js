import styled from 'styled-components'
import {colors} from '../../utility/colors';

export const JobListWrapper = styled.aside`
    display:flex;
    flex-direction:column;
    justify-content:center;
    section {
        display:none;
    }
`

export const JobListItem = styled.span`
    display:flex;
    border-bottom:solid black 2px;
    padding:0;
    flex-wrap:wrap;
    align-items:center;
    width:100%;
    background:${colors.default};

    div {
        display:flex;
        flex-grow:0;
        width:100%;
    }

    img {
        margin-top:10px;
        background:white;
    }

    p {
        font-size:16px;
        font-family:'Open Sans', arial;
        padding:0.5rem;
        @media (max-width:1024px){
            font-size:12px;
        }
    }
    
    span {
        padding:0 0.5rem
    }
    a {
        text-decoration:none;

        :hover {
            color:white;
        }
    }
    :hover {
        cursor:pointer;
    }
`

export const JobListItemDesc = styled.section`
background-image: linear-gradient(to bottom, ${colors.default}, #ffffff);
width:100%;
margin:0;
max-height:400px;
overflow-y:scroll;
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    display: none;
}
`

export const CallToAction = styled.button`
    display:flex;
    align-self:center;
    justify-content:center;
    flex-wrap:nowrap;
    color: white;
    border-radius: 4px;
    margin-right:20px;
    text-decoration:none;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
    background: rgb(28, 184, 65);
    a {
        color:white;
    }
    :hover {
        background: rgb(58, 214, 95)
    }
}
`

export const Flex = styled.div`
    display:flex;
    width:${props => props.minWidth || "auto"};
    flex-direction:${props => props.direction || "row"};
    justify-content:${props => props.justify || "flex-start"};
    align-items: ${props => props.alignItems || "flex-start"};`