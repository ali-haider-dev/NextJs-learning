"use client";

import { fetchProfiledata, Profile } from "@/utils/profileHelper";
import React, { useEffect, useState } from "react";

const Profiles = () => {
  const [data, setData] = useState<Profile[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchProfiledata(selectedCategory);
        setData(result);
        console.log("Profile Data -> ", result);
      } catch (err) {
        console.error("Error -> ", err);
      }
    };

    getData();
  }, [selectedCategory]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>

      <div className="flex flex-row items-start justify-end my-8">
        <label htmlFor="">Category</label>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          name=""
          id=""
          className="mx-4 p-1 px-4 border-2 border-slate-500 "
        >
          <option value="" className="mt-4">
            Select Category
          </option>
          <option value="Graphic Designer" className="mt-4">
            Graphic Designer
          </option>
          <option value="Software Engineer" className="mt-4">
            Software Engineer
          </option>
          <option value="Project Manager" className="mt-4">
            Project Manager
          </option>
        </select>
      </div>

      <ul>
        {data?.map((profile: Profile) => (
          <li key={profile.id} className="mb-2 p-4 border rounded">
            <p>
              <strong>Name:</strong> {profile.firstName} {profile.lastName}
            </p>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Age:</strong> {profile.age}
            </p>
            <p>
              <strong>Occupation:</strong> {profile.occupation}
            </p>
            <p>
              <strong>Address:</strong> {profile.address.street},{" "}
              {profile.address.city}, {profile.address.zipCode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles;
