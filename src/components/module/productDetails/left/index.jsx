import React from "react";
import Image from "next/image";
import styles from "./left.module.css"
function Index({ data }) {
  return (
    <div className={styles.mainDivStyle}>
      <Image
        src={data?.ProductImage}
        alt="product image"
        width={300}
        height={300}
      />
    </div>
  );
}

export default Index;
