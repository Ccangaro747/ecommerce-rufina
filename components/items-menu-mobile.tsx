import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/privamera-verano" className="block">Temporada Primavera-Verano</Link>
                <br />
                <Link href="/categories/otono-invierno" className="block">Temporada Otoño-Invierno</Link>
            </PopoverContent>
        </Popover>
    );
}

export default ItemsMenuMobile;