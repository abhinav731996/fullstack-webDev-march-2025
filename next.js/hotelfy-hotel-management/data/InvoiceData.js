export const InvoiceData = [
  {
    id: 1,
    reservationId: 1,
    invoiceNumber: "#INV-3051",
    totalAmount: 1280,
    issuedDate: "Mar 14, 2035",
    status: "paid",

    details: {
      dueDate: "Mar 18, 2035",
      guestDetails: {
        name: "John Smith",
        email: "john.smith@email.com",
        phone: "+1 555 111-1111",
        address: "New York, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Superior Room", price: 400, quantity: 3, total: 1200 },
        { id: 2, name: "Room Service", price: 40, quantity: 2, total: 80 },
      ],
      summary: { subTotal: 1280, tax: 0, serviceCharge: 0, total: 1280 },
    },
  },

  {
    id: 2,
    reservationId: 2,
    invoiceNumber: "#INV-3052",
    totalAmount: 720,
    issuedDate: "Mar 13, 2035",
    status: "paid",

    details: {
      dueDate: "Mar 17, 2035",
      guestDetails: {
        name: "Michael Brown",
        email: "michael@email.com",
        phone: "+1 555 222-2222",
        address: "Texas, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Deluxe Room", price: 360, quantity: 2, total: 720 },
      ],
      summary: { subTotal: 720, tax: 0, serviceCharge: 0, total: 720 },
    },
  },

  {
    id: 3,
    reservationId: 3,
    invoiceNumber: "#INV-3053",
    totalAmount: 2540,
    issuedDate: "Mar 12, 2035",
    status: "paid",

    details: {
      dueDate: "Mar 16, 2035",
      guestDetails: {
        name: "Sophia Wilson",
        email: "sophia@email.com",
        phone: "+1 555 333-3333",
        address: "California, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Suite Room", price: 800, quantity: 3, total: 2400 },
        { id: 2, name: "Laundry", price: 70, quantity: 2, total: 140 },
      ],
      summary: { subTotal: 2540, tax: 0, serviceCharge: 0, total: 2540 },
    },
  },

  {
    id: 4,
    reservationId: 4,
    invoiceNumber: "#INV-3054",
    totalAmount: 1050,
    issuedDate: "Mar 12, 2035",
    status: "unpaid",

    details: {
      dueDate: "Mar 18, 2035",
      guestDetails: {
        name: "David Lee",
        email: "david@email.com",
        phone: "+1 555 444-4444",
        address: "Chicago, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Deluxe Room", price: 350, quantity: 3, total: 1050 },
      ],
      summary: { subTotal: 1050, tax: 0, serviceCharge: 0, total: 1050 },
    },
  },

  {
    id: 5,
    reservationId: 5,
    invoiceNumber: "#INV-3055",
    totalAmount: 980,
    issuedDate: "Mar 11, 2035",
    status: "paid",

    details: {
      dueDate: "Mar 17, 2035",
      guestDetails: {
        name: "Emma Davis",
        email: "emma@email.com",
        phone: "+1 555 555-5555",
        address: "Florida, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Superior Room", price: 490, quantity: 2, total: 980 },
      ],
      summary: { subTotal: 980, tax: 0, serviceCharge: 0, total: 980 },
    },
  },

  {
    id: 6,
    reservationId: 6,
    invoiceNumber: "#INV-3056",
    totalAmount: 1150,
    issuedDate: "Mar 11, 2035",
    status: "unpaid",

    details: {
      dueDate: "Mar 18, 2035",
      guestDetails: {
        name: "Emma Rodriguez",
        email: "emma.rodriguez@email.com",
        phone: "+1 658 334-2640",
        address: "Los Angeles, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Superior Room", price: 400, quantity: 2, total: 800 },
        { id: 2, name: "Room Service", price: 65, quantity: 1, total: 65 },
        { id: 3, name: "Laundry Service", price: 25, quantity: 2, total: 50 },
        { id: 4, name: "Mini Bar", price: 15, quantity: 3, total: 45 },
        { id: 5, name: "Late Checkout Fee", price: 50, quantity: 1, total: 50 },
      ],
      summary: { subTotal: 1010, tax: 101, serviceCharge: 39, total: 1150 },
    },
  },

  {
    id: 7,
    reservationId: 7,
    invoiceNumber: "#INV-3057",
    totalAmount: 640,
    issuedDate: "Mar 11, 2035",
    status: "paid",

    details: {
      dueDate: "Mar 16, 2035",
      guestDetails: {
        name: "Chris Evans",
        email: "chris@email.com",
        phone: "+1 555 777-7777",
        address: "Boston, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Standard Room", price: 320, quantity: 2, total: 640 },
      ],
      summary: { subTotal: 640, tax: 0, serviceCharge: 0, total: 640 },
    },
  },

  {
    id: 8,
    reservationId: 8,
    invoiceNumber: "#INV-3060",
    totalAmount: 640,
    issuedDate: "Mar 11, 2035",
    status: "paid",

    details: {
      dueDate: "Mar 16, 2035",
      guestDetails: {
        name: "Robert Downey",
        email: "robert@email.com",
        phone: "+1 555 888-8888",
        address: "California, USA",
      },
      billingDetails: {
        companyName: "Hotelify Management",
        address: "Los Angeles, USA",
        email: "finance@hotelify.com",
        phone: "+1 (555) 236-7410",
      },
      items: [
        { id: 1, name: "Standard Room", price: 320, quantity: 2, total: 640 },
      ],
      summary: { subTotal: 640, tax: 0, serviceCharge: 0, total: 640 },
    },
  },
];