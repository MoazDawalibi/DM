type JsonObject = { [key: string]: any };

export const jsonObjectToArray = (input: string | JsonObject): Array<{ key: string, value: any }> => {
  let obj: JsonObject;

  if (typeof input === 'string') {
    try {
      obj = JSON.parse(input);
    } catch (error) {
      return [];
    }
  } else if (typeof input === 'object' && input !== null) {
    obj = input;
  } else {
    return [];
  }

  return Object.entries(obj).map(([key, value]) => ({ key, value }));
};

