
const CATEGORIES = [
  { id: "dryfruits", label: "Dry Fruits"},
  { id: "spices", label: "Whole Spices" },
  { id: "masalas", label: "Masalas" },
  { id: "herbs", label: "Herbal" },
  { id: "seeds", label: "Seeds" },
];

const PRODUCTS = [
  // ---------------- DRY FRUITS & DRIED FRUITS ----------------
  { name: "بادام", en: "Almonds", category: "dryfruits", image: "images/almonds.jpg", featured: true },
  { name: "اخروٹ", en: "Walnuts", category: "dryfruits", image: "images/walnuts.jpg", featured: true },
  { name: "اخروٹ گری", en: "Walnut Kernel", category: "dryfruits", image: "images/walnut-kernel.jpg" },
  { name: "کاجو", en: "Cashews", category: "dryfruits", image: "images/cashews.jpg", featured: true },
  { name: "پستہ", en: "Pistachios", category: "dryfruits", image: "images/pistachios.jpg", featured: true },
  { name: "چلغوزہ", en: "Pine Nuts", category: "dryfruits", image: "images/pine-nuts.jpg" },
  { name: "مونگ پھلی", en: "Peanuts", category: "dryfruits", image: "images/peanuts.jpg" },
  { name: "کشمش", en: "Raisins", category: "dryfruits", image: "images/kishmish.jpeg" },
  { name: "سبز کشمش", en: "Green Raisins", category: "dryfruits", image: "images/green-raisins.jpg" },
  { name: "منقہ", en: "Black Raisins", category: "dryfruits", image: "images/munaqa.jpeg" },
  { name: "کھجور", en: "Dates", category: "dryfruits", image: "images/dates.jpg", featured: true },
  { name: "انجیر خشک", en: "Dried Figs", category: "dryfruits", image: "images/dried-figs.jpg" },
  { name: "خوبانی خشک", en: "Dried Apricots", category: "dryfruits", image: "images/dried-apricots.jpg" },
  { name: "آلو بخارا خشک", en: "Dried Plums", category: "dryfruits", image: "images/dried-plums.jpeg" },
  { name: "مکھانے", en: "Makhana", category: "dryfruits", image: "images/makhana.jpg" },

  // ---------------- WHOLE SPICES ----------------
  { name: "دار چینی", en: "Cinnamon", category: "spices", image: "images/cinnamon.jpg", featured: true },
  { name: "سبز الائچی", en: "Green Cardamom", category: "spices", image: "images/green-cardamom.jpg", featured: true },
  { name: "بڑی الائچی", en: "Brown Cardamom (Black Cardamom)", category: "spices", image: "images/black-cardamom.jpg" },
    { name: "کالی مرچ", en: "Black Pepper", category: "spices", image: "images/black-pepper.jpg", featured: true },
  { name: "سفید مرچ", en: "White Pepper", category: "spices", image: "images/white-pepper.jpg" },
  { name: "زیرہ سفید", en: "Cumin Seeds (White Cumin)", category: "spices", image: "images/white-cumin.jpg" },
  { name: "شاہ زیرہ", en: "Black Cumin (Shahi Zeera)", category: "spices", image: "images/shahi-zeera.jpg" },
  { name: "دھنیا ثابت", en: "Coriander Seeds (Whole Coriander)", category: "spices", image: "images/whole-coriander.jpg" },
  { name: "سونف", en: "Fennel Seeds" , category: "spices", image: "images/sauf.jpg" },
  { name: "اجوائن", en: "Carom Seeds (Ajwain)", category: "spices", image: "images/ajwain.jpg" },
  { name: "کلونجی", en: "Nigella Seeds (Kalonji)", category: "spices", image: "images/kalonji.jpg" },
  { name: "تیز پات", en: "Bay Leaf", category: "spices", image: "images/tezpata.jpeg" },
  { name: "جاوتری", en: "Mace", category: "spices", image: "images/mace.jpeg" },
  { name: "جائفل", en: "Nutmeg", category: "spices", image: "images/nutmeg.jpg" },
  { name: "بادیان پھول", en: "Star Anise", category: "spices", image: "images/star-anise.jpg" },
 
  

  // ---------------- SPICE POWDERS & MASALAS ----------------
  { name: "لال مرچ پاؤڈر", en: "Cayenne Pepper (Red Chili Powder)", category: "masalas", image: "images/red-chili-powder.jpg", featured: true },
  { name: "ہلدی پاؤڈر", en: "Turmeric (Turmeric Powder)", category: "masalas", image: "images/turmeric-powder.jpg", featured: true },
  // { name: "آمچور", en: "Mango Powder", category: "masalas" },
  // { name: "نمک", en: "Salt", category: "masalas" },
  { name: "زیرہ پاؤڈر", en: "Cumin Powder", category: "masalas", image: "images/cumin-powder.jpg" },
  { name: "گرم مصالحہ پاؤڈر", en: "Garam Masala", category: "masalas", image: "images/garam-masala.jpg", featured: true },
  { name: "چاٹ مصالحہ", en: "Chaat Masala", category: "masalas", image: "images/chat-masala.jpeg" },
  { name: "بریانی مصالحہ", en: "Biryani Masala", category: "masalas", image: "images/briyani-masala.jpeg" },
  { name: "قورمہ مصالحہ", en: "Qorma Masala", category: "masalas", image: "images/qorma-masala.jpeg" },
  { name: "کڑاہی مصالحہ", en: "Karahi Masala", category: "masalas", image: "images/karahi-masala.jpeg" },
  { name: "تکہ مصالحہ", en: "Tikka Masala", category: "masalas", image: "images/tikka-masala.jpeg" },
  { name: "گرم مصالحہ", en: "Garam Masala", category: "masalas", image: "images/garam-masala.jpeg" },


  // ---------------- HERBAL PRODUCTS ----------------
  { name: "اسپغول", en: "Isabgol", category: "herbs", image: "images/isabgol.jpg", featured: true },
  { name: "ملٹھی", en: "Mulethi", category: "herbs", image: "images/mulethi.jpg" },
  { name: "گوند کتیرا", en: "Gond Katira", category: "herbs", image: "images/gond-katira.jpg", featured: true },
  { name: "عقرقرحا", en: "Aqarqarha", category: "herbs", image: "images/aqarqarha.jpeg" },
  { name: "اسگند ناگوری", en: "Ashwagandha", category: "herbs", image: "images/ashwagandha.jpg" },
  { name: "ستاور", en: "Satawar", category: "herbs", image: "images/satawar.jpg" },
  { name: "آملہ خشک", en: "Dried Amla", category: "herbs", image: "images/dried-amla.jpg" },
  { name: "آملہ پاؤڈر", en: "Gooseberry Powder (Amla Powder)", category: "masalas", image: "images/amla-powder.jpg" },

  // ---------------- SEEDS ----------------
  { name: "السی", en: "Flaxseed", category: "seeds", image: "images/flaxseed.jpg", featured: true },
  { name: "سفید تل", en: "Sesame Seeds (White Sesame)", category: "seeds", image: "images/white-sesame.jpg" },
  { name: "کالے تل", en: "Black Sesame", category: "seeds", image: "images/black-sesame.jpg" },
  { name: "کدو کے بیج", en: "Pumpkin Seeds", category: "seeds", image: "images/pumpkin-seeds.jpg", featured: true },
  { name: "سات مغز", en: "Watermelon Seeds", category: "seeds", image: "images/sath-maghaz.jpg" },
  { name: "سورج مکھی", en: "Sunflower Seeds", category: "seeds", image: "images/sunflower-seeds.jpg" },
  // { name: "خشک میتھی", en: "Dried Fenugreek Leaves", category: "seeds" },
  // { name: "خشک میتھی دانہ", en: "Fenugreek Seeds", category: "seeds" },
  // { name: "خشخاش", en: "Poppy Seeds", category: "seeds" },
];
