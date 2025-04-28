function KeyValue() {
  return (
    <>
      <div className="h-[5.5rem] w-full flex justify-between items-end p-4 ">
        <div>
          <h3>key</h3>
          <p>value</p>
        </div>
        <div className="flex flex-row gap-x-2">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      {/* more key values boxes will be here */}
    </>
  );
}

export default KeyValue;
