
export interface Product {
  id: string;
  name: string;
  category: 'sweets' | 'savouries';
  ingredients: string[];
  prices: {
    '250g': number;
    '500g': number;
    '1kg': number;
  };
  image: string;
  hoverImage?: string;
}

export const products: Product[] = [
  // Sweets
  {
    id: 'ragi-laddu',
    name: 'Ragi Laddu',
    category: 'sweets',
    ingredients: ['Ragi Flour', 'Jaggery', 'Ghee'],
    prices: {
      '250g': 185,
      '500g': 370,
      '1kg': 650
    },
    image: '/lovable-uploads/2777f303-236c-4754-9d5f-458c2e4e68d7.png',
    hoverImage: '/lovable-uploads/99c753fe-7ee1-493c-b504-6fdd2c69ca42.png'
  },
  {
    id: 'bellam-sunnundalu',
    name: 'Bellam Sunnundalu',
    category: 'sweets',
    ingredients: ['Urad Dal Flour', 'Jaggery', 'Ghee'],
    prices: {
      '250g': 195,
      '500g': 390,
      '1kg': 680
    },
    image: '/lovable-uploads/1f79e99c-70ab-464e-9ce0-cbe65313967d.png',
    hoverImage: '/lovable-uploads/1f79e99c-70ab-464e-9ce0-cbe65313967d.png'
  },
  {
    id: 'nuvvu-laddu',
    name: 'Nuvvu Laddu',
    category: 'sweets',
    ingredients: ['Sesame Seeds', 'Jaggery', 'Ghee'],
    prices: {
      '250g': 150,
      '500g': 300,
      '1kg': 500
    },
    image: '/lovable-uploads/77874c11-ff3f-4624-a8cb-b6b113aa8121.png',
    hoverImage: '/lovable-uploads/96543ab8-8043-4d0f-9794-d9c033609a40.png'
  },
  {
    id: 'dry-fruit-laddu',
    name: 'Dry Fruit Laddu',
    category: 'sweets',
    ingredients: ['Cashew', 'Almond', 'Pista', 'Dates', 'Poppy seeds', 'Raisins', 'Watermelon Seeds', 'Pumpkin Seeds', 'Dry Coconut', 'Edible Gum'],
    prices: {
      '250g': 300,
      '500g': 600,
      '1kg': 1100
    },
    image: '/lovable-uploads/5423a150-8093-4228-ae3f-ab1a7391806b.png',
    hoverImage: '/lovable-uploads/e77e5ccd-0f7f-4c6a-971d-bb3775e2931c.png'
  },
  {
    id: 'boondi-laddu',
    name: 'Boondi Laddu',
    category: 'sweets',
    ingredients: ['Besan', 'Sugar', 'Ghee', 'Elaichi', 'Cashew', 'Oil', 'Raisins'],
    prices: {
      '250g': 195,
      '500g': 390,
      '1kg': 700
    },
    image: '/lovable-uploads/0ab8f3ac-ce7b-4586-98f5-fa1587a620d5.png',
    hoverImage: '/lovable-uploads/01cb7912-cac9-4dab-bc84-6dce710456bb.png'
  },
  {
    id: 'bellam-gavvalu',
    name: 'Bellam Gavvalu',
    category: 'sweets',
    ingredients: ['Rice Flour', 'Jaggery', 'Ghee', 'Sesame Seeds'],
    prices: {
      '250g': 150,
      '500g': 300,
      '1kg': 550
    },
    image: '/lovable-uploads/f2abd18e-6b02-4724-9e5b-2f8ffb460040.png',
    hoverImage: '/lovable-uploads/9d06f1ec-cd41-4af3-8c21-760979143d6a.png'
  },
  {
    id: 'kaju-mysorepak',
    name: 'Kaju Mysorepak',
    category: 'sweets',
    ingredients: ['Besan', 'Sugar', 'Ghee', 'Oil', 'Cashew'],
    prices: {
      '250g': 250,
      '500g': 500,
      '1kg': 900
    },
    image: '/lovable-uploads/7440753b-a4d0-410d-b3f4-e4eb9e5a849a.png',
    hoverImage: '/lovable-uploads/a4618811-349e-4872-b860-962127f1b626.png'
  },
  
  // Savouries
  {
    id: 'butter-murukulu',
    name: 'Butter Murukulu',
    category: 'savouries',
    ingredients: ['Flour', 'Butter', 'Ajwain', 'Chilli Powder', 'Salt', 'Oil'],
    prices: {
      '250g': 165,
      '500g': 330,
      '1kg': 550
    },
    image: '/lovable-uploads/471a0678-3271-4692-8db8-88b451abe34f.png',
    hoverImage: '/lovable-uploads/b8f11f91-3bc7-422d-a55d-a65bb6b37c30.png'
  },
  {
    id: 'janthikalu',
    name: 'Janthikalu',
    category: 'savouries',
    ingredients: ['Rice Flour', 'Sesame Seeds', 'Cumin Seeds', 'Chilli Powder', 'Salt', 'Oil'],
    prices: {
      '250g': 165,
      '500g': 330,
      '1kg': 550
    },
    image: '/lovable-uploads/4bfdc03e-d23c-4d75-b80a-43ff5011f6b7.png',
    hoverImage: '/lovable-uploads/27020914-3b95-499b-a46f-b4058f0f6639.png'
  },
  {
    id: 'chekkalu',
    name: 'Chekkalu',
    category: 'savouries',
    ingredients: ['Flour', 'Sesame Seeds', 'Jeera', 'Chilli Powder', 'Salt', 'Oil'],
    prices: {
      '250g': 150,
      '500g': 300,
      '1kg': 500
    },
    image: '/lovable-uploads/a42b4e0d-b2be-486f-9a95-6d0949f42ee9.png',
    hoverImage: '/lovable-uploads/0ed96002-1bc9-4114-8ea3-f71f6048078d.png'
  },
  {
    id: 'hot-boondi',
    name: 'Hot Boondi',
    category: 'savouries',
    ingredients: ['Besan', 'Ground Nut', 'Chilli Powder', 'Salt', 'Oil'],
    prices: {
      '250g': 135,
      '500g': 270,
      '1kg': 450
    },
    image: '/lovable-uploads/e62df34e-ced2-4fa8-bd3a-f8b0de0dbfc9.png',
    hoverImage: '/lovable-uploads/2b70c9c4-fbfd-497e-adfb-2a945166a0a4.png'
  },
  {
    id: 'mixture',
    name: 'Mixture',
    category: 'savouries',
    ingredients: ['Besan', 'Ground Nut', 'Cornflakes', 'Chilli Powder', 'Salt', 'Oil'],
    prices: {
      '250g': 150,
      '500g': 300,
      '1kg': 500
    },
    image: '/lovable-uploads/137e8882-0538-40b7-a405-a3c023003e97.png',
    hoverImage: '/lovable-uploads/586fcabb-b7f8-4b30-98ca-f7b1825fe700.png'
  }
];
