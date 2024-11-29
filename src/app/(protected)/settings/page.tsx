import { auth, signOut } from "@/auth";
import { DEFAULT_LOGOUT_REDIRECT } from "@/routes";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: DEFAULT_LOGOUT_REDIRECT,
          });
        }}
      >
        <button type="submit">sing out</button>
      </form>
    </div>
  );
};

export default SettingsPage;
