export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  occupation: string;
  address: { street: string; city: string; zipCode: string };
};

export const fetchProfiledata = async (selectedCategory: string) => {
  //   filtering data on multiple fields using query parameters

  const res = await fetch(
    `http://localhost:3000/profile/api?query=${selectedCategory}&`,
    { method: "GET" }
  );
  const data: Profile[] = await res.json();

  const filteredProfile = data?.filter((user) =>
    user.occupation.includes(selectedCategory)
  );

  return filteredProfile;
};
