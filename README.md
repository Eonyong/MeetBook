### 🌈 commit convention

- `feat` : new feature for the user, not a new feature for build script
- `fix` : bug fix for the user, not a fix to a build script
- `docs` : changes to the documentation
- `style` : formatting, missing semi colons, etc; no production code change
- `refactor` : refactoring production code, eg. renaming a variable
- `chore` : updating grunt tasks etc; no production code change

```bash
feat: profile-history schrollbar add
```



### ⭐️ git flow 

##### 1. git clone

```bash
git clone https://lab.ssafy.com/s06-webmobile1-sub2/S06P12A206.git
```

##### 2. develop 브랜치로 이동

```bash
git switch develop
```

 ### 👉  feature work flow

 ##### 3. feature branch 생성

```bash
git branch feature/be/user/login
```
##### 4. feature branch 로 이동

```bash
git switch feature/be/user/login
```

##### 5. ‼️**중요**‼️ develop branch pull 진행 

```bash
git pull origin develop
```

##### 6. 개발 후 add - commit - push 진행

- 일반적으로는 `develop` 브랜치에 바로 `push` 하지만,  ssafy project에서는 진행사항 확인을 위해  `feature branch` 도 `remote` 에 올립니다.

```bash
git add .
git commit -m "feat: profile-history schrollbar add"

# push 와 동시에 remote branch 생성
git push --set-upstream origin feature/be/user/login
```

##### 7. feature branch 에서 개발 진행

- `convention` 참고
```bash
git add .
git commit -m "feat: profile-history schrollbar add"
git push origin feature/be/user/login
```

##### 8. 테스트까지 진행 후 develop branch에 merge 진행
- `assignee` 와 `reviewer`는 필요시 등록합니다.

- 방법 1 : `feature branch` 에서 `develop branch` 로 `push` 

```bash
# feature 
git push origin develop
```

- 방법 2 : `develop branch` 에서 `feature branch` 를 `merge` 

```bash
# develop 
git merge feature/be/user/login
```

##### 9. merge request 작성

- `gitlab` 의 푸시알림 확인
- `merge request` 만들기
- 내용 입력 후 `delete branch after merge request` 체크되어있는지 확인, ‼️**체크 해제**‼️
- `merge` 

##### 10. develop branch pull
- `pull` 은 매번 해주기
```bash
git pull origin develop
```

##### 11. 페이지 레이아웃
<img width="840" alt="스크린샷 2022-02-23 오후 5 20 14" src="https://user-images.githubusercontent.com/42180383/155467577-0d710e80-d0a5-4be8-991a-8c113835b112.png">

<img width="840" alt="스크린샷 2022-02-23 오후 5 20 23" src="https://user-images.githubusercontent.com/42180383/155467639-f7a806b2-a7de-4a4a-85a8-30fef0044725.png">

<img width="840" alt="스크린샷 2022-02-23 오후 5 20 27" src="https://user-images.githubusercontent.com/42180383/155467792-9c2410d0-3d14-4c9b-936f-6b8edc8fdd16.png">

<img width="840" alt="스크린샷 2022-02-23 오후 5 20 44" src="https://user-images.githubusercontent.com/42180383/155467811-1ccef0a5-f7aa-433c-911d-53a67cd6b843.png">

<img width="840" alt="스크린샷 2022-02-23 오후 5 20 50" src="https://user-images.githubusercontent.com/42180383/155467820-3a7c853b-dc61-426f-b700-eb350ca51797.png">

<img width="840" alt="스크린샷 2022-02-23 오후 5 20 58" src="https://user-images.githubusercontent.com/42180383/155467861-6b12a9a4-b318-475e-a91c-5c077e38b7dd.png">

