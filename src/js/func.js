export default function converter(data) {
  const convertedData = Number(data);

  try {
    if (Number.isNaN(convertedData)) {
      throw new Error('Ввод не является десятичным числом');
    }
  } catch (e) {
    throw Error(e.message());
  }
  return convertedData;
}
