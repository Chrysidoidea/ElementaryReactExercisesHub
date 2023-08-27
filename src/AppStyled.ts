import styled from 'styled-components';

type AppStyledProps = {
    $background: number;
}

export const AppStyled = styled.div.attrs<AppStyledProps>(props => ({
    style: {
        background: `linear-gradient(
            190deg,
            hsl(${props.$background}, 60%, 65%),
            hsl(${props.$background - 305}, 64%, 60%)
        )`,
    },
}))`
    display: flex;
    position: relative;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    width: 100vw;
    min-height: 100vh;

`;

export const ContentWrapper = styled.div`
    display: grid;
    place-content: center;
    min-height: 100vh;
    width: 100vw;
`;
export const NavMenuStyled = styled.div`
    display: flex;
    border-radius: .5rem;
    box-shadow:
  #00000009 10px -10px 0px -3px,
  #0000000F 10px -10px;
    height: 80vh;
    background-color: #01010127;
    backdrop-filter: blur(5rem);
    align-items: center;
    padding: 1rem;
    margin-left: 1rem;


    &:first-child {
        flex: 0 0 auto;
    }
    &:last-child {
        flex-grow: 1;
    }

    & > ul > li > a{
        text-decoration: none; 
        font-size: 1.2rem;
        color: white;
        padding: .5rem;
            border-radius: .3rem;
            transition: .3s;
        &:hover {
            background-color: #FFFFFF15;
        }
    };
    & > ul > li > .active{
        background-color: #FFFFFF15;
    }

    & > ul {
        display: flex;
        list-style: none;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
    }
    
`;