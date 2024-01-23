const ImagePreview = ({ url, idx, onDelete }) => (
    <div style={{ margin: '10px'}} className="flex flex-col items-center justify-center">
        <img src={url} alt={`Uploaded ${idx}`} style={{ width: '350px', height: '350px' }} />
        <button type="button" className="border-2 rounded-xl px-4 py-2 bg-emerald-300 font-bold" onClick={() => onDelete(idx)}>삭제</button>
    </div>
);

export default ImagePreview;