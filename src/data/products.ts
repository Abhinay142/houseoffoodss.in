
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
    image: '/placeholder.svg',
    hoverImage: '/placeholder.svg'
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
    image: '/lovable-uploads/01dd71d0-620a-49ad-8c7f-e411e9d5d7d5.png',
    hoverImage: '/lovable-uploads/44df465d-b9a1-4575-8622-8c502369a35b.png'
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
    image: '/lovable-uploads/3365258a-f037-40b4-ac3e-2b504178a480.png',
    hoverImage: '/lovable-uploads/3365258a-f037-40b4-ac3e-2b504178a480.png'
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
    image: '/lovable-uploads/0098cf42-af22-4537-a063-fbe5ae03b691.png',
    hoverImage: '/lovable-uploads/1224ec37-2be6-4390-acdb-a8929b397394.png'
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
    image: '/placeholder.svg',
    hoverImage: '/placeholder.svg'
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
    image: '/lovable-uploads/2b390886-b310-43de-b984-3700059c3cad.png',
    hoverImage: '/lovable-uploads/2b390886-b310-43de-b984-3700059c3cad.png'
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
    image: '/lovable-uploads/f7d81cbb-3da5-430f-8eab-097341f85c7b.png',
    hoverImage: '/lovable-uploads/23576a2e-f57f-419c-815e-e30669d2dfca.png'
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
    image: '/lovable-uploads/4f31be51-ac7a-43a8-9556-7990d427f42d.png',
    hoverImage: '/lovable-uploads/4f31be51-ac7a-43a8-9556-7990d427f42d.png'
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
    image: '/lovable-uploads/29aed13c-62fe-4965-8355-bca765d098df.png'
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
    image: '/lovable-uploads/988a48dc-40a8-4b39-b390-c49d22dbcab6.png'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
  }
];
