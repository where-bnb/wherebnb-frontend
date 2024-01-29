'use client';

import {useState, useCallback, useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import ImagePreview from "@/components/host/RegisterRoom/photos/ImagePreview";
import {useHostData} from "@/context/HostDataContext";

const ImageUploadComponent = () => {
    const { updateImages, hostData, isLoading } = useHostData ();
    const [uploadImages, setUploadImages] = useState({ imageFiles: hostData.photos, imageUrls: hostData.photos.map(file => file.preview) });
    useEffect (() => {
        console.log("=>(ImageUploadComponent.jsx:30) updateImages", uploadImages);
    }, [uploadImages]);

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length < 3) {
            alert('최소 3개 이상의 이미지를 선택해야 합니다.');
            return;
        }
        const newFiles = acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        }));
        console.log("=>(ImageUploadComponent.jsx:18) newFiles", newFiles);

        setUploadImages({
            imageFiles: [...uploadImages.imageFiles, ...newFiles],
            imageUrls: [...uploadImages.imageUrls, ...newFiles.map(file => file.preview)],
        });
        updateImages ([...uploadImages.imageFiles, ...newFiles]);
        console.log("=>(ImageUploadComponent.jsx:30) newFiles", newFiles);
        console.log("=>(ImageUploadComponent.jsx:30) updateImages", uploadImages);
    }, [uploadImages]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
        },
        multiple: true
    });

    const handleDeleteImage = (id) => {
        const newImages = uploadImages.imageFiles.filter((_, index) => index !== id);
        const newUrls = uploadImages.imageUrls.filter((_, index) => index !== id);
        setUploadImages({
            imageFiles: newImages,
            imageUrls: newUrls,
        });
        updateImages(newImages);
    };


    if (isLoading) {
        return (
            <div
                className="flex justify-center items-center w-full h-full"
            >
                loading...
            </div>)
    }
    return (
        <div className="container mx-auto">
            <form className="flex flex-col items-center p-4">
                <div {...getRootProps()} className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 cursor-pointer hover:border-gray-500">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>이미지를 놓으세요...</p>
                    ) : (
                        <p>클릭 또는 파일을 이곳에 드래그하세요.</p>
                    )}
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {uploadImages.imageUrls.map((url, idx) => (
                        <ImagePreview key={idx} url={url} idx={idx} onDelete={handleDeleteImage} />
                    ))}
                </div>
            </form>
        </div>
    );
};

export default ImageUploadComponent;
