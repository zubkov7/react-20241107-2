import { SwitchThemeButton } from "../switch-theme-button/switch-theme-button";
import { AuthButton } from "../auth-button/auth-button";

export const Header = () => {
  return (
    <header>
      <SwitchThemeButton />
      <AuthButton />
    </header>
  );
};
