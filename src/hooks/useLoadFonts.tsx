import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

/* Hook que encapsula la lógica para configurado de fonts. */

SplashScreen.preventAutoHideAsync();

export function useLoadFonts() {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
        "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf")
    });

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    return [fontsLoaded, error] as const;
}