import Product from "@/app/component/product";
import Link from "next/link";


const Page = ({ params }: any) => {

    const btns = [
        { title: "All" },
        { title: "Breakfast" },
        { title: "Lunch" },
        { title: "Shakes" },
        { title: "Dinner" },
    ]

    const menu = [
        {
            id: 1,
            title: "buttermilk pancakes",
            category: "breakfast",
            price: 15.99,
            img: "/menu/item-1.jpeg",
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            title: "diner double",
            category: "lunch",
            price: 13.99,
            img: "/menu/item-2.jpeg",
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            title: "godzilla milkshake",
            category: "shakes",
            price: 6.99,
            img: "/menu/item-3.jpeg",
            desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
            id: 4,
            title: "country delight",
            category: "breakfast",
            price: 20.99,
            img: "/menu/item-4.jpeg",
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 5,
            title: "egg attack",
            category: "lunch",
            price: 22.99,
            img: "/menu/item-5.jpeg",
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 6,
            title: "oreo dream",
            category: "shakes",
            price: 18.99,
            img: "/menu/item-6.jpeg",
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 7,
            title: "bacon overflow",
            category: "breakfast",
            price: 8.99,
            img: "/menu/item-7.jpeg",
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 8,
            title: "american classic",
            category: "lunch",
            price: 12.99,
            img: "/menu/item-8.jpeg",
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            title: "quarantine buddy",
            category: "shakes",
            price: 16.99,
            img: "/menu/item-9.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
        {
            id: 10,
            title: "bison steak",
            category: "dinner",
            price: 22.99,
            img: "/menu/item-10.jpeg",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ];

    const searchTerm = params.category;

    const entries = searchTerm === "all" ? [...menu] : menu.filter((item) => item.category === searchTerm);

    return (
        <div className="mt-5 px-10">
            <h1 className="text-3xl font-semibold text-center underline underline-offset-8 decoration-brownColor decoration-4">Our Menu</h1>

            <div className="flex items-center justify-center gap-5 mt-10">
                {
                    btns.map((btn, index) => {
                        return (
                            <Link href={`${btn.title.toLocaleLowerCase()}`} key={index}>
                                <button
                                    className="border-2 px-2 py-1 text-brownColor border-brownColor rounded-md lg:hover:bg-brownColor lg:hover:text-white
                                lg:text-xl lg:px-3 lg:py-2
                                duration-300"
                                >{btn.title}</button>
                            </Link>
                        )
                    })
                }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-14 justify-items-center gap-3">
                {
                    entries.map((item) => {
                        return (
                            <Product key={item.id} {...item} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Page


