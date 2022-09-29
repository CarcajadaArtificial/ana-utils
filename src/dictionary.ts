//   ___  _    _   _
//  |   \(_)__| |_(_)___ _ _  __ _ _ _ _  _
//  | |) | / _|  _| / _ \ ' \/ _` | '_| || |
//  |___/|_\__|\__|_\___/_||_\__,_|_|  \_, |
//                                     |__/
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export type Dictionary<EntryType> = { [key: string]: EntryType };

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function emulates the behavior of `Array.prototype.map()` in Dictionaries. It calls a function
 * passing each entry of the dictionary as an argument.
 *
 * @param dictionary The dictionary to be mapped.
 * @param callback The function that will map the entries of the dictionary.
 *
 * @returns A new dictionary with each entry mapped to the function.
 *
 * @example
 */
export function dMap<EntryType>(
  dictionary: Dictionary<EntryType>,
  callback: (entry: EntryType, key?: string) => EntryType
): Dictionary<EntryType> {
  const newDictionary: Dictionary<EntryType> = {};
  Object.keys(dictionary).forEach((key: string) => {
    newDictionary[key] = callback(dictionary[key], key);
  });
  return newDictionary;
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 * This function emulates the behavior of `Array.prototype.reduce()` in Dictionaties. It runs a function that accumulates to a final single value returned.
 *
 * @param dictionary The dictionary to be reduced.
 * @param callback The fucntion that will reduce the dictionary to a single value.
 * @param initialValue The initial value for the acummulator.
 *
 * @returns A single value reduced from the dictionary.
 *
 * @example
 */
export function dReduce<EntryType, AcumType>(
  dictionary: Dictionary<EntryType>,
  callback: (entry: EntryType, key: string, acum: AcumType) => AcumType,
  initialValue: AcumType
): AcumType {
  let acum: AcumType = initialValue;
  Object.keys(dictionary).forEach((key: string) => {
    acum = callback(dictionary[key], key, acum);
  });
  return acum;
}
