import styled from '@emotion/styled';

export const Container = styled.section`
    padding-top: 1em;
    padding-bottom: 0;
    border-radius: 0.8em;
    background-color: #fefefe;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;
    background-color: white;
    font-size: 20px;
    font-weight: 700;
`;

export const List = styled.ul`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin-bottom: 0;
`;

export const Stat = styled.li`
    list-style:none;
    width: 80px;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0 0 20%;
    transition: color 0.3s ease;
    :hover{
        color:white;
    }
`;

export const Label = styled.span`
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const Percent = styled.span`
    font-weight: 500;
    font-size: 16px;
`;
