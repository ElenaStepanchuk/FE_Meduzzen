export const GetFromLocalstorageStatus = (localValue: string) => {
  const value =
    typeof window !== "undefined"
      ? localStorage.getItem(`${localValue}`)
      : null;
  const data = value !== null ? JSON.parse(value) : null;
  return data;
};

export const GetFromLocalstorageToken = (localValue: string) => {
  const value =
    typeof window !== "undefined"
      ? localStorage.getItem(`${localValue}`)
      : null;
  const data = value !== null ? value : null;
  return data;
};
