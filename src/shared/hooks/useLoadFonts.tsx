import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";

/* Hook que encapsula la lógica para configurado de fonts. */

SplashScreen.preventAutoHideAsync();

export function useLoadFonts() {
    const [fontsLoaded, error] = useFonts({
        "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../../../assets/fonts/Poppins-SemiBold.ttf"),
        "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
        "Inter-Regular": require("../../../assets/fonts/Inter-Regular.ttf"),
        "Inter-SemiBold": require("../../../assets/fonts/Inter-SemiBold.ttf"),
        "Inter-Bold": require("../../../assets/fonts/Inter-Bold.ttf")
    });

    useEffect(() => {
        if (fontsLoaded || error) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    return [fontsLoaded, error] as const;
}