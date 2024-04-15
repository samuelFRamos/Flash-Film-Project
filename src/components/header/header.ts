

export const Listas = styled.li<{ active: boolean }>`
    font-size: 20px;
    font-family: "Bebas Neue", sans-serif;
    color: ${(props) => props.active ? '#16d3f0' : '#fff'};
    list-style: none;
    cursor: pointer;
    border-bottom:${(props) => props.active ? '4px solid #16d3f0' : 'none'} ;
`;