# ColorPalette
떠오르는 문장, 구절, 단어를 입력하면 AI가 입력값과 관련된 2~8컬러를 생성해서 보여주는 앱

### 개발환경
- Python==3.8.4
- Flask==2.3.2
- openai==0.27.8
- python-dotenv==1.0.0

### 환경변수 설정
- [오픈API 공식홈페이지](https://openai.com/)에서 API KEY 발급 후, 디렉토리 내에 .env 파일 생성후 아래와 같이 등록
```env
OPENAI_API_KEY= {my key}
```
- 터미널에서 프로젝트 경로로 이동 후 다음과같이 개발 환경 구동
```bash
  curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3
  pip install openai
  pip install python-dotenv
  pip install flask

  cd 프로젝트 경로
  python -m venv env
  source env/bin/activate

  flask run
```