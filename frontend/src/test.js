const useAmount = (amount) => {
  const [integer, decimal = '00'] = amount.toString().split('.');
  return {
    integer,
    decimal,
  };
};


console.log(
  useAmount(1)
)