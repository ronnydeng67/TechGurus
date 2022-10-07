{
    entities: {

        users: {
            1: {
                id: 1,
                username: "nonny",
                email: "nonny@gmail.com",
                cart: cart,
                favorites: [1,2,3],
                reviews: [1,2,3]
            },
            2: {
                id: 2,
                username: "lonny",
                email: "lonny@gmail.com",
                favorites: [1,2,3],
                reviews: [4,5,9]
            },
            3: {
                id: 3,
                username: "konny",
                email: "konny@gmail.com",
                favorites: [1,2,3],
                reviews: [12,23,39]
            }
        },
        items: {
            1: {
                id: 1,
                name: "Smart tv",
                price: "130",
                description: "Smart TVs, sometimes called connected TVs, connect to your home's internet network."
                favorites: [1,2,3],
                reviews: [12,23,39]
            },
            2: {
                id: 2,
                name: "iPhone 15",
                price: "800",
                description: "Apple newest iPhone, has 5 cameras in the back, 2 cameras in the front."
                favorites: [1,2,3],
                reviews: [4,224,545]
            },
            3: {
                id: 3,
                name: "Bluetooth speaker",
                price: "80",
                description: "Bluetooth able wireless rich bass speaker"
                favorites: [1,2,3],
                reviews: [43,32,3214]
            }
        },
        cart: {
            1: {
                id: 1,
                userId: 2,
                itemId: 1,
                quantity: 1,
            },
            2: {
                id: 2,
                userId: 1,
                itemId: 2,
                quantity: 1,
            },
            3: {
                id: 3,
                userId: 5,
                itemId: 3,
                quantity: 1,
            }
        },
        favorite: {
            1: {
                id: 1,
                userId: 1,
                itemId: 1,
            },
            2: {
                id: 2,
                userId: 2,
                itemId: 3,
            },
            3: {
                id: 3,
                userId: 3,
                itemId: 4,
            },
        },
        reviews: {
            1: {
                id: 1,
                userId: 1,
                itemId: 2
                title: title,
                body: body
            },
            2: {
                id: 2,
                userId: 3,
                itemId: 5
                title: title,
                body: body
            },
            3: {
                id: 3,
                userId: 7,
                itemId: 6
                title: title,
                body: body
            }
        }
    },
    ui: {
        modalOpen: true
    },
    session: { 
        currentUser: 3
    },
    errors: {
        userError: ["Incorrect username/password combination"],
    }
}