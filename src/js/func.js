export default function converter(data) {
  try {
    if (String(parseInt(data, 10)) !== data) {
      throw new Error('Ввод не является десятичным числом');
    }
  } catch (e) {
    throw Error(e.message());
  }
  return Number(data);
}
