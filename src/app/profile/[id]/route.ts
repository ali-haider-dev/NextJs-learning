import { UserData } from "@/data/usersData";

type UpdatedItemType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  occupation: string;
  address: { street: string; city: string; zipCode: string };
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const filteredData = UserData.filter(
    (userData) => userData.id === parseInt(id)
  );

  console.log("Filtered Items ->", filteredData, "ID -> ", id);

  return Response.json(filteredData);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const requestBody: UpdatedItemType = await request.json();

  const id = (await params).id;

  const indexForUpdation = UserData.findIndex(
    (userData) => userData.id === parseInt(id)
  );

  console.log("Index ->", indexForUpdation);

  UserData[indexForUpdation] = {
    id: indexForUpdation + 1,
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    age: requestBody.age,
    occupation: requestBody.occupation,
    email: requestBody.email,
    address: {
      city: requestBody.address.city,
      street: requestBody.address.street,
      zipCode: requestBody.address.zipCode,
    },
  };

  return Response.json(
    `Profile Updated Successfully ${JSON.stringify(UserData[indexForUpdation])}`
  );
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const indexOfData = UserData.findIndex(
    (userData) => userData.id === parseInt(id)
  );

  console.log("Index of Data->", indexOfData);
  if (indexOfData > -1) {
    UserData.splice(indexOfData, 1);
  }

  return Response.json(UserData);
}
