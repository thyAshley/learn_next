import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import React from "react";

import CoffeeShop from "../../data/CoffeeShop.json";
import { coffeeStoreDetails } from "../../types";
import Head from "next/head";

interface CoffeeShopDetailPageProps {
  coffeeStores: coffeeStoreDetails;
}

const CoffeeShopDetailPage: NextPage<CoffeeShopDetailPageProps> = ({
  coffeeStores,
}) => {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{coffeeStores.name}</title>
      </Head>
      <div>
        <Link href="/" prefetch>
          <a>Back to home</a>
        </Link>
        <p>{coffeeStores.address}</p>
        <p>{coffeeStores.name}</p>
        <p>{coffeeStores.neighbourhood}</p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  return {
    props: {
      coffeeStores: CoffeeShop.find(
        (coffeeStore) => coffeeStore.id === Number(params.id)
      ),
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = CoffeeShop.map((shop) => ({
    params: { id: shop.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
};

export default CoffeeShopDetailPage;
