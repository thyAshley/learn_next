import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { breakpoint, theme } from "../apptheme";
import Banner from "../components/home/Banner";
import Card from "../components/home/Card";
import CoffeeShopData from "../data/CoffeeShop.json";
import useLocation from "../hooks/useLocation";

interface coffeeStoreDetails {
  id: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
}
interface HomeProps {
  coffeeStores: coffeeStoreDetails[];
}

const Home: NextPage<HomeProps> = ({ coffeeStores }) => {
  const [text, setText] = useState("View stores nearby");

  const { error, latLong, trackLocation } = useLocation();

  const onClickHandler = () => {
    setText((prevText) => {
      if (prevText === "View stores nearby") {
        console.log(latLong);
        trackLocation();
        return "Loading...";
      }
      return "View stores nearby";
    });
  };
  return (
    <ContainerStyle>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>
      <BodyStyle>
        <Banner buttonText={text} handleOnClick={onClickHandler} />
        {coffeeStores.length && (
          <>
            <SubHeading>Store</SubHeading>
            <GridContentStyle>
              {coffeeStores.map((shop) => (
                <Card
                  key={shop.id}
                  title={shop.name}
                  url={`/coffee-store/${shop.id}`}
                  imgUrl={shop.imgUrl}
                />
              ))}
            </GridContentStyle>
          </>
        )}
      </BodyStyle>
    </ContainerStyle>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = CoffeeShopData;
  return {
    props: {
      coffeeStores: data,
    },
  };
};

const ContainerStyle = styled.div`
  margin-bottom: 14rem;

  @media (min-width: ${breakpoint.small}) {
    padding: 0 1rem;
  }
`;

const BodyStyle = styled.main`
  margin: 2.5rem auto 0 auto;
  max-width: 72rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: ${breakpoint.small}) {
    margin-top: 3rem;
    padding: 0 1.5rem;
  }
`;

const GridContentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  @media (min-width: ${breakpoint.medium}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: ${breakpoint.large}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SubHeading = styled.h2`
  font-size: 2.25rem;
  line-height: 2.25rem;
  padding-bottom: 2rem;
  margin-top: 2rem;
  color: ${theme.color.white};
`;
