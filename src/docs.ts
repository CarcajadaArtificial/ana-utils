//   ___
//  |   \ ___  __ ___
//  | |) / _ \/ _(_-<
//  |___/\___/\__/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param relativeUrl
 * @param fileNames
 * @returns
 */
export function getDocumentation(relativeUrl: string, fileNames: string[]) {
  const doc: { [key: string]: string } = {};
  const decoder = new TextDecoder('utf-8');
  fileNames.forEach((name) => {
    doc[name] = decoder.decode(Deno.readFileSync(relativeUrl + name + '.md'));
  });
  return doc;
}
