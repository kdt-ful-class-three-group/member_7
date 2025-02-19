import { fsReadFile } from "./fsReadFile.js";

import fs from "fs";
import qs from "querystring";

function createFile(data) {
  console.log(fs.existsSync('data.JSON'));
  //* 사용자가 입력한 데이터 (ex: name=윤종환&address=대전) 받아오지만 해당 데이터는 버퍼형식이기 때문에 이를 문자열로 변환한다.
  const dataString = data.toString();
  //* 바뀐 데이터를 객체화 시킨다.
  const qsObj = qs.parse(dataString);
  //* data.JSON파일을 불러와서 JSON파일의 값을 담은 배열이 반환된다.
  const arrayJSON = fsReadFile();
  //* 사용자가 입력했던 데이터를 새롭게 넣어준다.
  arrayJSON.push(qsObj);
  //* 갱신된 배열을 JSON 문자여로 변환시킨다. 파일로 만들 때 데이터의 형식은 string 또는 buffer 형식만 가능하다.
  const dataJSON = JSON.stringify(arrayJSON, null, 2);
  //* JSON문자열로 변화한 데이터를 JSON파일로 만든다.
  fs.writeFileSync("data.JSON", dataJSON);
}

export { createFile }