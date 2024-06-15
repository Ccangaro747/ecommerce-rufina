import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
            <div className="mt-4 text-center">
                <p>Descubre la moda más elegante</p>
                <h4 className="mt-2 text-4xl">
                    <span className="font-bold">Rufina</span>Indumentaria
                </h4>
                <p className="my-2 text-lg">Explora nuestra colección exclusiva</p>
                <Link href="" className={buttonVariants()}>Ver catálogo</Link>
            </div>
            <div className="h-[350px] bg-cover lg:h-[600px] bg-[url('/success2.jpg')] bg-center mt-5" />
        </>
    );
}

export default BannerProduct;
