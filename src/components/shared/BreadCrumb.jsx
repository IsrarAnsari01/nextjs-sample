import React from "react";
import { assets } from "../../assets";
import { Text } from "../controls";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BreadCrumb = ({ slug }) => {
  const breadcrumbItems = [
    {
      label: "Home",
      icon: <ArrowForwardIosIcon style={{ width: 10, height: 10 }} />,
    },
    {
      label: "Product",
      icon: <ArrowForwardIosIcon style={{ width: 10, height: 10 }} />,
    },
    {
      label: "Product Detail",
      icon: <ArrowForwardIosIcon style={{ width: 10, height: 10 }} />,
    },
    { label: slug, icon: null },
  ];

  return (
    <div style={{ marginLeft: "50px" }}>
      <Text variant="caption" style={{ color: assets.colors.lightGrey }}>
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.label}
            {item.icon && item.icon}
          </React.Fragment>
        ))}
      </Text>
    </div>
  );
};

export default BreadCrumb;
