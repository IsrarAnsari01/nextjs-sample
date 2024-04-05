import React from "react";
import Image from "next/image";
import { assets } from "../../../../../assets";
import { Text } from "../../../../controls";
import styles from "./Card.module.css";
import { Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useCart from "../../../../../hooks/useCart";

function Index({ data }) {
  const { addProduct } = useCart();
  return (
    <Grid item xs={2} className={styles.cardMainStyle}>
      <div className={styles.cardHeader}>
        <Image
          src={data?.ProductImage}
          width={140}
          height={140}
          alt="Product Image"
        />

        <span className={styles.iconStyles}>
          <div className={styles.iconLayout}>
            <div style={{ height: 20, width: 20, borderRadius: 10 }}>
              <ShoppingCartIcon style={{ color: "white" }} />
            </div>
          </div>
        </span>
        <span className={styles.iconStyles}>
          <div className={styles.iconLayout}>
            <div
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                cursor: "pointer",
              }}
              onClick={() => addProduct(data)}
            >
              <ShoppingCartIcon style={{ color: "white" }} />
            </div>
          </div>
        </span>
      </div>
      <div className={styles.cardBody}>
        <Text variant="body1">{data?.Title}</Text>
        <Text variant="body1" className={styles.priceTextStyle}>
          <span style={{ color: assets.colors.lightGreen }}>
            Rs: {data?.SalePrice}{" "}
            <del style={{ fontSize: 12, color: assets.colors.lightGrey }}>
              {data?.Price}
            </del>
          </span>{" "}
        </Text>
      </div>
    </Grid>
  );
}

export default Index;
