import styled from 'styled-components';

export const Container = styled.div<{openMenu: boolean}>`
    width: ${({openMenu}) => openMenu? '280px' : '85px'};
    height: 100vh;
    box-sizing: border-box;
    padding: 55px 5px 5px 5px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    user-select: none; 
`;

export const MainMenuContainer = styled.div<{openMenu: boolean}>`
    border-bottom: ${({openMenu}) => openMenu? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
    width: 100%;
    box-sizing: border-box;
`;

export const MenuContainer = styled.div<{openMenu: boolean}>`
    border-bottom: ${({openMenu}) => openMenu? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
    display: ${({openMenu}) => openMenu? 'collum' : 'none'};
    width: 100%;
    box-sizing: border-box;   
`;

export const MenuItem = styled.div <{ active:boolean; openMenu: boolean}> `
    
    min-height: ${({openMenu}) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    padding: 15px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({openMenu}) => openMenu? 'row' : 'column'};
    align-items: center;
    justify-content: ${({openMenu}) => openMenu? 'none' : 'center'};
    background-color: ${({ openMenu, active }) => openMenu? (active? '#f2f2f2' : 'transparent') : 'none'};
&:hover{
    background-color: #e6e6e6;
}  
   
span {
    font-weight: ${({openMenu}) => openMenu? '400' : '200'};
    margin-left: ${({openMenu}) => openMenu? '20px' : 'none'};
    margin-top: ${({openMenu}) => openMenu? 'none' : '10px'};
    font-size: ${({openMenu}) => openMenu? '14px' : '10px'};
    user-select:none;
    box-sizing: border-box;  
}

`;

export const StyledSpan = styled.span`
    height:40px;
    display: flex;
    justify-content:start;
    align-items:center;
    margin: 5px 10px 0px 25px;
    color: #0f0f0f;
    font-size: 16px;
`;

export const ButtonIcon = styled.img`
    width: 20px;  
`;
