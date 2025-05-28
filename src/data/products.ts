
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
    image: '/placeholder.svg'
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
