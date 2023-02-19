export const join = (messages: unknown[]): string => {
  let res = '';
  for (let index = 0; index < messages.length; index++) {
    const value = messages[index];

    let part = '';

    switch (typeof value) {
      case 'undefined':
      case 'function':
      case 'object':
        part += JSON.stringify(value, null, 2);
        break;

      case 'boolean':
      case 'bigint':
      case 'number':
        part += value.toString();
        break;

      default:
        part += value;
        break;
    }

    res += part;
    if (!messages[index + 1]) continue;
    res += ' ';
  }

  return res;
};
