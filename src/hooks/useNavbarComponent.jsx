'use client'

import {useRouter} from 'next/navigation';
import {useState, useEffect} from 'react';

export default function useNavbarComponent() {
    const router = useRouter ();
    const [ navbarType, setNavbarType ] = useState ('default');

    useEffect (() => {
        // 라우터가 준비되었을 때만 로직 실행
        const { pathname } = router;
        console.log('pathname', pathname)
        if (pathname.startsWith ('/hosting')) {
            setNavbarType ('host');
        } else if (pathname.startsWith ('/become-a-host')) {
            setNavbarType ('register');
        }

    }, [ router.pathname ]);

    return navbarType;
}
