import React from 'react'
import styled from "styled-components";

function SidebarOptions({Icon,title, addChannelOption}) {

    const addChannel =() => {

    }

    const selectChannel =() => {
        
    }

    return (
        <SidebarOPtionsContainer onclick={addChannelOption? addChannel: selectChannel}>
           {Icon && <Icon fontSize="small" style={{padding: 10 }} /> }
        
            {Icon ? (
                <h3>{title} </h3>
            ): (
                <SidebarOptionChannel>

                    <span># {title}</span>

                </SidebarOptionChannel>
            )}
            
        </SidebarOPtionsContainer>
    )
}

export default SidebarOptions;


const SidebarOPtionsContainer = styled.div`
    display:flex;
    font-size: 12px;
    padding-left: 2px;
    cursor:pointer;
    align-items: center;

    :hover{
        opacity: 0.9;
        background-color: #340e36;
    }

    >h3{
        font-weight: 500;
    }

    >h3 >span{
        padding: 15px;
    }
`;

const SidebarOptionChannel = styled.div`



`;


