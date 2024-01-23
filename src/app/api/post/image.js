
import aws from 'aws-sdk'
export default async function handler(요청, 응답){
    aws.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: 'ap-northeast-2',
        signatureVersion: 'v4',
    })

    const s3 = new aws.S3();
    const post = await s3.createPresignedPost({
        Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
        Fields: { key : 요청.query.file },
        Expires: 60, // seconds
        Conditions: [
            ['content-length-range', 0, 1048576], //파일용량 1MB 까지 제한
        ],
    })

    응답.status(200).json({
        url: post.url, // S3 버킷 URL
        fields: post.fields // 업로드에 필요한 추가 필드들
    });
}