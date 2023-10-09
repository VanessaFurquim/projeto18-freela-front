import Footer from "../../components/Footer"
import ExibitProductTemplate from "../../components/ExibitProductTemplate"

export default function ListProductsPage () {

    const products = [
        {id: 1, name: "A", category: [
            {
                key: "category",
                id: "1",
                category: "blusa"
            },
            {
                key: "category",
                id: "3",
                category: "verão"
            }
        ]},
        {id: 2, name: "B", category: [
            {
                key: "category",
                id: "2",
                category: "shorts"
            },
            {
                key: "category",
                id: "3",
                category: "verão"
            },
            
        ]},
        {id: 3, name: "C", category: [
            {
                key: "category",
                id: "1",
                category: "blusa"
            },
            {
                key: "category",
                id: "4",
                category: "inverno"
            }
        ]}    
    ]

    // console.log(typeof(products))

    // function exibitProductTemplate () {
    //     const categories = props.p.category
    //     console.log(categories)
    //     console.log(typeof(categories))
    //     return (
    //         <form key={props.p.id}>
    //             <img src="https://www.barkershoes.com/cdn/shop/files/barker-shoes-bladen-brogue-1_ab07c377-221c-46e1-a04b-909ed4c2c16d_1800x1200_crop_center.png?v=1680602760" />
    //             <h2>{props.p.name}</h2>
    //             <p>Categorias:</p>
    //             {categories.map(category => <p>{category}</p>)}
    //         </form>
    //     )
    // }

    return (
        <>
            <h1>Produtos disponíveis</h1>
            {products.map(product => <ExibitProductTemplate p={product} />)}
            <Footer />
        </>
    )
}