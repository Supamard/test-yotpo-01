import React from 'react';
import Script from 'next/script';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

interface iProduct {
  id: string;
  title: string;
  imageSource?: string;
  price?: string;
  description?: string;
  url?: string;
}

interface Props {
  cachedProduct: iProduct;
}

const dummy =[{
  id: '1Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5NDI0MTA0NzM2Mzc',
  title: 'Soñadora Sweatshirt',
  imageSource: 'https:///..../',
  price: '20.00',
  description: 'ssss',
  url: 'https://slxshop.myshopify.com/products/sonadora-sweatshirt'
},
{
  
  id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY5OTY4NTk0NTM2MDU',
  title: 'You Go Girl',
  imageSource: 'https:///..../',
  price: '20.00',
  description: 'ssss',
  url: 'https://slxshop.myshopify.com/products/you-go-girl'
}]

export const getStaticPaths: GetStaticPaths<{
  id: string;
}> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id;

  return {
    props: {
      cachedProduct: productId ? dummy[+productId-1] : null
  }}
};

const ID = ({ cachedProduct }: Props) => {
  return (
    <>
      <Script
        async
        src="//staticw2.yotpo.com/jWfVeXhcM8mJRDhJhyiQ6ztL3NdvJAEnv3wPesxg/widget.js"
        strategy="beforeInteractive"
      />
      {cachedProduct.title}
      <div>
        <div
          className="yotpo yotpo-main-widget"
          data-product-id={cachedProduct?.id.replace(/\W/, '')}
          data-name={cachedProduct?.title}
          data-url={cachedProduct.url}
          data-image-url={cachedProduct?.imageSource}
          data-price={cachedProduct.price}
          data-currency={'USD'}
          data-description={cachedProduct?.description}></div>
      </div>
      <div>
    <Link href="/products/1"><a>Go to 1 </a></Link>
    <Link href="/products/2"><a>Go to 2 </a></Link>
      </div>
    </>
  );
};

export default ID;
