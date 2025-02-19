import fs from "fs";

function fsReadFile() {
  const arrayJSON = [];
  //* readFileSync로 data.JSON파일을 읽어오지만 해당 데이터는 buffer이기 때문에 이를 문자열로 변환시킨다.
  const dataString = fs.readFileSync('data.JSON').toString();

  //* 만약 dataString의 값이 ''로 되어있다면 이는 파일을 불러왔지만 해당 파일 내의 데이터가 존재하지 않음을 의미하며 이를 조건으로 나눠준다.
  if(dataString !== ''){
    //* dataString의 값이 존재한다면 해당 내용을 객체화 한다.
    const dataObj = JSON.parse(dataString);
    console.log(dataObj);
    //* 객체의 갯수 만큼 반복한다.
    dataObj.forEach(element => {
      //* 객체 하나 하나 배열에 담아준다.
      arrayJSON.push(element);
    });
  }
  
  //* 받아준 배열을 return 해준다.
  return arrayJSON;
}

export { fsReadFile }