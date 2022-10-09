import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  upload({ file }) {
    console.log(file);
    //파일을 클라우드 스토리지에 저장하는 로직

    // storage setting
    const storage = new Storage({
      projectId: 'bionic-region-364005',
      keyFilename: 'gcp-file-storage.json',
    }).bucket('codecamp_storage');

    // 세팅된 스토리지에 파일올리기
    file
      .createReadStream()
      .pipe(storage.file(file.filename).createWriteStream())
      .on('finish', () => console.log('성공'))
      .on('error', () => console.log('실패'));
    // 다운로드 URL 브라우저에 돌려주기.
    return file.filename;
  }
}
