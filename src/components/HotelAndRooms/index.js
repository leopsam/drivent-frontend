import styled from 'styled-components';
import useHotels from '../../hooks/api/useHotels';
import { TitleAndSubtitle } from '../TitleAndSubtitle';
import HotelCard from './HotelCard';

export function HotelAndRooms() {
  const { hotels } = useHotels();

  return (
    <>
      <TitleAndSubtitle title={'Escolha de hotel e quarto'} subtitle={'Primeiro, escolha seu hotel'} />
      <HotelContainer>
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </HotelContainer>
      <TitleAndSubtitle subtitle={'Ótima pedida! Agora escolha seu quarto:'} />

    </>
  );
}

const HotelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 18px;

  > div {
    width: 196px;
    height: 264px;
    background: #ebebeb;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding-top: 16px;
    padding-bottom: 22px;

    > img {
      width: 168px;
      height: 109px;
      border-radius: 5px;
    }
    > h1 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #343434;
      width: calc(100% - 28px);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > h2 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: #3c3c3c;
      width: calc(100% - 28px);
    }
    > h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #3c3c3c;
      width: calc(100% - 28px);
    }
  }
`;
