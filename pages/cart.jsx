import React from "react";
import useCart from "../src/hooks/useCart";
import { useRouter } from "next/router";
import { Button, Grid } from "@mui/material";
import { Text } from "../src/components/controls";
function Cart() {
  const { getCartProducts, removeProduct } = useCart();
  const router = useRouter();

  const redirectToDetailsPage = () =>
    router.push({
      pathname: "panadol-500mg-tablets",
    });

  return (
    <div style={{ height: "77vh" }}>
      {getCartProducts?.length === 0 ? (
        <>
          <Text variant="h4">{`You don't have any products in cart`}</Text>
          <Button onClick={() => redirectToDetailsPage()}>
            Redirect To Product Details page
          </Button>
        </>
      ) : (
        <>
          <Text variant="h5">
            {" "}
            Total Items in Cart. {getCartProducts?.length}{" "}
          </Text>
          <Grid container spacing={2}>
            {getCartProducts?.map((p) => (
              <Grid
                key={p?.ID}
                item
                xs={4}
                style={{
                  marginTop: "18px",
                  border: "1px solid rgb(240, 231, 231)",
                  padding: 5,
                  textAlign: "center",
                }}
              >
                <Text variant="h6">Title: {p?.Title}</Text>
                <Text variant="h6">Price: {p?.Price}</Text>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeProduct(p)}
                >
                  Remove
                </Button>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}

export default Cart;
