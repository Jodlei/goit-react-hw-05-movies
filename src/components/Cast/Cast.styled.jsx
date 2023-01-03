import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-bottom: 30px;
`;

export const CastList = styled.ul`
  display: grid;
  width: 1600px;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 20px auto 0px;
  padding: 0px;
  list-style: none;
`;

export const CastItem = styled.li`
  padding: 5px;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 2px 1px -1px;
`;

export const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  :hover {
    transform: scale(1.03);
  }
`;

export const Text = styled.p`
  margin-top: 5px;
`;
