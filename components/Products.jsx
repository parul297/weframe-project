import Card from "./Card";

const Products = () => {
  return (
    <section className="pt-[50px] px-[30px]">
      <div className="flex items-center flex-wrap justify-between pb-[30px]">
        <h1 className="whitespace-pre-wrap font-cabinet font-medium text-gray3939 text-4xl">
          Ces produits pourraient vous intéresser
        </h1>
        <h2 className="whitespace-pre font-cabinet font-medium text-gray3939 underline">
          Voir toute la collection
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[10px]">
        {Array.from({ length: 3 }).map((e, i) => (
          <Card key={i} />
        ))}
      </div>
    </section>
  );
};

export default Products;
