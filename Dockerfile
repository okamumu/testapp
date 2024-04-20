# ベースイメージの指定
FROM node:16

# アプリケーションディレクトリの設定
WORKDIR /usr/src/app

# アプリケーションの依存関係ファイルをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースをコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションの起動コマンド
CMD ["node", "app.js"]
