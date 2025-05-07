#!/bin/bash

echo "FAHyeSeong.github.io"
read REPO_NAME

echo "kimsangewook"
read GITHUB_USER

# 현재 폴더 이름 가져오기
CURRENT_DIR=${PWD##*/}

# Git 초기화 및 업로드
git init
git branch -M main
git remote add origin https://github.com/kimsangewook/FAHyeSeong.github.io.git
git add .
git commit -m "웹사이트 초기 커밋"
git push -u origin main

echo ""
echo "✅ 소스가 성공적으로 업로드되었습니다."
echo "👉 GitHub Pages 설정하려면 아래를 참고하세요:"
echo "   1. GitHub에서 저장소로 이동: https://github.com/$GITHUB_USER/$REPO_NAME"
echo "   2. Settings > Pages > Branch: 'main' 선택"
echo "   3. Folder는 '/'(root)로 설정 후 저장"
echo "   4. 배포 주소: https://$GITHUB_USER.github.io/$REPO_NAME"
