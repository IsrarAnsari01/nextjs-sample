import { useState } from "react";
import axios from "axios";
import {
  Left,
  Right,
  RelatedProducts,
} from "../src/components/module/productDetails";
import { BASE_URL } from "../src/util/constants";
import BreadCrumb from "../src/components/shared/BreadCrumb";
import { Grid } from "@mui/material";
import styles from "../styles/productDetails.module.css";

const ProductDetail = ({ product, suggestedProducts, slug }) => {
  const [productDetail] = useState(product);
  if (!productDetail) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <BreadCrumb slug={slug} />
      <Grid container className={styles.mainContent}>
        <Grid item xs={5}>
          <Left data={productDetail} />
        </Grid>
        <Grid item xs={7}>
          <Right data={productDetail} />
        </Grid>
      </Grid>
      <RelatedProducts suggestedProducts={suggestedProducts} />
    </div>
  );
};

export default ProductDetail;

// From This function next js identify that this is SSR
export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const productRes = await axios.get(
      `${BASE_URL}/GetProductDetailBySlugV2&ProductSlug=${slug}&BranchCode=32`
    );
    const product = productRes.data.Data?.[0] || {};

    let suggestedProducts = [];

    if (product?.ID) {
      const suggestedRes = await axios.get(
        `${BASE_URL}/GetSuggestiveProductsV2&Usedfor=${encodeURIComponent(
          product.Usedfor
        )}&UPC=${product.UPC}&BranchCode=32`
      );

      if (suggestedRes.data?.ResponseType) {
        suggestedProducts = suggestedRes.data.Data;
      }
    }

    return {
      props: {
        product,
        suggestedProducts,
        slug,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);

    return {
      props: {
        product: null,
        suggestedProducts: [],
        slug,
      },
    };
  }
}
