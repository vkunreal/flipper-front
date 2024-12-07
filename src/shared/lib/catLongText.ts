export const catLongText = (text: string, lettersCount: number) => {
  if (text.length > lettersCount) {
    const lastSpace = text.lastIndexOf(" ", lettersCount);

    const cattedText = text.slice(
      0,
      lastSpace !== -1 ? lastSpace : lettersCount
    );

    return cattedText + "...";
  }

  return text;
};
