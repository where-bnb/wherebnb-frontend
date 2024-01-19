'use client';

import { useState } from "react";
import { useS3Upload } from "next-s3-upload";
import input from "@/components/ui/inputs/Input";
import handleImageUpload from "@/hooks/usehandleImageUpload";
import Image from "next/image";

export default function UploadComponent() {
    let [src, setSrc] = useState('')

    // let [imageUrl, setImageUrl] = useState();
    // let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
    //
    // let handleFileChange = async file => {
    //     let { url } = await uploadToS3(file);
    //     setImageUrl(url);
    // };

    return (
        // <div>
        //     <FileInput onChange={handleFileChange} />
        //
        //     <button onClick={openFileDialog}>Upload file</button>
        //
        // </div>

        <div>
            <input type="file" accept="image/*" onChange={handleImageUpload}/>
            <img src={src}/>
        </div>
    );
}