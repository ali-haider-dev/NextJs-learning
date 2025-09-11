import { UserData } from "@/data/usersData";
import { NextRequest } from "next/server";

type NewItem = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  occupation: string;
  address: { street: string; city: string; zipCode: string };
};

export async function GET(query: NextRequest) {
  const searchParams = query.nextUrl.searchParams;
  const searchTerm = searchParams.get("query")?.toLowerCase() || "";
  if (searchTerm) {
    const filteredData = UserData.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchTerm) ||
        user.lastName.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.occupation.toLowerCase().includes(searchTerm) ||
        user.address.city.toLowerCase().includes(searchTerm) ||
        user.address.street.toLowerCase().includes(searchTerm) ||
        user.address.zipCode.toLowerCase().includes(searchTerm)
    );
    return Response.json(filteredData);
  }
  return Response.json(UserData);
}

export async function POST(request: Request) {
  const requestBody: NewItem = await request.json();

  const newItem = {
    id: UserData.length + 1,
    firstName: requestBody.firstName,
    lastName: requestBody.lastName,
    email: requestBody.email,
    age: requestBody.age,
    occupation: requestBody.occupation,
    address: {
      street: requestBody.address.street,
      city: requestBody.address.city,
      zipCode: requestBody.address.zipCode,
    },
  };

  UserData.push(newItem);
  console.log("New Item  -> ", newItem);
  return Response.json(UserData);
}
