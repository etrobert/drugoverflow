const minLength = 5;
const maxLength = 255;

const validate = (data: unknown) => {
  if (typeof data !== 'object' || data === null)
    return { error: 'Invalid data' };

  if (!('description' in data)) return { error: 'Description is required' };

  const description = data.description;

  if (typeof description !== 'string')
    return { error: 'Description should be a string' };

  if (description.length < minLength)
    return { error: 'Description must be at least 5 characters long' };

  if (description.length > maxLength)
    return { error: 'Description must be at most 255 characters long' };

  if (!('drugId' in data)) return { error: 'Drug ID is required' };

  const drugId = data.drugId;

  return { data: { description, drugId } };
};

export { minLength, maxLength, validate };
