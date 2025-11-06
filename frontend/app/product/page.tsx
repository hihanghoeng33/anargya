// app/products/page.tsx
import Image from "next/image";

export default async function ProductsPage() {
    const res = await fetch("https://dummyjson.com/products", {
        cache: "no-store",
    });
    const data = await res.json();
    const products = data.products || [];

    return (
        <main className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-center text-cyan-500">
                Products Showcase
            </h1>
            {products.length === 0 ? (
                <p className="text-center text-gray-500">No Products Found</p>
            ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {products.map((product: any) => (
                    <div
                        key={product.id}
                        className="bg-zinc-900 rounded-xl p-4 hover:scale-105 transition-all"
                    >
                        <div className="w-full h-40 relative mb-3">
                            <Image
                                src={product.thumbnail || "/placeholder.png"}
                                alt={product.title}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-cyan-400 text-lg font-semibold truncate">
                                {product.title}
                            </h2>
                            <p className="text-gray-400 text-sm line-clamp-2 mb-2">
                                {product.description}
                            </p>
                            <p className="text-white font-bold">${product.price}</p>
                            <div className="flex justify-between items-center">
                                <p className="text-[#FFFAFF] font-bold">${product.price}</p>
                                <span className="text-xs-yellow-400">
                                    {product.rating}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </main>
    );
}
