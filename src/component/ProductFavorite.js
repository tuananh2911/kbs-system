import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ProductSelection() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (age) => {
    setSelectedProduct(age);
    navigate('/products'); // Chuyển hướng sau khi cập nhật trạng thái
  };

  const products = ["18-25", "26-30", "31-35", "36-40"];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Chọn Độ Tuổi Của Bạn</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <button
            key={product}
            className={`px-4 py-2 rounded-md text-white font-medium ${selectedProduct === product ? 'bg-blue-600' : 'bg-blue-500'}`}
            onClick={() => handleProductSelect(product)} // Sử dụng handleAgeSelect ở đây
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  );
}


export default ProductSelection;
