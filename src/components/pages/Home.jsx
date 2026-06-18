import React from "react";
import Button from "../Button";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryData } from "../galarey";

function Home() {
  return (
    <div className="align-center">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        gutterBreakPoints={{ 350: "12px", 750: "16px", 900: "24px" }}
      >
        <Masonry>
          {galleryData &&
            galleryData.map((img) => {
              return <img key={img.image} src={img.image} alt={img.title} />;
            })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Home;