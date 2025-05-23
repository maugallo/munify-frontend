import { router } from "expo-router";
import { useEffect } from "react";

/* Hook que encapsula la lógica de redireccionar la app ni bien levanta
   a la ruta /welcome. Se debe usar timeout para que no arroje error por
   la config de las fonts. */

export function useSafeRedirect(path: string) {
    useEffect(() => {
        const timeout = setTimeout(() => router.replace(path as any), 0);
        return () => clearTimeout(timeout);
    }, [path]);
}