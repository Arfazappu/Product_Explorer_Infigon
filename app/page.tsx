import ProductListPage from "@/components/ProductList/ProductListPage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header>
        <div className="mx-auto max-w-7xl px-4 py-8 pb-2 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800">Product Explorer</h1>
          <p className="mt-1 text-gray-600">Discover and explore our complete product catalog</p>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ProductListPage/>
      </div>
    </main>
  )
}
