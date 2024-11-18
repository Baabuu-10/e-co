import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]); // Original fetched data
  const [filteredData, setFilteredData] = useState([]); // Data filtered by user input
  const [search, setSearch] = useState(""); // User input for filtering

  useEffect(() => {
    // Fetch all products once
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json); // Set the original data
        setFilteredData(json); // Initialize filtered data
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []); // Run only once on component mount

  useEffect(() => {
    // Filter products when `search` changes
    const lowerCaseSearch = search.toLowerCase();
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(lowerCaseSearch)
    );
    setFilteredData(filtered);
  }, [search, data]); // Run when `search` or `data` changes

  return (
    <div>
      {/* Top Bar */}
      <div className="flex items-center justify-between bg-gray-300 p-3">
        <h1>{filteredData.length} products</h1>

        <div>
          <input
            type="text"
            placeholder="Enter product name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-2 px-4 rounded-lg border border-gray-400"
          />
        </div>
        <div>
          <select className="py-2 px-8 rounded-lg border-none">
            <option>Relevance</option>
            <option>Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Products Cards */}
      <div className="flex items-center justify-center flex-wrap">
        {filteredData.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-5">
            <div className="flex flex-col items-center justify-center space-y-3 shadow-2xl h-96 w-80 cursor-pointer hover:drop-shadow-2xl transition-all duration-500">
              <img src={item.image} alt={item.title} className="h-60 w-52" />

              <div className="flex flex-col items-center justify-center flex-wrap px-3 space-y-6">
                <h1 className="text-gray-400">{item.title}</h1>
                <p>${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
