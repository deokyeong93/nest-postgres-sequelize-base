# TS => JS 컴파일 목표 디렉토리
outDirURL="./src/database/build-migrations" 

# 환경 설정 (Commend시 결정)
if [ -z "$1" ]; then
  ENVIRONMENT='development'
else
  ENVIRONMENT="$1"
fi


echo "📚 마이그레이션 환경 : $ENVIRONMENT"
echo " "

echo "🚀 1단계 : TS 마이그레이션 파일 => JS 컴파일"
for filename in ./src/database/migrations/*.ts; do
  yarn tsc -t es2017 --module commonJS --outDir $outDirURL $filename
done
echo "👍 TS => JS 컴파일 완료"
echo " "

echo "🚀 2단계 : DB 마이그레이션 진행중 => $ENVIRONMENT 환경"
yarn sequelize db:migrate:undo --env $ENVIRONMENT
echo "DB 마이그레이션 진행사항 확인 부탁 🙏"
echo " "

echo "🚀 3단계 : 컴파일된 파일들 삭제 시작"
yarn prettier --write $outDirURL
rm -rf $outDirURL
mkdir $outDirURL
echo "👍 컴파일된 파일 삭제 완료"