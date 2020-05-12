#!/bin/bash
git config user.name "$USER_NAME"
git config user.email "$USER_EMAIL"

git checkout master
git pull origin master

find . -maxdepth 1 ! -name 'dist' ! -name '.git' ! -name '.gitignore' ! -name '*.html' -exec rm -rf {} \;

git add -fA
git commit --allow-empty -m "$(git log develop -1 --pretty=%B)"
git push origin master

echo "deployed successfully"
