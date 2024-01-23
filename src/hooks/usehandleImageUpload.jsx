'use client';


import {useState} from "react";

async function handleImageUpload(file) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ src, setSrc ] = useState('')
    
    let filename = encodeURIComponent(file.name);
    let res = await fetch('/api/post/image?file=' + filename);
    res = await res.json();

    const formData = new FormData();
    Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
        formData.append(key, value);
    });

    let uploadResult = await fetch(res.url, {
        method: 'POST',
        body: formData,
    });

    if (uploadResult.ok) {
        let imageUrl = res.url + '/' + filename;

        // 현재 이미지 정보를 localStorage에 저장
        let images = JSON.parse(localStorage.getItem('uploadedImages')) || [];
        images.push(imageUrl);
        localStorage.setItem('uploadedImages', JSON.stringify(images));

        setSrc(imageUrl);
    } else {
        console.error('업로드 실패');
    }
}

export default handleImageUpload;