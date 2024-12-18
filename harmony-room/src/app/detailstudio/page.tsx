
import React from "react";
import CollapsePhotos from "../../components/CollapsePhotos";



const DetailStudioPage = () =>{
    const photos = [
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
    ];

    return(
        <div>
            <CollapsePhotos photos={photos} />

        </div>
    );
};

export default DetailStudioPage;