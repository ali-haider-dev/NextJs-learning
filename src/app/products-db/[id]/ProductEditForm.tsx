"use client";
import { useActionState } from "react";
import { FormState, editProduct } from "@/actions/product";
import { Product } from "../page";
// import SubmitButton from "@/components/submit";

export default function EditProductForm({product}:{product:Product}) {

  const initialState: FormState = {
    errors: {},
  };

  const productWithId = editProduct.bind(null,product.id)

  const [state, formAction, isPending] = useActionState(
    productWithId,
    initialState
  );

  return (
    <form action={formAction} className="p-4 space-y-4 max-w-96">
      <div>
        <label className="text-black">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={product.title}
          />
        </label>
        {state.errors.title ? (
          <p className="text-red-500">{state.errors.title}</p>
        ) : (
          ""
        )}
      </div>
      <div>
        <label className="text-black">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
            defaultValue={product.price}

          />
        </label>
        {state.errors.price ? (
          <p className="text-red-500 ">{state.errors.price}</p>
        ) : (
          ""
        )}
      </div>
      <div>
        <label className="text-black">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
            defaultValue={product.description??""}

          />
        </label>
        {state.errors.description ? (
          <p className="text-red-500">{state.errors.description}</p>
        ) : (
          ""
        )}
      </div>
      {/* <SubmitButton /> */}
      <button
        type="submit"
        className="block w-full p-2 text-black bg-blue-500 rounded disabled:bg-gray-500"
        disabled={isPending}
      >
        submit
      </button>
    </form>
  );
}
