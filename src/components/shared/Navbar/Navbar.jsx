import React, { memo } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { assets } from "../../../assets";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const redirectToCartPage = () => router.push({ pathname: "cart" });
  return (
    <div className={styles.mainDiv}>
      <div>
        <Image
          className={styles.imageStyle}
          src={assets.images.logo}
          width={120}
          height={50}
          alt="Logo Image"
        />
      </div>
      <div className={styles.fieldsStyle}>
        <div className={styles.fieldInnerStyle}>
          <TextField
            type="string"
            placeholder="Search for medicine & more"
            size="small"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "15px",
                height: "40px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={styles.fieldInnerStyle}>
          <div>
            <TextField
              type="string"
              placeholder="No address selected"
              disabled={true}
              size="small"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "15px",
                  height: "40px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <LocationOnIcon color="success" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowForwardIosIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className={styles.fieldInnerStyle}>
          <div className={styles.buttonsStyle}>
            <div>
              <Button
                variant="contained"
                size="small"
                className={styles.instantOrderButton}
                sx={{
                  "&:hover": {
                    bgcolor: assets.colors.lightGreen,
                  },
                }}
              >
                <span className={styles.buttonTextStyle}> Instant Order</span>
              </Button>
            </div>
            <div className={styles.cartButtonDivStyle}>
              <Button
                variant="contained"
                size="small"
                className={styles.cartButtonStyle}
                sx={{
                  "&:hover": {
                    bgcolor: assets.colors.lightGreen,
                  },
                }}
                onClick={redirectToCartPage}
              >
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Navbar);
