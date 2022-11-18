import React, { useCallback } from 'react';

const Auth = (): JSX.Element => {
  const CLIENT_ID: string = '0673cd3227e0ec2d9f22';
  const REDIRECT_URL: string = 'http://localhost:3000/github-login';

  const onClick = useCallback((): void => {
    const url: string = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`;
    // OAuth app을 등록할때 작성했던 redirect url과 발급받은 CLIENT_ID를 바탕으로 URL을 생성합니다.
    
    window.open(url);
    // 해당 URL로 이동하기
  }, []);

  return (
    <button onClick={onClick}>
      클릭클릭1
    </button>
  );
};

export default Auth;