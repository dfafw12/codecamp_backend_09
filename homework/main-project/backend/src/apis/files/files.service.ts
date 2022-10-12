import { Storage } from "@google-cloud/storage";
import { Injectable } from "@nestjs/common";
import "dotenv/config";

@Injectable()
export class FilesService {
  //
  async upload({ files }) {
    const bucket = process.env.GCP_BUCKET;

    const waitedFiles = await Promise.all(files);

    const storage = new Storage({
      projectId: process.env.GCP_PROJECT_ID,
      keyFilename: process.env.GCP_KEY_FILENAME,
    }).bucket(bucket);

    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file(el.filename).createWriteStream())
              .on("finish", () => {
                resolve(`${bucket}/${el.filename}`);
              })
              .on("error", () => reject("실패"));
          })
      )
    );
    console.log(files);
    console.log(results);
    return results;
  }

  // async delete({ files }) {
  //   const bucket = process.env.GCP_BUCKET;
  //   const waitedFiles = await Promise.all(files);

  //   const storage = new Storage({
  //     projectId: process.env.GCP_PROJECT_ID,
  //     keyFilename: process.env.GCP_KEY_FILENAME,
  //   }).bucket(bucket);

  //   waitedFiles.map((el) => {
  //     new Promise((resolve, reject) => {
  //       el.createReadStream().pipe(storage.file(el.filename).delete);
  //     });
  //   });
  // }
}
