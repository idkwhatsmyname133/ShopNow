"use client";

import React, { useState } from "react";
import { Frame, Gap, Horizontal, Box, Input } from "@/app/Global.styled";
import Image from "next/image";
import ShopNowLogo from "../../../public/ShopNow.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const iconStyle = {
  color: "#949494",
  cursor: "pointer",
  fontSize: 24,
  transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
};

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Frame>
      <Box
        width={"90%"}
        borderRadius={"10px"}
        style={{ margin: "2rem auto", padding: "1.5rem 3rem" }}
      >
        <Horizontal>
          <div>
            <Image src={ShopNowLogo} alt="" width={130} />
          </div>
          <Horizontal>
            <Gap>
              <Input type="text" placeholder="Search" />
              <span
                style={{ display: "inline-flex", alignItems: "center" }}
                className={`search-icon-hover${isClicked ? " search-icon-clicked" : ""}`}
                onClick={() => {
                  setIsClicked(true);
                  setTimeout(() => setIsClicked(false), 200);
                }}
              >
                <SearchOutlinedIcon style={iconStyle} />
              </span>
            </Gap>
          </Horizontal>
        </Horizontal>
      </Box>
      <style>{`
        .search-icon-hover:hover svg {
          transform: scale(1.1);
        }
        .search-icon-clicked svg {
          transform: scale(0.9) !important;
        }
      `}</style>
    </Frame>
  );
};

export default Navbar;

