// Create this as MinimalRTKTest.tsx
// Test RTK Query without your existing slice

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useState } from "react";

// Simple test API
const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["TestItem"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "announcements",
      providesTags: ["TestItem"],
    }),
    addItem: builder.mutation({
      query: (newItem) => ({
        url: "announcements",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["TestItem"],
    }),
  }),
});

// Simple test store
const testStore = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});

const TestComponent = () => {
  const { data, isLoading } = testApi.useGetItemsQuery(undefined);
  const [addItem, { isLoading: isAdding }] = testApi.useAddItemMutation();
  const [input, setInput] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log("Minimal RTK test - adding item");

    if (!input.trim()) return;

    try {
      await addItem({
        id: crypto.randomUUID(),
        message: input,
        acknowledgedBy: [],
      }).unwrap();

      console.log("Minimal RTK test - item added successfully");
      setInput("");
    } catch (err) {
      console.error("Minimal RTK test - error:", err);
    }
  };

  console.log("TestComponent render - data length:", data?.length);

  return (
    <div className="p-4">
      <h2>Minimal RTK Query Test</h2>
      <p>Items count: {data?.length || 0}</p>

      <form onSubmit={handleAdd}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Test input"
          className="border p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Add Test Item"}
        </button>
      </form>

      <div className="mt-4">
        {data?.slice(-3).map((item: any) => (
          <div key={item.id} className="border p-2 mb-1">
            {item.message}
          </div>
        ))}
      </div>
    </div>
  );
};

const MinimalRTKTest = () => {
  console.log("MinimalRTKTest render");

  return (
    <Provider store={testStore}>
      <TestComponent />
    </Provider>
  );
};

export default MinimalRTKTest;
