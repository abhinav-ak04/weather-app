function Error({ message }) {
  return (
    <div className="mb-2 rounded bg-red-100 p-2 text-center text-red-700">
      {message}
    </div>
  );
}

export default Error;
