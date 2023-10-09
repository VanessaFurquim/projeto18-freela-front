export default function ExibitProductTemplate (props) {
    // const categories = props.p.category

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

    const categories = []

    function showCategories () {
        for (let i = 0; i < products.length; i++) {
            categories.push(products[i].category)
        }
        console.log(categories)

        return (
            <p>{categories}</p>
        )
    }

    return (
        <form key={props.p.id}>
            <img src="https://www.barkershoes.com/cdn/shop/files/barker-shoes-bladen-brogue-1_ab07c377-221c-46e1-a04b-909ed4c2c16d_1800x1200_crop_center.png?v=1680602760" />
            <h2>{props.p.name}</h2>
            <p>Categorias:</p>
            

            {products.forEach(product => {

                // console.log(product.category[0].category)
                showCategories(product.category)
            })}
        </form>
    )
}