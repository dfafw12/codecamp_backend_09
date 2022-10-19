import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilesService {
  async upload({ files }) {
    // console.log(files);
    //파일을 클라우드 스토리지에 저장하는 로직

    const waitedFiles = await Promise.all(files);
    // console.log(files.Promise.filename, ':file');

    // storage setting
    const storage = new Storage({
      projectId: 'bionic-region-364005',
      keyFilename: 'gcp-file-storage.json',
    }).bucket('codecamp_storage');

    // // 세팅된 스토리지에 파일올리기

    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file(el.filename).createWriteStream())
              .on('finish', () => resolve(`codecamp_storage/${el.filename}`))
              .on('error', () => reject('실패'));
          }),
      ),
    );

    // 다운로드 URL 브라우저에 돌려주기.
    return results;
  }
}
