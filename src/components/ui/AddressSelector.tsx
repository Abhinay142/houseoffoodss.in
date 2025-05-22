import React from "react";

interface Address {
  flatNo: string;
  building: string;
  area: string;
  city: string;
  pinCode: string;
}
interface AddressSelectorProps {
  addresses: Address[];
  onSelect: (address: Address) => void;
  onAddNew: () => void;
}
const AddressSelector: React.FC<AddressSelectorProps> = ({ addresses, onSelect, onAddNew }) => (
  <div>
    <label className="block mb-2 font-medium">Select Address</label>
    <select
      className="w-full border px-3 py-2 rounded mb-2"
      onChange={e => {
        const idx = parseInt(e.target.value, 10);
        if (!isNaN(idx)) onSelect(addresses[idx]);
      }}
    >
      <option value="">Choose from saved addresses</option>
      {addresses.map((addr, idx) => (
        <option key={idx} value={idx}>
          {addr.flatNo}, {addr.building}, {addr.area}, {addr.city}, {addr.pinCode}
        </option>
      ))}
    </select>
    <button type="button" className="text-blue-600" onClick={onAddNew}>+ Add New Address</button>
  </div>
);

export default AddressSelector;
