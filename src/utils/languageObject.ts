export const languageObject = (object: Record<string, any>) => {
  const language: string = "en";
  return object?.[language] || object || null;
};
