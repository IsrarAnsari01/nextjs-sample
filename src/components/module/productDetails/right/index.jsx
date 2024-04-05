import React from "react";
import { Text } from "../../../controls";
import styles from "./right.module.css";
import Radio from "@mui/material/Radio";
import { Button, FormControlLabel } from "@mui/material";
import { assets } from "../../../../assets";
import useCart from "../../../../hooks/useCart";
function Index({ data }) {
  const { addProduct } = useCart();
  return (
    <div>
      <Text variant="h6">{data?.Title}</Text>
      <Text variant="body2">
        Brand:{" "}
        <span className={styles.brandTextStyle}>
          <u>{data?.Brand}</u>
        </span>{" "}
      </Text>

      <div className={styles.priceDiv}>
        <Text variant="h6">
          <b>Rs. {data?.Price}</b>
        </Text>
      </div>

      <div>
        <FormControlLabel
          value="a"
          control={
            <Radio
              checked={true}
              disabled={true}
              name="radio-buttons"
              sx={{
                "&.Mui-disabled": {
                  color: assets.colors.lightGreen,
                },
              }}
            />
          }
          label={
            <Text variant="body1" style={{ color: "black" }}>
              Per Strip
            </Text>
          }
        />
      </div>

      <div className={styles.cartSection}>
        <div className={styles.boxStyle}>
          <div>
            <span className={styles.boxTextStyle}>
              Expected time 1 hour{" "}
              <span className={styles.deliveryTextStyle}>Quick Delivery</span>
            </span>
          </div>
        </div>
        <div className={styles.buttonDivStyle}>
          <Button
            variant="contained"
            size="large"
            className={styles.buttonStyle}
            sx={{
              "&:hover": {
                bgcolor: assets.colors.lightGreen,
              },
            }}
            onClick={() => addProduct(data)}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
