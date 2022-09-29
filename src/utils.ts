//   _   _ _   _ _
//  | | | | |_(_) |___
//  | |_| |  _| | (_-<
//   \___/ \__|_|_/__/
//
////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Inside Ana, there are interfaces that start with a lowercase `i`, e.g. `iAnaConfiguration`. These are input interfaces and have the same properties as their equivalent without the `i`. So then, what is the difference between each other? All of the properties of an input interface must be optional. Because we can't force the developer to input all properties of a interface every time. In other words, if a developer wants to configure Ana, it shouldn't be a requirement to add all AnaConfiguration properties only to change one of them.
 *
 * Then, the problem happens when trying to use the input interface. All values are optional, so it becomes verbose to validate each and everyone of them in a way simmilar to this: `interface.property ? interface.property : undefined`. That's why we need the second non-input interface, where no property is optional. This function transforms `iExample` into `Example` using the default values found in `dExample`.
 *
 * @param defaultParameters To transofrm an input interface into a non-input interface, one needs an Object with default values.
 * @param inputParameters The set properties of the input interface.
 *
 * @returns An object of a non-input interface overwritten with input property values.
 *
 * @example
 */
export function applyDefaults<Type extends {}, iType extends {}>(
  defaultParameters: Type,
  inputParameters: iType
): Type {
  if (Object.keys(defaultParameters).length === 0) {
    // Throw error?
  } else if (Object.keys(inputParameters).length === 0) {
    return defaultParameters;
  }
  return { ...defaultParameters, ...inputParameters };
}

//  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
/**
 *
 * @param url
 * @param method
 *
 * @returns
 *
 * @example
 */
export const bring = async <ResponseObject>(
  url: string,
  method?: 'GET'
): Promise<ResponseObject> =>
  (await fetch(url, {
    method: method,
  }).then(async (res) => {
    return await res.json();
  })) as ResponseObject;
