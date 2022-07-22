// const fileContent = await Deno.readFile(".\\deps\\window.exe");
// const str = `
// const data: Uint8Array = new Uint8Array([${fileContent}]);
// export {data};
// `;
// Deno.writeTextFile(".\\deps\\window.ts", str);

import {data} from "./windowdata.ts";

async function window(width: number, height: number, file: string, title: string) {
    await Deno.writeFile("temp.exe", data);
    const proc = Deno.run({
        cmd: [".\\temp.exe", `${width}`, `${height}`, `${file}`, `${title}`]
    });
    await proc.status();
    await Deno.remove("temp.exe");
}
