import { Storage } from "@google-cloud/storage";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FilesService {
  async upload({ files }) {
    // console.log(files);

    const waitedFiles = await Promise.all(files);

    const storage = new Storage({
      projectId: "bionic-region-364005",
      keyFilename: "gcp-file-storage.json",
    }).bucket("codecamp_storage");

    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file(el.filename).createWriteStream())
              .on("finish", () => {
                // console.log(el);
                resolve(`codecamp_storage/${el.filename}`);
              })
              .on("error", () => reject("실패"));
          })
      )
    );

    return results;
  }
}
