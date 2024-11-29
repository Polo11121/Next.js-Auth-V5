import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const HomePage = () => (
  <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    <main className="space-y-6 text-center">
      <h1 className="text-6xl text-white font-semibold drop-shadow-md">
        🔐 Auth
      </h1>
      <p className="text-white text-lg">A simple authentication service</p>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  </div>
);

export default HomePage;
