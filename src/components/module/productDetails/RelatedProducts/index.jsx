import React from "react";
import styles from "./RelatedProducts.module.css";
import { Text } from "../../../controls";
import { Grid } from "@mui/material";
import Card from "./Card";
function Index({ suggestedProducts }) {
  return (
    <div className={styles.mainSection}>
      <div className={styles.textDivColor}>
        <Text variant="h6" className={styles.textColor}>
          <b>Related Products</b>
        </Text>
      </div>
      <div className={styles.cardSection}>
        <Grid container spacing={2} className={styles.applySpacing}>
          {suggestedProducts?.length > 0 &&
            suggestedProducts?.map((p) => <Card key={p?.ID} data={p} />)}
        </Grid>
      </div>
    </div>
  );
}

export default Index;
