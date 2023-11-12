## 과제 제출용 코드샌드박스 링크 첨부
[과제 제출용 코드샌드박스 링크 입니다 link](https://codesandbox.io/p/github/hyeonheebee/react-study-final-challenge-repack-)

혹시 정상제출 확인이 불가한 경우 확인해주시면 정말 감사드립니다! 
(현재 코드샌드박스에서 잘 동작하고 있습니다) 

### 시연 영상

로그인 => 계정없을경우 자동 계정생성 => 게정생성 후 자동으로 로그인 화면 전환 => 글 작성가능/좋아요 가능 / 다른 사람 글 확인 가능 / 로그아웃 가능 
로그인 => 계정 있을경우 로그인 후 기능 가능 

<p align="center">
<img src="https://github.com/hyeonheebee/react-study-final-challenge-repack-/assets/97822063/f67173c9-b9de-44e4-aef0-63b815b56867">
</p>


<hr />


## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example hello-world hello-world-app
# or
yarn create next-app --example hello-world hello-world-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/hello-world
cd hello-world
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities. The `day` directory shows that you can have subdirectories.
