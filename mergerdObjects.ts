const mergeObjects = () => {
  const obj1 = { name: "Meghana", age: 21, location: "Telangana" };
  const obj2 = { name: "Megha", mobile: "7993716654" };
  const obj3 = { isStudent: true, a: [1, 2, 3], location: "Nizamabad" };

  const merged = {
    ...obj1,
    ...obj2,
    ...obj3,
  };

  console.log(merged);
};

mergeObjects();

